import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  RotateCcw, 
  XCircle, 
  Scale, 
  Award, 
  Play, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ALL_SCENARIOS, SCENARIO_DATA } from '../data/videoScenarios.ts';
import { ScenarioScene, ScenarioAnswer, InteractiveScenarioData } from '../types/videoScenario.ts';
import TranslationView from './TranslationView.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';

interface InteractiveVideoTrainerProps {
  translationLang?: string;
  onRecordHistory?: (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => void;
}

// Fisher-Yates Random Shuffle Helper
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Helper to sanitize option texts from any internal prefixes or IDs
const cleanOptionText = (text: string): string => {
  if (!text) return '';
  return text.replace(/^\d+_(correct|wrong|neutral)[:\s_-]*/i, '').trim();
};

export default function InteractiveVideoTrainer({
  translationLang: propTranslationLang,
  onRecordHistory
}: InteractiveVideoTrainerProps) {
  const { selectedLanguage } = useLanguage();
  const translationLang = (propTranslationLang && propTranslationLang !== 'deaktiviert')
    ? propTranslationLang 
    : (safeStorage.getSelectedLanguage() || selectedLanguage || 'deaktiviert');
  // Scenario Selection (unterstützt mehrere Videos oder genau 1 Video-Szenario)
  const scenariosList: InteractiveScenarioData[] = ALL_SCENARIOS && ALL_SCENARIOS.length > 0 
    ? ALL_SCENARIOS 
    : [SCENARIO_DATA];

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const activeScenario: InteractiveScenarioData = scenariosList[currentScenarioIndex] || scenariosList[0];
  const scenes = activeScenario.scenes;
  const totalScenesCount = scenes.length;

  // Session & Tracking
  const sessionIdRef = useRef<string>(generateSessionId('videotrainer'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());
  const decisionPathRef = useRef<string[]>([]);

  // --------------------------------------------------------------------------
  // Core State
  // --------------------------------------------------------------------------
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);

  // Video State
  const [videoType, setVideoType] = useState<'intro' | 'loop' | 'response'>('loop');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Overlay state
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [showFailFeedback, setShowFailFeedback] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<ScenarioAnswer | null>(null);

  // Statistics
  const [totalMistakes, setTotalMistakes] = useState<number>(0);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState<number>(0);
  const [hasFailedCurrentScene, setHasFailedCurrentScene] = useState<boolean>(false);

  // Shuffled answers
  const [shuffledAnswers, setShuffledAnswers] = useState<ScenarioAnswer[]>(() =>
    shuffleArray(scenes[0]?.answers || [])
  );

  // --------------------------------------------------------------------------
  // Dual-Player Seamless-Crossfade Refs & State (Player A & Player B)
  // --------------------------------------------------------------------------
  const [activeSlot, setActiveSlot] = useState<'A' | 'B'>('A');
  const activeSlotRef = useRef<'A' | 'B'>('A');
  const pendingSlotRef = useRef<'A' | 'B' | null>(null);

  const videoRefA = useRef<HTMLVideoElement | null>(null);
  const videoRefB = useRef<HTMLVideoElement | null>(null);

  const currentScene: ScenarioScene = scenes[currentSceneIndex] || scenes[0];

  // Sync ref with state
  useEffect(() => {
    activeSlotRef.current = activeSlot;
  }, [activeSlot]);

  // --------------------------------------------------------------------------
  // Preload Media
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (currentScene && currentScene.answers) {
      currentScene.answers.forEach((ans) => {
        if (ans.response_video) {
          try {
            const v = document.createElement('video');
            v.preload = 'auto';
            v.src = ans.response_video;
            v.load();
          } catch {
            // ignore preload error
          }
        }
      });
    }

    const nextScene = scenes[currentSceneIndex + 1];
    if (nextScene) {
      if (nextScene.idle_loop_video) {
        try {
          const v = document.createElement('video');
          v.preload = 'auto';
          v.src = nextScene.idle_loop_video;
          v.load();
        } catch {
          // ignore preload error
        }
      }
      if (nextScene.intro_video) {
        try {
          const v = document.createElement('video');
          v.preload = 'auto';
          v.src = nextScene.intro_video;
          v.load();
        } catch {
          // ignore preload error
        }
      }
    }
  }, [currentScene, currentSceneIndex, scenes]);

  // --------------------------------------------------------------------------
  // Seamless Slot-Wechsel (playVideoSource)
  // --------------------------------------------------------------------------
  const playVideoSource = useCallback((url: string, isLoop: boolean, isMuted: boolean) => {
    const currentSlot = activeSlotRef.current;
    const targetSlot: 'A' | 'B' = currentSlot === 'A' ? 'B' : 'A';
    const targetVideo = targetSlot === 'A' ? videoRefA.current : videoRefB.current;

    if (!targetVideo) return;

    pendingSlotRef.current = targetSlot;
    targetVideo.loop = isLoop;
    targetVideo.muted = isMuted;
    if (!isMuted) {
      targetVideo.volume = 1.0;
    }
    
    targetVideo.src = url;
    targetVideo.currentTime = 0;
    targetVideo.load();
    targetVideo.play().catch((err) => {
      console.warn("Dual-player playback prevented or aborted:", err);
    });
  }, []);

  // --------------------------------------------------------------------------
  // onPlaying Handler (Wechselt den aktiven Slot erst, sobald das erste Frame steht)
  // --------------------------------------------------------------------------
  const handlePlaying = useCallback((slot: 'A' | 'B') => {
    if (pendingSlotRef.current === slot || activeSlotRef.current !== slot) {
      setActiveSlot(slot);
      activeSlotRef.current = slot;
      pendingSlotRef.current = null;

      // Alten Player nach sanfter Überblendung pausieren
      const prevSlot = slot === 'A' ? 'B' : 'A';
      const prevVideo = prevSlot === 'A' ? videoRefA.current : videoRefB.current;
      if (prevVideo) {
        setTimeout(() => {
          if (activeSlotRef.current === slot) {
            prevVideo.pause();
          }
        }, 300);
      }
    }
  }, []);

  // --------------------------------------------------------------------------
  // Szenen-Steuerung
  // --------------------------------------------------------------------------
  const startScene = useCallback((index: number, scenarioIdx?: number) => {
    const targetScenarioIdx = scenarioIdx !== undefined ? scenarioIdx : currentScenarioIndex;
    const targetScenario = scenariosList[targetScenarioIdx] || scenariosList[0];
    const targetScenes = targetScenario.scenes;
    const scene = targetScenes[index] || targetScenes[0];

    setCurrentSceneIndex(index);
    setSelectedAnswer(null);
    setShowFailFeedback(false);
    setHasFailedCurrentScene(false);
    setIsProcessing(false);
    setShuffledAnswers(shuffleArray(scene.answers));

    // Reset interaction timing for psychometric tracking
    trackerRef.current.reset();

    if (scene.intro_video) {
      // Intro abspielen (einmalig, mit Ton)
      setShowOverlay(false);
      setVideoType('intro');
      playVideoSource(scene.intro_video, false, false);
    } else {
      // Kein Intro: Sofort Loop starten (stumm) und Fragen einblenden
      setVideoType('loop');
      setShowOverlay(true);
      playVideoSource(scene.idle_loop_video, true, true);
    }
  }, [currentScenarioIndex, scenariosList, playVideoSource]);

  // Initialer Start des Trainers
  const handleStart = () => {
    sessionIdRef.current = generateSessionId('videotrainer');
    decisionPathRef.current = [];
    setIsStarted(true);
    setIsCompleted(false);
    startScene(0);
  };

  // --------------------------------------------------------------------------
  // Video onEnded Handler
  // --------------------------------------------------------------------------
  const handleVideoEnded = (slot: 'A' | 'B') => {
    if (activeSlotRef.current !== slot) return;

    setIsProcessing(false);

    if (videoType === 'intro') {
      // Intro beendet -> Starte den Szene-Loop und blende Fragen ein
      setVideoType('loop');
      setShowOverlay(true);
      trackerRef.current.reset(); // start measuring interaction from overlay appearance
      playVideoSource(currentScene.idle_loop_video, true, true);
    } else if (videoType === 'response') {
      // Antwort-Video beendet
      if (selectedAnswer?.is_correct) {
        // Richtige Antwort: Nächste Szene oder Abschluss-Screen
        const nextIndex = currentSceneIndex + 1;
        if (nextIndex < scenes.length) {
          startScene(nextIndex);
        } else {
          // Alle Szenen erfolgreich gemeistert!
          setIsCompleted(true);
          logExamSession({
            mode: 'video',
            scoreAchieved: firstTryCorrectCount + 1,
            scoreMax: scenes.length,
            passed: true
          });
        }
      } else {
        // Falsche Antwort: Loop wieder starten und Feedback einblenden
        setVideoType('loop');
        setShowFailFeedback(true);
        playVideoSource(currentScene.idle_loop_video, true, true);
      }
    }
  };

  // --------------------------------------------------------------------------
  // Antwort auswählen mit psychometrischem Logging
  // --------------------------------------------------------------------------
  const handleSelectAnswer = (answer: ScenarioAnswer) => {
    if (!showOverlay || isProcessing) return;

    // Interaction Metrics
    trackerRef.current.recordInteraction(answer.id);
    const metrics = trackerRef.current.getMetrics();

    setIsProcessing(true);
    setSelectedAnswer(answer);
    setShowOverlay(false);

    // Update Decision Path
    const currentStepDesc = `Szene ${currentScene.id}: ${currentScene.title} -> Gewählt: ${answer.id} (${answer.is_correct ? 'Richtig' : 'Falsch'})`;
    decisionPathRef.current = [...decisionPathRef.current, currentStepDesc];

    const correctOptionIds = currentScene.answers
      .filter(a => a.is_correct)
      .map(a => a.id);

    // Fire-and-Forget Logging to Supabase question_attempts
    logQuestionAttempt({
      session_id: sessionIdRef.current,
      mode: 'video',
      question_id: String(`video_${activeScenario.id}_scene_${currentScene.id}`),
      topic: String(currentScene.topic || 'Recht & Deeskalation (§ 34a GewO)'),
      is_correct: Boolean(answer.is_correct),
      time_spent_ms: Number(metrics.time_spent_ms || 1500),
      switched_answers: Boolean(metrics.switched_answers || false)
    });

    // Statistik erfassen
    if (answer.is_correct) {
      if (!hasFailedCurrentScene) {
        setFirstTryCorrectCount(prev => prev + 1);
      }
      if (onRecordHistory) {
        onRecordHistory({ typ: 'Lernen', anzahl: 1, richtig: 1, falsch: 0 });
      }
    } else {
      setTotalMistakes(prev => prev + 1);
      setHasFailedCurrentScene(true);
      if (onRecordHistory) {
        onRecordHistory({ typ: 'Lernen', anzahl: 1, richtig: 0, falsch: 1 });
      }
    }

    // Reaktions-Video abspielen (einmalig, mit Ton)
    setVideoType('response');
    playVideoSource(answer.response_video, false, false);
  };

  // --------------------------------------------------------------------------
  // Szene wiederholen nach Fehlentscheidung
  // --------------------------------------------------------------------------
  const handleRepeatScene = () => {
    setShowFailFeedback(false);
    setSelectedAnswer(null);
    setIsProcessing(false);
    setShuffledAnswers(shuffleArray(currentScene.answers));
    trackerRef.current.reset();
    setShowOverlay(true);
  };

  // --------------------------------------------------------------------------
  // Nächstes Video bzw. Video erneut abspielen
  // --------------------------------------------------------------------------
  const handleProceedNextOrRestart = () => {
    sessionIdRef.current = generateSessionId('videotrainer');
    decisionPathRef.current = [];
    setTotalMistakes(0);
    setFirstTryCorrectCount(0);
    setHasFailedCurrentScene(false);
    setIsCompleted(false);
    setIsStarted(true);
    setActiveSlot('A');
    activeSlotRef.current = 'A';

    // Wenn es weitere Videos/Szenarien gibt, schalte zum nächsten, sonst starte dasselbe Quiz erneut
    if (scenariosList.length > 1) {
      const nextScenarioIdx = (currentScenarioIndex + 1) % scenariosList.length;
      setCurrentScenarioIndex(nextScenarioIdx);
      startScene(0, nextScenarioIdx);
    } else {
      // Wenn es bisher nur 1 Video gibt, spiele genau dasselbe Quiz von vorne ab
      startScene(0, 0);
    }
  };

  // --------------------------------------------------------------------------
  // Frage & Antwort / Feedback Overlay
  // --------------------------------------------------------------------------
  const renderInteractionOverlay = () => {
    // 1. Feedback bei Fehlentscheidung
    if (showFailFeedback && selectedAnswer) {
      return (
        <div className="backdrop-blur-md bg-slate-950/90 border border-rose-500/30 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 space-y-2 sm:space-y-3 shadow-2xl animate-scale-up">
          <div className="flex items-start gap-2 sm:gap-2.5">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30 mt-0.5">
              <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-xs font-bold text-rose-400 uppercase tracking-wider font-display">
                  Falsche Entscheidung!
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                  Szene {currentScene.id}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-200 font-sans leading-snug">
                {selectedAnswer.feedback}
              </p>
              {selectedAnswer.legal_basis && (
                <p className="text-[10px] sm:text-[11px] text-amber-400 font-mono flex items-center gap-1 mt-0.5">
                  <Scale className="w-3 h-3 shrink-0" />
                  <span className="truncate">{selectedAnswer.legal_basis}</span>
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={handleRepeatScene}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#dfb871] to-[#9a7836] hover:brightness-110 text-slate-950 font-bold text-[11px] sm:text-xs tracking-wide transition-all cursor-pointer flex items-center gap-1.5 shadow-lg active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Szene wiederholen</span>
            </button>
          </div>
        </div>
      );
    }

    // 2. Reguläres Fragen & Antwort-Overlay
    if (showOverlay) {
      return (
        <div className="backdrop-blur-md bg-slate-950/85 border border-[#dfb871]/30 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 space-y-2 sm:space-y-3 shadow-2xl animate-fade-in">
          {/* Header & Frage */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#dfb871] uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb871] animate-ping inline-block mr-1" />
                Entscheidungspunkt • Szene {currentScene.id}/{totalScenesCount}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-white font-display leading-tight">
              {currentScene.question}
            </p>
          </div>

          {/* Antwort-Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
            {shuffledAnswers.map((answer, idx) => {
              const optionLetter = String.fromCharCode(65 + idx); // 'A', 'B', etc.
              const cleanText = cleanOptionText(answer.text);

              return (
                <button
                  key={answer.id || idx}
                  onClick={() => handleSelectAnswer(answer)}
                  disabled={isProcessing}
                  className="w-full text-left p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/80 hover:bg-[#dfb871]/15 border border-white/10 hover:border-[#dfb871]/50 text-slate-200 hover:text-white transition-all cursor-pointer select-none active:scale-[0.98] group flex items-start gap-3 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#dfb871]/10 text-[#dfb871] border border-[#dfb871]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#dfb871] group-hover:text-slate-950 font-bold text-xs font-mono transition-colors shadow-sm">
                    {optionLetter}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100 group-hover:text-white leading-relaxed break-words whitespace-normal min-w-0 flex-1">
                    {cleanText}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto font-sans">
      {/* HUD Header */}
      <div className="bento-glass p-3 sm:p-5 rounded-2xl sm:rounded-3xl flex items-center justify-between gap-3 border border-[#dfb871]/20">
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#dfb871]/20 to-[#9a7836]/10 border border-[#dfb871]/30 flex items-center justify-center text-[#dfb871]">
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[10px] font-mono text-[#dfb871] font-bold uppercase tracking-wider">
                Interaktiver Video-Trainer § 34a
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                Interaktives Video-Szenario
              </span>
            </div>
            <h2 className="text-sm sm:text-lg font-bold font-display text-white truncate max-w-[200px] sm:max-w-md">
              {activeScenario.title}
            </h2>
          </div>
        </div>

        {/* Progress Pills */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-right">
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 block">Szenen-Fortschritt</span>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#dfb871]">
              {isStarted ? `${currentSceneIndex + 1} / ${totalScenesCount}` : `0 / ${totalScenesCount}`}
            </span>
          </div>
        </div>
      </div>

      {/* Translations-Leiste */}
      {translationLang !== 'deaktiviert' && (
        <TranslationView
          text={`${currentScene.title} - ${currentScene.question}`}
          questionId={`video_${activeScenario.id}_scene_${currentScene.id}`}
          targetLanguage={translationLang}
          type="frage"
        />
      )}

      {/* Main Video Screen Container mit Seamless Dual Player & permanent gemountetem DOM */}
      <div 
        id="interactive-video-trainer-screen"
        className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl select-none"
      >
        {/* Start Overlay (wenn noch nicht gestartet) */}
        {!isStarted && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#dfb871] to-[#9a7836] text-slate-950 flex items-center justify-center mb-4 shadow-xl animate-pulse">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-display text-white max-w-md">
              {activeScenario.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2 mb-6 leading-relaxed">
              Triff in realistischen Video-Situationen die richtigen Entscheidungen nach § 34a GewO.
            </p>
            <button
              onClick={handleStart}
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#dfb871] to-[#9a7836] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-lg hover:brightness-110 active:scale-95 flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Szenario jetzt starten</span>
            </button>
          </div>
        )}

        {/* Victory & Summary Screen als Overlay (verhindert Unmounten der Video-Tags) */}
        {isCompleted && (
          <div className="absolute inset-0 z-50 backdrop-blur-xl bg-[#0a0f1e]/95 border border-[#dfb871]/40 rounded-xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6 overflow-y-auto animate-fade-in">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#dfb871]/20 text-[#dfb871] border border-[#dfb871]/30 flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#dfb871] uppercase tracking-wider">
                Video-Szenario erfolgreich gemeistert!
              </span>
              <h3 className="text-xl sm:text-3xl font-bold font-display text-white">
                Perfekt deeskaliert und rechtssicher agiert!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Du hast alle {totalScenesCount} interaktiven Entscheidungspunkte dieses Szenarios nach den Vorschriften des § 34a GewO gelöst.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 block">Fehlversuche</span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-white mt-0.5 block">
                  {totalMistakes}
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] sm:text-xs font-mono text-slate-400 block">Auf Anhieb richtig</span>
                <span className="text-lg sm:text-2xl font-bold font-mono text-[#dfb871] mt-0.5 block">
                  {firstTryCorrectCount} / {totalScenesCount}
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleProceedNextOrRestart}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#dfb871] to-[#9a7836] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-lg hover:brightness-110 active:scale-95 flex items-center gap-2"
              >
                {scenariosList.length > 1 ? (
                  <>
                    <ArrowRight className="w-4 h-4" />
                    <span>Nächstes Video starten</span>
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Video erneut abspielen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* DUAL-PLAYER VIDEO LAYER: Player A & Player B */}
        {/* ------------------------------------------------------------------ */}
        <video
          ref={videoRefA}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out pointer-events-none"
          style={{ opacity: activeSlot === 'A' ? 1 : 0 }}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          crossOrigin="anonymous"
          onPlaying={() => handlePlaying('A')}
          onEnded={() => handleVideoEnded('A')}
        />

        <video
          ref={videoRefB}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out pointer-events-none"
          style={{ opacity: activeSlot === 'B' ? 1 : 0 }}
          playsInline
          webkit-playsinline="true"
          preload="auto"
          crossOrigin="anonymous"
          onPlaying={() => handlePlaying('B')}
          onEnded={() => handleVideoEnded('B')}
        />

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* Top-Right HUD Badge: Szene & Status */}
        {isStarted && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
            <div className="backdrop-blur-md bg-slate-950/70 border border-white/10 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold text-slate-300 shadow-md">
              Szene {currentSceneIndex + 1}/{totalScenesCount}
            </div>
          </div>
        )}

        {/* Bottom Interaction HUD: Fest am unteren Rand */}
        <div className="absolute bottom-2 inset-x-2 sm:bottom-4 sm:inset-x-6 z-20 pointer-events-auto">
          {renderInteractionOverlay()}
        </div>
      </div>
    </div>
  );
}
