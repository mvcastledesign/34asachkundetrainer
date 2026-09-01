import React, { useState, useEffect, useRef } from 'react';
import { 
  HelpCircle, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  ArrowRight, 
  Trophy
} from 'lucide-react';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

import { RIDDLE_QUESTIONS, RiddleQuestion, RiddleQuestionOption } from '../data/riddleQuestions.ts';

interface ShuffledRiddleItem {
  id: number;
  riddle: string;
  options: RiddleQuestionOption[];
  correct: string;
  explanation: string;
  translations?: {
    en: { question: string; explanation: string };
    ru: { question: string; explanation: string };
    ar: { question: string; explanation: string };
    fa: { question: string; explanation: string };
  };
}

// FISHER-YATES SHUFFLE ALGORITHMUS
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface LegalConceptGuesserProps {
  translationLang?: string;
  onRecordHistory?: (item: { typ?: string; mode?: string; anzahl: number; richtig: number; falsch: number; quote?: number }) => void;
}

export default function LegalConceptGuesser({
  translationLang = 'deaktiviert',
  onRecordHistory
}: LegalConceptGuesserProps) {
  const [riddles, setRiddles] = useState<ShuffledRiddleItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  
  // Stats
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('legal_concept_guesser'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  const { speak, isSpeaking, stop } = useSpeech();

  // Erstelle bei jedem Start / Reset einen komplett frisch gemischten Rätsel-Pool
  const buildRandomizedRiddles = (): ShuffledRiddleItem[] => {
    const shuffledQuestions = shuffleArray(RIDDLE_QUESTIONS);

    return shuffledQuestions.map(r => ({
      ...r,
      options: shuffleArray(r.options)
    }));
  };

  const handleRestart = () => {
    stop();
    sessionIdRef.current = generateSessionId('legal_concept_guesser');
    trackerRef.current.reset();
    const fresh = buildRandomizedRiddles();
    setRiddles(fresh);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setIsCompleted(false);
  };

  // Initialize on mount
  useEffect(() => {
    handleRestart();
  }, []);

  const currentRiddle = riddles[currentIndex] || riddles[0];
  const totalQuestions = riddles.length > 0 ? riddles.length : RIDDLE_QUESTIONS.length;

  const handleSelectOption = (optionText: string) => {
    if (isAnswered || !currentRiddle) return;

    const optIndex = currentRiddle.options.findIndex(o => o.text === optionText);
    trackerRef.current.recordInteraction(optIndex >= 0 ? optIndex : 0);
    const metrics = trackerRef.current.getMetrics();

    setSelectedOption(optionText);
    setIsAnswered(true);

    const isCorrect = optionText === currentRiddle.correct;

    // Track question attempt in Supabase
    logQuestionAttempt({
      session_id: sessionIdRef.current,
      mode: 'raetsel',
      question_id: String(currentRiddle.id || 'riddle_item'),
      topic: 'Rechtliche Grundlagen & Begriffe',
      is_correct: Boolean(isCorrect),
      time_spent_ms: Number(metrics.time_spent_ms || 1500),
      switched_answers: Boolean(metrics.switched_answers || false)
    });

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
      setScore(prev => prev + 100);
      setCorrectCount(prev => prev + 1);

      if (onRecordHistory) {
        onRecordHistory({
          typ: 'Lernen',
          anzahl: 1,
          richtig: 1,
          falsch: 0
        });
      }
    } else {
      setStreak(0);
      setIncorrectCount(prev => prev + 1);

      if (onRecordHistory) {
        onRecordHistory({
          typ: 'Lernen',
          anzahl: 1,
          richtig: 0,
          falsch: 1
        });
      }
    }
  };

  const handleNextRiddle = () => {
    stop();
    trackerRef.current.reset();
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      logExamSession({
        mode: 'raetsel',
        exam_type: '„Was bin ich?“ Rätsel',
        scoreAchieved: correctCount,
        scoreMax: totalQuestions,
        passed: (correctCount / totalQuestions) >= 0.5
      });
    }
  };

  // Keyboard Shortcuts: 1-4 / A-D to select, Enter/Space to advance or restart
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (isCompleted) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          handleRestart();
        }
      } else if (isAnswered) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          handleNextRiddle();
        }
      } else if (currentRiddle) {
        if (['1', 'Digit1', 'KeyA', 'a', 'A'].includes(e.code) || e.key === '1' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          if (currentRiddle.options[0]) handleSelectOption(currentRiddle.options[0].text);
        } else if (['2', 'Digit2', 'KeyB', 'b', 'B'].includes(e.code) || e.key === '2' || e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          if (currentRiddle.options[1]) handleSelectOption(currentRiddle.options[1].text);
        } else if (['3', 'Digit3', 'KeyC', 'c', 'C'].includes(e.code) || e.key === '3' || e.key === 'c' || e.key === 'C') {
          e.preventDefault();
          if (currentRiddle.options[2]) handleSelectOption(currentRiddle.options[2].text);
        } else if (['4', 'Digit4', 'KeyD', 'd', 'D'].includes(e.code) || e.key === '4' || e.key === 'd' || e.key === 'D') {
          e.preventDefault();
          if (currentRiddle.options[3]) handleSelectOption(currentRiddle.options[3].text);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, isCompleted, currentIndex, currentRiddle]);

  const accuracyPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  if (!currentRiddle) return null;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 select-none">
      {/* MINIMALISTISCHE STATUSLEISTE */}
      <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
        {/* Left: Question Counter & Progress Bar */}
        <div className="flex items-center gap-3 flex-1 min-w-0 max-w-xs">
          <span className="text-xs font-mono font-bold text-slate-300 shrink-0">
            Frage {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="flex-1 bg-[#0B0F17] h-1.5 rounded-full overflow-hidden border border-[#1E293B]">
            <div 
              className="bg-gradient-to-r from-amber-500 via-[#dfb871] to-amber-300 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Right: Gamification Badges (Streak & Score) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-1.5 text-amber-400 font-mono text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>{streak}</span>
          </div>

          <div className="px-2.5 py-1 rounded-xl bg-[#dfb871]/10 border border-[#dfb871]/30 flex items-center gap-1.5 text-[#dfb871] font-mono text-xs font-bold">
            <Trophy className="w-3.5 h-3.5 text-[#dfb871]" />
            <span>{score} Pkt.</span>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div className="space-y-4">
          {/* TYPOGRAFIE & TEXTBOX: Moderne Sans-Serif, Zentriert, max-w-2xl */}
          <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden space-y-4">
            
            {/* Top pill & audio */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Was bin ich?
              </span>

              <button
                onClick={() => speak(currentRiddle.riddle)}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isSpeaking 
                    ? 'bg-amber-500 text-slate-950 animate-pulse' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                }`}
                title="Rätsel vorlesen"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Riddle Text - Pure Clean Sans-Serif */}
            <div className="py-2">
              <p className="text-base sm:text-lg md:text-xl font-medium font-sans text-slate-100 leading-relaxed tracking-normal">
                "{currentRiddle.riddle}"
              </p>
            </div>

            {/* Optional Translation */}
            {translationLang !== 'deaktiviert' && (
              <div className="pt-2 border-t border-white/5">
                <TranslationView 
                  text={currentRiddle.riddle} 
                  questionId={`riddle-${currentRiddle.id}`}
                  targetLanguage={translationLang} 
                  type="frage" 
                  directTranslation={
                    translationLang === 'en' || translationLang === 'englisch'
                      ? currentRiddle.translations?.en?.question
                      : translationLang === 'ru' || translationLang === 'russisch'
                      ? currentRiddle.translations?.ru?.question
                      : translationLang === 'ar' || translationLang === 'arabisch'
                      ? currentRiddle.translations?.ar?.question
                      : translationLang === 'fa' || translationLang === 'farsi'
                      ? currentRiddle.translations?.fa?.question
                      : undefined
                  }
                />
              </div>
            )}
          </div>

          {/* ANTWORT-BUTTONS: 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentRiddle.options.map((optionObj, idx) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedOption === optionObj.text;
              const isCorrect = optionObj.text === currentRiddle.correct;

              let buttonStyle = 'bg-[#131B2A] border-[#1E293B] hover:border-amber-500/60 hover:bg-[#1A253A] text-slate-200';

              if (isAnswered) {
                if (isSelected && isCorrect) {
                  buttonStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-500/20 ring-1 ring-emerald-400';
                } else if (isSelected && !isCorrect) {
                  buttonStyle = 'bg-rose-950/90 border-rose-500 text-rose-100 shadow-md shadow-rose-500/20 ring-1 ring-rose-400';
                } else if (!isSelected && isCorrect) {
                  buttonStyle = 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200';
                } else {
                  buttonStyle = 'bg-[#131B2A]/40 border-transparent text-slate-500 opacity-40';
                }
              }

              return (
                <button
                  key={optionObj.id || idx}
                  onClick={() => handleSelectOption(optionObj.text)}
                  disabled={isAnswered}
                  className={`p-3.5 rounded-xl border transition-all text-left flex items-center justify-between gap-3 group active:scale-[0.99] cursor-pointer min-h-[58px] ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className={`w-7 h-7 rounded-lg font-bold font-mono text-xs flex items-center justify-center shrink-0 transition-colors ${
                      isAnswered && isSelected && isCorrect
                        ? 'bg-emerald-500 text-slate-950'
                        : isAnswered && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/10 text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950'
                    }`}>
                      {letter}
                    </span>

                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-xs sm:text-sm font-sans leading-snug block">
                        {optionObj.text}
                      </span>
                      {translationLang !== 'deaktiviert' && (
                        <TranslationView
                          variant="compact"
                          text={optionObj.text}
                          questionId={`riddle_${currentRiddle.id}-opt-${optionObj.id}`}
                          targetLanguage={translationLang}
                          type="antwort"
                          directTranslation={
                            translationLang === 'en' || translationLang === 'englisch'
                              ? optionObj.translations?.en
                              : translationLang === 'ru' || translationLang === 'russisch'
                              ? optionObj.translations?.ru
                              : translationLang === 'ar' || translationLang === 'arabisch'
                              ? optionObj.translations?.ar
                              : translationLang === 'fa' || translationLang === 'farsi'
                              ? optionObj.translations?.fa
                              : undefined
                          }
                        />
                      )}
                    </div>
                  </div>

                  {isAnswered && isSelected && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}

                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & "Nächstes Rätsel [Enter]" Card */}
          {isAnswered && (
            <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {selectedOption === currentRiddle.correct ? (
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Richtig (+100 Punkte)
                    </span>
                  ) : (
                    <span className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Falsch – Gesucht: {currentRiddle.correct}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {currentRiddle.explanation}
                </p>
                {translationLang !== 'deaktiviert' && (
                  <TranslationView
                    variant="compact"
                    text={currentRiddle.explanation}
                    questionId={`riddle_${currentRiddle.id}_explanation`}
                    targetLanguage={translationLang}
                    type="loesung"
                    directTranslation={
                      translationLang === 'en' || translationLang === 'englisch'
                        ? currentRiddle.translations?.en?.explanation
                        : translationLang === 'ru' || translationLang === 'russisch'
                        ? currentRiddle.translations?.ru?.explanation
                        : translationLang === 'ar' || translationLang === 'arabisch'
                        ? currentRiddle.translations?.ar?.explanation
                        : translationLang === 'fa' || translationLang === 'farsi'
                        ? currentRiddle.translations?.fa?.explanation
                        : undefined
                    }
                  />
                )}
              </div>

              <button
                onClick={handleNextRiddle}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#dfb871] hover:opacity-95 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20 active:scale-95 shrink-0"
              >
                <span>{currentIndex + 1 < totalQuestions ? 'Nächstes Rätsel [Enter]' : 'Ergebnis anzeigen'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* ABSCHLUSS-SCREEN */
        <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-xl animate-fade-in">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-[#dfb871] text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
            <Trophy className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
              Quiz Beendet
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Alle 20 Rechtsbegriffe gelöst!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Du hast {correctCount} von {totalQuestions} Begriffen richtig erraten.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto text-left">
            <div className="p-3 bg-[#0B0F17] border border-[#1E293B] rounded-xl">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">Punkte</span>
              <span className="text-lg font-bold text-amber-400 font-mono">{score}</span>
            </div>
            <div className="p-3 bg-[#0B0F17] border border-[#1E293B] rounded-xl">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">Trefferquote</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{accuracyPercent}%</span>
            </div>
            <div className="p-3 bg-[#0B0F17] border border-[#1E293B] rounded-xl">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">Max-Streak</span>
              <span className="text-lg font-bold text-[#dfb871] font-mono">🔥 {maxStreak}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-[#dfb871] to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Neu starten [Leertaste]</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
