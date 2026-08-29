/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Layers, RefreshCw, AlertCircle, Sparkles, CheckCircle2, Shuffle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Question, UserProgressMap } from '../types.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import TranslatedSubline from './TranslatedSubline.tsx';
import { logQuestionAttempt, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface WiederholungsmodusProps {
  questions: Question[];
  progress: UserProgressMap;
  onAnswer: (questionId: string, status: 'gewusst' | 'nicht_gewusst') => void;
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

export default function Wiederholungsmodus({
  questions,
  progress,
  onAnswer,
  translationLang = 'deaktiviert'
}: WiederholungsmodusProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [revisionType, setRevisionType] = useState<'wrong_only' | 'leitner_box_1'>('wrong_only');

  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('wiederholung'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  const { isSpeaking, isPaused, speak, pause, resume, stop, spokenText } = useSpeech();

  // Filter questions that are wrong_only (status === 'nicht_gewusst') or in Leitner box 1 (low progress)
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const qProgress = progress[q.id];
      if (revisionType === 'wrong_only') {
        return qProgress && qProgress.status === 'nicht_gewusst';
      } else {
        // Leitner Box 1 represents either untested questions or box level 1
        return !qProgress || qProgress.leitnerBox <= 1;
      }
    });
  }, [questions, progress, revisionType]);

  // Permanently shuffled questions list
  const displayQuestions = useMemo(() => {
    const result = [...filteredQuestions];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }, [filteredQuestions]);

  const currentQuestion = displayQuestions[currentIndex] || null;

  // Reset timer on question change
  useEffect(() => {
    trackerRef.current.reset();
  }, [currentIndex, revisionType]);

  const handleNext = () => {
    stop();
    setShowAnswer(false);
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // wrap around
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
        mode: 'wiederholung',
        question_id: String(currentQuestion.id || 'q_item'),
        topic: String(currentQuestion.kategorie || '§ 34a Sachgebiete'),
        is_correct: Boolean(isCorrect),
        time_spent_ms: Number(metrics.time_spent_ms || 1500),
        switched_answers: Boolean(metrics.switched_answers || false)
      });

      onAnswer(currentQuestion.id, status);
      // Don't advance index immediately if current element was removed from list
      // which keeps same index valid. Just reset state.
      setShowAnswer(false);
      if (currentIndex >= displayQuestions.length - 1) {
        setCurrentIndex(0);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Selector Options Header */}
      <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-semibold text-slate-200">Zielgerichtete Wiederholung:</span>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            onClick={() => {
              stop();
              sessionIdRef.current = generateSessionId('wiederholung');
              setRevisionType('wrong_only');
              setCurrentIndex(0);
              setShowAnswer(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
              revisionType === 'wrong_only'
                ? 'bg-rose-950/40 text-rose-300 border-rose-900/50'
                : 'bg-slate-950 text-slate-400 border-slate-800/80 hover:bg-slate-900'
            }`}
          >
            Nur Fehlversuche ({questions.filter(q => progress[q.id]?.status === 'nicht_gewusst').length})
          </button>
          <button
            type="button"
            onClick={() => {
              stop();
              sessionIdRef.current = generateSessionId('wiederholung');
              setRevisionType('leitner_box_1');
              setCurrentIndex(0);
              setShowAnswer(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
              revisionType === 'leitner_box_1'
                ? 'bg-amber-950/40 text-amber-300 border-amber-900/50'
                : 'bg-slate-950 text-slate-405 border-slate-800/80 hover:bg-slate-900'
            }`}
          >
            Leitner Box 1 (Fokus)
          </button>
        </div>
      </div>

      {displayQuestions.length === 0 ? (
        <div className="bg-slate-900/30 p-12 text-center rounded-2xl border border-slate-800/60 max-w-xl mx-auto space-y-4">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-900/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-200">Hervorragend! Keine Fragen ausstehend.</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {revisionType === 'wrong_only' 
                ? 'Du hast zurzeit keine Fragen mit Lernbedarf markiert. Neue Fragen werden hier gelistet, wenn du sie im Lern- oder Prüfungsmodus falsch beantwortest.'
                 : 'Du hast alle grundlegenden Fragen oder Box-1-Fragen bereits gemeistert! Mach weiter so.'}
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs text-slate-400 font-mono">
              Karte {currentIndex + 1} von {displayQuestions.length} im Wiederholpool
            </span>
          </div>

          {/* Slider Core Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl min-h-[300px] flex flex-col justify-between">
            <div className="p-5 md:p-8 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-mono text-emerald-400">
                  {currentQuestion?.kategorie}
                </span>
                <div className="flex items-center gap-2">
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
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 animate-pulse'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
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
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
                    }`}
                    title="Vorlesen beenden"
                  >
                    {spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused) ? (
                      <VolumeX className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-500">
                    Wiederholung
                  </span>
                </div>
              </div>

              <h3 className="text-base md:text-lg font-bold text-slate-100 leading-snug">
                {cleanQuestionText(currentQuestion?.frage)}
              </h3>
              {currentQuestion && translationLang !== 'deaktiviert' && (
                <TranslatedSubline 
                  text={cleanQuestionText(currentQuestion.frage)} 
                  questionId={`${currentQuestion.id}_repeat_q`} 
                  targetLanguage={translationLang} 
                  type="frage" 
                  className="text-xs text-amber-300/85 font-medium italic mt-1 leading-relaxed"
                />
              )}
            </div>

            {/* Hidden content */}
            <div className="border-t border-slate-800 bg-slate-950/40 p-5 md:p-8 flex-grow flex flex-col justify-center">
              {showAnswer ? (
                <div className="text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-wrap w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-emerald-400 text-xs font-bold uppercase">LÖSUNG:</span>
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
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-90 ${
                          spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 animate-pulse'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
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
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-90 ${
                          spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
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
                  <div>{formatSolutionText(currentQuestion)}</div>
                  {currentQuestion && translationLang !== 'deaktiviert' && (
                    <TranslationView 
                      text={formatSolutionText(currentQuestion)} 
                      questionId={`${currentQuestion.id}_repeat_ans`} 
                      targetLanguage={translationLang} 
                      type="antwort" 
                      variant="collapsible"
                    />
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <button
                    onClick={handleShowAnswer}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-705 text-xs text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
                  >
                    Antwort einblenden
                  </button>
                </div>
              )}
            </div>

            {/* Self Rating Bar */}
            <div className="p-4 bg-slate-950 border-t border-slate-900 flex justify-between items-center">
              <button 
                onClick={handleNext}
                className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                Überspringen
              </button>

              <div className="flex gap-2">
                {showAnswer ? (
                  <>
                    <button
                      onClick={() => handleSelfAssess('nicht_gewusst')}
                      className="px-3.5 py-1.5 rounded-lg bg-rose-950/40 text-rose-300 border border-rose-900/40 text-xs font-semibold cursor-pointer"
                    >
                      Immer noch falsch
                    </button>
                    <button
                      onClick={() => handleSelfAssess('gewusst')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-900/40 text-xs font-semibold cursor-pointer"
                    >
                      Jetzt gewusst!
                    </button>
                  </>
                ) : (
                  <span className="text-[10px] uppercase text-slate-500 tracking-wider">Löse die Karte zuerst</span>
                )}
              </div>
            </div>
          </div>

          {/* Leitner Explanation Slider info Box */}
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex gap-3.5 items-start">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-200 font-sans">Spaced Repetition & Leitner-Algorithmus</h4>
              <p className="text-[10.5px] text-slate-400 leading-relaxed">
                Das System nutzt das Spaced-Repetition-Prinzip. Falsche Antworten stufen Fragen zurück in Box 1 (tägliche Überprüfung), während korrekte Antworten Fragen in höhere Boxen stufen. Höhere Boxen werden seltener abgefragt (z.B. Box 5 erst nach 30 Tagen). So optimierst du das Langzeitgedächtnis!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
