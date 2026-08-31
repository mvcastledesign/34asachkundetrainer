import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Zap, 
  Crown, 
  Sparkles, 
  RefreshCw, 
  Scale, 
  ShieldAlert, 
  LayoutDashboard 
} from 'lucide-react';
import { Question } from '../types.ts';
import { UserProfile } from '../types/auth.ts';
import { supabase } from '../lib/supabase.ts';
import { useSpeech } from '../hooks/useSpeech.ts';
import TranslationView from './TranslationView.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface StreakChallengeModeProps {
  questions?: Question[];
  currentUser?: UserProfile | null;
  translationLang?: string;
  onNavigate?: (view: string) => void;
  onRecordHistory?: (item: { typ?: string; mode?: string; anzahl: number; richtig: number; falsch: number; quote?: number }) => void;
}

interface RawStreakQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  category: string;
}

interface ShuffledStreakQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  correctAnswer: string;
  category: string;
}

interface StudentLeaderboardEntry {
  id: string;
  vorname: string;
  nachname?: string;
  max_streak: number;
}

// 1. DIE 20 EXKLUSIVEN, KURZEN STREAK-FRAGEN (DIHK-Optimiert)
const STREAK_QUESTIONS: RawStreakQuestion[] = [
  {
    id: "streak_1",
    question: "Was besitzen private Sicherheitskräfte im öffentlichen Raum?",
    options: ["Jedermannsrechte", "Hoheitsrechte", "Polizeibefugnisse", "Richterliche Gewalt"],
    correct: "Jedermannsrechte",
    category: "Recht der öffentlichen Sicherheit"
  },
  {
    id: "streak_2",
    question: "Für welche Tätigkeit ist die Sachkundeprüfung § 34a zwingend vorgeschrieben?",
    options: ["Citystreife im Park", "Einfacher Pförtnerdienst", "Reine Baustellenbewachung", "Alarminstallation"],
    correct: "Citystreife im Park",
    category: "Gewerberecht"
  },
  {
    id: "streak_3",
    question: "Welche Bescheinigung muss das Wachpersonal im Dienst immer mitführen?",
    options: ["Dienstausweis", "Gewerbeanmeldung", "Arbeitsvertrag", "Führungszeugnis"],
    correct: "Dienstausweis",
    category: "Gewerberecht"
  },
  {
    id: "streak_4",
    question: "Darf ein Wachdienst personenbezogene Daten unbegrenzt speichern?",
    options: ["Nein, niemals", "Ja, immer", "Nur mit Chef-Erlaubnis", "Nur bei Kunden"],
    correct: "Nein, niemals",
    category: "Datenschutzrecht"
  },
  {
    id: "streak_5",
    question: "Was muss bei einer Videoüberwachung im öffentlichen Raum zwingend vorhanden sein?",
    options: ["Hinweisschild", "Polizeifreigabe", "Sirene", "Blaulicht"],
    correct: "Hinweisschild",
    category: "Datenschutzrecht"
  },
  {
    id: "streak_6",
    question: "Wer hat die rechtliche Herrschaft über eine Sache?",
    options: ["Der Eigentümer", "Der Besitzdiener", "Der Entleiher", "Der Finder"],
    correct: "Der Eigentümer",
    category: "Bürgerliches Gesetzbuch"
  },
  {
    id: "streak_7",
    question: "Wer ist der Sicherheitsmitarbeiter rechtlich an der Einlasskontrolle?",
    options: ["Besitzdiener", "Eigentümer", "Amtsträger", "Behördenvertreter"],
    correct: "Besitzdiener",
    category: "Bürgerliches Gesetzbuch"
  },
  {
    id: "streak_8",
    question: "Welches Recht erlaubt das sofortige Abnehmen von Diebesgut auf frischer Tat?",
    options: ["Besitzkehr", "Besitzwehr", "Hausrecht", "Notstand"],
    correct: "Besitzkehr",
    category: "Bürgerliches Gesetzbuch"
  },
  {
    id: "streak_9",
    question: "Gegen welche Angriffe darf Notwehr ausgeübt werden?",
    options: ["Gegenwärtige & rechtswidrige", "Vergangene Taten", "Zukünftig drohende Taten", "Rechtmäßige Maßnahmen"],
    correct: "Gegenwärtige & rechtswidrige",
    category: "Strafrecht"
  },
  {
    id: "streak_10",
    question: "Wer darf eine Person nach § 127 Abs. 1 StPO vorläufig festnehmen?",
    options: ["Jedermann", "Nur die Polizei", "Nur Detektive", "Nur der Richter"],
    correct: "Jedermann",
    category: "Strafverfahrensrecht"
  },
  {
    id: "streak_11",
    question: "Welcher Tatbestand liegt vor, wenn ein Hausverbot missachtet wird?",
    options: ["Hausfriedensbruch", "Nötigung", "Unterschlagung", "Raub"],
    correct: "Hausfriedensbruch",
    category: "Strafrecht"
  },
  {
    id: "streak_12",
    question: "Wann darf Schusswaffengebrauch im Wachdienst als Notwehr erfolgen?",
    options: ["Als absolut letztes Mittel", "Bei jeder Sachbeschädigung", "Zur Fluchtvereitelung", "Auf mündlichen Befehl"],
    correct: "Als absolut letztes Mittel",
    category: "Waffenrecht"
  },
  {
    id: "streak_13",
    question: "Welcher Schein ist zum Führen von Pfefferspray mit Tierabwehr-Kennzeichnung nötig?",
    options: ["Kein Waffenschein nötig", "Kleiner Waffenschein", "Großer Waffenschein", "Waffenbesitzkarte"],
    correct: "Kein Waffenschein nötig",
    category: "Waffenrecht"
  },
  {
    id: "streak_14",
    question: "Welche Unfallverhütungsvorschrift regelt Wach- und Sicherungsdienste?",
    options: ["DGUV Vorschrift 23", "DGUV Vorschrift 1", "StVO § 1", "GewO § 34a"],
    correct: "DGUV Vorschrift 23",
    category: "Unfallverhütung"
  },
  {
    id: "streak_15",
    question: "Welcher Grundsatz gilt bei eigener Lebensgefahr im Sicherheitsdienst immer?",
    options: ["Eigensicherung geht vor", "Schutz der Sache geht vor", "Immer einschreiten", "Auftrag ohne Rücksicht"],
    correct: "Eigensicherung geht vor",
    category: "Unfallverhütung"
  },
  {
    id: "streak_16",
    question: "Was gehört zur passiven Sicherheitstechnik eines Objekts?",
    options: ["Zäune und Gitter", "Wachhund", "Polizeistreife", "Sicherheitskraft"],
    correct: "Zäune und Gitter",
    category: "Sicherheitstechnik"
  },
  {
    id: "streak_17",
    question: "Welche Brandklasse umfasst brennbare Flüssigkeiten wie Benzin?",
    options: ["Brandklasse B", "Brandklasse A", "Brandklasse C", "Brandklasse F"],
    correct: "Brandklasse B",
    category: "Sicherheitstechnik"
  },
  {
    id: "streak_18",
    question: "Wie verhält man sich bei aggressiven Personen zur Deeskalation richtig?",
    options: ["Ruhig & bestimmt bleiben", "Sofort anschreien", "Körperlich bedrängen", "Ins Gesicht fassen"],
    correct: "Ruhig & bestimmt bleiben",
    category: "Umgang mit Menschen"
  },
  {
    id: "streak_19",
    question: "Welche Distanz sollte man im Konfliktfall als Sicherheitsabstand mindestens einhalten?",
    options: ["Armlänge (ca. 1,5–2 m)", "10 Zentimeter", "5 Meter", "Direkter Körperkontakt"],
    correct: "Armlänge (ca. 1,5–2 m)",
    category: "Umgang mit Menschen"
  },
  {
    id: "streak_20",
    question: "Was beschreibt Vorurteile gegenüber Menschen anderer Herkunft?",
    options: ["Stereotypen / Vorurteile", "Aktives Zuhören", "Garantenpflicht", "Verhältnismäßigkeit"],
    correct: "Stereotypen / Vorurteile",
    category: "Umgang mit Menschen"
  }
];

