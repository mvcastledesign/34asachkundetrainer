/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, 
  Award, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Play, 
  Pause, 
  HelpCircle, 
  Check, 
  Info,
  BookOpen,
  X,
  Bookmark,
  Flag,
  Filter,
  ShieldCheck,
  Scale,
  Users,
  HardHat,
  Cpu,
  Lock,
  Crosshair,
  Briefcase,
  BarChart3,
  CheckSquare,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { WrittenQuestion } from '../types.ts';
import { IHK_120_EXAM_QUESTIONS, IHK_CATEGORIES_CONFIG, IhkCategoryConfig } from '../data/ihk120ExamQuestions.ts';
import TranslationView from './TranslationView.tsx';
import CustomDropdown from './CustomDropdown.tsx';
import { logQuestionAttempt, logExamSession, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface SchriftlicherTestmodusProps {
  translationLang?: string;
  onRecordHistory?: (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => void;
}

/**
 * Neuer Bewertungsschlüssel (120-Punkte-System):
 * - 1-Punkt-Frage: 1 richtige Antwort (Einfachauswahl).
 *     1 richtig & 0 falsch = 1 Punkt.
 *     Sonst = 0 Punkte.
 * - 2-Punkte-Frage: 2 richtige Antworten (Mehrfachauswahl).
 *     Beide richtig & 0 falsch = 2 Punkte.
 *     1 richtig & 0 falsch = 1 Teilpunkt.
 *     Mindestens 1 falsche Antwort oder Übermarkierung = 0 Punkte.
 */
export function evaluateWrittenQuestion(q: WrittenQuestion, selection: number[] = []): {
  points: number;
  maxPoints: number;
  isOvermarked: boolean;
  statusText: string;
  isFullyCorrect: boolean;
  isPartial: boolean;
  correctSelected: number;
  wrongSelected: number;
} {
  const correctIndices = q.korrekteAntworten || [];
  const numCorrectNeeded = correctIndices.length; // 1 or 2
  const maxPoints = q.punkte || (numCorrectNeeded === 2 ? 2 : 1);
  const userCount = selection.length;

  let correctSelected = 0;
  let wrongSelected = 0;

  selection.forEach(index => {
    if (correctIndices.includes(index)) {
      correctSelected++;
    } else {
      wrongSelected++;
    }
  });

  // Übermarkiert (mehr Antworten gewählt als gefordert)
  if (userCount > numCorrectNeeded) {
    return {
      points: 0,
      maxPoints,
      isOvermarked: true,
      statusText: `0 / ${maxPoints} ${maxPoints === 1 ? 'Punkt' : 'Punkten'} (Übermarkiert)`,
      isFullyCorrect: false,
      isPartial: false,
      correctSelected,
      wrongSelected
    };
  }

  if (maxPoints === 2 || numCorrectNeeded === 2) {
    // 2-Punkte-Frage
    if (wrongSelected > 0) {
      // Falsche Antwort gewählt -> 0 Punkte
      return {
        points: 0,
        maxPoints: 2,
        isOvermarked: false,
        statusText: '0 / 2 Punkten (Falsche Antwort)',
        isFullyCorrect: false,
        isPartial: false,
        correctSelected,
        wrongSelected
      };
    }

    if (correctSelected === 2) {
      // Beide richtig & keine falsch -> 2 Punkte
      return {
        points: 2,
        maxPoints: 2,
        isOvermarked: false,
        statusText: '2 / 2 Punkten (Vollständig richtig)',
        isFullyCorrect: true,
        isPartial: false,
        correctSelected,
        wrongSelected
      };
    } else if (correctSelected === 1 && userCount === 1) {
      // Genau 1 richtige Antwort & keine falsche -> 1 Teilpunkt
      return {
        points: 1,
        maxPoints: 2,
        isOvermarked: false,
        statusText: '1 / 2 Punkten (Teilpunkt)',
        isFullyCorrect: false,
        isPartial: true,
        correctSelected,
        wrongSelected
      };
    } else {
      return {
        points: 0,
        maxPoints: 2,
        isOvermarked: false,
        statusText: '0 / 2 Punkten',
        isFullyCorrect: false,
        isPartial: false,
        correctSelected,
        wrongSelected
      };
    }
  } else {
    // 1-Punkt-Frage
    if (correctSelected === 1 && wrongSelected === 0 && userCount === 1) {
      return {
        points: 1,
        maxPoints: 1,
        isOvermarked: false,
        statusText: '1 / 1 Punkt (Richtig)',
        isFullyCorrect: true,
        isPartial: false,
        correctSelected,
        wrongSelected
      };
    } else {
      return {
        points: 0,
        maxPoints: 1,
        isOvermarked: false,
        statusText: '0 / 1 Punkt',
        isFullyCorrect: false,
        isPartial: false,
        correctSelected,
        wrongSelected
      };
    }
  }
}

type TestMode = 'config' | 'exam' | 'result';
type ConfigSubMode = 'ihk' | 'quick' | 'category';
type ReviewFilter = 'all' | 'errors' | 'partial' | 'perfect';

export default function SchriftlicherTestmodus({ 
  translationLang = 'deaktiviert',
  onRecordHistory 
}: SchriftlicherTestmodusProps) {
  // Test State
  const [stage, setStage] = useState<TestMode>('config');
  const [subMode, setSubMode] = useState<ConfigSubMode>('ihk');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [configError, setConfigError] = useState<string | null>(null);
  
  // Active exam questions and answers state
  const [questions, setQuestions] = useState<WrittenQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number[]>>({}); // questionId -> array of selected option indices
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({}); // questionId -> isFlagged
  
  // Timer State (120 Minutes for standard IHK Exam)
  const [timeLeft, setTimeLeft] = useState<number>(120 * 60);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);
  const [gridFilter, setGridFilter] = useState<'all' | 'unanswered' | 'flagged' | 'answered'>('all');

  // Review Stage State
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const [reviewCategoryFilter, setReviewCategoryFilter] = useState<string>('all');
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState<number>(0);

  // Diagnostic Tracking
  const sessionIdRef = useRef<string>(generateSessionId('written_exam'));
  const trackersRef = useRef<Map<string, InteractionTracker>>(new Map());
  const totalExamSecondsRef = useRef<number>(120 * 60);

  const getTrackerForQuestion = (qId: string) => {
    if (!trackersRef.current.has(qId)) {
      trackersRef.current.set(qId, new InteractionTracker());
    }
    return trackersRef.current.get(qId)!;
  };

  // Countdown timer effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTimerActive(false);
            clearInterval(interval);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // Categories list
  const categoryOptions = IHK_CATEGORIES_CONFIG.map(c => ({
    value: c.name,
    label: `${c.shortName} (${c.maxPoints} Pkt.)`
  }));

  // Start Exam
  const handleStartExam = () => {
    let examSet: WrittenQuestion[] = [];
    
    if (subMode === 'category' && !selectedCategory) {
      setConfigError('Bitte wählen Sie ein Sachgebiet aus.');
      return;
    }
    
    setConfigError(null);
    
    let modePrefix = 'written_exam_category';
    let durationSeconds = 120 * 60;
    if (subMode === 'ihk') {
      modePrefix = 'written_exam_82';
      // 82 Fragen nach 120-Punkte-Bewertungsschlüssel
      examSet = [...IHK_120_EXAM_QUESTIONS];
      durationSeconds = 120 * 60; // 120 Minuten
    } else if (subMode === 'quick') {
      modePrefix = 'written_exam_quick';
      // 20 Fragen Schnelldurchlauf
      const shuffled = [...IHK_120_EXAM_QUESTIONS].sort(() => Math.random() - 0.5);
      examSet = shuffled.slice(0, 20);
      durationSeconds = 30 * 60; // 30 Minuten
    } else {
      // Einzelnes Fachgebiet
      examSet = IHK_120_EXAM_QUESTIONS.filter(q => q.kategorie === selectedCategory);
      durationSeconds = Math.max(10, examSet.length * 1.5) * 60;
    }

    totalExamSecondsRef.current = durationSeconds;
    setTimeLeft(durationSeconds);

    sessionIdRef.current = generateSessionId(modePrefix);
    trackersRef.current.clear();

    setQuestions(examSet);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setStage('exam');
    setTimerActive(true);
    setShowConfirmSubmit(false);
    setGridFilter('all');

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Scroll to top when switching questions
  useEffect(() => {
    if (stage === 'exam') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIndex, stage]);

  // Option selection logic
  const handleSelectOption = (questionId: string, optionIndex: number, isSingleChoice: boolean) => {
    const tracker = getTrackerForQuestion(questionId);
    tracker.recordInteraction(optionIndex);

    setUserAnswers(prev => {
      const current = prev[questionId] || [];

      if (isSingleChoice) {
        // Radio Button Mode: Click selects only this one option
        return {
          ...prev,
          [questionId]: [optionIndex]
        };
      } else {
        // Checkbox Mode (2-Points Questions): Toggle option, max 2 selections allowed
        if (current.includes(optionIndex)) {
          return {
            ...prev,
            [questionId]: current.filter(idx => idx !== optionIndex)
          };
        } else {
          // If already 2 selected, replace the oldest or add if under 2
          if (current.length >= 2) {
            return {
              ...prev,
              [questionId]: [current[1], optionIndex].sort()
            };
          } else {
            return {
              ...prev,
              [questionId]: [...current, optionIndex].sort()
            };
          }
        }
      }
    });
  };

  // Toggle flag / bookmark on current question
  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Check if a question is answered
  const isQuestionAnswered = (questionId: string) => {
    const ans = userAnswers[questionId];
    return ans && ans.length > 0;
  };

  // Submit Exam
  const handleSubmitExam = () => {
    setTimerActive(false);
    setStage('result');
    setShowConfirmSubmit(false);
    setReviewQuestionIndex(0);
    setReviewFilter('all');
    setReviewCategoryFilter('all');

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

    // Calculate score details for history and trigger psychometric tracking
    const totalQuestions = questions.length;
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach((q, idx) => {
      const selection = userAnswers[q.id] || [];
      const evalRes = evaluateWrittenQuestion(q, selection);
      const tracker = getTrackerForQuestion(q.id);
      const metrics = tracker.getMetrics();

      if (evalRes.isFullyCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      // Fire telemetry attempt for every question in the exam
      logQuestionAttempt({
        session_id: sessionIdRef.current,
        mode: 'exam',
        question_id: q.id,
        topic: q.kategorie || 'Schriftliche Prüfung',
        selected_option_id: selection.length > 0 ? selection[0] : null,
        selected_option_ids: selection,
        correct_option_id: q.korrekteAntworten && q.korrekteAntworten.length > 0 ? q.korrekteAntworten[0] : null,
        correct_option_ids: q.korrekteAntworten || [],
        is_correct: evalRes.isFullyCorrect,
        time_spent_ms: metrics.time_spent_ms,
        time_to_first_click_ms: metrics.time_to_first_click_ms,
        switched_answers: metrics.switched_answers,
        decision_path: [
          `Frage ${idx + 1} (${q.kategorie})`,
          `SubMode: ${subMode}`,
          `Punkte: ${evalRes.points} / ${evalRes.maxPoints}`,
          `Status: ${evalRes.statusText}`,
          `Flagged: ${Boolean(flaggedQuestions[q.id])}`
        ],
        metadata: {
          exam_submode: subMode,
          points_earned: evalRes.points,
          max_points: evalRes.maxPoints,
          is_partial: evalRes.isPartial,
          is_overmarked: evalRes.isOvermarked,
          is_flagged: Boolean(flaggedQuestions[q.id])
        }
      });
    });

    if (onRecordHistory) {
      onRecordHistory({
        typ: 'Prüfung',
        anzahl: totalQuestions,
        richtig: correctCount,
        falsch: incorrectCount
      });
    }

    // Log complete session to Supabase exam_sessions table
    const resultStats = calculateResultStats();
    logExamSession({
      session_id: sessionIdRef.current,
      mode: 'exam',
      exam_type: subMode === 'ihk' ? 'IHK 120 Fragen (82 Pkt.)' : subMode === 'quick' ? 'Schnelltest (30 Fragen)' : `Kategorietest: ${selectedCategory || 'Thema'}`,
      total_questions: totalQuestions,
      correct_count: resultStats.fullyCorrectCount,
      incorrect_count: totalQuestions - resultStats.fullyCorrectCount,
      score_percent: Math.round(resultStats.percent),
      points_earned: resultStats.points,
      max_points: resultStats.maxPoints,
      passed: resultStats.isPassed,
      time_spent_seconds: Math.max(0, totalExamSecondsRef.current - timeLeft),
      category_breakdown: resultStats.categoryStats,
      metadata: {
        submode: subMode,
        partial_correct: resultStats.partialCorrectCount,
        zero_points: resultStats.zeroPointsCount
      }
    });
  };

  // Reset to config
  const handleRestart = () => {
    setStage('config');
    setQuestions([]);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setSelectedCategory('');
    setConfigError(null);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Calculate comprehensive statistics for the result screen
  const calculateResultStats = () => {
    let totalPointsAwarded = 0;
    let totalMaxPoints = 0;
    let fullyCorrectCount = 0;
    let partialCorrectCount = 0;
    let zeroPointsCount = 0;

    // Detailed stats per category
    const categoryStats: Record<string, { earned: number; max: number; count: number; correct: number }> = {};

    questions.forEach(q => {
      const selection = userAnswers[q.id] || [];
      const evalRes = evaluateWrittenQuestion(q, selection);

      if (!categoryStats[q.kategorie]) {
        categoryStats[q.kategorie] = { earned: 0, max: 0, count: 0, correct: 0 };
      }

      categoryStats[q.kategorie].max += evalRes.maxPoints;
      categoryStats[q.kategorie].count += 1;
      totalMaxPoints += evalRes.maxPoints;

      categoryStats[q.kategorie].earned += evalRes.points;
      totalPointsAwarded += evalRes.points;

      if (evalRes.isFullyCorrect) {
        fullyCorrectCount++;
        categoryStats[q.kategorie].correct += 1;
      } else if (evalRes.isPartial) {
        partialCorrectCount++;
      } else {
        zeroPointsCount++;
      }
    });

    const percent = totalMaxPoints > 0 ? (totalPointsAwarded / totalMaxPoints) * 100 : 0;
    const isPassed = totalPointsAwarded >= 60.0; // Exakt >= 60 Punkte für das Bestehen
    const pointsShort = Math.max(0, 60.0 - totalPointsAwarded);

    return {
      points: totalPointsAwarded,
      maxPoints: totalMaxPoints || 120,
      percent,
      isPassed,
      pointsShort,
      fullyCorrectCount,
      partialCorrectCount,
      zeroPointsCount,
      totalQuestions: questions.length,
      categoryStats
    };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const activeQuestion = questions[currentIndex];
  const isSingleChoice = activeQuestion ? (activeQuestion.korrekteAntworten?.length === 1 || activeQuestion.punkte === 1) : true;
  const currentSelection = activeQuestion ? (userAnswers[activeQuestion.id] || []) : [];
  const isCurrentFlagged = activeQuestion ? !!flaggedQuestions[activeQuestion.id] : false;

  // Answered count & unanswered count
  const answeredCount = questions.filter(q => isQuestionAnswered(q.id)).length;
  const unansweredCount = questions.length - answeredCount;
  const flaggedCount = questions.filter(q => flaggedQuestions[q.id]).length;

  return (
    <div className="space-y-6">
      
      {/* ========================================================================= */}
      {/* 1. CONFIGURATION STAGE                                                    */}
      {/* ========================================================================= */}
      {stage === 'config' && (
        <section className="bento-glass p-6 md:p-8 rounded-2xl relative overflow-visible bento-glow-gold">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dfb871]/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3.5 mb-6">
            <div className="p-3 bg-[#dfb871]/10 rounded-xl border border-[#dfb871]/20">
              <FileText className="w-6 h-6 text-[#dfb871]" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white tracking-tight">
                Sachkunde-Prüfungssimulation (§ 34a GewO)
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Neuer Bewertungsschlüssel (120-Punkte-System): 82 Fragen • 120 Punkte • 120 Minuten Zeit
              </p>
            </div>
          </div>

          {/* Key Facts Infobox */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Bestehensgrenze</div>
                <div className="text-base font-bold text-white font-display">Mind. 60 / 120 Pkt. (50%)</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Prüfungsdauer</div>
                <div className="text-base font-bold text-white font-display">120 Minuten (82 Fragen)</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Teilpunkte-Regel</div>
                <div className="text-base font-bold text-white font-display">1P (Radio) & 2P (Checkbox)</div>
              </div>
            </div>
          </div>

          {/* SubMode Selection */}
          <div className="space-y-4 mb-8">
            <label className="text-sm font-semibold text-slate-200 block font-display">
              Prüfungsmodus wählen:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Option 1: Full 82 Questions IHK Exam */}
              <button
                type="button"
                onClick={() => { setSubMode('ihk'); setConfigError(null); }}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  subMode === 'ihk'
                    ? 'bg-[#dfb871]/10 border-[#dfb871] shadow-[0_0_20px_rgba(223,184,113,0.15)]'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-display">Prüfungsnahe Gesamtsimulation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#dfb871]/20 text-[#dfb871] border border-[#dfb871]/30 font-mono">
                    Prüfungsstandard
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Originalgetreue Gesamtsimulation: 82 Fragen, 120 erreichbare Punkte, 120 Minuten Countdown.
                </p>
                <div className="text-[11px] text-[#dfb871] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 9 Sachgebiete voll gewichtet
                </div>
              </button>

              {/* Option 2: Quick Training (20 Questions) */}
              <button
                type="button"
                onClick={() => { setSubMode('quick'); setConfigError(null); }}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  subMode === 'quick'
                    ? 'bg-[#dfb871]/10 border-[#dfb871] shadow-[0_0_20px_rgba(223,184,113,0.15)]'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-display">Kompakt-Training</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono">
                    30 Min
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  20 repräsentative Zufallsfragen quer durch alle Fächer für schnelles Zwischentraining.
                </p>
                <div className="text-[11px] text-blue-400 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Schnelle Wissensüberprüfung
                </div>
              </button>

              {/* Option 3: Category Focus */}
              <button
                type="button"
                onClick={() => { setSubMode('category'); setConfigError(null); }}
                className={`text-left p-5 rounded-xl border transition-all duration-200 relative ${
                  subMode === 'category'
                    ? 'bg-[#dfb871]/10 border-[#dfb871] shadow-[0_0_20px_rgba(223,184,113,0.15)]'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-display">Sachgebiet-Fokus</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 font-mono">
                    Gezielt
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Konzentriere dich auf ein einzelnes Rechtsgebiet (z. B. BGB, StGB oder DGUV V23).
                </p>
                <div className="text-[11px] text-purple-400 font-mono flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Gezieltes Schwachstellen-Training
                </div>
              </button>
            </div>
          </div>

          {/* Category Dropdown if Category Mode is active */}
          {subMode === 'category' && (
            <div className="space-y-2 mb-8 animate-fadeIn">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-display">
                Sachgebiet auswählen:
              </label>
              <CustomDropdown
                options={[
                  { value: '', label: 'Bitte Sachgebiet auswählen...' },
                  ...categoryOptions
                ]}
                value={selectedCategory}
                onChange={setSelectedCategory}
                maxWidth="w-full"
              />
            </div>
          )}

          {configError && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {configError}
            </div>
          )}

          {/* 9 Subjects Breakdown Table (Summary) */}
          <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 mb-8">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2 font-display">
              <BarChart3 className="w-4 h-4 text-[#dfb871]" />
              Punkteverteilung der 9 Sachgebiete (120 Pkt.):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {IHK_CATEGORIES_CONFIG.map(cat => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium truncate pr-2">{cat.shortName}</span>
                  <span className="text-[#dfb871] font-mono font-bold shrink-0">{cat.maxPoints} Pkt.</span>
                </div>
              ))}
            </div>
          </div>

          {/* Start Action Button */}
          <button
            type="button"
            onClick={handleStartExam}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#cba358] text-slate-950 font-bold text-base font-display flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(223,184,113,0.3)] hover:brightness-110 active:scale-[0.99] transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            Prüfungssimulation jetzt starten
          </button>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. EXAM RUNTIME STAGE                                                     */}
      {/* ========================================================================= */}
      {stage === 'exam' && activeQuestion && (
        <div className="space-y-5">
          
          {/* Top Sticky HUD Bar */}
          <header className="bento-glass p-3.5 md:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 sticky top-4 z-30 shadow-2xl backdrop-blur-xl border border-white/10">
            {/* Left: Progress info */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#dfb871]/10 border border-[#dfb871]/20 text-[#dfb871]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium font-sans">
                  Frage <span className="text-white font-bold">{currentIndex + 1}</span> von <span className="text-white font-bold">{questions.length}</span>
                </div>
                <div className="text-[11px] text-[#dfb871] font-mono font-semibold">
                  Beantwortet: {answeredCount}/{questions.length} ({Math.round((answeredCount / questions.length) * 100)}%)
                </div>
              </div>
            </div>

            {/* Center: Live Countdown Timer */}
            <div className="flex items-center gap-2">
              <div className={`px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm flex items-center gap-2 ${
                timeLeft < 300 
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                  : timeLeft < 900 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-900/80 text-white border-white/10'
              }`}>
                <Clock className="w-4 h-4 text-[#dfb871]" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button
                type="button"
                onClick={() => setTimerActive(!timerActive)}
                title={timerActive ? 'Timer pausieren' : 'Timer fortsetzen'}
                className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {timerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
              </button>
            </div>

            {/* Right: Flag & Finish Action */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleToggleFlag(activeQuestion.id)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isCurrentFlagged
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-900/60 text-slate-400 border-white/10 hover:text-slate-200'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-current' : ''}`} />
                {isCurrentFlagged ? 'Markiert' : 'Vormerken'}
              </button>

              <button
                type="button"
                onClick={() => setShowConfirmSubmit(true)}
                className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs font-display flex items-center gap-1.5 shadow-lg shadow-emerald-900/30 active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                Abgeben
              </button>
            </div>
          </header>

          {/* Main Layout: Question Canvas + Question Navigation Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left/Center Canvas: Question & Choices (8 Columns) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bento-glass p-6 md:p-7 rounded-2xl border border-white/10 relative overflow-hidden">
                
                {/* Subject Badge & Question Type Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#dfb871]/15 text-[#dfb871] text-xs font-semibold border border-[#dfb871]/25 font-display flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5" />
                      {activeQuestion.kategorie}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSingleChoice ? (
                      <span className="px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-500/25 font-mono">
                        1 Punkt • 1 richtige Antwort (Einfachauswahl)
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-semibold border border-purple-500/25 font-mono">
                        2 Punkte • 2 richtige Antworten (Mehrfachauswahl)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-lg md:text-xl font-bold text-white font-display leading-relaxed mb-6">
                  {activeQuestion.frage}
                </h3>

                {/* Multilingual Translation helper if active */}
                {translationLang !== 'deaktiviert' && (
                  <div className="mb-6">
                    <TranslationView 
                      text={`${activeQuestion.frage}\n\n${activeQuestion.optionen.join('\n')}`} 
                      questionId={activeQuestion.id}
                      targetLanguage={translationLang}
                      type="frage"
                    />
                  </div>
                )}

                {/* Selection Instruction Banner */}
                <div className="mb-4 text-xs text-slate-400 font-sans flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#dfb871] shrink-0" />
                  {isSingleChoice ? (
                    <span>Wählen Sie <strong>genau eine</strong> Antwortmöglichkeit (Radio-Button).</span>
                  ) : (
                    <span>Wählen Sie <strong>genau zwei</strong> Antwortmöglichkeiten (Checkboxen).</span>
                  )}
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {activeQuestion.optionen.map((optText, optIdx) => {
                    const isSelected = currentSelection.includes(optIdx);

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelectOption(activeQuestion.id, optIdx, isSingleChoice)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group relative ${
                          isSelected
                            ? 'bg-[#dfb871]/15 border-[#dfb871] text-white shadow-[0_0_15px_rgba(223,184,113,0.15)]'
                            : 'bg-slate-900/50 border-white/5 text-slate-300 hover:border-white/20 hover:bg-slate-900/80 hover:text-white'
                        }`}
                      >
                        {/* Selector Indicator (Radio vs Checkbox style) */}
                        <div className="mt-0.5 shrink-0">
                          {isSingleChoice ? (
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected 
                                ? 'border-[#dfb871] bg-[#dfb871] text-slate-950' 
                                : 'border-white/20 bg-slate-950/60 group-hover:border-white/40'
                            }`}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                            </div>
                          ) : (
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected 
                                ? 'border-[#dfb871] bg-[#dfb871] text-slate-950' 
                                : 'border-white/20 bg-slate-950/60 group-hover:border-white/40'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          )}
                        </div>

                        {/* Option Label Text */}
                        <div className="text-sm md:text-base font-normal font-sans leading-snug">
                          {optText}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation Buttons within Question Card */}
                <div className="flex items-center justify-between gap-3 mt-8 pt-5 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold flex items-center gap-2 transition-all font-display"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Vorherige Frage
                  </button>

                  <div className="text-xs text-slate-400 font-mono">
                    {currentIndex + 1} / {questions.length}
                  </div>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#cba358] text-slate-950 font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all font-display"
                    >
                      Nächste Frage
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowConfirmSubmit(true)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all font-display shadow-lg shadow-emerald-900/30"
                    >
                      Prüfung beenden
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* Right Sidebar: 82-Question Grid & Legend (4 Columns) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bento-glass p-5 rounded-2xl border border-white/10 space-y-4 sticky top-24">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#dfb871]" />
                    Fragen-Übersicht ({questions.length})
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    {answeredCount} beantwortet
                  </span>
                </div>

                {/* Filter Tabs for Matrix */}
                <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-950/60 border border-white/5 text-[10px] font-mono">
                  <button
                    type="button"
                    onClick={() => setGridFilter('all')}
                    className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                      gridFilter === 'all' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Alle ({questions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setGridFilter('unanswered')}
                    className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                      gridFilter === 'unanswered' ? 'bg-white/10 text-slate-200 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Offen ({unansweredCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => setGridFilter('flagged')}
                    className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                      gridFilter === 'flagged' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-400 hover:text-amber-400'
                    }`}
                  >
                    Markiert ({flaggedCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => setGridFilter('answered')}
                    className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                      gridFilter === 'answered' ? 'bg-blue-500/20 text-blue-300 font-bold' : 'text-slate-400 hover:text-blue-400'
                    }`}
                  >
                    Erledigt ({answeredCount})
                  </button>
                </div>

                {/* Color Legend */}
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-blue-600 border border-blue-400" />
                    <span>Beantwortet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-amber-500 border border-amber-300" />
                    <span>Markiert</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-800 border border-white/10" />
                    <span>Offen</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded ring-2 ring-[#dfb871] bg-slate-900" />
                    <span>Aktiv</span>
                  </div>
                </div>

                {/* 82-Matrix Grid of Buttons */}
                <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-1.5 max-h-[380px] overflow-y-auto pr-1">
                  {questions.map((q, idx) => {
                    const answered = isQuestionAnswered(q.id);
                    const flagged = !!flaggedQuestions[q.id];
                    const isActive = idx === currentIndex;

                    // Check filter match
                    if (gridFilter === 'unanswered' && answered) return null;
                    if (gridFilter === 'flagged' && !flagged) return null;
                    if (gridFilter === 'answered' && !answered) return null;

                    let bgStyle = 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/30';
                    if (flagged) {
                      bgStyle = 'bg-amber-500/25 text-amber-300 border-amber-400/60 font-bold';
                    } else if (answered) {
                      bgStyle = 'bg-blue-600/30 text-blue-300 border-blue-500/60 font-semibold';
                    }

                    if (isActive) {
                      bgStyle += ' ring-2 ring-[#dfb871] ring-offset-2 ring-offset-slate-950 text-white font-bold shadow-[0_0_12px_rgba(223,184,113,0.4)]';
                    }

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-lg border text-xs font-mono flex items-center justify-center transition-all relative ${bgStyle}`}
                      >
                        {idx + 1}
                        {flagged && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 shadow-sm" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Fast Submit Button in Sidebar */}
                <button
                  type="button"
                  onClick={() => setShowConfirmSubmit(true)}
                  className="w-full py-3 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-bold text-xs font-display flex items-center justify-center gap-2 transition-all mt-4"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Prüfung jetzt auswerten ({answeredCount}/{questions.length})
                </button>
              </div>
            </div>

          </div>

          {/* Submission Confirmation Modal */}
          {showConfirmSubmit && (
            <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bento-glass max-w-md w-full p-6 rounded-2xl border border-white/15 shadow-2xl space-y-5 animate-scaleIn">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Prüfung wirklich abgeben?</h3>
                    <p className="text-xs text-slate-400">Deine Antworten werden unwiderruflich ausgewertet.</p>
                  </div>
                </div>

                <div className="bg-slate-950/60 rounded-xl p-4 border border-white/5 space-y-2 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gesamtzahl Fragen:</span>
                    <span className="text-white font-mono font-bold">{questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Beantwortete Fragen:</span>
                    <span className="text-emerald-400 font-mono font-bold">{answeredCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Unbeantwortete Fragen:</span>
                    <span className="text-rose-400 font-mono font-bold">{unansweredCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Markierte Fragen (Vormerkung):</span>
                    <span className="text-amber-400 font-mono font-bold">{flaggedCount}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/5">
                    <span className="text-slate-400">Verbleibende Prüfungszeit:</span>
                    <span className="text-[#dfb871] font-mono font-bold">{formatTime(timeLeft)}</span>
                  </div>
                </div>

                {unansweredCount > 0 && (
                  <p className="text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-lg leading-relaxed">
                    Achtung: Du hast noch <strong>{unansweredCount} offene Frage(n)</strong>. Unbeantwortete Fragen werden automatisch mit 0 Punkten gewertet!
                  </p>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowConfirmSubmit(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold font-display"
                  >
                    Zurück zur Prüfung
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitExam}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs font-display flex items-center gap-2 shadow-lg shadow-emerald-900/40 hover:brightness-110 active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Endgültig abgeben
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. RESULT & DETAILED REVIEW STAGE                                         */}
      {/* ========================================================================= */}
      {stage === 'result' && (() => {
        const stats = calculateResultStats();

        // Filter questions for review
        const filteredReviewQuestions = questions.filter((q, idx) => {
          const selection = userAnswers[q.id] || [];
          const evalRes = evaluateWrittenQuestion(q, selection);

          if (reviewCategoryFilter !== 'all' && q.kategorie !== reviewCategoryFilter) {
            return false;
          }

          if (reviewFilter === 'errors' && evalRes.points > 0) return false;
          if (reviewFilter === 'partial' && !evalRes.isPartial) return false;
          if (reviewFilter === 'perfect' && !evalRes.isFullyCorrect) return false;

          return true;
        });

        const activeReviewQ = questions[reviewQuestionIndex];
        const activeReviewSelection = activeReviewQ ? (userAnswers[activeReviewQ.id] || []) : [];
        const activeReviewEval = activeReviewQ ? evaluateWrittenQuestion(activeReviewQ, activeReviewSelection) : null;

        return (
          <div className="space-y-6">
            
            {/* Header Result Card with Status Glow */}
            <div className={`bento-glass p-6 md:p-8 rounded-3xl relative overflow-hidden border ${
              stats.isPassed 
                ? 'border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.15)] bg-gradient-to-b from-emerald-950/30 to-slate-950'
                : 'border-rose-500/40 shadow-[0_0_50px_rgba(244,63,94,0.15)] bg-gradient-to-b from-rose-950/30 to-slate-950'
            }`}>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                {/* Left: Status and message */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${
                      stats.isPassed 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {stats.isPassed ? <Award className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider font-mono px-2.5 py-0.5 rounded-full border ${
                        stats.isPassed 
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
                          : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                      }`}>
                        Prüfungsergebnis (120-Punkte-System)
                      </span>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mt-1">
                        {stats.isPassed ? 'HERZLICHEN GLÜCKWUNSCH: BESTANDEN!' : 'LEIDER NICHT BESTANDEN'}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 max-w-xl font-sans leading-relaxed">
                    {stats.isPassed ? (
                      <span>
                        Du hast die schriftliche Sachkundeprüfung nach § 34a GewO mit <strong>{stats.points.toFixed(1)} von {stats.maxPoints} Punkten ({stats.percent.toFixed(1)}%)</strong> erfolgreich absolviert. Die Mindestanforderung von 60 Punkten wurde erfüllt!
                      </span>
                    ) : (
                      <span>
                        Du hast <strong>{stats.points.toFixed(1)} von {stats.maxPoints} Punkten ({stats.percent.toFixed(1)}%)</strong> erreicht. Für das Bestehen der schriftlichen Sachkundeprüfung sind mindestens 60 Punkte (50 %) erforderlich. Es fehlen noch <strong>{stats.pointsShort.toFixed(1)} Punkte</strong>.
                      </span>
                    )}
                  </p>
                </div>

                {/* Right: Big Score Display */}
                <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-6 text-center shrink-0 min-w-[200px] shadow-xl">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider font-mono">
                    Gesamtergebnis
                  </div>
                  <div className={`text-4xl md:text-5xl font-black font-display tracking-tight my-1 ${
                    stats.isPassed ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {stats.points.toFixed(1)}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    von {stats.maxPoints} Punkten ({stats.percent.toFixed(1)}%)
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        stats.isPassed ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-rose-500 to-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, stats.percent)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons: Repeat or New Config */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#cba358] text-slate-950 font-bold text-xs font-display flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
                >
                  <RotateCcw className="w-4 h-4" />
                  Neue Prüfungssimulation starten
                </button>
              </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bento-glass p-4 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-medium mb-1">Volle Punktzahl</div>
                <div className="text-2xl font-bold text-emerald-400 font-display">{stats.fullyCorrectCount}</div>
                <div className="text-[10px] text-slate-500 font-mono">Fragen 100% richtig</div>
              </div>

              <div className="bento-glass p-4 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-medium mb-1">Teilpunkte erzielt</div>
                <div className="text-2xl font-bold text-purple-400 font-display">{stats.partialCorrectCount}</div>
                <div className="text-[10px] text-slate-500 font-mono">1 von 2 Punkten</div>
              </div>

              <div className="bento-glass p-4 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-medium mb-1">Falsche / 0 Punkte</div>
                <div className="text-2xl font-bold text-rose-400 font-display">{stats.zeroPointsCount}</div>
                <div className="text-[10px] text-slate-500 font-mono">0 Punkte erhalten</div>
              </div>

              <div className="bento-glass p-4 rounded-xl border border-white/5 text-center">
                <div className="text-xs text-slate-400 font-medium mb-1">Bestehensquote</div>
                <div className={`text-2xl font-bold font-display ${stats.isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stats.percent.toFixed(1)}%
                </div>
                <div className="text-[10px] text-slate-500 font-mono">Soll: mind. 50.0%</div>
              </div>
            </div>

            {/* Breakdown across all 9 Subject Categories */}
            <div className="bento-glass p-6 md:p-7 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#dfb871]" />
                    Detaillierte Auswertung nach allen 9 Sachgebieten
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Überblick deiner erreichten Punkte im Vergleich zu den maximalen Prüfungspunkten je Fach
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {IHK_CATEGORIES_CONFIG.map(cat => {
                  const catStat = stats.categoryStats[cat.name] || { earned: 0, max: cat.maxPoints, count: cat.questionCount, correct: 0 };
                  const maxP = catStat.max || cat.maxPoints;
                  const earnedP = catStat.earned;
                  const catPercent = maxP > 0 ? (earnedP / maxP) * 100 : 0;
                  const catPassed = catPercent >= 50.0;

                  return (
                    <div 
                      key={cat.id} 
                      className="bg-slate-900/60 border border-white/5 rounded-xl p-4 space-y-3 relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-white font-display leading-tight">{cat.shortName}</h4>
                          <span className="text-[10px] text-slate-400 font-mono block">
                            {catStat.count} Fragen
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                          catPercent >= 60 
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                            : catPercent >= 50
                            ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                        }`}>
                          {earnedP.toFixed(1)} / {maxP} Pkt.
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span>Quote:</span>
                          <span className="font-bold text-white">{catPercent.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              catPercent >= 60 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                                : catPercent >= 50 
                                ? 'bg-gradient-to-r from-amber-500 to-yellow-400' 
                                : 'bg-gradient-to-r from-rose-500 to-red-600'
                            }`}
                            style={{ width: `${Math.min(100, catPercent)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 4. DETAILED QUESTION CORRECTION & REVIEW                                 */}
            {/* ========================================================================= */}
            <div className="bento-glass p-6 md:p-7 rounded-2xl border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#dfb871]" />
                    Fragen-Korrektur & Paragraphen-Erklärung (Review)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Untersuche jede Frage im Detail: Deine Auswahl vs. Fachliche Musterlösung
                  </p>
                </div>

                {/* Filter buttons for Review */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setReviewFilter('all')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      reviewFilter === 'all' ? 'bg-[#dfb871] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Alle ({questions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('errors')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      reviewFilter === 'errors' ? 'bg-rose-500 text-white font-bold' : 'text-slate-400 hover:text-rose-300'
                    }`}
                  >
                    Falsche ({stats.zeroPointsCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('partial')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      reviewFilter === 'partial' ? 'bg-purple-500 text-white font-bold' : 'text-slate-400 hover:text-purple-300'
                    }`}
                  >
                    Teilpunkte ({stats.partialCorrectCount})
                  </button>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('perfect')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      reviewFilter === 'perfect' ? 'bg-emerald-500 text-white font-bold' : 'text-slate-400 hover:text-emerald-300'
                    }`}
                  >
                    Richtig ({stats.fullyCorrectCount})
                  </button>
                </div>
              </div>

              {/* Matrix of all review questions */}
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-sans">Frage zur Detailansicht auswählen:</div>
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-16 gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                  {questions.map((q, qIdx) => {
                    const selection = userAnswers[q.id] || [];
                    const evalRes = evaluateWrittenQuestion(q, selection);
                    const isSelected = qIdx === reviewQuestionIndex;

                    let colorClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
                    if (evalRes.isFullyCorrect) {
                      colorClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
                    } else if (evalRes.isPartial) {
                      colorClass = 'bg-purple-500/20 text-purple-300 border-purple-500/30';
                    }

                    if (isSelected) {
                      colorClass += ' ring-2 ring-[#dfb871] ring-offset-2 ring-offset-slate-950 font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setReviewQuestionIndex(qIdx)}
                        className={`h-8 rounded-lg border text-xs font-mono flex items-center justify-center transition-all ${colorClass}`}
                      >
                        {qIdx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Review Question Card */}
              {activeReviewQ && activeReviewEval && (
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 space-y-5 animate-fadeIn">
                  
                  {/* Question Header & Score Result */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Frage {reviewQuestionIndex + 1} von {questions.length}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#dfb871]/15 text-[#dfb871] text-xs font-semibold border border-[#dfb871]/25">
                        {activeReviewQ.kategorie}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border flex items-center gap-1.5 ${
                        activeReviewEval.isFullyCorrect
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : activeReviewEval.isPartial
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      }`}>
                        {activeReviewEval.isFullyCorrect && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {activeReviewEval.isPartial && <Info className="w-3.5 h-3.5" />}
                        {!activeReviewEval.isFullyCorrect && !activeReviewEval.isPartial && <XCircle className="w-3.5 h-3.5" />}
                        Ergebnis: {activeReviewEval.statusText}
                      </span>
                    </div>
                  </div>

                  {/* Question Text */}
                  <h4 className="text-lg font-bold text-white font-display leading-snug">
                    {activeReviewQ.frage}
                  </h4>

                  {/* Options with Visual Correctness Coding */}
                  <div className="space-y-2.5">
                    {activeReviewQ.optionen.map((optText, optIdx) => {
                      const isCorrectOption = (activeReviewQ.korrekteAntworten || []).includes(optIdx);
                      const isUserSelected = activeReviewSelection.includes(optIdx);

                      let optionCardStyle = 'bg-slate-950/60 border-white/5 text-slate-400';
                      let badge = null;

                      if (isCorrectOption && isUserSelected) {
                        // Correct option that user selected -> Green
                        optionCardStyle = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
                        badge = (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-bold shrink-0 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Deine richtige Wahl
                          </span>
                        );
                      } else if (isCorrectOption && !isUserSelected) {
                        // Correct option that user missed -> Emerald Outline / Solution
                        optionCardStyle = 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200 border-dashed';
                        badge = (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold shrink-0 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Fachliche Musterlösung
                          </span>
                        );
                      } else if (!isCorrectOption && isUserSelected) {
                        // Wrong option that user selected -> Red
                        optionCardStyle = 'bg-rose-950/40 border-rose-500/60 text-rose-100 shadow-[0_0_15px_rgba(244,63,94,0.15)]';
                        badge = (
                          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-mono font-bold shrink-0 flex items-center gap-1">
                            <X className="w-3 h-3" /> Deine falsche Wahl
                          </span>
                        );
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3.5 rounded-xl border text-sm flex items-start justify-between gap-3 ${optionCardStyle}`}
                        >
                          <div className="font-sans leading-relaxed">{optText}</div>
                          {badge}
                        </div>
                      );
                    })}
                  </div>

                  {/* Paragraph and Legal Explanation Box */}
                  {activeReviewQ.erklaerung && (
                    <div className="bg-[#dfb871]/10 border border-[#dfb871]/25 rounded-xl p-4 space-y-2">
                      <div className="text-xs font-bold text-[#dfb871] uppercase tracking-wider font-display flex items-center gap-2">
                        <Scale className="w-4 h-4" />
                        Fachliche Begründung & Paragraphen-Erklärung:
                      </div>
                      <p className="text-xs text-slate-200 font-sans leading-relaxed">
                        {activeReviewQ.erklaerung}
                      </p>
                    </div>
                  )}

                  {/* Review Navigation Prev / Next */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setReviewQuestionIndex(prev => Math.max(0, prev - 1))}
                      disabled={reviewQuestionIndex === 0}
                      className="px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white disabled:opacity-30 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Vorherige
                    </button>

                    <span className="text-xs font-mono text-slate-400">
                      {reviewQuestionIndex + 1} / {questions.length}
                    </span>

                    <button
                      type="button"
                      onClick={() => setReviewQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                      disabled={reviewQuestionIndex === questions.length - 1}
                      className="px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white disabled:opacity-30 text-xs font-semibold flex items-center gap-1.5"
                    >
                      Nächste
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        );
      })()}

    </div>
  );
}
