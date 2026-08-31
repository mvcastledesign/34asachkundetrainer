/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  BookOpen, 
  Award, 
  Flame, 
  Video, 
  Sparkles, 
  ArrowRight,
  ShieldCheck, 
  Target, 
  AlertTriangle, 
  RotateCcw, 
  Trophy, 
  CheckCircle2, 
  Lock,
  ChevronRight,
  Play
} from 'lucide-react';
import { Question, UserProgressMap, LernhistorieItem, KATEGORIEN, UserProfile } from '../types.ts';
import { supabase } from '../lib/supabase.ts';

export interface CourseTask {
  id?: string;
  course_id?: string;
  courseId?: string;
  title: string;
  description: string;
  target_category_id?: string;
  targetCategoryId?: string;
  targetCategoryName?: string;
  target_mode?: string;
  targetMode?: string;
  target_count?: number;
  targetCount?: number;
  completedCount?: number;
  isCompleted?: boolean;
  deadline?: string;
  lecturer_name?: string;
  lecturerName?: string;
  created_at?: string;
  createdAt?: string | number;
  is_active?: boolean;
}

export interface DashboardViewProps {
  questions?: Question[];
  progress?: UserProgressMap | any;
  history?: LernhistorieItem[];
  studyDuration?: number;
  dailyGoal?: number;
  setDailyGoal?: (g: number) => void;
  currentUser?: UserProfile | null;
  userProfile?: UserProfile | null;
  activeCourseTask?: CourseTask | null;
  onNavigate: (view: string, options?: any) => void;
}

