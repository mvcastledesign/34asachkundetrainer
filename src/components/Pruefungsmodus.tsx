/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Play, Clipboard, Clock, AlertTriangle, RefreshCw, CheckCircle, XCircle, Award, Volume2, VolumeX, Pause } from 'lucide-react';
import { Question, UserProgressMap, KATEGORIEN } from '../types.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface PruefungsmodusProps {
  questions: Question[];
  progress: UserProgressMap;
  onAnswerBulk: (results: { id: string; status: 'gewusst' | 'nicht_gewusst' }[]) => void;
  onRecordHistory: (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => void;
  translationLang?: string;
}

export default function Pruefungsmodus({
  questions,
  progress,
  onAnswerBulk,
  onRecordHistory,
  translationLang = 'deaktiviert'
}: PruefungsmodusProps) {
  // Exam states
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examFinished, setExamFinished] = useState<boolean>(false);
  
  // Settings
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeLimit, setTimeLimit] = useState<number>(15); // in minutes
  
  // Session variables
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [tempAnswers, setTempAnswers] = useState<{ [qId: string]: string }>({}); // Draft thoughts
  const [revealed, setRevealed] = useState<boolean>(false);
  const [scoreList, setScoreList] = useState<{ [qId: string]: 'riktig' | 'feil' }>({});
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);
  
  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('pruefung_muendlich'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  const answerSectionRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to revealed Musterantwort and evaluation buttons
  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => {
        if (answerSectionRef.current) {
          answerSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [revealed]);
  
  const { isSpeaking, isPaused, speak, pause, resume, stop, spokenText } = useSpeech();
  
  // Timers
  const [timeLeft, setTimeLeft] = useState<number>(0); // in seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset question timer on currentIndex change
  useEffect(() => {
    trackerRef.current.reset();
  }, [currentIndex]);

  // Start exam
  const handleStartExam = () => {
    sessionIdRef.current = generateSessionId('pruefung_muendlich');
    // Select N random questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    setExamQuestions(selected);
    setCurrentIndex(0);
    setTempAnswers({});
    setRevealed(false);
    setScoreList({});
    setTimeLeft(timeLimit * 60);
    setExamFinished(false);
    setExamStarted(true);
    trackerRef.current.reset();
  };

  // Timer effect
  useEffect(() => {
    if (examStarted && !examFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examStarted, examFinished]);

  const handleFinishExam = () => {
    setExamFinished(true);
    
    // Process answers and save to global state and history
    const results = examQuestions.map(q => ({
      id: q.id,
      status: (scoreList[q.id] === 'riktig' ? 'gewusst' : 'nicht_gewusst') as 'gewusst' | 'nicht_gewusst'
    }));
    
    onAnswerBulk(results);
    
    const correctCount = Object.values(scoreList).filter(s => s === 'riktig').length;
    const incorrectCount = examQuestions.length - correctCount;

    onRecordHistory({
      typ: 'Prüfung',
      anzahl: examQuestions.length,
      richtig: correctCount,
      falsch: incorrectCount
    });

    const passed = (correctCount / examQuestions.length) >= 0.5;
    logExamSession({
      session_id: sessionIdRef.current,
      mode: 'exam',
      exam_type: 'Mündliche Prüfung Simulation (§ 34a)',
      total_questions: examQuestions.length,
      correct_count: correctCount,
      incorrect_count: incorrectCount,
      score_percent: Math.round((correctCount / examQuestions.length) * 100),
      points_earned: correctCount,
      max_points: examQuestions.length,
      passed,
      time_spent_seconds: (timeLimit * 60) - timeLeft
    });
  };

  const handleReveal = () => {
    trackerRef.current.recordInteraction(1);
    setRevealed(true);
  };

  const handleVote = (vote: 'riktig' | 'feil') => {
    stop();
    const currentQ = examQuestions[currentIndex];
    const isCorrect = vote === 'riktig';
    const metrics = trackerRef.current.getMetrics();

    // Fire telemetry to Supabase question_attempts
    if (currentQ) {
      logQuestionAttempt({
        session_id: sessionIdRef.current,
        mode: 'exam',
        question_id: String(currentQ.id || 'exam_item'),
        topic: String(currentQ.kategorie || 'Mündliche Prüfung'),
        is_correct: Boolean(isCorrect),
        time_spent_ms: Number(metrics.time_spent_ms || 1500),
        switched_answers: Boolean(metrics.switched_answers || false)
      });
    }

    setScoreList(prev => ({
      ...prev,
      [examQuestions[currentIndex].id]: vote
    }));
    
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    } else {
      // Completed last question, redirect to submit button reveal
      setRevealed(true);
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Safe category analytics for finished exam
  const examCategoryAnalysis = KATEGORIEN.map(kat => {
    const katExamQuestions = examQuestions.filter(q => q.kategorie === kat);
    if (katExamQuestions.length === 0) return null;
    
    const katCorrect = katExamQuestions.filter(q => scoreList[q.id] === 'riktig').length;
    return {
      category: kat,
      total: katExamQuestions.length,
      correct: katCorrect,
      percent: Math.round((katCorrect / katExamQuestions.length) * 100)
    };
  }).filter(Boolean);

  if (examFinished) {
    const correctCount = Object.values(scoreList).filter(s => s === 'riktig').length;
    const totalCount = examQuestions.length;
    const passed = correctCount / totalCount >= 0.5; // IHK usually requires 50% score for passing

    return (
      <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex p-4 rounded-full bg-slate-950 border border-slate-800 text-emerald-400">
            <Award className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Prüfung Simulation Auswertung</h2>
            <p className="text-xs text-slate-400 mt-1">Mündliche Sachkundeprüfung § 34a GewO</p>
          </div>
        </div>

        {/* Big Score Radial Gauge */}
        <div className="flex flex-col items-center justify-center space-y-2 py-4">
          <div className="text-6xl font-black font-mono tracking-tight text-white">
            {correctCount} <span className="text-slate-500 text-3xl">/ {totalCount}</span>
          </div>
          <div className={`text-sm font-semibold px-4 py-1.5 rounded-full mt-2 border ${
            passed 
              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-900/60' 
              : 'bg-rose-950/40 text-rose-300 border-rose-900/60'
          }`}>
            {passed ? 'Prüfung Bestanden (≥ 50%)' : 'Nicht Bestanden (Ziel: ≥ 50%)'}
          </div>
        </div>

        {/* Topic Specific Feedback */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-black text-slate-300 tracking-wider uppercase">Leistung nach Themengebiet</h3>
          <div className="space-y-3">
            {examCategoryAnalysis.map(anal => anal && (
              <div key={anal.category} className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-slate-300 font-medium truncate max-w-[280px]">{anal.category}</span>
                  <span className="text-slate-400 font-mono">
                    {anal.correct} / {anal.total} <strong className="text-slate-200">({anal.percent}%)</strong>
                  </span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      anal.percent >= 50 ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${anal.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-black text-slate-300 tracking-wider uppercase">Fragenprüfung Details</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {examQuestions.map((q, idx) => {
              const isCorrect = scoreList[q.id] === 'riktig';
              return (
                <div key={q.id} className="p-3 bg-slate-950/30 rounded-xl border border-slate-800 flex items-start gap-3">
                  <span className="mt-0.5">
                    {isCorrect ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400" />
                    )}
                  </span>
                  <div className="text-xs space-y-1">
                    <p className="text-slate-400 font-mono">Frage {idx + 1} ({q.kategorie})</p>
                    <p className="text-slate-200 font-medium">{q.frage}</p>
                    <TranslationView 
                      text={q.frage} 
                      questionId={q.id} 
                      targetLanguage={translationLang} 
                      type="frage" 
                    />
                    <div className="text-slate-500 leading-relaxed text-[11px] mt-1 bg-slate-950/80 p-2 rounded">
                      <strong className="text-slate-400">Antwort:</strong> {q.antwort}
                      <TranslationView 
                        text={q.antwort} 
                        questionId={q.id} 
                        targetLanguage={translationLang} 
                        type="antwort" 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Restart Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => {
              setExamStarted(false);
              setExamFinished(false);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-705 text-slate-200 font-semibold text-xs border border-slate-700 transition-all cursor-pointer text-center"
          >
            Zurück zur Übersicht
          </button>
          <button
            onClick={handleStartExam}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-lg text-center"
          >
            Neue Simulation starten
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {!examStarted ? (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl space-y-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
              <Clipboard className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-100">Simulation Mündliche Sachkundeprüfung</h2>
              <p className="text-xs text-slate-400 mt-1">
                Dieser Modus stellt eine realistische Prüfungssituation dar. Dir werden nacheinander zufällige 
                Prüfungsfragen gestellt. Du kannst dir Notizen machen und bewertest dich danach selbst.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800/80">
            {/* Question Count Setting */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                Anzahl der zufälligen Fragen
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[5, 10, 15].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setQuestionCount(n)}
                    className={`py-2 rounded-xl text-xs font-mono font-semibold border transition-all cursor-pointer ${
                      questionCount === n
                        ? 'bg-indigo-950/50 text-indigo-300 border-indigo-700'
                        : 'bg-slate-950 text-slate-400 border-slate-800/80 hover:bg-slate-900'
                    }`}
                  >
                    {n} Fragen
                  </button>
                ))}
              </div>
            </div>

            {/* Time limit selection */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                Zeitlimit für die Simulation
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[10, 15, 20].map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTimeLimit(m)}
                    className={`py-2 rounded-xl text-xs font-mono font-semibold border transition-all cursor-pointer ${
                      timeLimit === m
                        ? "bg-indigo-950/50 text-indigo-300 border-indigo-700"
                        : "bg-slate-950 text-slate-400 border-slate-800/80 hover:bg-slate-900"
                    }`}
                  >
                    {m} Minuten
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3 mt-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] text-slate-400 leading-relaxed">
              <strong>Achtung:</strong> Die Simulation endet automatisch nach Ablauf der Zeit! 
              In der echten Prüfung gibt es auch Zeitdruck und unerwartete Rückfragen der Prüfer. 
              Bereite im Freitextfeld Schlagworte vor.
            </p>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={handleStartExam}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" /> Simulation jetzt starten
            </button>
          </div>
        </div>
      ) : (
        /* Active Exam Body */
        <div className="space-y-6">
          {/* Top Panel Timer & counters */}
          <div className="bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              Mündliche Prüfung:{' '}
              <strong className="text-slate-200">
                Frage {currentIndex + 1} / {examQuestions.length}
              </strong>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/20 text-rose-400 border border-rose-900/40 text-xs font-mono font-bold">
              <Clock className="w-3.5 h-3.5 animate-pulse" /> {formatTimer(timeLeft)}
            </div>
          </div>

          {/* Question card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
            {/* Category tag */}
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-semibold font-mono">
                {examQuestions[currentIndex]?.kategorie}
              </span>
              <div className="flex items-center gap-2">
                {/* Play / Pause button */}
                <button
                  type="button"
                  onClick={() => {
                    const activeQ = examQuestions[currentIndex];
                    if (activeQ) {
                      if (spokenText === activeQ.frage) {
                        if (isSpeaking) {
                          pause();
                        } else if (isPaused) {
                          resume();
                        } else {
                          speak(activeQ.frage);
                        }
                      } else {
                        speak(activeQ.frage);
                      }
                    }
                  }}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                    spokenText === examQuestions[currentIndex]?.frage && (isSpeaking || isPaused)
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 animate-pulse'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
                  }`}
                  title={isSpeaking && spokenText === examQuestions[currentIndex]?.frage ? "Pausieren" : "Abspielen"}
                >
                  {isSpeaking && spokenText === examQuestions[currentIndex]?.frage ? (
                    <Pause className="w-3.5 h-3.5 animate-pulse" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const activeQ = examQuestions[currentIndex];
                    if (activeQ) {
                      speak(activeQ.frage);
                    }
                  }}
                  className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                    spokenText === examQuestions[currentIndex]?.frage && (isSpeaking || isPaused)
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/5'
                  }`}
                  title="Vorlesen beenden"
                >
                  {spokenText === examQuestions[currentIndex]?.frage && (isSpeaking || isPaused) ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <span className="text-[10px] text-slate-500 font-medium">Prüfungs-Simulation</span>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-base md:text-lg font-bold text-slate-100">
              {examQuestions[currentIndex]?.frage}
            </h3>
            {examQuestions[currentIndex] && (
              <TranslationView 
                text={examQuestions[currentIndex].frage} 
                questionId={examQuestions[currentIndex].id} 
                targetLanguage={translationLang} 
                type="frage" 
              />
            )}

            {/* Mock draft sheet to write down key notes */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Deine Stichpunkte / Freitext Entwurf
              </label>
              <textarea
                value={tempAnswers[examQuestions[currentIndex]?.id] || ''}
                onChange={e => {
                  trackerRef.current.recordInteraction(1);
                  setTempAnswers({
                    ...tempAnswers,
                    [examQuestions[currentIndex]?.id]: e.target.value
                  });
                }}
                placeholder="Schreibe Stichworte oder deine Antwort auf, um sie gleich mit der Musterlösung zu vergleichen..."
                className="w-full h-24 bg-slate-950 text-slate-200 text-xs p-3 rounded-xl border border-slate-800 focus:ring-1 focus:ring-indigo-500 focus:outline-none placeholder-slate-700 resize-none font-mono"
              />
            </div>

            {/* Answer feedback reveal */}
            {revealed ? (
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-wrap w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-emerald-400 text-xs font-black block uppercase">Muster-Antwort (Fachgespräch):</span>
                    <div className="flex items-center gap-2">
                      {/* Play / Pause button */}
                      <button
                        type="button"
                        onClick={() => {
                          const activeQ = examQuestions[currentIndex];
                          if (activeQ) {
                            if (spokenText === activeQ.antwort) {
                              if (isSpeaking) {
                                pause();
                              } else if (isPaused) {
                                resume();
                              } else {
                                speak(activeQ.antwort);
                              }
                            } else {
                              speak(activeQ.antwort);
                            }
                          }
                        }}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                          spokenText === examQuestions[currentIndex]?.antwort && (isSpeaking || isPaused)
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 animate-pulse'
                            : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-450 border-white/5'
                        }`}
                        title={isSpeaking && spokenText === examQuestions[currentIndex]?.antwort ? "Pausieren" : "Abspielen"}
                      >
                        {isSpeaking && spokenText === examQuestions[currentIndex]?.antwort ? (
                          <Pause className="w-3.5 h-3.5 animate-pulse" />
                        ) : (
                          <Play className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const activeQ = examQuestions[currentIndex];
                          if (activeQ) {
                            speak(activeQ.antwort);
                          }
                        }}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer active:scale-95 ${
                          spokenText === examQuestions[currentIndex]?.antwort && (isSpeaking || isPaused)
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-450 border-white/5'
                        }`}
                        title="Vorlesen beenden"
                      >
                        {spokenText === examQuestions[currentIndex]?.antwort && (isSpeaking || isPaused) ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>{examQuestions[currentIndex]?.antwort}</div>
                  {examQuestions[currentIndex] && (
                    <TranslationView 
                      text={examQuestions[currentIndex].antwort} 
                      questionId={examQuestions[currentIndex].id} 
                      targetLanguage={translationLang} 
                      type="antwort" 
                    />
                  )}
                </div>

                {/* Score Voting */}
                <div ref={answerSectionRef} className="space-y-2 text-center pt-2">
                  <p className="text-[11px] text-slate-400">War deine Antwort den Stichpunkten entsprechend richtig?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2.5">
                    <button
                      onClick={() => handleVote('feil')}
                      className="w-full sm:w-auto px-4 py-3 font-mono rounded-xl bg-rose-950/40 text-rose-300 border border-rose-900/50 text-[10px] uppercase font-bold hover:bg-rose-950 transition-all cursor-pointer text-center"
                    >
                      NEIN - Unvollständig / Falsch
                    </button>
                    <button
                      onClick={() => handleVote('riktig')}
                      className="w-full sm:w-auto px-4 py-3 font-mono rounded-xl bg-emerald-950/40 text-emerald-300 border border-emerald-900/50 text-[10px] uppercase font-bold hover:bg-emerald-900 transition-all cursor-pointer text-center"
                    >
                      JA - Vollständig / Richtig
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pt-4 text-center border-t border-slate-850">
                <button
                  type="button"
                  onClick={handleReveal}
                  className="px-6 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all cursor-pointer"
                >
                  Musterantwort vergleichen
                </button>
              </div>
            )}
          </div>

          {/* Quick finish button */}
          <div className="flex justify-between items-center text-xs">
            <button
              onClick={() => setShowCancelConfirm(true)}
              className="text-slate-500 hover:text-slate-300 cursor-pointer"
            >
              Simulation abbrechen
            </button>
            
            {/* If all answered we can submit manually */}
            {Object.keys(scoreList).length === examQuestions.length && (
              <button
                onClick={handleFinishExam}
                className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold transition-all cursor-pointer shadow-lg shadow-indigo-500/10"
              >
                Prüfung abschließen & auswerten
              </button>
            )}
          </div>

          {/* Polished custom confirm dialog modal */}
          {showCancelConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4">
              <div className="w-full max-w-sm bento-glass p-6 rounded-2xl border border-rose-550/20 shadow-2xl relative space-y-4 text-center">
                <div className="inline-flex p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-[#dfb871]/15 mb-1.5 animate-pulse">
                  <AlertTriangle className="w-6 h-6 text-[#dfb871]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white font-display">Prüfung abbrechen?</h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Deine aktuellen Fortschritte in dieser Prüfung gehen verloren. Möchtest du wirklich unvollständig abbrechen?
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    onClick={() => {
                      setExamStarted(false);
                      setShowCancelConfirm(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-rose-500/90 hover:bg-rose-550 text-white font-bold text-xs transition-all cursor-pointer active:scale-95"
                  >
                    Ja, vollständig abbrechen
                  </button>
                  <button
                    onClick={() => setShowCancelConfirm(false)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-750 text-xs font-semibold transition-all cursor-pointer active:scale-95"
                  >
                    Nein, weiterlaufen lassen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
