/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building, 
  BookOpen, 
  Layers, 
  Award, 
  Clock, 
  Menu, 
  X, 
  Search, 
  PlusCircle, 
  TrendingUp, 
  Sparkles,
  RefreshCw,
  LayoutDashboard,
  LogOut,
  Globe,
  FileText,
  UserCheck,
  ShieldCheck,
  User,
  Building2,
  Scale,
  Video,
  HelpCircle,
  Flame
} from 'lucide-react';

import { Question, UserProgressMap, LernhistorieItem, KATEGORIEN } from './types.ts';
import { UserProfile } from './types/auth.ts';
import { INITIAL_QUESTIONS } from './initialQuestions.ts';
import { updateStudentProgressInSupabase, fetchStudentsFromSupabase, cleanupLocalStudentData } from './lib/supabase.ts';
import { logExamSession } from './lib/analytics.ts';

// Feature components
import Dashboard from './components/Dashboard.tsx';
import Lernmodus from './components/Lernmodus.tsx';
import Karteikartenmodus from './components/Karteikartenmodus.tsx';
import Pruefungsmodus from './components/Pruefungsmodus.tsx';
import Wiederholungsmodus from './components/Wiederholungsmodus.tsx';
import QuestionSearch from './components/QuestionSearch.tsx';
import DataManagement from './components/DataManagement.tsx';
import StatsView from './components/StatsView.tsx';
import Login from './components/Login.tsx';
import DozentenDashboard from './components/DozentenDashboard.tsx';
import SchriftlicherTestmodus from './components/SchriftlicherTestmodus.tsx';
import FallbeispieleModus from './components/FallbeispieleModus.tsx';
import InteractiveVideoTrainer from './components/InteractiveVideoTrainer.tsx';
import LegalConceptGuesser from './components/LegalConceptGuesser.tsx';
import StreakChallengeMode from './components/StreakChallengeMode.tsx';
import FachbegriffeTrainer from './components/FachbegriffeTrainer.tsx';
import CustomDropdown from './components/CustomDropdown.tsx';
import { safeStorage } from './utils/safeStorage.ts';

const languageOptions = [
  { value: 'deaktiviert', label: 'Deaktiviert (Nur Deutsch)' },
  { value: 'farsi', label: 'Farsi (فارسی)' },
  { value: 'arabisch', label: 'Arabisch (العربية)' },
  { value: 'russisch', label: 'Russisch (Русский)' },
  { value: 'englisch', label: 'Englisch (English)' }
];

