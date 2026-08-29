/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, CheckCircle2, XCircle, RefreshCw, Layers, Shuffle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Question, UserProgressMap, KATEGORIEN, Schwierigkeit } from '../types.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import TranslatedSubline from './TranslatedSubline.tsx';
import CustomDropdown from './CustomDropdown.tsx';
import { logQuestionAttempt, InteractionTracker, generateSessionId } from '../lib/analytics.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';

interface LernmodusProps {
  questions: Question[];
  progress: UserProgressMap;
  onAnswer: (questionId: string, status: 'gewusst' | 'nicht_gewusst') => void;
  onResetProgress: () => void;
  translationLang?: string;
}

// Helper utilities to format clean question and solution text
function cleanQuestionText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/\s*\(\d+\s*[Rr]ichtige\s*[Aa]ntworten?\)/gi, '')
    .trim();
}

function formatSolutionText(q?: Question | null): string {
  if (!q) return '';
  let text = q.antwort || (q as any).erklaerung || '';
  text = text.replace(/^Erklärung:\s*/i, '');
  text = text.replace(/Option [A-D]( und [A-D])?/gi, '');
  return text.trim();
}

export default function Lernmodus({
  questions,
  progress,
  onAnswer,
  onResetProgress,
  translationLang: propTranslationLang
}: LernmodusProps) {
  const { selectedLanguage } = useLanguage();
  const translationLang = (propTranslationLang && propTranslationLang !== 'deaktiviert')
    ? propTranslationLang 
    : (safeStorage.getSelectedLanguage() || selectedLanguage || 'deaktiviert');

  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [selectedSchwierigkeit, setSelectedSchwierigkeit] = useState<string>('Alle');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('lernmodus'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  const { isSpeaking, isPaused, speak, pause, resume, stop, spokenText } = useSpeech();

  // Filter questions based on selections
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchCat = selectedCategory === 'Alle' || q.kategorie === selectedCategory;
      const matchSchwer = selectedSchwierigkeit === 'Alle' || q.schwierigkeit === selectedSchwierigkeit;
      return matchCat && matchSchwer;
    });
  }, [questions, selectedCategory, selectedSchwierigkeit]);

  // Permanently shuffled questions list
  const displayQuestions = useMemo(() => {
    const result = [...filteredQuestions];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }, [filteredQuestions]);

  // Handle index boundaries safely
  const currentQuestion = displayQuestions[currentIndex] || null;

  // Reset tracker on question change
  useEffect(() => {
    trackerRef.current.reset();
  }, [currentIndex, selectedCategory, selectedSchwierigkeit]);

  const handleNext = () => {
    stop();
    setShowAnswer(false);
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    stop();
    setShowAnswer(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShowAnswer = () => {
    trackerRef.current.recordInteraction(1);
    setShowAnswer(true);
  };

  const handleSelfAssess = (status: 'gewusst' | 'nicht_gewusst') => {
    stop();
    if (currentQuestion) {
      const isCorrect = status === 'gewusst';
      const metrics = trackerRef.current.getMetrics();

      // Fire telemetry to Supabase question_attempts
      logQuestionAttempt({
        session_id: sessionIdRef.current,
        mode: 'lernmodus',
        question_id: String(currentQuestion.id || 'q_item'),
        topic: String(currentQuestion.kategorie || '§ 34a Sachgebiete'),
        is_correct: Boolean(isCorrect),
        time_spent_ms: Number(metrics.time_spent_ms || 1500),
        switched_answers: Boolean(metrics.switched_answers || false)
      });

      onAnswer(currentQuestion.id, status);
      handleNext();
    }
  };

  // Safe category selection trigger reset
  const handleCategorySelect = (val: string) => {
    stop();
    sessionIdRef.current = generateSessionId('lernmodus');
    setSelectedCategory(val);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const handleSchwierigkeitSelect = (val: string) => {
    stop();
    sessionIdRef.current = generateSessionId('lernmodus');
    setSelectedSchwierigkeit(val);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="space-y-6">
      {/* Search & Selection Filter Bar */}
      <div className="bento-glass p-4 rounded-3xl flex flex-wrap gap-4 items-center justify-between relative z-30">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#dfb871]" />
          <span className="text-sm font-semibold text-slate-200 font-display">Lernmodus Filter:</span>
        </div>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto items-center">
          {/* Category selection selector */}
          <div className="flex-1 sm:flex-initial min-w-[210px]">
            <CustomDropdown
              options={[
                { value: "Alle", label: `Alle Kategorien (${questions.length})` },
                ...KATEGORIEN.map(kat => ({
                  value: kat,
                  label: `${kat} (${questions.filter(q => q.kategorie === kat).length})`
                }))
              ]}
              value={selectedCategory}
              onChange={handleCategorySelect}
              className="w-full"
              maxWidth="w-full sm:w-[320px]"
            />
          </div>

          {/* Difficulty selection */}
          <div className="min-w-[130px]">
            <CustomDropdown
              options={[
                { value: "Alle", label: "Alle Levels" },
                { value: "Leicht", label: "Leicht" },
                { value: "Mittel", label: "Mittel" },
                { value: "Schwer", label: "Schwer" }
              ]}
              value={selectedSchwierigkeit}
              onChange={handleSchwierigkeitSelect}
              className="w-full"
              maxWidth="w-[160px]"
            />
          </div>
        </div>
      </div>

      {displayQuestions.length === 0 ? (
        <div className="bento-glass p-12 text-center rounded-3xl flex flex-col items-center justify-center">
          <Layers className="w-12 h-12 text-slate-600 mb-3" />
          <p className="text-slate-300 font-medium">Keine Fragen gefunden</p>
          <p className="text-xs text-slate-500 mt-1">Ändere deine Filteroptionen oben, um Fragen anzuzeigen.</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header Info */}
          <div className="flex justify-between items-center text-xs text-slate-450 font-mono">
            <span>
              Frage <strong className="text-slate-100">{currentIndex + 1}</strong> von{' '}
              <strong className="text-slate-100">{displayQuestions.length}</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-950/20 text-[10px] font-semibold text-indigo-300 border border-indigo-500/10">
              Kategorie: {currentQuestion?.kategorie}
            </span>
          </div>

          {/* Progress Tracker Slider line */}
          <div className="w-full bg-white/[0.04] h-1.5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <div 
              className="bg-gradient-to-r from-[#dfb871] to-[#f5db9f] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / displayQuestions.length) * 100}%` }}
            />
          </div>

          {/* Core Question & Answer Study card */}
          <div className="bento-glass rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] xs:min-h-[430px] sm:min-h-[450px] h-auto flex flex-col justify-between border border-[#dfb871]/15 bento-glow-green">
            {/* Question Top and difficulty */}
            <div className="p-5 md:p-6 space-y-3 shrink-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                    currentQuestion?.schwierigkeit === 'Leicht' 
                      ? 'bg-emerald-950/25 text-emerald-300 border-emerald-500/25' 
                      : currentQuestion?.schwierigkeit === 'Schwer' 
                      ? 'bg-rose-950/25 text-rose-300 border-rose-500/25' 
                      : 'bg-amber-950/25 text-amber-300 border-amber-500/25'
                  }`}>
                    {currentQuestion?.schwierigkeit}
                  </span>

                  {/* Play / Pause button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (currentQuestion) {
                        const qText = cleanQuestionText(currentQuestion.frage);
                        if (spokenText === qText) {
                          if (isSpeaking) {
                            pause();
                          } else if (isPaused) {
                            resume();
                          } else {
                            speak(qText);
                          }
                        } else {
                          speak(qText);
                        }
                      }
                    }}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-90 ${
                      spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused)
                        ? 'bg-[#dfb871]/25 text-[#dfb871] border-[#dfb871]/40 animate-pulse'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-350 border-white/5'
                    }`}
                    title={isSpeaking && spokenText === cleanQuestionText(currentQuestion?.frage) ? "Pausieren" : "Abspielen"}
                  >
                    {isSpeaking && spokenText === cleanQuestionText(currentQuestion?.frage) ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (currentQuestion) {
                        speak(cleanQuestionText(currentQuestion.frage));
                      }
                    }}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-90 ${
                      spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused)
                        ? 'bg-[#dfb871]/25 text-[#dfb871] border-[#dfb871]/40'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-350 border-white/5'
                    }`}
                    title="Vorlesen beenden"
                  >
                    {spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused) ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {currentQuestion && (
                  <span className="text-[10px] text-slate-500 font-display font-semibold">
                    Status:{' '}
                    {(() => {
                      const status = progress[currentQuestion.id]?.status;
                      if (status === 'gewusst') return <span className="text-[#dfb871]">Beherrscht</span>;
                      if (status === 'nicht_gewusst') return <span className="text-rose-450">Lernbedarf</span>;
                      return <span className="text-slate-500">Ungeprüft</span>;
                    })()}
                  </span>
                )}
              </div>

              {/* Main text: Question with stable wrapper */}
              <div className="max-h-[160px] overflow-y-auto scrollbar-thin">
                <h2 className="text-base md:text-lg font-bold font-sans text-white leading-relaxed">
                  {cleanQuestionText(currentQuestion?.frage)}
                </h2>
                {currentQuestion && translationLang !== 'deaktiviert' && (
                  <TranslatedSubline 
                    text={cleanQuestionText(currentQuestion.frage)} 
                    questionId={`${currentQuestion.id}_learn_q`} 
                    targetLanguage={translationLang} 
                    type="frage" 
                    className="text-xs sm:text-sm text-amber-300/85 font-medium italic mt-1 leading-relaxed"
                  />
                )}
              </div>
            </div>

            {/* Answer block (Initially Hidden / Revealed with transition placeholder) */}
            <div className="border-t border-white/5 bg-slate-950/20 p-5 md:p-6 flex-grow flex flex-col justify-between">
              {showAnswer ? (
                <div className="flex flex-col flex-grow w-full text-left">
                  {/* Fixed Header for Answer to keep the play/pause/stop buttons always visible */}
                  <div className="flex justify-between items-center mb-2 shrink-0 pb-1.5 border-b border-white/5 w-full">
                    <span className="text-[#dfb871] text-xs font-bold uppercase tracking-wider font-display">LÖSUNG:</span>
                    <div className="flex items-center gap-2">
                      {/* Play / Pause button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (currentQuestion) {
                            const ansText = formatSolutionText(currentQuestion);
                            if (spokenText === ansText) {
                              if (isSpeaking) {
                                pause();
                              } else if (isPaused) {
                                resume();
                              } else {
                                speak(ansText);
                              }
                            } else {
                              speak(ansText);
                            }
                          }
                        }}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                          spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                            ? 'bg-[#dfb871]/25 text-[#dfb871] border-[#dfb871]/40 animate-pulse'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-350 border-white/5'
                        }`}
                        title={isSpeaking && spokenText === formatSolutionText(currentQuestion) ? "Pausieren" : "Abspielen"}
                      >
                        {isSpeaking && spokenText === formatSolutionText(currentQuestion) ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : (
                          <Play className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (currentQuestion) {
                            speak(formatSolutionText(currentQuestion));
                          }
                        }}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                          spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                            ? 'bg-[#dfb871]/25 text-[#dfb871] border-[#dfb871]/40'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-350 border-white/5'
                        }`}
                        title="Vorlesen beenden"
                      >
                        {spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused) ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Text container (shows complete content without forced scrolling) */}
                  <div className="flex-grow text-slate-200 text-sm md:text-base leading-relaxed space-y-4 whitespace-pre-wrap font-medium font-sans pr-1">
                    <div>{formatSolutionText(currentQuestion)}</div>
                    {currentQuestion && translationLang !== 'deaktiviert' && (
                      <TranslationView 
                        text={formatSolutionText(currentQuestion)} 
                        questionId={`${currentQuestion.id}_learn_ans`} 
                        targetLanguage={translationLang} 
                        type="antwort" 
                        variant="collapsible"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3 py-4 my-auto w-full flex-grow">
                  <p className="text-xs text-slate-400 text-center font-medium leading-relaxed font-sans">
                    Denke über die formulierte Antwort nach.
                  </p>
                  <button
                    onClick={handleShowAnswer}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/5 text-xs font-bold text-slate-300 transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md font-sans"
                  >
                    <Eye className="w-4 h-4 text-[#dfb871]" /> Antwort einblenden
                  </button>
                </div>
              )}
            </div>

            {/* Self assessment / navigation bar */}
            <div className="p-4 bg-slate-950/40 border-t border-white/5 flex justify-between items-center">
              {/* Prev icon */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 text-slate-450 bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:text-white rounded-xl disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-all active:scale-95"
                title="Vorherige Frage"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Self Assessment controls - visible only if answer revealed */}
              <div className="flex items-center gap-1.5 xs:gap-3">
                {showAnswer ? (
                  <>
                    <button
                      onClick={() => handleSelfAssess('nicht_gewusst')}
                      className="px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-450 border border-rose-500/15 text-[11px] xs:text-xs font-bold tracking-tight xs:tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-1 cursor-pointer font-sans"
                    >
                      <XCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-rose-400" /> Nicht gewusst
                    </button>
                    <button
                      onClick={() => handleSelfAssess('gewusst')}
                      className="px-2.5 py-1.5 xs:px-4 xs:py-2 rounded-xl bg-[#dfb871]/15 hover:bg-[#dfb871]/25 text-[#dfb871] border border-[#dfb871]/20 text-[11px] xs:text-xs font-bold tracking-tight xs:tracking-wide transition-all duration-300 active:scale-95 flex items-center gap-1 cursor-pointer font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#dfb871]" /> Wusste ich
                    </button>
                  </>
                ) : (
                  <span className="text-[8.5px] xs:text-[10px] uppercase text-slate-500 font-bold tracking-normal xs:tracking-widest text-center px-1">
                    Löse die Frage zum Bewerten
                  </span>
                )}
              </div>

              {/* Next icon */}
              <button
                onClick={handleNext}
                disabled={currentIndex === displayQuestions.length - 1}
                className="p-2 text-slate-450 bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:text-white rounded-xl disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-all active:scale-95"
                title="Nächste Frage"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Help card */}
          <div className="text-center">
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed">
              Indem du dein Wissen ehrlich bewertest, sortiert der Algorithmus diese Fragen in deinen Fortschritt ein.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
