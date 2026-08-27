/**
 * Fallbeispiele Modus
 * Komplexe juristische Fälle mit detailreicher Analyse und psychometrischem Diagnostic-Tracking
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Award, 
  ShieldAlert,
  Scale,
  Sparkles
} from 'lucide-react';
import { INITIAL_FALLBEISPIELE, Fallbeispiel } from '../initialFallbeispiele.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface FallbeispieleModusProps {
  translationLang?: string;
  onRecordHistory?: (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => void;
}

export default function FallbeispieleModus({
  translationLang = 'deaktiviert',
  onRecordHistory
}: FallbeispieleModusProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Diagnostic Tracking Refs
  const sessionIdRef = useRef<string>(generateSessionId('fallbeispiele'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());
  const decisionPathRef = useRef<string[]>([]);

  const { speak, pause, resume, stop, isSpeaking, isPaused, spokenText } = useSpeech();

  const cases: Fallbeispiel[] = INITIAL_FALLBEISPIELE;
  const currentCase = cases[currentIndex];

  const selectedAnswer = userAnswers[currentCase.id];
  const hasAnswered = selectedAnswer !== undefined;

  // Reset timer on index change
  useEffect(() => {
    trackerRef.current.reset();
  }, [currentIndex]);

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return; // Prevent changing after answer

    trackerRef.current.recordInteraction(index);
    const metrics = trackerRef.current.getMetrics();

    setUserAnswers(prev => ({
      ...prev,
      [currentCase.id]: index
    }));
    setShowExplanation(true);

    const isCorrect = index === currentCase.correct;
    const stepDesc = `Fall ${currentCase.id} (${currentCase.title}) -> Option ${String.fromCharCode(65 + index)} (${isCorrect ? 'Richtig' : 'Falsch'})`;
    decisionPathRef.current = [...decisionPathRef.current, stepDesc];

    // Fire-and-Forget Logging to Supabase question_attempts
    logQuestionAttempt({
      session_id: sessionIdRef.current,
      mode: 'scenario',
      question_id: String(currentCase.id || 'case_item'),
      topic: String(currentCase.title || 'Strafrecht & Notwehr / BGB'),
      is_correct: Boolean(isCorrect),
      time_spent_ms: Number(metrics.time_spent_ms || 1500),
      switched_answers: Boolean(metrics.switched_answers || false)
    });

    if (onRecordHistory) {
      onRecordHistory({
        typ: 'Lernen',
        anzahl: 1,
        richtig: isCorrect ? 1 : 0,
        falsch: isCorrect ? 0 : 1
      });
    }
  };

  const handleNext = () => {
    stop();
    if (currentIndex < cases.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(userAnswers[cases[currentIndex + 1]?.id] !== undefined);
    } else {
      setIsFinished(true);
      const correctCount = cases.filter(c => userAnswers[c.id] === c.correct).length;
      logExamSession({
        mode: 'scenario',
        scoreAchieved: correctCount,
        scoreMax: cases.length,
        passed: (correctCount / cases.length) >= 0.5
      });
    }
  };

  const handlePrev = () => {
    stop();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowExplanation(userAnswers[cases[currentIndex - 1]?.id] !== undefined);
    }
  };

  const handleRestart = () => {
    stop();
    sessionIdRef.current = generateSessionId('fallbeispiele');
    decisionPathRef.current = [];
    trackerRef.current.reset();
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate score summary
  const totalCases = cases.length;
  const correctCount = cases.filter(c => userAnswers[c.id] === c.correct).length;
  const scorePercent = totalCases > 0 ? Math.round((correctCount / totalCases) * 100) : 0;

  if (isFinished) {
    return (
      <div className="space-y-6">
        <div className="bento-glass p-8 rounded-3xl text-center max-w-2xl mx-auto border border-[#dfb871]/30 shadow-2xl relative overflow-hidden bento-glow-green">
          <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 text-[#dfb871] border border-[#dfb871]/25 mb-4">
            <Award className="w-12 h-12" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
            Fallbeispiele abgeschlossen!
          </h2>
          <p className="text-slate-300 text-sm mt-2 font-sans">
            Du hast alle {totalCases} juristischen Fallbeispiele durchgearbeitet.
          </p>

          <div className="my-8 p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-5xl font-extrabold font-display text-white">{scorePercent}%</span>
            <span className="text-xs text-[#dfb871] font-bold uppercase tracking-wider mt-2">
              {correctCount} von {totalCases} Fällen richtig gelöst
            </span>
            <p className="text-xs text-slate-400 mt-3 max-w-md">
              {scorePercent >= 80 
                ? 'Hervorragend! Du durchschaust die juristischen Feinheiten und Fallen der § 34a Sachkundeprüfung.'
                : 'Gute Vorbereitung! Wiederhole die kniffligen Fälle, um bei der Prüfung keine Details zu übersehen.'}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#9a7836] text-slate-950 font-extrabold text-xs tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-lg active:scale-95"
            >
              <RotateCcw className="w-4 h-4" /> Fallbeispiele erneut starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bento-glass p-6 rounded-3xl border border-amber-500/20 relative overflow-hidden bento-glow-green">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/15 rounded-lg border border-amber-500/30 flex items-center gap-1.5 font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Spezialmodus
              </span>
              <span className="text-xs font-mono text-slate-400">
                Fall {currentIndex + 1} von {cases.length}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold font-display text-white mt-2 flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#dfb871]" />
              Fallbeispiele
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed font-sans">
              Besonders knifflige Praxisfälle mit juristisch extrem nah beieinander liegenden Optionen. Genaues Lesen ist erforderlich!
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="p-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 active:scale-95"
            title="Neustarten"
          >
            <RotateCcw className="w-4 h-4 text-[#dfb871]" />
            <span className="hidden xs:inline">Zurücksetzen</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900/80 h-2 rounded-full mt-5 overflow-hidden border border-white/5">
          <div
            className="bg-gradient-to-r from-[#dfb871] via-amber-400 to-[#dfb871] h-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / cases.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Case Card */}
      <div className="bento-glass p-6 md:p-8 rounded-3xl border border-[#dfb871]/20 space-y-6 relative overflow-hidden shadow-2xl">
        {/* Case Title & Audio Controls */}
        <div className="flex justify-between items-start gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfb871] block font-mono">
                {currentCase.id.toUpperCase()} — PRAXISFALL
              </span>
              <h2 className="text-base md:text-lg font-bold font-display text-white">
                {currentCase.title}
              </h2>
            </div>
          </div>

          {/* Audio controls for question text */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (spokenText === currentCase.question) {
                  if (isSpeaking) pause();
                  else if (isPaused) resume();
                  else speak(currentCase.question);
                } else {
                  speak(currentCase.question);
                }
              }}
              className={`p-2 rounded-xl transition-all border cursor-pointer active:scale-90 ${
                spokenText === currentCase.question && (isSpeaking || isPaused)
                  ? 'bg-[#dfb871]/20 text-[#dfb871] border-[#dfb871]/40 animate-pulse'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
              }`}
              title={isSpeaking && spokenText === currentCase.question ? "Pausieren" : "Abspielen"}
            >
              {isSpeaking && spokenText === currentCase.question ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => speak(currentCase.question)}
              className={`p-2 rounded-xl transition-all border cursor-pointer active:scale-90 ${
                spokenText === currentCase.question && (isSpeaking || isPaused)
                  ? 'bg-[#dfb871]/20 text-[#dfb871] border-[#dfb871]/40'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
              }`}
              title="Neu vorlesen"
            >
              {spokenText === currentCase.question && (isSpeaking || isPaused) ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Case Narrative Text */}
        <div className="space-y-2">
          <p className="text-sm md:text-base text-slate-100 font-medium leading-relaxed font-sans bg-white/[0.02] p-4 rounded-2xl border border-white/5">
            {currentCase.question}
          </p>
          <TranslationView 
            text={currentCase.question} 
            questionId={currentCase.id} 
            targetLanguage={translationLang} 
            type="frage" 
          />
        </div>

        {/* Options */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-bold font-display text-slate-400 uppercase tracking-wider block">
            Wähle die juristisch korrekte Würdigung:
          </span>

          <div className="grid grid-cols-1 gap-3">
            {currentCase.options.map((optionText, optIdx) => {
              const isSelected = selectedAnswer === optIdx;
              const isCorrectOption = optIdx === currentCase.correct;

              let styleClasses = "bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 border-white/5 hover:border-white/10";
              
              if (hasAnswered) {
                if (isCorrectOption) {
                  styleClasses = "bg-emerald-500/15 border-emerald-500/40 text-emerald-200 shadow-lg shadow-emerald-950/40";
                } else if (isSelected) {
                  styleClasses = "bg-rose-500/15 border-rose-500/40 text-rose-200 shadow-lg shadow-rose-950/40";
                } else {
                  styleClasses = "bg-white/[0.01] border-white/5 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={optIdx}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs md:text-sm transition-all flex items-start gap-3 relative cursor-pointer active:scale-[0.99] font-sans ${styleClasses}`}
                >
                  <div className="shrink-0 mt-0.5">
                    {hasAnswered ? (
                      isCorrectOption ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-600 font-mono">
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                      )
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600 bg-white/5 flex items-center justify-center text-[11px] text-[#dfb871] font-mono font-bold">
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 leading-relaxed">
                    <div>{optionText}</div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <TranslationView 
                        text={optionText} 
                        questionId={`${currentCase.id}-opt-${optIdx}`} 
                        targetLanguage={translationLang} 
                        type="antwort" 
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation / "Warum das eine Falle ist" */}
        {showExplanation && (
          <div className="mt-6 p-5 md:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3 relative overflow-hidden animate-fadeIn">
            <div className="flex justify-between items-center border-b border-amber-500/20 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-extrabold font-display uppercase tracking-widest text-amber-300">
                  WARUM DAS EINE FALLE IST (Juristische Analyse):
                </span>
              </div>

              {/* Audio button for explanation */}
              <button
                type="button"
                onClick={() => {
                  if (spokenText === currentCase.explanation) {
                    if (isSpeaking) pause();
                    else if (isPaused) resume();
                    else speak(currentCase.explanation);
                  } else {
                    speak(currentCase.explanation);
                  }
                }}
                className={`p-1.5 rounded-lg transition-all border cursor-pointer active:scale-90 ${
                  spokenText === currentCase.explanation && (isSpeaking || isPaused)
                    ? 'bg-amber-500/30 text-amber-200 border-amber-400 animate-pulse'
                    : 'bg-white/[0.05] hover:bg-white/[0.1] text-amber-200 border-amber-500/20'
                }`}
                title={isSpeaking && spokenText === currentCase.explanation ? "Pausieren" : "Erklärung vorlesen"}
              >
                {isSpeaking && spokenText === currentCase.explanation ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans font-medium whitespace-pre-wrap">
              {currentCase.explanation}
            </p>

            <TranslationView 
              text={currentCase.explanation} 
              questionId={`${currentCase.id}-exp`} 
              targetLanguage={translationLang} 
              type="antwort" 
            />
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <button
            disabled={currentIndex === 0}
            onClick={handlePrev}
            className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentIndex === 0
                ? 'opacity-30 border-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border-white/5 cursor-pointer active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Vorheriger Fall
          </button>

          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {cases.length}
          </span>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] text-slate-950 font-extrabold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            {currentIndex < cases.length - 1 ? (
              <>Nächster Fall <ChevronRight className="w-4 h-4 text-slate-950" /></>
            ) : (
              <>Ergebnis anzeigen <Award className="w-4 h-4 text-slate-950" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