export default function App() {
  // Current user authentication state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const savedLocal = localStorage.getItem('sachkunde_34a_current_user');
    if (savedLocal) {
      try {
        return JSON.parse(savedLocal);
      } catch (err) {
        localStorage.removeItem('sachkunde_34a_current_user');
      }
    }
    const savedSession = sessionStorage.getItem('sachkunde_34a_current_user');
    if (savedSession) {
      try {
        return JSON.parse(savedSession);
      } catch (err) {
        sessionStorage.removeItem('sachkunde_34a_current_user');
      }
    }
    // Always default to null so login form is shown when logged out
    return null;
  });

  const [activeTab, setActiveTab] = useState<string>(() => {
    return safeStorage.getItem('sachkunde_34a_active_tab') || 'dashboard';
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    safeStorage.setItem('sachkunde_34a_active_tab', tab);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Persistence States
  const [questions, setQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState<UserProgressMap>({});
  const [history, setHistory] = useState<LernhistorieItem[]>([]);
  const [dailyGoal, setDailyGoal] = useState<number>(10);
  const [studyDuration, setStudyDuration] = useState<number>(0);
  const [translationLang, setTranslationLang] = useState<string>(() => {
    return localStorage.getItem('sachkunde_34a_translation_lang') || 'deaktiviert';
  });

  const handleSetTranslationLang = (lang: string) => {
    setTranslationLang(lang);
    localStorage.setItem('sachkunde_34a_translation_lang', lang);
  };

  // 1. Load data from LocalStorage
  useEffect(() => {
    // Questions catalog
    const localQuestions = localStorage.getItem('sachkunde_34a_questions');
    let loadedQuestions: Question[] = [];
    let needsReset = false;
    if (localQuestions) {
      try {
        loadedQuestions = JSON.parse(localQuestions);
        if (!Array.isArray(loadedQuestions) || loadedQuestions.length !== INITIAL_QUESTIONS.length || loadedQuestions.some(q => q.kategorie === 'Sonstige Prüfungsfragen' || q.kategorie === 'Umgang mit Verteidigungswaffen')) {
          needsReset = true;
        }
      } catch (err) {
        needsReset = true;
      }
    } else {
      needsReset = true;
    }

    if (needsReset) {
      setQuestions(INITIAL_QUESTIONS);
      localStorage.setItem('sachkunde_34a_questions', JSON.stringify(INITIAL_QUESTIONS));
      setProgress({});
      localStorage.removeItem('sachkunde_34a_progress');
    } else {
      setQuestions(loadedQuestions);
    }

    // Progress
    if (currentUser) {
      const userProgressKey = `sachkunde_34a_progress_${currentUser.id}`;
      const localUserProgress = localStorage.getItem(userProgressKey) || localStorage.getItem('sachkunde_34a_progress');
      if (localUserProgress && !needsReset) {
        try {
          setProgress(JSON.parse(localUserProgress));
        } catch (err) {
          setProgress({});
        }
      } else {
        setProgress({});
      }

      // Historial logs
      const userHistoryKey = `sachkunde_34a_history_${currentUser.id}`;
      const localUserHistory = localStorage.getItem(userHistoryKey) || localStorage.getItem('sachkunde_34a_history');
      if (localUserHistory) {
        try {
          setHistory(JSON.parse(localUserHistory));
        } catch (err) {
          setHistory([]);
        }
      } else {
        setHistory([]);
      }
    } else {
      // Clear progress and history if not logged in
      setProgress({});
      setHistory([]);
      localStorage.removeItem('sachkunde_34a_progress');
      localStorage.removeItem('sachkunde_34a_history');
    }

    // Daily Goals
    const localGoal = localStorage.getItem('sachkunde_34a_daily_goal');
    if (localGoal) {
      setDailyGoal(parseInt(localGoal, 10) || 10);
    }
  }, []);

  // Load user-bound study duration whenever active user changes
  useEffect(() => {
    if (currentUser?.id && currentUser.role === 'schueler') {
      const userDurationKey = `sachkunde_34a_study_duration_${currentUser.id}`;
      const savedDuration = localStorage.getItem(userDurationKey);
      setStudyDuration(savedDuration ? parseInt(savedDuration, 10) || 0 : 0);
    } else {
      setStudyDuration(0);
    }
  }, [currentUser?.id, currentUser?.role]);

  // 2. Active stopwatch loop to increment study hours (ONLY for active students)
  useEffect(() => {
    if (!currentUser || currentUser.role !== 'schueler') return;

    const timer = setInterval(() => {
      setStudyDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentUser?.id, currentUser?.role]);

  // Persist study duration every 5 seconds user-specifically
  useEffect(() => {
    if (currentUser?.id && currentUser.role === 'schueler' && studyDuration > 0 && studyDuration % 5 === 0) {
      localStorage.setItem(`sachkunde_34a_study_duration_${currentUser.id}`, studyDuration.toString());
    }
  }, [studyDuration, currentUser?.id, currentUser?.role]);

  // Sync state mutation actions with local storage
  const saveQuestionsToLocal = (newQuestions: Question[]) => {
    setQuestions(newQuestions);
    localStorage.setItem('sachkunde_34a_questions', JSON.stringify(newQuestions));
  };

  const syncProgressToSupabase = (
    updatedProgress: UserProgressMap,
    overrideStudentId?: string,
    overrideExamHistory?: any[]
  ) => {
    const studentId = overrideStudentId || currentUser?.id;
    if (!studentId || (currentUser && currentUser.role !== 'schueler' && !overrideStudentId)) return;

    // Save progress to user-bound storage and active session storage
    localStorage.setItem(`sachkunde_34a_progress_${studentId}`, JSON.stringify(updatedProgress));
    localStorage.setItem('sachkunde_34a_progress', JSON.stringify(updatedProgress));

    const totalQuestions = questions.length || INITIAL_QUESTIONS.length || 100;
    const progressEntries = Object.values(updatedProgress);
    const answeredCount = progressEntries.filter(p => p.status !== 'neu').length;
    
    let totalCorrect = 0;
    let totalTested = 0;
    progressEntries.forEach(p => {
      totalCorrect += p.correctCount || 0;
      totalTested += (p.correctCount || 0) + (p.incorrectCount || 0);
    });

    const progressPercent = Math.min(100, Math.round((answeredCount / totalQuestions) * 100));
    const successRatePercent = totalTested > 0 ? Math.min(100, Math.round((totalCorrect / totalTested) * 100)) : 0;

    let status: 'pruefungssicher' | 'im_zeitplan' | 'kritisch' = 'im_zeitplan';
    if (progressPercent >= 80 && successRatePercent >= 75) {
      status = 'pruefungssicher';
    } else if (totalTested > 10 && successRatePercent < 50) {
      status = 'kritisch';
    }

    // Category performance breakdown calculation across all 8 official §34a categories
    const categoryStatsMap: Record<string, { answered: number; correct: number }> = {};
    KATEGORIEN.forEach(cat => {
      categoryStatsMap[cat] = { answered: 0, correct: 0 };
    });

    questions.forEach(q => {
      const p = updatedProgress[q.id];
      if (p && p.status !== 'neu') {
        const correct = p.correctCount || 0;
        const incorrect = p.incorrectCount || 0;
        const total = correct + incorrect;
        if (!categoryStatsMap[q.kategorie]) {
          categoryStatsMap[q.kategorie] = { answered: 0, correct: 0 };
        }
        categoryStatsMap[q.kategorie].answered += total;
        categoryStatsMap[q.kategorie].correct += correct;
      }
    });

    const categoryPerformance = Object.entries(categoryStatsMap).map(([category, stats]) => ({
      category,
      percentage: stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0,
      questionsAnswered: stats.answered
    }));

    const formattedTime = new Date().toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const examHistory = overrideExamHistory || (currentUser as any)?.examHistory;

    // React state immediate local update
    if (currentUser && currentUser.role === 'schueler' && currentUser.id === studentId) {
      setCurrentUser(prev => prev ? {
        ...prev,
        progressPercent,
        successRatePercent,
        status,
        lastActive: 'Gerade eben',
        categoryPerformance,
        ...(examHistory ? { examHistory } : {})
      } : null);
    }

    // Direct Supabase update
    updateStudentProgressInSupabase(studentId, {
      progressPercent,
      successRatePercent,
      status,
      lastActive: formattedTime,
      categoryPerformance,
      ...(examHistory ? { examHistory } : {}),
      questionProgress: updatedProgress
    });
  };

  // Load & restore student metrics directly from Supabase upon login or app mount
  useEffect(() => {
    if (!currentUser || currentUser.role !== 'schueler') return;

    let isMounted = true;
    const syncStudentFromSupabase = async () => {
      const students = await fetchStudentsFromSupabase();
      if (!isMounted) return;

      const found = students.find(s => 
        s.id === currentUser.id ||
        (s.vorname && s.nachname && `${s.vorname} ${s.nachname}`.toLowerCase() === currentUser.name.toLowerCase()) ||
        s.name.toLowerCase() === currentUser.name.toLowerCase()
      );

      if (found) {
        // Restore progressPercent, successRatePercent, etc. directly from Supabase
        setCurrentUser(prev => prev ? {
          ...prev,
          id: found.id,
          progressPercent: found.progressPercent,
          successRatePercent: found.successRatePercent,
          status: found.status,
          lastActive: found.lastActive,
          categoryPerformance: found.categoryPerformance,
          examHistory: found.examHistory
        } : null);

        // If Supabase has saved questionProgress, sync to local state & user-bound storage
        if ((found as any).questionProgress && Object.keys((found as any).questionProgress).length > 0) {
          const qProg = (found as any).questionProgress;
          setProgress(qProg);
          localStorage.setItem(`sachkunde_34a_progress_${found.id}`, JSON.stringify(qProg));
          localStorage.setItem('sachkunde_34a_progress', JSON.stringify(qProg));
        }
      } else {
        // Student record was removed or does not exist in Supabase
        if (currentUser.id) {
          cleanupLocalStudentData(currentUser.id);
        }
        handleLogout();
      }
    };

    syncStudentFromSupabase();

    return () => {
      isMounted = false;
    };
  }, [currentUser?.id, currentUser?.role]);

  const handleUpdateProgress = (questionId: string, status: 'gewusst' | 'nicht_gewusst') => {
    setProgress(prev => {
      const existing = prev[questionId] || {
        status: 'neu',
        correctCount: 0,
        incorrectCount: 0,
        lastTested: 0,
        leitnerBox: 1
      };

      const correctIncr = status === 'gewusst' ? 1 : 0;
      const incorrectIncr = status === 'nicht_gewusst' ? 1 : 0;
      
      let nextLeitner = existing.leitnerBox;
      if (status === 'gewusst') {
        nextLeitner = Math.min(5, existing.leitnerBox + 1);
      } else {
        nextLeitner = 1;
      }

      const updated = {
        ...prev,
        [questionId]: {
          status,
          correctCount: existing.correctCount + correctIncr,
          incorrectCount: existing.incorrectCount + incorrectIncr,
          lastTested: Date.now(),
          leitnerBox: nextLeitner
        }
      };

      if (currentUser?.id) {
        localStorage.setItem(`sachkunde_34a_progress_${currentUser.id}`, JSON.stringify(updated));
      }
      localStorage.setItem('sachkunde_34a_progress', JSON.stringify(updated));
      syncProgressToSupabase(updated);
      return updated;
    });

    handleRecordHistoryItem({
      typ: 'Lernen',
      anzahl: 1,
      richtig: status === 'gewusst' ? 1 : 0,
      falsch: status === 'nicht_gewusst' ? 1 : 0
    });
  };

  const handleBulkAnswerSubmit = (results: { id: string; status: 'gewusst' | 'nicht_gewusst' }[]) => {
    setProgress(prev => {
      const updated = { ...prev };
      results.forEach(res => {
        const existing = updated[res.id] || {
          status: 'neu',
          correctCount: 0,
          incorrectCount: 0,
          lastTested: 0,
          leitnerBox: 1
        };

        const isCorr = res.status === 'gewusst';
        updated[res.id] = {
          status: res.status,
          correctCount: existing.correctCount + (isCorr ? 1 : 0),
          incorrectCount: existing.incorrectCount + (isCorr ? 0 : 1),
          lastTested: Date.now(),
          leitnerBox: isCorr ? Math.min(5, existing.leitnerBox + 1) : 1
        };
      });

      if (currentUser?.id) {
        localStorage.setItem(`sachkunde_34a_progress_${currentUser.id}`, JSON.stringify(updated));
      }
      localStorage.setItem('sachkunde_34a_progress', JSON.stringify(updated));
      syncProgressToSupabase(updated);
      return updated;
    });
  };


  const handleRecordHistoryItem = (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => {
    const freshLog: LernhistorieItem = {
      id: `hist-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: new Date().toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      typ: item.typ,
      anzahl: item.anzahl,
      richtig: item.richtig,
      falsch: item.falsch
    };

    setHistory(prev => {
      const updated = [...prev, freshLog];
      if (currentUser?.id) {
        localStorage.setItem(`sachkunde_34a_history_${currentUser.id}`, JSON.stringify(updated));
      }
      localStorage.setItem('sachkunde_34a_history', JSON.stringify(updated));
      
      if (currentUser && currentUser.role === 'schueler' && item.anzahl > 0) {
        // Build updated exam history records for Supabase
        const newExamItem = {
          id: `ex-${Date.now()}`,
          date: new Date().toLocaleDateString('de-DE'),
          examType: item.typ === 'Prüfung' ? 'Schriftlicher Test (34a)' : (item.typ === 'Karteikarte' ? 'Karteikarten' : 'Lernmodus'),
          scorePercent: Math.round((item.richtig / item.anzahl) * 100),
          pointsObtained: item.richtig,
          totalPoints: item.anzahl,
          passed: (item.richtig / item.anzahl) >= 0.5
        };

        const existingExamHistory = (currentUser as any).examHistory || [];
        const updatedExamHistory = [newExamItem, ...existingExamHistory].slice(0, 20);

        syncProgressToSupabase(progress, currentUser.id, updatedExamHistory);
      }

      return updated;
    });
  };

  const handleAddQuestion = (q: Question) => {
    const updated = [q, ...questions];
    saveQuestionsToLocal(updated);
  };

  const handleDeleteQuestion = (id: string) => {
    const updated = questions.filter(q => q.id !== id);
    saveQuestionsToLocal(updated);
  };

  const handleImportQuestions = (imported: Question[], option: 'merge' | 'replace') => {
    let final: Question[];
    if (option === 'replace') {
      final = imported;
    } else {
      const existingFragenTexts = new Set(questions.map(q => q.frage.trim().toLowerCase()));
      const filteredImported = imported.filter(q => !existingFragenTexts.has(q.frage.trim().toLowerCase()));
      final = [...questions, ...filteredImported];
    }
    saveQuestionsToLocal(final);
  };

  const handleResetToDefaults = () => {
    saveQuestionsToLocal(INITIAL_QUESTIONS);
    setProgress({});
    setHistory([]);
    setStudyDuration(0);
    if (currentUser?.id) {
      localStorage.removeItem(`sachkunde_34a_progress_${currentUser.id}`);
      localStorage.removeItem(`sachkunde_34a_history_${currentUser.id}`);
      localStorage.removeItem(`sachkunde_34a_study_duration_${currentUser.id}`);
    }
    localStorage.removeItem('sachkunde_34a_progress');
    localStorage.removeItem('sachkunde_34a_history');
    localStorage.removeItem('sachkunde_34a_study_duration');
  };

  const handleSetDailyGoal = (goal: number) => {
    setDailyGoal(goal);
    localStorage.setItem('sachkunde_34a_daily_goal', goal.toString());
  };

  // Auth Handlers
  const handleLoginSuccess = (user: UserProfile, rememberMe: boolean = true) => {
    // Completely reset previous local progress and history state
    setProgress({});
    setHistory([]);
    localStorage.removeItem('sachkunde_34a_progress');
    localStorage.removeItem('sachkunde_34a_history');

    setCurrentUser(user);

    if (user.role === 'schueler') {
      const userProgressKey = `sachkunde_34a_progress_${user.id}`;
      const userHistoryKey = `sachkunde_34a_history_${user.id}`;

      // Progress setup
      if (user.questionProgress && Object.keys(user.questionProgress).length > 0) {
        setProgress(user.questionProgress);
        localStorage.setItem(userProgressKey, JSON.stringify(user.questionProgress));
        localStorage.setItem('sachkunde_34a_progress', JSON.stringify(user.questionProgress));
      } else {
        const cachedUserProgress = localStorage.getItem(userProgressKey);
        if (cachedUserProgress) {
          try {
            const parsed = JSON.parse(cachedUserProgress);
            setProgress(parsed);
            localStorage.setItem('sachkunde_34a_progress', JSON.stringify(parsed));
          } catch (e) {
            setProgress({});
          }
        } else {
          setProgress({});
        }
      }

      // History setup
      const cachedUserHistory = localStorage.getItem(userHistoryKey);
      if (cachedUserHistory) {
        try {
          setHistory(JSON.parse(cachedUserHistory));
        } catch (e) {
          setHistory([]);
        }
      } else if (user.examHistory && user.examHistory.length > 0) {
        setHistory(user.examHistory as any);
      }
    }

    if (rememberMe) {
      localStorage.setItem('sachkunde_34a_current_user', JSON.stringify(user));
      sessionStorage.removeItem('sachkunde_34a_current_user');
    } else {
      sessionStorage.setItem('sachkunde_34a_current_user', JSON.stringify(user));
      localStorage.removeItem('sachkunde_34a_current_user');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setProgress({});
    setHistory([]);
    setStudyDuration(0);
    localStorage.removeItem('sachkunde_34a_current_user');
    sessionStorage.removeItem('sachkunde_34a_current_user');
    localStorage.removeItem('sachkunde_34a_progress');
    localStorage.removeItem('sachkunde_34a_history');
    handleTabChange('dashboard');
  };

  const handleLoginAsStudent = () => {
    const studentUser: UserProfile = {
      id: 'usr-schueler-demo',
      name: 'Maximilian Schulze',
      vorname: 'Maximilian',
      nachname: 'Schulze',
      role: 'schueler',
      courseId: 'KURS-34a-2026',
      courseName: 'Sachkunde § 34a (Lehrgang 2026)',
      registeredAt: '10.05.2026',
      invitationCode: 'KURS-34a-2026'
    };
    handleLoginSuccess(studentUser);
  };

  const handleLoginAsDozent = () => {
    const dozentUser: UserProfile = {
      id: 'usr-dozent-demo',
      name: 'Dr. Alexander Weber',
      vorname: 'Alexander',
      nachname: 'Weber',
      role: 'dozent',
      companyName: 'Fachakademie für Sicherheitsausbildung',
      registeredAt: '01.01.2026'
    };
    handleLoginSuccess(dozentUser);
  };

  // Sidebar navigation options for student portal
  const sidebarTabs = [
    { id: 'dashboard', label: 'Übersicht Dashboard', icon: LayoutDashboard },
    { id: 'schriftlich', label: 'Schriftlicher Test (§34a)', icon: FileText },
    { id: 'video-trainer', label: 'Video-Szenario-Trainer', icon: Video },
    { id: 'pruefung', label: 'Prüfungs-Simulation', icon: Award },
    { id: 'fallbeispiele', label: 'Fallbeispiele', icon: Scale },
    { id: 'karteikarten', label: 'Karteikarten (3D Flip)', icon: Layers },
    { id: 'glossar', label: 'Fachbegriffe & Prüfungsdeutsch', icon: BookOpen },
    { id: 'lernen', label: 'Lernmodus (Antwortvergleich)', icon: Layers },
    { id: 'wiederholung', label: 'Fehler-Wiederholung', icon: RefreshCw },
    { id: 'streak-challenge', label: 'Endlos-Streak-Challenge', icon: Flame },
    { id: 'was-bin-ich', label: '„Was bin ich?“ Rätsel', icon: HelpCircle },
    { id: 'analyse', label: 'Fortschritt & Statistiken', icon: TrendingUp },
    { id: 'suche', label: 'Inhalten Suchen & Filtern', icon: Search },
    { id: 'daten', label: 'Fragen-Editor (Schriftlich)', icon: PlusCircle }
  ];

  return (
    <div className="min-h-screen bg-[#05060b] text-slate-100 flex flex-col font-sans transition-all selection:bg-[#dfb871] selection:text-slate-950 relative overflow-hidden">
      {/* Luxurious background noise & spot radiance overlay */}
      <div className="obsidian-overlay" />

      {/* RENDER LOGIN IF NOT LOGGED IN */}
      {!currentUser ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : currentUser.role === 'dozent' ? (
        /* DOZENTEN & GESCHÄFTSFÜHRER B2B DASHBOARD */
        <div className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full relative z-10 space-y-4 print:p-0 print:m-0 print:max-w-none print:space-y-0">
          {/* Dozent Top Navigation Bar */}
          <div className="flex items-center justify-between p-4 bento-glass rounded-2xl border border-white/10 print:hidden">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-gradient-to-br from-[#dfb871] to-[#9a7836] rounded-xl text-slate-950 font-bold shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-white tracking-tight block">
                  § 34a Dozenten & Management Portal
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Angemeldet als: <strong className="text-[#dfb871]">{currentUser.name}</strong>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" /> Abmelden
            </button>
          </div>

          <DozentenDashboard
            currentUser={currentUser}
            questions={questions}
            onAddQuestion={handleAddQuestion}
            onDeleteQuestion={handleDeleteQuestion}
            onImportQuestions={handleImportQuestions}
            onResetToDefaults={handleResetToDefaults}
          />

          {/* Footer Disclaimer */}
          <footer className="pt-8 pb-4 text-center border-t border-white/5 space-y-1 print:hidden">
            <p className="text-xs text-slate-500 font-sans">
              § 34a GewO Sachkunde-Vorbereitungsportal • Unabhängiges Prüfungstraining für Sicherheitsfachkräfte
            </p>
            <p className="text-[11px] text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
              Hinweis: Dieses Lernportal ist ein unabhängiges Vorbereitungsprogramm und steht in keiner offiziellen Verbindung zu einer Industrie- und Handelskammer.
            </p>
          </footer>
        </div>
      ) : (
        /* SCHÜLER LERNPORTAL */
        <>
          {/* Mobile Sticky Header */}
          <header className="lg:hidden bg-slate-950/90 backdrop-blur-md border-b border-white/5 px-5 py-3 flex items-center justify-between sticky top-0 z-40 relative">
            <div 
              id="mobile-logo-back-to-dashboard"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('dashboard');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer hover:opacity-85 active:scale-95 transition-all select-none"
            >
              <div className="p-1.5 bg-gradient-to-br from-[#dfb871] to-[#9a7836] rounded-lg text-slate-950 shadow-md">
                <Building className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xs tracking-tight text-white">§34a Lernportal</span>
            </div>

            {/* Student user greeting badge */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#dfb871] bg-[#dfb871]/10 px-2 py-0.5 rounded border border-[#dfb871]/20">
                {currentUser.name}
              </span>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </header>

          {/* Main workspace container */}
          <div className="flex-1 flex relative z-10 overflow-x-hidden max-w-full">
            {/* Mobile Sidebar Overlay */}
            {mobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity duration-350 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}

            {/* Sidebar Left panel */}
            <aside className={`
              fixed lg:static z-45 transform transition-all duration-300 lg:transform-none flex flex-col justify-between
              ${mobileMenuOpen 
                ? 'inset-x-4 top-1/2 -translate-y-1/2 h-auto max-h-[82vh] max-w-sm mx-auto bg-slate-900 border border-[#dfb871]/30 rounded-3xl shadow-2xl scale-100 opacity-100' 
                : 'inset-y-0 left-0 w-64 bg-slate-950/95 border-r border-[#dfb871]/10 -translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto'
              }
              lg:w-64 lg:h-auto lg:border-r lg:border-[#dfb871]/10 lg:rounded-none lg:shadow-none lg:inset-auto lg:opacity-100 lg:scale-100 lg:translate-x-0
            `}>
              <div className="p-6 space-y-6 overflow-y-auto">
                
                {/* Logo & Student Header Badge */}
                <div 
                  id="desktop-logo-back-to-dashboard"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabChange('dashboard');
                  }}
                  className="hidden lg:flex items-center gap-2.5 cursor-pointer hover:opacity-85 active:scale-95 transition-all select-none"
                >
                  <div className="p-2 bg-gradient-to-br from-[#dfb871] via-[#dfb871] to-[#9a7836] rounded-xl text-slate-950 shadow-lg shadow-amber-500/15">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-sm font-display font-bold text-white tracking-tight leading-tight">§ 34a Lernportal</h1>
                    <p className="text-[10px] text-[#dfb871] font-medium tracking-wide">Schüler-Dashboard</p>
                  </div>
                </div>

                {/* Logged in student info card */}
                <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs font-display border border-emerald-500/30 shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-[#dfb871] font-mono truncate font-semibold">
                      Kurs: {currentUser.courseId || currentUser.invitationCode || 'KURS-34a'}
                    </p>
                  </div>
                </div>

                {/* Sidebar Tab Lists */}
                <nav className="space-y-1">
                  <span className="px-2 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-display">Lernmenü</span>
                  {sidebarTabs.map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabChange(tab.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold select-none cursor-pointer transition-all ${
                          isActive 
                            ? 'bg-[#dfb871]/10 text-white shadow-inner border-l-2 border-[#dfb871]' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#dfb871]' : 'text-slate-500'}`} />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar bottom logout button */}
              <div className="p-6 border-t border-white/5 bg-white/[0.01] space-y-3">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-rose-500/5 hover:bg-rose-500/15 text-rose-300 hover:text-rose-250 border border-rose-500/10 rounded-xl text-xs font-bold transition-all cursor-pointer select-none active:scale-95 font-sans"
                >
                  <LogOut className="w-4 h-4" /> Abmelden
                </button>
                <div className="text-[10.5px] text-slate-500 leading-relaxed">
                  <p className="flex items-center gap-1 text-slate-400 font-medium font-sans">
                    <Sparkles className="w-3.5 h-3.5 text-[#dfb871]" /> Vorbereitungsportal § 34a
                  </p>
                </div>
              </div>
            </aside>

            {/* Dynamic page contents block */}
            <main className="flex-1 bg-[#05060b]/40 p-5 md:p-8 space-y-6 overflow-y-auto overflow-x-hidden max-w-full relative z-10">
              {/* Main Layout Header (Time Tracking & stats summary ticker) */}
              <section className="bento-glass p-4 md:p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-40 border border-white/10 shadow-lg">
                <div>
                  <span className="text-[10px] font-mono text-[#dfb871] tracking-wider uppercase font-extrabold">§ 34a GewO Sachkunde</span>
                  <p className="text-sm font-display font-semibold text-white mt-0.5">Willkommen zurück, {currentUser.name}</p>
                </div>

                {/* Translation & micro details widgets */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
                  {/* Language selection dropdown */}
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#dfb871] shrink-0" />
                    <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">Zweitsprache:</span>
                    <CustomDropdown
                      options={languageOptions}
                      value={translationLang}
                      onChange={handleSetTranslationLang}
                      maxWidth="w-56"
                      align="right"
                      className="min-w-[170px]"
                    />
                  </div>

                  <div className="flex items-center gap-4 self-stretch sm:self-auto justify-between border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                    <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5 font-sans">
                      <BookOpen className="w-4 h-4 text-[#dfb871]" /> {questions.length} Fragen
                    </span>
                    <div className="h-4 w-px bg-white/5 hidden sm:block" />
                    <span className="text-xs text-slate-200 font-medium flex items-center gap-1.5 font-mono">
                      <Clock className="w-4 h-4 text-[#dfb871]" /> Session: {new Date(studyDuration * 1000).toISOString().substr(11, 8)}
                    </span>
                  </div>
                </div>
              </section>

              {/* Lazy router rendering based on current active state */}
              <section className="transition-all duration-300 relative z-10">
                {activeTab === 'dashboard' && (
                  <Dashboard 
                    questions={questions}
                    progress={progress}
                    studyDuration={studyDuration}
                    dailyGoal={dailyGoal}
                    setDailyGoal={handleSetDailyGoal}
                    onNavigate={handleTabChange}
                  />
                )}

                {activeTab === 'glossar' && (
                  <FachbegriffeTrainer 
                    translationLang={translationLang}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'streak-challenge' && (
                  <StreakChallengeMode 
                    questions={questions}
                    currentUser={currentUser}
                    translationLang={translationLang}
                    onNavigate={handleTabChange}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'video-trainer' && (
                  <InteractiveVideoTrainer 
                    translationLang={translationLang}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'was-bin-ich' && (
                  <LegalConceptGuesser 
                    translationLang={translationLang}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'fallbeispiele' && (
                  <FallbeispieleModus 
                    translationLang={translationLang}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'schriftlich' && (
                  <SchriftlicherTestmodus 
                    translationLang={translationLang}
                    onRecordHistory={handleRecordHistoryItem}
                  />
                )}

                {activeTab === 'lernen' && (
                  <Lernmodus 
                    questions={questions}
                    progress={progress}
                    onAnswer={handleUpdateProgress}
                    onResetProgress={handleResetToDefaults}
                    translationLang={translationLang}
                  />
                )}

                {activeTab === 'karteikarten' && (
                  <Karteikartenmodus 
                    questions={questions}
                    translationLang={translationLang}
                  />
                )}

                {activeTab === 'pruefung' && (
                  <Pruefungsmodus 
                    questions={questions}
                    progress={progress}
                    onAnswerBulk={handleBulkAnswerSubmit}
                    onRecordHistory={handleRecordHistoryItem}
                    translationLang={translationLang}
                  />
                )}

                {activeTab === 'wiederholung' && (
                  <Wiederholungsmodus 
                    questions={questions}
                    progress={progress}
                    onAnswer={handleUpdateProgress}
                    translationLang={translationLang}
                  />
                )}

                {activeTab === 'suche' && (
                  <QuestionSearch 
                    questions={questions}
                    progress={progress}
                    translationLang={translationLang}
                  />
                )}

                {activeTab === 'analyse' && (
                  <StatsView 
                    questions={questions}
                    progress={progress}
                    history={history}
                    studyDuration={studyDuration}
                  />
                )}

                {activeTab === 'daten' && (
                  <DataManagement 
                    questions={questions}
                    onAddQuestion={handleAddQuestion}
                    onDeleteQuestion={handleDeleteQuestion}
                    onImportQuestions={handleImportQuestions}
                    onResetToDefaults={handleResetToDefaults}
                  />
                )}
              </section>

              {/* Footer Disclaimer */}
              <footer className="pt-8 pb-4 text-center border-t border-white/5 space-y-1">
                <p className="text-xs text-slate-500 font-sans">
                  § 34a GewO Sachkunde-Vorbereitungsportal • Unabhängiges Prüfungstraining für Sicherheitsfachkräfte
                </p>
                <p className="text-[11px] text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
                  Hinweis: Dieses Lernportal ist ein unabhängiges Vorbereitungsprogramm und steht in keiner offiziellen Verbindung zu einer Industrie- und Handelskammer.
                </p>
              </footer>
            </main>
          </div>
        </>
      )}
    </div>
  );
}