// 2. ECHTER FISHER-YATES SHUFFLE ALGORITHMUS
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function StreakChallengeMode({
  currentUser,
  translationLang = 'deaktiviert',
  onNavigate,
  onRecordHistory
}: StreakChallengeModeProps) {
  // --- STATE ---
  const [streak, setStreak] = useState<number>(0);
  const [personalBest, setPersonalBest] = useState<number>(() => {
    const local = localStorage.getItem('34a_personal_max_streak');
    if (local) return parseInt(local, 10) || 0;
    return currentUser?.maxStreak || 0;
  });
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);
  const [gameState, setGameState] = useState<'playing' | 'answered' | 'gameover'>('playing');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  
  // Question Queue
  const [questionQueue, setQuestionQueue] = useState<ShuffledStreakQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [failedQuestion, setFailedQuestion] = useState<ShuffledStreakQuestion | null>(null);

  // Diagnostic Tracking Refs
  const sessionIdRef = useRef<string>(generateSessionId('streak_challenge'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  // Supabase Leaderboard State (KEINE Mockdaten)
  const [leaderboard, setLeaderboard] = useState<StudentLeaderboardEntry[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState<boolean>(false);

  // Timers & Speech
  const nextQuestionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { speak, isSpeaking, stop } = useSpeech();

  // Name formatter: "Semo S."
  const formatName = (vorname?: string, nachname?: string) => {
    const first = (vorname || '').trim();
    const last = (nachname || '').trim();
    if (!first && !last) return 'Schüler';
    if (!last) return first;
    const lastInitial = last.length > 0 ? `${last[0]}.` : '';
    return `${first} ${lastInitial}`.trim();
  };

  // Erstelle bei jedem Start / Neustart einen frisch gemischten Pool
  const buildRandomizedStreakPool = (): ShuffledStreakQuestion[] => {
    const shuffledRaw = shuffleArray(STREAK_QUESTIONS);

    return shuffledRaw.map(q => {
      const randomizedOptions = shuffleArray(q.options);
      const newCorrectIndex = randomizedOptions.indexOf(q.correct);

      return {
        id: q.id,
        question: q.question,
        options: randomizedOptions,
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
        correctAnswer: q.correct,
        category: q.category
      };
    });
  };

  // Start / Reset
  const initializeGame = () => {
    stop();
    if (nextQuestionTimerRef.current) {
      clearTimeout(nextQuestionTimerRef.current);
      nextQuestionTimerRef.current = null;
    }

    sessionIdRef.current = generateSessionId('streak_challenge');
    trackerRef.current.reset();

    const freshPool = buildRandomizedStreakPool();
    setQuestionQueue(freshPool);
    setCurrentQuestionIndex(0);
    setStreak(0);
    setIsNewRecord(false);
    setSelectedOptionIndex(null);
    setFailedQuestion(null);
    setGameState('playing');
  };

  // Mount
  useEffect(() => {
    initializeGame();
    loadLeaderboard();
  }, []);

  // Sync profile best
  useEffect(() => {
    if (currentUser?.maxStreak && currentUser.maxStreak > personalBest) {
      setPersonalBest(currentUser.maxStreak);
      localStorage.setItem('34a_personal_max_streak', String(currentUser.maxStreak));
    }
  }, [currentUser?.maxStreak]);

  // SUPABASE: Bestenliste live aus Supabase laden (.gt('max_streak', 0))
  const loadLeaderboard = async () => {
    setIsLoadingLeaderboard(true);
    try {
      const { data, error } = await supabase
        .from('students')
        .select('id, vorname, nachname, max_streak')
        .gt('max_streak', 0)
        .order('max_streak', { ascending: false })
        .limit(10);

      if (!error && data) {
        setLeaderboard(data.map(item => ({
          id: String(item.id),
          vorname: item.vorname || 'Schüler',
          nachname: item.nachname || '',
          max_streak: Number(item.max_streak) || 0
        })));
      } else {
        setLeaderboard([]);
      }
    } catch {
      setLeaderboard([]);
    } finally {
      setIsLoadingLeaderboard(false);
    }
  };

  const currentQuestion = questionQueue[currentQuestionIndex] || questionQueue[0];

  // Highscore in Supabase synchronisieren
  const handleSaveHighscore = async (newStreak: number) => {
    if (newStreak > personalBest) {
      setPersonalBest(newStreak);
      setIsNewRecord(true);
      localStorage.setItem('34a_personal_max_streak', String(newStreak));

      if (currentUser?.id) {
        try {
          await supabase
            .from('students')
            .update({ max_streak: newStreak })
            .eq('id', currentUser.id);
        } catch (e) {
          console.warn('Fehler beim Speichern des max_streak in Supabase:', e);
        }
      }
      
      loadLeaderboard();
    }
  };

  // Option Click mit psychometrischem Diagnostic Tracking
  const handleOptionClick = (index: number) => {
    if (gameState !== 'playing' || !currentQuestion) return;

    trackerRef.current.recordInteraction(index);
    const metrics = trackerRef.current.getMetrics();

    setSelectedOptionIndex(index);
    setGameState('answered');

    const isCorrect = index === currentQuestion.correctIndex;

    // Fire-and-forget Attempt Diagnostic Tracking to Supabase question_attempts
    logQuestionAttempt({
      session_id: sessionIdRef.current,
      mode: 'streak',
      question_id: String(currentQuestion.id || 'streak_item'),
      topic: String(currentQuestion.category || '§ 34a GewO / Schnellquiz'),
      is_correct: Boolean(isCorrect),
      time_spent_ms: Number(metrics.time_spent_ms || 1500),
      switched_answers: Boolean(metrics.switched_answers || false)
    });

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (newStreak > personalBest) {
        setIsNewRecord(true);
        setPersonalBest(newStreak);
        localStorage.setItem('34a_personal_max_streak', String(newStreak));
      }

      if (onRecordHistory) {
        onRecordHistory({
          typ: 'Lernen',
          anzahl: 1,
          richtig: 1,
          falsch: 0
        });
      }

      // Auto-advance nach 0.75s
      nextQuestionTimerRef.current = setTimeout(() => {
        advanceToNextQuestion();
      }, 750);

    } else {
      // FEHLER -> GAME OVER
      setFailedQuestion(currentQuestion);

      logExamSession({
        mode: 'streak',
        scoreAchieved: streak,
        scoreMax: Math.max(streak, 10),
        passed: streak >= 5
      });

      if (onRecordHistory) {
        onRecordHistory({
          typ: 'Lernen',
          anzahl: 1,
          richtig: 0,
          falsch: 1
        });
      }

      if (streak > personalBest) {
        handleSaveHighscore(streak);
      } else if (currentUser?.id && personalBest > 0) {
        supabase.from('students').update({ max_streak: personalBest }).eq('id', currentUser.id).then(() => loadLeaderboard());
      }

      setGameState('gameover');
    }
  };

  // Nächste Frage
  const advanceToNextQuestion = () => {
    stop();
    if (nextQuestionTimerRef.current) {
      clearTimeout(nextQuestionTimerRef.current);
      nextQuestionTimerRef.current = null;
    }

    trackerRef.current.reset();
    setSelectedOptionIndex(null);
    setGameState('playing');

    if (currentQuestionIndex + 1 < questionQueue.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Wenn alle 20 durchlaufen sind, Pool frisch neu mischen
      const freshPool = buildRandomizedStreakPool();
      setQuestionQueue(freshPool);
      setCurrentQuestionIndex(0);
    }
  };

  // Keyboard Shortcuts: Space/Enter für Restart; 1-4 / A-D für Optionen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (gameState === 'gameover') {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          initializeGame();
        }
      } else if (gameState === 'playing' && currentQuestion) {
        if (['1', 'Digit1', 'KeyA', 'a', 'A'].includes(e.code) || e.key === '1' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          handleOptionClick(0);
        } else if (['2', 'Digit2', 'KeyB', 'b', 'B'].includes(e.code) || e.key === '2' || e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          handleOptionClick(1);
        } else if (['3', 'Digit3', 'KeyC', 'c', 'C'].includes(e.code) || e.key === '3' || e.key === 'c' || e.key === 'C') {
          e.preventDefault();
          handleOptionClick(2);
        } else if (['4', 'Digit4', 'KeyD', 'd', 'D'].includes(e.code) || e.key === '4' || e.key === 'd' || e.key === 'D') {
          e.preventDefault();
          handleOptionClick(3);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, currentQuestion, streak, personalBest]);

  // Visuelle Dynamik
  const getStreakVisual = () => {
    if (streak >= 20) {
      return {
        badge: 'bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 animate-pulse',
        icon: <Crown className="w-5 h-5 text-slate-950 animate-bounce" />,
      };
    }
    if (streak >= 10) {
      return {
        badge: 'bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 shadow-md shadow-rose-500/25',
        icon: <Zap className="w-5 h-5 text-slate-950" />,
      };
    }
    if (streak >= 5) {
      return {
        badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
        icon: <Flame className="w-5 h-5 text-amber-400 animate-pulse" />,
      };
    }
    return {
      badge: 'bg-white/5 text-slate-200 border border-white/10',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
    };
  };

  const streakStyle = getStreakVisual();

  return (
    <div className="w-full max-w-7xl mx-auto select-none">
      {/* 2-COLUMN SPLIT SCREEN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* ============================================================ */}
        {/* LINKS (HAUPTBEREICH: ca. 65% / lg:col-span-8)               */}
        {/* ============================================================ */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Header Bar: "🔥 Streak: X" & "🏆 Persönlicher Rekord" */}
          <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1.5 rounded-xl flex items-center gap-2 font-mono font-black ${streakStyle.badge}`}>
                {streakStyle.icon}
                <span className="text-xs uppercase tracking-wider">Streak:</span>
                <span className="text-xl leading-none">{streak}</span>
              </div>
              <span className="text-xs text-slate-400 font-sans hidden sm:inline">
                1 Fehler = Game Over
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" /> Persönlicher Rekord:
              </span>
              <span className="text-base font-extrabold text-white bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/10">
                {personalBest}
              </span>
            </div>
          </div>

          {/* MAIN QUIZ CARD OR GAME OVER MODAL OVERLAY */}
          <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Active Question View */}
            {currentQuestion && (
              <div className="space-y-5">
                {/* Category Pill & Speech Button */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-amber-400" /> {currentQuestion.category}
                  </span>

                  <button
                    onClick={() => speak(currentQuestion.question)}
                    className={`p-2 rounded-lg transition-all cursor-pointer ${
                      isSpeaking 
                        ? 'bg-amber-500 text-slate-950 animate-pulse' 
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                    }`}
                    title="Frage vorlesen"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Question Text */}
                <div className="py-1">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white leading-snug tracking-tight">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Translation View */}
                {translationLang !== 'deaktiviert' && (
                  <div className="pt-2 border-t border-white/5">
                    <TranslationView 
                      text={currentQuestion.question} 
                      questionId={currentQuestion.id}
                      targetLanguage={translationLang} 
                      type="frage" 
                    />
                  </div>
                )}

                {/* 4 ANSWER BUTTONS */}
                <div className="space-y-2.5 pt-1">
                  {currentQuestion.options.map((option, idx) => {
                    const letter = String.fromCharCode(65 + idx); // A, B, C, D
                    const isSelected = selectedOptionIndex === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;

                    let buttonClasses = 'bg-[#0B0F17]/90 border-[#1E293B] hover:border-amber-500/60 hover:bg-[#151F33] text-slate-200';

                    if (gameState === 'answered') {
                      if (isSelected && isCorrect) {
                        buttonClasses = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-500/20 ring-1 ring-emerald-400';
                      } else if (isSelected && !isCorrect) {
                        buttonClasses = 'bg-rose-950/90 border-rose-500 text-rose-100 shadow-md shadow-rose-500/20 ring-1 ring-rose-400';
                      } else if (!isSelected && isCorrect) {
                        buttonClasses = 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200';
                      } else {
                        buttonClasses = 'bg-[#0B0F17]/40 border-transparent text-slate-500 opacity-40';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={gameState !== 'playing'}
                        className={`w-full p-3.5 rounded-xl border transition-all text-left flex items-center justify-between gap-3 group active:scale-[0.99] cursor-pointer ${buttonClasses}`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <span className={`w-7 h-7 rounded-lg font-bold font-mono text-xs flex items-center justify-center shrink-0 transition-colors ${
                            gameState === 'answered' && isSelected && isCorrect
                              ? 'bg-emerald-500 text-slate-950'
                              : gameState === 'answered' && isSelected && !isCorrect
                                ? 'bg-rose-500 text-white'
                                : 'bg-white/10 text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-950'
                          }`}>
                            {letter}
                          </span>

                          <div className="min-w-0 flex-1">
                            <span className="font-semibold text-xs sm:text-sm font-sans leading-snug block">
                              {option}
                            </span>
                            {translationLang !== 'deaktiviert' && (
                              <TranslationView
                                variant="compact"
                                text={option}
                                questionId={`${currentQuestion.id}-opt-${idx}`}
                                targetLanguage={translationLang}
                                type="antwort"
                              />
                            )}
                          </div>
                        </div>

                        {gameState === 'answered' && isSelected && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 animate-bounce" />
                        )}

                        {gameState === 'answered' && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Auto-advance status */}
                {gameState === 'answered' && selectedOptionIndex === currentQuestion.correctIndex && (
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-emerald-400 animate-pulse">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Richtig! Nächste Frage lädt...
                    </span>
                    <span className="text-[10px] text-slate-500">0.8s</span>
                  </div>
                )}
              </div>
            )}

            {/* GAME OVER MODAL OVERLAY */}
            {gameState === 'gameover' && (
              <div className="absolute inset-0 bg-[#0B0F17]/95 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center justify-center text-center z-20 animate-fade-in space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-slate-950 font-extrabold flex items-center justify-center shadow-lg shadow-rose-500/20">
                  <ShieldAlert className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                    Serie Gerissen
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                    Serie gerissen bei 🔥 {streak}
                  </h3>
                </div>

                {isNewRecord && (
                  <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-bold text-xs flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Neuer persönlicher Rekord! 🎉</span>
                  </div>
                )}

                {/* 1-Zeilen Richtige Lösung */}
                {failedQuestion && (
                  <div className="w-full max-w-lg p-3 rounded-xl bg-[#131B2A] border border-emerald-500/30 text-left text-xs space-y-1">
                    <span className="text-slate-400 block text-[10px] font-mono uppercase">
                      Richtige Lösung:
                    </span>
                    <p className="font-bold text-emerald-300 leading-snug">
                      ✓ {failedQuestion.correctAnswer}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
                  <button
                    onClick={initializeGame}
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-[#dfb871] to-amber-500 hover:opacity-95 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Neuer Versuch [Leertaste]</span>
                  </button>

                  {onNavigate && (
                    <button
                      onClick={() => onNavigate('dashboard')}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Übersicht</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* RECHTS (SIDEBAR: ca. 35% / lg:col-span-4) - ECHTE SUPABASE TOP 10 */}
        {/* ============================================================ */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-[#131B2A] border border-[#1E293B] rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
            
            {/* Header & Refresh */}
            <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold font-display text-white">
                  🏆 Top 10 Rangliste
                </h4>
              </div>

              <button
                onClick={loadLeaderboard}
                disabled={isLoadingLeaderboard}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Aktualisieren"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeaderboard ? 'animate-spin text-amber-400' : ''}`} />
              </button>
            </div>

            {/* Eigener Account hervorgehoben */}
            {currentUser && (
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-[10px] flex items-center justify-center shrink-0">
                    DU
                  </div>
                  <div className="min-w-0">
                    <span className="font-bold text-white truncate block">
                      {formatName(currentUser.vorname || currentUser.name, currentUser.nachname)}
                    </span>
                    <span className="text-[10px] text-amber-300/80 block">
                      Dein Bestwert
                    </span>
                  </div>
                </div>

                <div className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-black text-xs flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>{personalBest}</span>
                </div>
              </div>
            )}

            {/* Live Supabase Top 10 List */}
            <div className="space-y-1.5">
              {leaderboard.length > 0 ? (
                leaderboard.map((entry, idx) => {
                  const rank = idx + 1;
                  const isCurrent = currentUser?.id && String(entry.id) === String(currentUser.id);

                  let rankLabel: React.ReactNode = <span className="text-slate-400">#{rank}</span>;
                  if (rank === 1) rankLabel = <span className="text-amber-400 font-black">#1 🥇</span>;
                  if (rank === 2) rankLabel = <span className="text-slate-300 font-black">#2 🥈</span>;
                  if (rank === 3) rankLabel = <span className="text-amber-600 font-black">#3 🥉</span>;

                  const displayName = formatName(entry.vorname, entry.nachname);
                  const initials = (entry.vorname?.[0] || 'S') + (entry.nachname?.[0] || '');

                  return (
                    <div
                      key={entry.id || idx}
                      className={`px-3 py-2 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        isCurrent
                          ? 'bg-amber-500/10 border-amber-500/40 text-white'
                          : 'bg-[#0B0F17]/70 border-[#1E293B] hover:border-slate-700 text-slate-200'
                      }`}
                    >
                      {/* Left: Rank & User */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-9 font-mono font-bold text-xs shrink-0">
                          {rankLabel}
                        </span>

                        <div className="w-6 h-6 rounded-lg bg-white/10 text-slate-300 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 uppercase">
                          {initials}
                        </div>

                        <span className="font-semibold truncate max-w-[110px] sm:max-w-[130px]">
                          {displayName}
                        </span>
                      </div>

                      {/* Right: Max Streak */}
                      <div className="flex items-center gap-1 font-mono font-bold text-amber-400 shrink-0">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        <span>{entry.max_streak}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-4 rounded-xl bg-[#0B0F17]/50 border border-white/5 text-center text-xs text-slate-400">
                  <p>Noch keine Highscores vorhanden.</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Spiele jetzt und sichere dir Platz 1!</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
