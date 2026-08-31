/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RefreshCw, Layers, Shuffle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Question, KATEGORIEN } from '../types.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import CustomDropdown from './CustomDropdown.tsx';
import { logQuestionAttempt, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface KarteikartenmodusProps {
  questions: Question[];
  translationLang?: string;
  onRecordHistory?: (item: { typ: string; mode?: string; anzahl: number; richtig: number; falsch: number; quote?: number }) => void;
}

// Helper utilities to format clean question and solution text for flashcards
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

export default function Karteikartenmodus({ questions, translationLang = 'deaktiviert', onRecordHistory }: KarteikartenmodusProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [direction, setDirection] = useState<'next' | 'prev' | 'init'>('init');

  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('karteikarten'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());
  const reviewedCardsRef = useRef<Set<string>>(new Set());

  const { isSpeaking, isPaused, speak, pause, resume, stop, spokenText } = useSpeech();

  // Log session on exit/unmount if cards were reviewed
  useEffect(() => {
    return () => {
      if (reviewedCardsRef.current.size > 0 && onRecordHistory) {
        const count = reviewedCardsRef.current.size;
        onRecordHistory({
          typ: 'Karteikarte',
          mode: 'karteikarten',
          anzahl: count,
          richtig: count,
          falsch: 0,
          quote: 100
        });
      }
    };
  }, [onRecordHistory]);

  // Reset tracker on question index change
  useEffect(() => {
    trackerRef.current.reset();
  }, [currentIndex, selectedCategory]);

  // Filter based on select option
  const filteredQuestions = useMemo(() => {
    return selectedCategory === 'Alle' 
      ? questions 
      : questions.filter(q => q.kategorie === selectedCategory);
  }, [questions, selectedCategory]);

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

  const handleToggleFlip = () => {
    trackerRef.current.recordInteraction(isFlipped ? 0 : 1);
    if (!isFlipped && currentQuestion) {
      reviewedCardsRef.current.add(String(currentQuestion.id));
      const metrics = trackerRef.current.getMetrics();
      logQuestionAttempt({
        session_id: sessionIdRef.current,
        mode: 'karteikarten',
        question_id: String(currentQuestion.id || 'q_item'),
        topic: String(currentQuestion.kategorie || 'Sachkunde § 34a'),
        is_correct: true,
        time_spent_ms: Number(metrics.time_spent_ms || 1500),
        switched_answers: Boolean(metrics.switched_answers || false)
      });
    }
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    stop();
    const wasFlipped = isFlipped;
    setIsFlipped(false);
    setDirection('init');
    // Snappy transition if not flipped, or 150ms delay to finish flip spin-back
    setTimeout(() => {
      if (currentIndex < displayQuestions.length - 1) {
        setDirection('next');
        setCurrentIndex(prev => prev + 1);
      }
    }, wasFlipped ? 150 : 0);
  };

  const handlePrev = () => {
    stop();
    const wasFlipped = isFlipped;
    setIsFlipped(false);
    setDirection('init');
    setTimeout(() => {
      if (currentIndex > 0) {
        setDirection('prev');
        setCurrentIndex(prev => prev - 1);
      }
    }, wasFlipped ? 150 : 0);
  };

  const handleCategorySelect = (val: string) => {
    stop();
    setSelectedCategory(val);
    setCurrentIndex(0);
    setIsFlipped(false);
    setDirection('init');
  };

  return (
    <div className="space-y-6">
      {/* Category selector */}
      <div className="bento-glass p-4 rounded-3xl flex flex-wrap gap-4 items-center justify-between relative z-30">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#dfb871]" />
          <span className="text-sm font-semibold text-slate-200 font-display">Karteikarten-Filter:</span>
        </div>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto items-center">
          <div className="min-w-[210px] w-full sm:w-auto">
            <CustomDropdown
              options={[
                { value: "Alle", label: `Alle Kategorien (${questions.length} Karten)` },
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
        </div>
      </div>

      {displayQuestions.length === 0 ? (
        <div className="bento-glass p-12 text-center rounded-3xl flex flex-col items-center justify-center">
          <p className="text-slate-300 font-medium">Keine Karteikarten gefunden</p>
          <p className="text-xs text-slate-500 mt-1">Ändere den Filter, um Karteikarten anzuzeigen.</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto flex flex-col space-y-4">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>
              Karte <strong className="text-slate-100">{currentIndex + 1}</strong> von{' '}
              <strong className="text-slate-100">{displayQuestions.length}</strong>
            </span>
            <span className="text-slate-400 flex items-center gap-1.5 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-xl">
              <RefreshCw className="w-3.5 h-3.5 text-[#dfb871] animate-spin-slow" /> Klicke auf die Karte zum Umdrehen
            </span>
          </div>

          {/* transition wrapper for horizontal slide & scale entry */}
          <div 
            key={currentIndex} 
            className={`
              ${direction === 'next' ? 'animate-slide-next' : direction === 'prev' ? 'animate-slide-prev' : 'animate-fade-generic'}
              w-full flex justify-center
            `}
          >
            {/* 3D Flip Card Container with margin-bottom to elevate the card higher relative to control buttons */}
            <div className="study-card-container mb-24 sm:mb-28" onClick={handleToggleFlip}>
              <div className={`study-card-content ${isFlipped ? 'flipped' : ''}`}>
                
                {/* Card Front (Frage) */}
                <div className={`study-card-front ${isFlipped ? 'pointer-events-none z-0' : 'pointer-events-auto z-10'}`}>
                  {/* Front Content Overlay */}
                  <div className="study-card-front-content">
                    {/* Floating blurry background circles */}
                    <div className="study-card-circle" id="bottom" />
                    <div className="study-card-circle" id="right" />

                    <div className="flex justify-between items-center w-full z-10">
                      <span className="study-card-badge text-[#dfb871] font-display font-extrabold uppercase">
                        FRAGE
                      </span>
                      <div className="flex items-center gap-2">
                        {/* Play / Pause button for natural start/pause controls */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
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
                          className={`p-1.5 rounded-lg transition-all border cursor-pointer active:scale-90 ${
                            spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused)
                              ? 'bg-[#dfb871]/20 text-[#dfb871] border-[#dfb871]/40 animate-pulse'
                              : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
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
                          onClick={(e) => {
                            e.stopPropagation();
                            if (currentQuestion) {
                              speak(cleanQuestionText(currentQuestion.frage));
                            }
                          }}
                          className={`p-1.5 rounded-lg transition-all border cursor-pointer active:scale-90 ${
                            spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused)
                              ? 'bg-[#dfb871]/20 text-[#dfb871] border-[#dfb871]/40'
                              : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
                          }`}
                          title="Vorlesen beenden"
                        >
                          {spokenText === cleanQuestionText(currentQuestion?.frage) && (isSpeaking || isPaused) ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <span className="study-card-badge text-slate-400 font-sans font-semibold max-w-[120px] truncate">
                          {currentQuestion?.kategorie}
                        </span>
                      </div>
                    </div>

                    {/* Description container containing the Question text at the bottom */}
                    <div className="study-card-description z-10">
                      <span className="text-[#dfb871] text-[10px] font-bold uppercase tracking-widest block mb-2 font-display">
                        Frage:
                      </span>
                      <h3 className="text-sm sm:text-base md:text-md font-bold font-sans text-white text-left leading-relaxed max-h-[180px] overflow-y-auto pr-1">
                        {cleanQuestionText(currentQuestion?.frage)}
                      </h3>
                      {currentQuestion && (
                        <div onClick={(e) => e.stopPropagation()}>
                          <TranslationView 
                            text={cleanQuestionText(currentQuestion.frage)} 
                            questionId={currentQuestion.id} 
                            targetLanguage={translationLang} 
                            type="frage" 
                          />
                        </div>
                      )}
                      <div className="text-[9px] text-slate-400 text-center font-bold font-display uppercase tracking-widest mt-4 pt-3 border-t border-white/5">
                        Klicke auf die Karte zum Umdrehen
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Back (Antwort) */}
                <div className={`study-card-back ${isFlipped ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}`}>
                  <div className="study-card-back-content">
                    <div className="flex justify-between items-center w-full mb-2 z-10">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-[#ff9966] text-[10px] uppercase font-bold tracking-wider border border-orange-500/25">
                        LÖSUNG:
                      </span>
                      <div className="flex items-center gap-2">
                        {/* Play / Pause button for natural start/pause controls */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
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
                          className={`p-1.5 rounded-lg transition-all border cursor-pointer active:scale-90 ${
                            spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                              ? 'bg-orange-500/20 text-[#ff9966] border-[#ff9966]/45 animate-pulse'
                              : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
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
                          onClick={(e) => {
                            e.stopPropagation();
                            if (currentQuestion) {
                              speak(formatSolutionText(currentQuestion));
                            }
                          }}
                          className={`p-1.5 rounded-lg transition-all border cursor-pointer active:scale-90 ${
                            spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused)
                              ? 'bg-orange-500/20 text-[#ff9966] border-[#ff9966]/45'
                              : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border-white/5'
                          }`}
                          title="Vorlesen beenden"
                        >
                          {spokenText === formatSolutionText(currentQuestion) && (isSpeaking || isPaused) ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <span className="study-card-badge text-slate-400 font-sans font-semibold max-w-[120px] truncate">
                          {currentQuestion?.kategorie}
                        </span>
                      </div>
                    </div>

                    <div className="my-auto py-2 text-slate-200 text-xs sm:text-sm md:text-sm leading-relaxed whitespace-pre-wrap font-semibold overflow-y-auto max-h-[290px] pr-1 scrollbar-thin text-left z-10">
                      <span className="text-[#ff9966] text-[10px] font-bold uppercase tracking-widest block mb-2 font-display">
                        LÖSUNG:
                      </span>
                      {formatSolutionText(currentQuestion)}
                      {currentQuestion && (
                        <div onClick={(e) => e.stopPropagation()}>
                          <TranslationView 
                            text={formatSolutionText(currentQuestion)} 
                            questionId={currentQuestion.id} 
                            targetLanguage={translationLang} 
                            type="antwort" 
                          />
                        </div>
                      )}
                    </div>

                    <div className="text-center text-[9px] text-slate-500 pt-3 border-t border-white/5 font-extrabold uppercase tracking-widest font-display text-slate-400 z-10">
                      Klicke zum Zurückdrehen
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Manual controls buttons */}
          <div className="flex justify-between items-center px-1.5 xs:px-4 max-w-sm mx-auto font-sans gap-1">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-2.5 xs:px-4 py-2 xs:py-2.5 text-[11px] xs:text-xs text-slate-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-xl flex items-center gap-1 transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Zurück
            </button>
 
            <button
              onClick={handleToggleFlip}
              className="px-3.5 xs:px-5 py-2 xs:py-2.5 text-[11px] xs:text-xs font-bold text-slate-950 bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] hover:opacity-90 rounded-xl flex items-center gap-1 transition-all duration-300 active:scale-95 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Drehen
            </button>
 
            <button
              onClick={handleNext}
              disabled={currentIndex === displayQuestions.length - 1}
              className="px-2.5 xs:px-4 py-2 xs:py-2.5 text-[11px] xs:text-xs text-slate-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 rounded-xl flex items-center gap-1 transition-all duration-300 active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              Vorwärts <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Styled card perspective css styles */}
      <style>{`
        .study-card-container {
          perspective: 1200px;
          width: 100%;
          max-width: 380px;
          height: 380px;
          margin: 0 auto;
          cursor: pointer;
        }
        @media (min-width: 375px) {
          .study-card-container {
            height: 420px;
          }
        }
        @media (min-width: 480px) {
          .study-card-container {
            height: 480px;
          }
        }
        .study-card-content {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0px 10px 40px -10px rgba(0,0,0,0.9);
          border-radius: 24px;
        }
        .study-card-content.flipped {
          transform: rotateY(180deg);
        }
        .study-card-front, .study-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 24px;
          overflow: hidden;
        }
        .study-card-front {
          background-color: #121214;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .study-card-front::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 320px;
          height: 180%;
          background: linear-gradient(90deg, transparent, #dfb871, #9a7836, #f5db9f, #dfb871, #9a7836, transparent);
          animation: rotation_481 6000ms infinite linear;
          z-index: 1;
        }
        .study-card-back {
          background-color: #121214;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .study-card-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 320px;
          height: 180%;
          background: linear-gradient(90deg, transparent, #dfb871, #9a7836, #f5db9f, #dfb871, #9a7836, transparent);
          animation: rotation_481 6000ms infinite linear;
          z-index: 1;
        }
        .study-card-back-content {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          left: 3px;
          top: 3px;
          background-color: #0b0c0e;
          border-radius: 21px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          z-index: 10;
        }
        .study-card-front-content {
          position: absolute;
          width: calc(100% - 6px);
          height: calc(100% - 6px);
          left: 3px;
          top: 3px;
          background-color: #0b0c0e;
          border-radius: 21px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 10;
          overflow: hidden;
        }
        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        .study-card-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          position: absolute;
          filter: blur(45px);
          opacity: 0.35;
          animation: floating 3500ms infinite ease-in-out;
          pointer-events: none;
          z-index: 2;
        }
        #bottom {
          background-color: #dfb871;
          left: -20px;
          bottom: -20px;
          width: 220px;
          height: 220px;
          animation-delay: -800ms;
        }
        #right {
          background-color: #9a7836;
          right: -30px;
          top: -30px;
          width: 140px;
          height: 140px;
          animation-delay: -1800ms;
        }
        @keyframes floating {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(15px) scale(1.08);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        .study-card-badge {
          background-color: rgba(0, 0, 0, 0.45);
          padding: 4px 14px;
          border-radius: 99px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          width: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 10px;
        }
        .study-card-description {
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.6);
          width: 100%;
          padding: 24px;
          background-color: rgba(10, 11, 14, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        @keyframes slide-next-in {
          0% {
            transform: translateX(45px) scale(0.97);
            opacity: 0;
            filter: blur(4px);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes slide-prev-in {
          0% {
            transform: translateX(-45px) scale(0.97);
            opacity: 0;
            filter: blur(4px);
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes fade-in-generic {
          0% {
            opacity: 0;
            transform: scale(0.98);
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        .animate-slide-next {
          animation: slide-next-in 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-prev {
          animation: slide-prev-in 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-generic {
          animation: fade-in-generic 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