export default function DashboardView({
  questions = [],
  progress = {},
  history = [],
  studyDuration = 0,
  dailyGoal = 20,
  currentUser,
  userProfile,
  activeCourseTask: propActiveCourseTask,
  onNavigate
}: DashboardViewProps) {
  const activeProfile = userProfile || currentUser;
  const userCourseId = activeProfile?.courseId || 'MOREDU34a';
  const userName = activeProfile?.name || 'Schüler';
  const totalCatalogQuestions = questions.length > 0 ? questions.length : 180;

  // --------------------------------------------------------------------------
  // 1. SUPABASE-ABFRAGE BEIM LADEN: AKTIVE DOZENTEN-AUFGABE
  // --------------------------------------------------------------------------
  const [supabaseTask, setSupabaseTask] = useState<CourseTask | null>(null);
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(true);

  const fetchActiveTask = useCallback(async () => {
    try {
      const { data: activeTask, error } = await supabase
        .from('course_tasks')
        .select('*')
        .eq('course_id', userCourseId)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && activeTask) {
        setSupabaseTask(activeTask);
      } else {
        // Lokaler Fallback
        const localStored = 
          localStorage.getItem(`sachkunde_34a_course_task_${userCourseId}`) ||
          localStorage.getItem(`course_task_${userCourseId}`) ||
          localStorage.getItem('sachkunde_34a_active_course_task') ||
          localStorage.getItem('sachkunde_34a_active_task');

        if (localStored) {
          try {
            const parsed = JSON.parse(localStored);
            if (parsed && !parsed.isCompleted) {
              setSupabaseTask({
                ...parsed,
                course_id: parsed.courseId || userCourseId,
                lecturer_name: parsed.lecturerName,
                target_category_id: parsed.targetCategoryId,
                target_mode: parsed.targetMode
              });
            } else {
              setSupabaseTask(null);
            }
          } catch {
            setSupabaseTask(null);
          }
        } else {
          setSupabaseTask(null);
        }
      }
    } catch (err) {
      console.warn('Fehler beim Abrufen der aktiven Dozentenaufgabe:', err);
      setSupabaseTask(null);
    } finally {
      setIsLoadingTask(false);
    }
  }, [userCourseId]);

  useEffect(() => {
    fetchActiveTask();

    // Event Listener für synchronisierte Updates aus der Dozenten-Ansicht
    const handleTaskUpdated = () => {
      fetchActiveTask();
    };

    window.addEventListener('storage', handleTaskUpdated);
    window.addEventListener('sachkunde_course_task_updated', handleTaskUpdated);

    return () => {
      window.removeEventListener('storage', handleTaskUpdated);
      window.removeEventListener('sachkunde_course_task_updated', handleTaskUpdated);
    };
  }, [fetchActiveTask]);

  // Effektive aktive Aufgabe bestimmen
  const activeTask = useMemo<CourseTask | null>(() => {
    if (supabaseTask) return supabaseTask;
    if (propActiveCourseTask && !propActiveCourseTask.isCompleted) return propActiveCourseTask;
    return null;
  }, [supabaseTask, propActiveCourseTask]);

  // --------------------------------------------------------------------------
  // 2. DYNAMISCHE METRIKEN & BERECHNUNGEN (100% aus realem State)
  // --------------------------------------------------------------------------
  const { totalAnswered, totalCorrect, totalIncorrect, lernbedarfCount, beherrschtCount } = useMemo(() => {
    if (!progress) {
      return { 
        totalAnswered: 0, 
        totalCorrect: 0, 
        totalIncorrect: 0, 
        lernbedarfCount: 0, 
        beherrschtCount: 0 
      };
    }

    const progAny = progress as any;
    if (Array.isArray(progAny.beherrschtIds) || Array.isArray(progAny.lernbedarfIds)) {
      const beherrscht = Array.isArray(progAny.beherrschtIds) ? progAny.beherrschtIds : [];
      const lernbedarf = Array.isArray(progAny.lernbedarfIds) ? progAny.lernbedarfIds : [];
      return {
        totalAnswered: beherrscht.length + lernbedarf.length,
        totalCorrect: beherrscht.length,
        totalIncorrect: lernbedarf.length,
        lernbedarfCount: lernbedarf.length,
        beherrschtCount: beherrscht.length
      };
    }

    const entries = Object.entries(progress as UserProgressMap);
    let answered = 0;
    let correct = 0;
    let incorrect = 0;

    entries.forEach(([, p]) => {
      const isTested = p.status !== 'neu' || (p.correctCount || 0) > 0 || (p.incorrectCount || 0) > 0;
      if (isTested) {
        answered++;
      }
      if (p.status === 'gewusst' || ((p.correctCount || 0) > 0 && (p.correctCount || 0) >= (p.incorrectCount || 0))) {
        correct++;
      } else if (p.status === 'nicht_gewusst' || (p.incorrectCount || 0) > 0) {
        incorrect++;
      }
    });

    return {
      totalAnswered: answered,
      totalCorrect: correct,
      totalIncorrect: incorrect,
      lernbedarfCount: incorrect,
      beherrschtCount: correct
    };
  }, [progress]);

  const progressPercent = totalCatalogQuestions > 0 
    ? Math.min(100, Math.round((totalCorrect / totalCatalogQuestions) * 100)) 
    : 0;

  const masteredRatio = totalCatalogQuestions > 0
    ? totalCorrect / totalCatalogQuestions
    : 0;

  // --------------------------------------------------------------------------
  // 3. TAGES-STREAK & TAGESFORTSCHRITT
  // --------------------------------------------------------------------------
  const streakDays = useMemo(() => {
    const activeDates = new Set<string>();

    history.forEach(item => {
      let d: Date | null = null;
      if (typeof item.rawTimestamp === 'number') {
        d = new Date(item.rawTimestamp);
      } else if (typeof item.timestamp === 'number') {
        d = new Date(item.timestamp);
      } else if (typeof item.timestamp === 'string') {
        const parsed = Date.parse(item.timestamp);
        if (!isNaN(parsed)) d = new Date(parsed);
      }
      if (d && !isNaN(d.getTime())) {
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        activeDates.add(key);
      }
    });

    if (typeof progress === 'object' && progress !== null) {
      Object.values(progress as UserProgressMap).forEach(p => {
        if (p && typeof p === 'object' && p.lastTested && p.lastTested > 0) {
          const d = new Date(p.lastTested);
          if (!isNaN(d.getTime())) {
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            activeDates.add(key);
          }
        }
      });
    }

    if (activeDates.size === 0) return 1;

    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

    let currentStreak = 0;
    let checkDate = new Date(today);

    if (!activeDates.has(todayStr)) {
      if (!activeDates.has(yesterdayStr)) {
        return 1;
      }
      checkDate = new Date(yesterday);
    }

    while (true) {
      const checkStr = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;
      if (activeDates.has(checkStr)) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    return Math.max(1, currentStreak);
  }, [history, progress]);

  // Heute gelöste Fragen
  const answeredToday = useMemo(() => {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    if (!progress || typeof progress !== 'object') return 0;
    return Object.values(progress as UserProgressMap).filter(p => (p?.lastTested || 0) > oneDayAgo).length;
  }, [progress]);

  // --------------------------------------------------------------------------
  // 4. SACHGEBIETE & DETAILLIERTE ANALYSE FÜR DIE EMPFEHLUNGEN
  // --------------------------------------------------------------------------
  const categoryStats = useMemo(() => {
    return KATEGORIEN.map(kat => {
      const katQuestions = questions.filter(q => q.kategorie === kat);
      const katTotal = katQuestions.length;
      let katMastered = 0;
      let katIncorrect = 0;
      let katUnlearned = 0;
      let latestTest = 0;

      katQuestions.forEach(q => {
        const p = (progress as UserProgressMap)?.[q.id];
        if (!p || p.status === 'neu') {
          katUnlearned++;
        } else if (p.status === 'gewusst' || ((p.correctCount || 0) > 0 && (p.correctCount || 0) >= (p.incorrectCount || 0))) {
          katMastered++;
        } else if (p.status === 'nicht_gewusst' || (p.incorrectCount || 0) > 0) {
          katIncorrect++;
        } else {
          katUnlearned++;
        }

        if (p?.lastTested && p.lastTested > latestTest) {
          latestTest = p.lastTested;
        }
      });

      const katPercent = katTotal > 0 ? Math.round((katMastered / katTotal) * 100) : 0;

      return {
        name: kat,
        total: katTotal,
        mastered: katMastered,
        incorrect: katIncorrect,
        unlearned: katUnlearned,
        percent: katPercent,
        latestTest
      };
    });
  }, [questions, progress]);

  // Empfehlung: Sachgebiet mit den meisten offenen / unbearbeiteten Fragen
  const unlearnedCategory = useMemo(() => {
    if (categoryStats.length === 0) {
      return {
        name: 'Recht der öffentlichen Sicherheit und Ordnung',
        total: 25,
        mastered: 0,
        incorrect: 0,
        unlearned: 25,
        percent: 0,
        latestTest: 0
      };
    }

    const sorted = [...categoryStats].sort((a, b) => {
      if (b.unlearned !== a.unlearned) {
        return b.unlearned - a.unlearned;
      }
      return a.percent - b.percent;
    });

    return sorted[0] || categoryStats[0];
  }, [categoryStats]);

  // Zuletzt bearbeitetes oder als nächstes empfohlenes Sachgebiet für Hero
  const currentFocusCategory = useMemo(() => {
    if (categoryStats.length === 0) {
      return {
        name: 'Recht der öffentlichen Sicherheit und Ordnung',
        total: 25,
        mastered: 0,
        incorrect: 0,
        unlearned: 25,
        percent: 0,
        latestTest: 0
      };
    }

    const tested = [...categoryStats].filter(c => (c.latestTest || 0) > 0).sort((a, b) => (b.latestTest || 0) - (a.latestTest || 0));
    if (tested.length > 0) {
      return tested[0];
    }

    return unlearnedCategory;
  }, [categoryStats, unlearnedCategory]);

  // --------------------------------------------------------------------------
  // 5. ERFOLGE & ABZEICHEN BERECHNUNG (100% dynamisch)
  // --------------------------------------------------------------------------
  const achievements = useMemo(() => {
    return [
      {
        id: 'first_step',
        title: 'Erster Meilenstein',
        desc: 'Mindestens 1 Frage im § 34a Katalog beantwortet',
        icon: '🚀',
        unlocked: totalAnswered >= 1
      },
      {
        id: 'streak_3',
        title: 'Lern-Disziplin',
        desc: '3 Tage in Folge aktiv gelernt',
        icon: '🔥',
        unlocked: streakDays >= 3
      },
      {
        id: 'questions_50',
        title: 'Halbzeit-Pionier',
        desc: '50 Fragen erfolgreich gemeistert',
        icon: '🎯',
        unlocked: totalCorrect >= 50
      },
      {
        id: 'ready_75',
        title: 'Prüfungsbereit',
        desc: 'Mindestens 75% Gesamtfortschritt erreicht',
        icon: '🛡️',
        unlocked: progressPercent >= 75
      }
    ];
  }, [totalAnswered, streakDays, totalCorrect, progressPercent]);

  // --------------------------------------------------------------------------
  // NAVIGATION: DOZENTEN-AUFGABE VS. REGULÄRER LERNPLAN
  // --------------------------------------------------------------------------
  const handleStartTaskOrContinue = () => {
    if (activeTask) {
      const mode = activeTask.target_mode || activeTask.targetMode || 'lernen';
      const categoryId = activeTask.target_category_id || activeTask.targetCategoryId;
      const isAll = !categoryId || categoryId === 'all';

      onNavigate(mode, {
        categoryId: isAll ? undefined : categoryId,
        categoryName: isAll ? 'Gesamter Prüfungsstoff' : categoryId
      });
    } else {
      onNavigate('lernen', {
        categoryId: currentFocusCategory.name,
        categoryName: currentFocusCategory.name
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* ---------------------------------------------------------------------
          1. HERO-SECTION: Moderne Willkommens- & Fortsetzen-Karte
          --------------------------------------------------------------------- */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 border border-[#dfb871]/30 relative overflow-hidden shadow-2xl bento-glow-gold">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dfb871]/10 border border-[#dfb871]/25 text-[#dfb871] text-xs font-mono font-bold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb871]" />
              § 34a Sachkunde-Lernzentrum
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Willkommen zurück, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb871] via-[#f3d699] to-[#dfb871]">{userName}</span>
            </h1>

            {/* -----------------------------------------------------------------
                LINKE FOKUS-BOX IM HERO-BANNER
                ----------------------------------------------------------------- */}
            {activeTask ? (
              /* FALL A: WENN AUFGABE AKTIV (activeTask != null) */
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 max-w-xl backdrop-blur-md transition-all">
                {/* Badge oben */}
                <div className="flex items-center justify-between gap-3 text-xs mb-2">
                  <span className="text-amber-300 font-mono font-bold text-xs flex items-center gap-1.5">
                    📢 AKADEMIE-AUFGABE • Kurs {userCourseId}
                  </span>
                </div>

                {/* Titel & Dozenten-Nachricht */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-white font-bold font-display text-sm sm:text-base leading-snug">
                    {activeTask.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-sans line-clamp-3">
                    {activeTask.description}
                  </p>
                </div>

                {/* Signatur unten */}
                <div className="pt-2 border-t border-amber-500/20 flex justify-between items-center text-[11px]">
                  <span className="text-amber-400/90 font-mono font-medium">
                    Dozent: {activeTask.lecturer_name || activeTask.lecturerName || 'Fachakademie'}
                  </span>
                  {(activeTask.target_category_id || activeTask.targetCategoryId) && (
                    <span className="text-slate-400 text-[10px] font-sans truncate max-w-[200px]">
                      Fokus: {activeTask.target_category_id || activeTask.targetCategoryId}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              /* FALL B: WENN KEINE AUFGABE AKTIV (Regulärer Lernplan-Fokus) */
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 max-w-xl backdrop-blur-md transition-all">
                <div className="flex items-center justify-between gap-3 text-xs mb-2">
                  <span className="text-emerald-400 font-mono font-bold text-xs flex items-center gap-1.5">
                    📚 AKTUELLER LERNFOKUS
                  </span>
                  <span className="font-mono text-emerald-400 font-bold shrink-0">
                    {currentFocusCategory.percent}%
                  </span>
                </div>
                <div className="mb-2">
                  <h3 className="text-white font-semibold text-xs sm:text-sm font-sans truncate">
                    {currentFocusCategory.name}
                  </h3>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-700 shadow-sm"
                    style={{ width: `${Math.max(4, currentFocusCategory.percent)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400">
                  <span>{currentFocusCategory.mastered || 0} von {currentFocusCategory.total} Fragen gemeistert</span>
                  <span className="text-slate-500 font-mono">Sachgebiet</span>
                </div>
              </div>
            )}
          </div>

          {/* -----------------------------------------------------------------
              RECHTE BUTTON-GRUPPE
              ----------------------------------------------------------------- */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            {/* RECHTER GRÜNER HAUPT-BUTTON */}
            <button
              onClick={handleStartTaskOrContinue}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-extrabold text-sm sm:text-base font-display tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>{activeTask ? '📢 Dozenten-Aufgabe starten →' : 'Lerneinheit jetzt fortsetzen →'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* SEKUNDÄRER BUTTON (Unverändert) */}
            <button
              onClick={() => onNavigate('schriftlich')}
              className="px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-[#dfb871]/40 text-slate-200 hover:text-white font-medium text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schriftliche Prüfungssimulation →</span>
            </button>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-6 opacity-5 hidden xl:block select-none pointer-events-none">
          <Award className="w-80 h-80 text-[#dfb871]" />
        </div>
      </div>

      {/* ---------------------------------------------------------------------
          2. 3-METRIKEN-BAR (3er-Grid-Zeile)
          --------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Kachel 1 (🔥 Streak) */}
        <div className="bento-glass p-5 rounded-3xl flex flex-col justify-between min-h-[145px] relative overflow-hidden bento-glow-gold border border-amber-500/20">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider font-display">Lernserie</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {streakDays}
              </span>
              <span className="text-sm font-bold text-amber-300 font-sans">
                {streakDays === 1 ? 'Tag Serie' : 'Tage Serie'}
              </span>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2.5 overflow-hidden border border-white/5">
              <div 
                className="bg-gradient-to-r from-amber-500 to-rose-400 h-full transition-all duration-500" 
                style={{ width: `${Math.min(100, Math.round((answeredToday / dailyGoal) * 100))}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-300 block mt-1.5 font-medium font-sans">
              🔥 <strong className="text-white">{answeredToday} / {dailyGoal}</strong> heute gelöst
            </span>
          </div>
        </div>

        {/* Kachel 2 (🎯 Gesamtfortschritt) */}
        <div className="bento-glass p-5 rounded-3xl flex flex-col justify-between min-h-[145px] relative overflow-hidden bento-glow-green border border-emerald-500/20">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider font-display">Gesamtfortschritt</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                {progressPercent}%
              </span>
              <span className="text-xs font-medium text-emerald-300 font-mono">
                beherrscht
              </span>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2.5 overflow-hidden border border-white/5">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-300 block mt-1.5 font-medium font-sans">
              🎯 <strong className="text-white">{totalCorrect} von {totalCatalogQuestions}</strong> Fragen gemeistert
            </span>
          </div>
        </div>

        {/* Kachel 3 (🛡️ Prüfungs-Status) */}
        <div className="bento-glass p-5 rounded-3xl flex flex-col justify-between min-h-[145px] relative overflow-hidden bento-glow-indigo border border-indigo-500/20">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider font-display">Prüfungsreife</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight ${progressPercent >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {progressPercent >= 75 ? 'Prüfungsbereit' : `${75 - progressPercent}% bis zum Ziel`}
              </span>
            </div>
            <div className="w-full bg-slate-950 h-1.5 rounded-full mt-2.5 overflow-hidden border border-white/5 relative">
              <div 
                className={`h-full transition-all duration-500 ${progressPercent >= 75 ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-500 to-indigo-500'}`}
                style={{ width: `${Math.min(100, (progressPercent / 75) * 100)}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-300 block mt-1.5 font-medium font-sans">
              🛡️ Prüfungsbereit ab <strong>75%</strong> (Aktueller Stand: {progressPercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------
          3. SITUATIVE 3-KARTEN-SEKTION: „Heute für dich empfohlen“
          --------------------------------------------------------------------- */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
              <span>🎯</span> Heute für dich empfohlen
            </h2>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Situativ und datenbasiert auf deinen aktuellen Wissensstand abgestimmt
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#dfb871] bg-[#dfb871]/10 px-3 py-1 rounded-xl border border-[#dfb871]/20 hidden sm:inline-block">
            Intelligenter Lernplan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* KARTE 1: Nächster Lernschritt / Wissensaufbau */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>📚</span> LERNPLAN-FOKUS
                </span>
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-blue-300 transition-colors min-h-[3rem] flex items-center">
                {unlearnedCategory.name}
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                <strong className="text-white font-semibold">{unlearnedCategory.unlearned}</strong> noch nicht bearbeitete Fragen in diesem Modul.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onNavigate('lernen', {
                  categoryId: unlearnedCategory.name,
                  categoryName: unlearnedCategory.name
                })}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-900/20 hover:shadow-blue-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Sachgebiet jetzt lernen</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* KARTE 2: Schwachstellen vs. Streak */}
          {lernbedarfCount > 0 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>⚠️</span> SCHWACHSTELLEN-FOKUS
                  </span>
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:scale-105 transition-transform">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-rose-300 transition-colors min-h-[3rem] flex items-center">
                  Fehlerhafte Fragen wiederholen
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                  <strong className="text-rose-400 font-semibold">{lernbedarfCount}</strong> falsch beantwortete Fragen korrigieren.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('wiederholung')}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs shadow-md shadow-rose-900/20 hover:shadow-rose-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Fehlertraining starten</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>🔥</span> TAGES-CHALLENGE
                  </span>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                    <Flame className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-amber-300 transition-colors min-h-[3rem] flex items-center">
                  Endlos-Streak fortsetzen
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                  Aktuelle Serie: <strong className="text-amber-300 font-semibold">{streakDays} {streakDays === 1 ? 'Tag' : 'Tage'}</strong> aktiv.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('streak-challenge')}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-900/20 hover:shadow-amber-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Streak-Challenge starten</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* KARTE 3: Prüfungssimulation vs. Praxis-Szenario */}
          {masteredRatio >= 0.5 ? (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>🛡️</span> IHK-PROBELAUF
                  </span>
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-purple-300 transition-colors min-h-[3rem] flex items-center">
                  IHK-Prüfungssimulation
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                  82 Fragen unter Prüfungsbedingungen absolvieren.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('schriftlich')}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-900/20 hover:shadow-purple-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Prüfungssimulation starten</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span>🎬</span> PRAXIS-TRAINING
                  </span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-emerald-300 transition-colors min-h-[3rem] flex items-center">
                  Video-Szenario-Trainer
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans">
                  Entscheidungen im Sicherheitsdienst realitätsnah üben.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('video-trainer')}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-900/20 hover:shadow-emerald-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Video-Szenario öffnen</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------------------------------------------------------------------
          4. ZWEI-SPALTEN-LAYOUT UNTEN:
             Links: Fortschritt nach Sachgebieten
             Rechts: Schwachstellen-Fokus & Erfolge / Abzeichen
          --------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Linke Spalte (2 Spalten Breite): Fortschritt nach Sachgebieten */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bento-glass p-6 rounded-3xl shadow-xl flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h2 className="text-lg font-bold font-display text-white">
                    Fortschritt nach Sachgebieten
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium font-sans">
                    Beherrschte Fragen in allen 9 Fachgebieten des § 34a Rahmenplans
                  </p>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 text-[11px] font-display font-semibold tracking-wide text-[#dfb871] bg-[#dfb871]/10 rounded-xl border border-[#dfb871]/20">
                  9 Prüfungsgebiete
                </span>
              </div>

              {/* Sachgebiete Liste */}
              <div className="space-y-4">
                {categoryStats.map(cat => (
                  <div key={cat.name} className="p-3.5 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug break-words group-hover:text-[#dfb871] transition-colors font-sans pr-2">
                        {cat.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-slate-400 font-mono text-xs">
                          {cat.mastered} / {cat.total}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 font-mono text-xs font-bold text-slate-300">
                          {cat.percent}%
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                      <div 
                        className="bg-gradient-to-r from-[#dfb871] to-[#f5db9f] h-full rounded-full transition-all duration-500 group-hover:from-[#f5db9f] group-hover:to-[#dfb871]" 
                        style={{ width: `${cat.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rechte Spalte: Schwachstellen-Fokus & Erfolge / Abzeichen */}
        <div className="space-y-6">
          {/* Schwachstellen-Fokus Card */}
          <div className="bento-glass p-6 rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-950/20 via-slate-900 to-slate-950 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/25 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Lernbedarf
              </span>
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <RotateCcw className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-base font-bold text-white font-display">
              Schwachstellen-Fokus
            </h3>

            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-sans">
              {totalIncorrect === 0 ? (
                'Aktuell hast du keine offenen Fehlerfragen. Exzellent! Vertiefe dein Wissen im Fragenkatalog.'
              ) : (
                <>
                  Du hast aktuell <strong className="text-rose-400 font-bold">{totalIncorrect} Fragen</strong> mit Lernbedarf identifiziert.
                </>
              )}
            </p>

            <button
              onClick={() => onNavigate(totalIncorrect > 0 ? 'wiederholung' : 'lernen')}
              className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs shadow-md shadow-rose-900/30 hover:shadow-rose-900/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{totalIncorrect > 0 ? 'Schwachstellen jetzt wiederholen' : 'Fragenkatalog trainieren'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Erfolge & Abzeichen Card */}
          <div className="bento-glass p-6 rounded-3xl border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#dfb871]" />
                <h3 className="text-sm font-bold text-white font-display">
                  Erfolge & Abzeichen
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {achievements.filter(a => a.unlocked).length} / {achievements.length} freigeschaltet
              </span>
            </div>

            <div className="space-y-2.5">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                    ach.unlocked 
                      ? 'bg-slate-950/60 border-[#dfb871]/30 text-white' 
                      : 'bg-slate-950/20 border-white/5 text-slate-500 opacity-60'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                    ach.unlocked ? 'bg-[#dfb871]/15 border border-[#dfb871]/30' : 'bg-white/5'
                  }`}>
                    {ach.unlocked ? ach.icon : <Lock className="w-4 h-4 text-slate-500" />}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className={`text-xs font-bold truncate ${ach.unlocked ? 'text-slate-100' : 'text-slate-500'}`}>
                        {ach.title}
                      </h4>
                      {ach.unlocked && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
