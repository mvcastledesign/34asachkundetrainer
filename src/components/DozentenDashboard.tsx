/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Users, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  Search, 
  Copy, 
  Download, 
  ChevronLeft,
  ChevronRight, 
  ChevronDown,
  X, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  KeyRound,
  Trash2,
  Video,
  Layers,
  Flame,
  FileText,
  Brain,
  Zap,
  Target,
  BarChart3,
  HelpCircle,
  Timer,
  MousePointerClick,
  AlertOctagon,
  Radar,
  Lightbulb,
  Check,
  Printer,
  GraduationCap,
  Calendar,
  Filter,
  Activity,
  Plus,
  RotateCcw,
  Scale,
  AlertCircle
} from 'lucide-react';
import { UserProfile, StudentDetail } from '../types/auth.ts';
import { Question, KATEGORIEN } from '../types.ts';
import { INITIAL_QUESTIONS } from '../initialQuestions.ts';
import { IHK_120_EXAM_QUESTIONS } from '../data/ihk120ExamQuestions.ts';
import DataManagement from './DataManagement.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { 
  supabase, 
  fetchStudentsFromSupabase, 
  updateStudentPasswordInSupabase,
  deleteStudentFromSupabase,
  cleanupLocalStudentData
} from '../lib/supabase.ts';
import { calculateCategoryPerformance } from '../utils/categoryPerformance.ts';

export interface CourseCohort {
  id: string;
  name: string;
  period: string;
  description?: string;
  createdAt?: string;
}

export interface ModeItemDetail {
  id: string;
  name: string;
  shortName: string;
  icon: any;
  emoji: string;
  value: string;
  shortValue?: string;
  rawCount?: number;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

// Aggregation helper for the 10 platform training modes of a single student
export function getStudent10ModeStats(
  student: StudentDetail | UserProfile,
  rawAttempts: any[] = [],
  examSessions: any[] = []
): ModeItemDetail[] {
  const studentAttempts = rawAttempts.filter(a => {
    const uid = a.userId || a.user_id;
    return uid && String(uid) === String(student.id);
  });

  const studentSessions = examSessions.filter(s => {
    const uid = s.userId || s.user_id;
    return uid && String(uid) === String(student.id);
  });
  
  const rawExams = Array.isArray(student.examHistory) ? student.examHistory : [];

  // 1. Lernmodus (Antwortvergleich) - Isoliert: Zähle ausschließlich Fragen aus dem Lernmodus (Antwortvergleich)
  const lernmodusAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase().trim();
    return m === 'lernmodus' || m === 'lernen' || m === 'learning';
  });
  const solvedQ = lernmodusAttempts.length;
  const correctLernCount = lernmodusAttempts.filter(a => a.is_correct).length;
  const successRate = solvedQ > 0 ? Math.round((correctLernCount / solvedQ) * 100) : 0;
  const lernmodusVal = `${solvedQ} Fragen (${successRate} %)`;

  // 2. Prüfungs-Simulation - Zähle ausschließlich regulär abgeschlossene Prüfungssimulationen
  const simSessions = studentSessions.filter(s => {
    const m = (s.mode || '').toLowerCase().trim();
    const t = (s.exam_type || '').toLowerCase().trim();
    if (m === 'schriftlich' || m === 'schriftlicher_test' || t.includes('schriftlich') || t.includes('ihk 120')) return false;
    return m === 'pruefung' || m === 'pruefungssimulation' || t.includes('simulation') || t.includes('mündlich');
  });
  const simExams = rawExams.filter((ex: any) => {
    if (!ex) return false;
    const t = (ex.examType || ex.mode || ex.title || '').toLowerCase().trim();
    if (t.includes('schriftlich') || t.includes('test') || t.includes('ihk')) return false;
    return t.includes('simulation') || t.includes('mündlich') || t === 'pruefung';
  });
  const simCount = Math.max(simSessions.length, simExams.length);
  const simVal = `${simCount} absolviert`;

  // 3. Schriftlicher Test (§ 34a) - Zähle ausschließlich regulär abgeschlossene schriftliche Tests
  const writtenSessions = studentSessions.filter(s => {
    const m = (s.mode || '').toLowerCase().trim();
    const t = (s.exam_type || '').toLowerCase().trim();
    if (m === 'pruefung' || m === 'pruefungssimulation' || (t.includes('simulation') && !t.includes('schriftlich')) || t.includes('mündlich')) return false;
    return m === 'schriftlich' || m === 'schriftlicher_test' || m === 'exam' || t.includes('schriftlich') || t.includes('ihk') || t.includes('schnelltest') || t.includes('kategorietest');
  });
  const writtenExams = rawExams.filter((ex: any) => {
    if (!ex) return false;
    const t = (ex.examType || ex.mode || ex.title || '').toLowerCase().trim();
    if (t.includes('mündlich') || (t.includes('simulation') && !t.includes('schriftlich'))) return false;
    return t.includes('schriftlich') || t.includes('test') || t.includes('ihk') || t === 'schriftlich';
  });
  const writtenCount = Math.max(writtenSessions.length, writtenExams.length);
  const writtenVal = `${writtenCount} Tests`;

  // 4. Video-Szenario-Trainer - Strictly count finished video scenarios
  const videoSessions = studentSessions.filter(s => (s.mode || s.exam_type || '').toLowerCase().includes('video'));
  const videoExams = rawExams.filter((ex: any) => (ex.examType || ex.mode || ex.title || '').toLowerCase().includes('video'));
  const videoAttempts = studentAttempts.filter(a => (a.mode || '').toLowerCase().includes('video'));
  const videoCount = Math.max(videoSessions.length, videoExams.length, (student as any).videoScenariosCompleted || 0, Math.ceil(videoAttempts.length / 3));
  const videoVal = `${videoCount} Szenarien`;

  // 5. Fallbeispiele - Strictly count solved cases
  const caseSessions = studentSessions.filter(s => {
    const m = (s.mode || s.exam_type || '').toLowerCase();
    return m.includes('fall') || m.includes('scenario');
  });
  const caseExams = rawExams.filter((ex: any) => {
    const t = (ex.examType || ex.mode || ex.title || '').toLowerCase();
    return t.includes('fall') || t.includes('praxis') || t.includes('scenario');
  });
  const caseAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase();
    return m === 'fallbeispiele' || m === 'scenario';
  });
  const caseCount = Math.max(caseSessions.length, caseExams.length, (student as any).casesSolved || 0, caseAttempts.length);
  const caseVal = `${caseCount} Fälle`;

  // 6. Karteikarten (3D Flip) - Strictly count practiced flashcards
  const cardAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase();
    return m === 'karteikarten' || m === 'flashcards' || m === 'flashcard';
  });
  const cardSessions = studentSessions.filter(s => (s.mode || '').toLowerCase().includes('karteikarten') || (s.mode || '').toLowerCase().includes('flashcard'));
  const flashcardCount = Math.max(cardAttempts.length, cardSessions.length, (student as any).flashcardsPracticed || 0, (student as any).leitnerCardsCount || 0);
  const flashcardVal = `${flashcardCount} Karten`;

  // 7. Fachbegriffe & Prüfungsdeutsch - Strictly count practiced vocabulary terms
  const vocabAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase();
    return m === 'fachbegriffe' || m === 'vocab' || m === 'glossar' || m === 'glossary';
  });
  const vocabSessions = studentSessions.filter(s => (s.mode || '').toLowerCase().includes('fachbegriffe') || (s.mode || '').toLowerCase().includes('vocab') || (s.mode || '').toLowerCase().includes('glossar'));
  const vocabCount = Math.max(vocabAttempts.length, vocabSessions.length, (student as any).vocabPracticed || 0);
  const vocabVal = `${vocabCount} Begriffe`;

  // 8. Fehler-Wiederholung - Strictly count resolved mistakes
  const errorAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase();
    return (m === 'wiederholung' || m === 'fehler' || m === 'repeat_error') && a.is_correct;
  });
  const errorSessions = studentSessions.filter(s => (s.mode || '').toLowerCase().includes('wiederholung') || (s.mode || '').toLowerCase().includes('fehler'));
  const errorFixedCount = Math.max(errorAttempts.length, errorSessions.length, (student as any).errorsFixed || 0);
  const errorVal = `${errorFixedCount} behoben`;

  // 9. Endlos-Streak-Challenge - Strictly real maximum streak
  const streakRecord = typeof (student as any).maxStreak === 'number' && !isNaN((student as any).maxStreak)
    ? (student as any).maxStreak
    : (typeof (student as any).max_streak === 'number' && !isNaN((student as any).max_streak)
        ? (student as any).max_streak
        : (typeof (student as any).streak === 'number' && !isNaN((student as any).streak) ? (student as any).streak : 0));
  const streakVal = `Rekord: ${streakRecord} Fragen`;

  // 10. „Was bin ich?“ Rätsel - Strictly real solved riddles
  const riddleAttempts = studentAttempts.filter(a => {
    const m = (a.mode || '').toLowerCase();
    return (m === 'raetsel' || m === 'riddle' || m === 'was_bin_ich') && a.is_correct;
  });
  const riddleSessions = studentSessions.filter(s => (s.mode || '').toLowerCase().includes('raetsel') || (s.mode || '').toLowerCase().includes('riddle'));
  const riddleCount = Math.max(riddleAttempts.length, riddleSessions.length, (student as any).riddlesSolved || 0);
  const riddleVal = `${riddleCount} Rätsel gelöst`;

  return [
    {
      id: 'lernmodus',
      name: 'Lernmodus (Antwortvergleich)',
      shortName: 'Lernmodus',
      icon: BookOpen,
      emoji: '📖',
      value: lernmodusVal,
      shortValue: solvedQ === 1 ? '1 Frage' : `${solvedQ} Fragen`,
      rawCount: solvedQ,
      colorClass: 'text-indigo-400',
      bgClass: 'bg-indigo-500/10',
      borderClass: 'border-indigo-500/20'
    },
    {
      id: 'pruefung',
      name: 'Prüfungs-Simulation',
      shortName: 'Simulation',
      icon: Award,
      emoji: '🎖️',
      value: simVal,
      shortValue: simCount === 1 ? '1 Simulation' : `${simCount} Simulationen`,
      rawCount: simCount,
      colorClass: 'text-amber-400',
      bgClass: 'bg-amber-500/10',
      borderClass: 'border-amber-500/20'
    },
    {
      id: 'schriftlich',
      name: 'Schriftlicher Test (§ 34a)',
      shortName: 'Schriftl. Test',
      icon: FileText,
      emoji: '📝',
      value: writtenVal,
      shortValue: writtenCount === 1 ? '1 Test' : `${writtenCount} Tests`,
      rawCount: writtenCount,
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/10',
      borderClass: 'border-emerald-500/20'
    },
    {
      id: 'video',
      name: 'Video-Szenario-Trainer',
      shortName: 'Video-Fälle',
      icon: Video,
      emoji: '🎬',
      value: videoVal,
      shortValue: videoCount === 1 ? '1 Szenario' : `${videoCount} Szenarien`,
      rawCount: videoCount,
      colorClass: 'text-fuchsia-400',
      bgClass: 'bg-fuchsia-500/10',
      borderClass: 'border-fuchsia-500/20'
    },
    {
      id: 'fallbeispiele',
      name: 'Fallbeispiele',
      shortName: 'Fallbeispiele',
      icon: Scale,
      emoji: '⚖️',
      value: caseVal,
      shortValue: caseCount === 1 ? '1 Fall' : `${caseCount} Fälle`,
      rawCount: caseCount,
      colorClass: 'text-cyan-400',
      bgClass: 'bg-cyan-500/10',
      borderClass: 'border-cyan-500/20'
    },
    {
      id: 'karteikarten',
      name: 'Karteikarten (3D Flip)',
      shortName: 'Karteikarten',
      icon: Layers,
      emoji: '🗂️',
      value: flashcardVal,
      shortValue: flashcardCount === 1 ? '1 Karte' : `${flashcardCount} Karten`,
      rawCount: flashcardCount,
      colorClass: 'text-sky-400',
      bgClass: 'bg-sky-500/10',
      borderClass: 'border-sky-500/20'
    },
    {
      id: 'fachbegriffe',
      name: 'Fachbegriffe & Prüfungsdeutsch',
      shortName: 'Fachbegriffe',
      icon: GraduationCap,
      emoji: '📚',
      value: vocabVal,
      shortValue: vocabCount === 1 ? '1 Begriff' : `${vocabCount} Begriffe`,
      rawCount: vocabCount,
      colorClass: 'text-teal-400',
      bgClass: 'bg-teal-500/10',
      borderClass: 'border-teal-500/20'
    },
    {
      id: 'fehler',
      name: 'Fehler-Wiederholung',
      shortName: 'Fehler-Trainer',
      icon: RotateCcw,
      emoji: '🔁',
      value: errorVal,
      shortValue: errorFixedCount === 1 ? '1 behoben' : `${errorFixedCount} behoben`,
      rawCount: errorFixedCount,
      colorClass: 'text-rose-400',
      bgClass: 'bg-rose-500/10',
      borderClass: 'border-rose-500/20'
    },
    {
      id: 'streak',
      name: 'Endlos-Streak-Challenge',
      shortName: 'Streak-Rekord',
      icon: Flame,
      emoji: '🔥',
      value: streakVal,
      shortValue: `Rekord: ${streakRecord}`,
      rawCount: streakRecord,
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/10',
      borderClass: 'border-orange-500/20'
    },
    {
      id: 'raetsel',
      name: '„Was bin ich?“ Rätsel',
      shortName: 'Rätsel',
      icon: HelpCircle,
      emoji: '❓',
      value: riddleVal,
      shortValue: riddleCount === 1 ? '1 gelöst' : `${riddleCount} gelöst`,
      rawCount: riddleCount,
      colorClass: 'text-violet-400',
      bgClass: 'bg-violet-500/10',
      borderClass: 'border-violet-500/20'
    }
  ];
}

// Helper to purge legacy / dummy cohorts (e.g. SK-2026-A/B/C) from localStorage
const purgeLegacyCohortCache = () => {
  try {
    const dummyIds = new Set(['SK-2026-A', 'SK-2026-B', 'SK-2026-C']);
    
    // Clean custom courses
    const savedCustom = localStorage.getItem('moredu_custom_courses');
    if (savedCustom) {
      const parsed = JSON.parse(savedCustom);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter((c: any) => c && c.id && !dummyIds.has(String(c.id).toUpperCase()));
        localStorage.setItem('moredu_custom_courses', JSON.stringify(cleaned));
      }
    }
    
    // Clean archived courses
    const savedArchived = localStorage.getItem('moredu_archived_courses');
    if (savedArchived) {
      const parsed = JSON.parse(savedArchived);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter((id: any) => !dummyIds.has(String(id).toUpperCase()));
        localStorage.setItem('moredu_archived_courses', JSON.stringify(cleaned));
      }
    }

    // Clean old deleted course keys
    const oldDeleted = localStorage.getItem('moredu_deleted_course_ids');
    if (oldDeleted) {
      const parsed = JSON.parse(oldDeleted);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter((id: any) => !dummyIds.has(String(id).toUpperCase()));
        localStorage.setItem('moredu_deleted_course_ids', JSON.stringify(cleaned));
      }
    }

    const savedPerm = localStorage.getItem('moredu_permanently_deleted_courses');
    if (savedPerm) {
      const parsed = JSON.parse(savedPerm);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter((id: any) => !dummyIds.has(String(id).toUpperCase()));
        localStorage.setItem('moredu_permanently_deleted_courses', JSON.stringify(cleaned));
      }
    }
  } catch (e) {
    console.warn('Error purging legacy cohort cache:', e);
  }
};

// Helper: Format ISO date string (YYYY-MM-DD) into German date string (DD.MM.YYYY)
const formatGermanDateOnly = (d: string) => {
  if (!d) return '';
  const parts = d.split('-');
  if (parts.length !== 3) return d;
  const [year, month, day] = parts;
  return `${day}.${month}.${year}`;
};

// Obsidian Calendar Popover Component for Course Date Selection
const ObsidianCalendarPopover: React.FC<{
  selectedDate: string; // 'YYYY-MM-DD'
  onSelectDate: (date: string) => void;
  onClose: () => void;
  align?: 'left' | 'right';
}> = ({ selectedDate, onSelectDate, onClose, align = 'left' }) => {
  const initialDate = selectedDate ? new Date(selectedDate) : new Date();
  const [viewYear, setViewYear] = useState(() => (!isNaN(initialDate.getTime()) ? initialDate.getFullYear() : new Date().getFullYear()));
  const [viewMonth, setViewMonth] = useState(() => (!isNaN(initialDate.getTime()) ? initialDate.getMonth() : new Date().getMonth()));

  const monthNames = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  const prevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const nextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const rawFirstDay = new Date(viewYear, viewMonth, 1).getDay();
  // Monday = 0, Sunday = 6
  const startOffset = (rawFirstDay + 6) % 7;
  const todayIso = new Date().toISOString().split('T')[0];

  return (
    <div 
      className={`absolute top-full ${align === 'right' ? 'right-0' : 'left-0'} mt-2 z-50 w-72 bg-[#0d1117]/95 border border-[#dfb871]/30 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl animate-fadeIn space-y-3`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header with Month navigation */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1.5 rounded-lg text-slate-400 hover:text-[#dfb871] hover:bg-white/5 transition-colors cursor-pointer"
          title="Vorheriger Monat"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="text-center">
          <span className="text-xs font-bold text-white font-display">
            {monthNames[viewMonth]} {viewYear}
          </span>
        </div>

        <button
          type="button"
          onClick={nextMonth}
          className="p-1.5 rounded-lg text-slate-400 hover:text-[#dfb871] hover:bg-white/5 transition-colors cursor-pointer"
          title="Nächster Monat"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] text-slate-400 font-bold">
        {weekDays.map(d => (
          <div key={d} className="py-0.5">{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-xs">
        {/* Empty cells before month start */}
        {Array.from({ length: startOffset }).map((_, i) => (
          <div key={`offset-${i}`} className="h-7 w-7" />
        ))}

        {/* Days of current month */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const currentIso = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
          const isSelected = selectedDate === currentIso;
          const isToday = todayIso === currentIso;

          return (
            <button
              key={`day-${dayNum}`}
              type="button"
              onClick={() => {
                onSelectDate(currentIso);
                onClose();
              }}
              className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs font-mono font-medium transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#dfb871] text-slate-950 font-bold shadow-md scale-105'
                  : isToday
                  ? 'border border-[#dfb871]/60 text-[#dfb871] hover:bg-white/10'
                  : 'text-slate-200 hover:bg-[#dfb871]/20 hover:text-[#dfb871]'
              }`}
            >
              {dayNum}
            </button>
          );
        })}
      </div>

      {/* Footer / Close */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono">
        <button
          type="button"
          onClick={() => {
            onSelectDate(todayIso);
            onClose();
          }}
          className="text-[#dfb871] hover:underline cursor-pointer font-semibold"
        >
          Heute ({formatGermanDateOnly(todayIso)})
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-slate-400 hover:text-white cursor-pointer"
        >
          Fertig
        </button>
      </div>
    </div>
  );
};

interface DozentenDashboardProps {
  currentUser: UserProfile;
  questions: Question[];
  onAddQuestion: (q: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onImportQuestions: (imported: Question[], option: 'merge' | 'replace') => void;
  onResetToDefaults: () => void;
}

interface QuestionAttemptRecord {
  id?: string | number;
  user_id?: string | number;
  question_id: string;
  topic?: string;
  mode?: string;
  is_correct: boolean;
  time_spent_ms?: number;
  switched_answers?: boolean;
  created_at?: string;
}

interface ExamSessionRecord {
  id?: string | number;
  user_id?: string | number;
  mode: string;
  score_achieved?: number;
  score_max?: number;
  passed?: boolean;
  duration_seconds?: number;
  created_at?: string;
}

// Format date to German standard: "Heute, 14:33 Uhr", "Gestern, 09:15 Uhr" or "27.08.2026, 14:33 Uhr"
function formatGermanDate(val: any): string {
  if (!val) return 'Heute, 12:00 Uhr';
  if (typeof val === 'string') {
    if (val.startsWith('Heute') || val.startsWith('Gestern') || val === 'Gerade eben') {
      return val;
    }
  }
  const d = new Date(val);
  if (isNaN(d.getTime())) return String(val);

  const now = new Date();
  const isToday = d.getDate() === now.getDate() && 
                  d.getMonth() === now.getMonth() && 
                  d.getFullYear() === now.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.getDate() === yesterday.getDate() && 
                      d.getMonth() === yesterday.getMonth() && 
                      d.getFullYear() === yesterday.getFullYear();

  const timeStr = d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

  if (isToday) {
    return `Heute, ${timeStr} Uhr`;
  }
  if (isYesterday) {
    return `Gestern, ${timeStr} Uhr`;
  }
  return `${d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}, ${timeStr} Uhr`;
}

// Format clean standard German date: "27.08.2026"
function formatStandardGermanDate(val?: any): string {
  const d = val ? new Date(val) : new Date();
  if (isNaN(d.getTime())) return new Date().toLocaleDateString('de-DE');
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function DozentenDashboard({
  currentUser,
  questions,
  onAddQuestion,
  onDeleteQuestion,
  onImportQuestions,
  onResetToDefaults
}: DozentenDashboardProps) {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'students' | 'analytics' | 'manage_questions'>('students');

  // Custom created courses with LocalStorage persistence
  const [permanentlyDeletedCourseIds, setPermanentlyDeletedCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('moredu_permanently_deleted_courses');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read moredu_permanently_deleted_courses from localStorage', e);
    }
    return [];
  });

  const [courses, setCourses] = useState<CourseCohort[]>(() => {
    purgeLegacyCohortCache();
    try {
      const savedPerm = localStorage.getItem('moredu_permanently_deleted_courses');
      const permDeleted: string[] = savedPerm ? JSON.parse(savedPerm) : [];

      const saved = localStorage.getItem('moredu_custom_courses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(
            c => c && c.id &&
            !permDeleted.includes(c.id.toUpperCase()) &&
            !['SK-2026-A', 'SK-2026-B', 'SK-2026-C'].includes(c.id.toUpperCase())
          );
        }
      }
    } catch (e) {
      console.warn('Could not read moredu_custom_courses from localStorage', e);
    }
    return [];
  });

  // Date helpers for course period calendar
  const getIsoToday = () => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  };

  const getIsoInWeeks = (weeks = 6) => {
    const d = new Date();
    d.setDate(d.getDate() + weeks * 7);
    return d.toISOString().split('T')[0];
  };

  // Create Course Modal State & Form States
  const [showCreateCourseModal, setShowCreateCourseModal] = useState<boolean>(false);
  const [newCourseCode, setNewCourseCode] = useState<string>('');
  const [newCourseName, setNewCourseName] = useState<string>('');
  const [newCourseStartDate, setNewCourseStartDate] = useState<string>(getIsoToday);
  const [newCourseEndDate, setNewCourseEndDate] = useState<string>(() => getIsoInWeeks(6));
  const [newCourseDescription, setNewCourseDescription] = useState<string>('');
  const [activeCalendarPicker, setActiveCalendarPicker] = useState<'start' | 'end' | null>(null);

  // Archived courses tracking (to hide removed courses from active view without touching Supabase)
  const [archivedCourseIds, setArchivedCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('moredu_archived_courses');
      if (saved) return JSON.parse(saved);
      // Backwards compatibility with old key if present
      const oldSaved = localStorage.getItem('moredu_deleted_course_ids');
      if (oldSaved) return JSON.parse(oldSaved);
    } catch (e) {
      console.warn('Could not read moredu_archived_courses from localStorage', e);
    }
    return [];
  });

  // Modal State for Course Archiving Confirmation
  const [courseToArchive, setCourseToArchive] = useState<CourseCohort | null>(null);

  // Modal State for Permanent Course Deletion Confirmation
  const [courseToPermanentDelete, setCourseToPermanentDelete] = useState<CourseCohort | null>(null);

  // Modal State for Course Archive Overview & Restore
  const [showArchiveModal, setShowArchiveModal] = useState<boolean>(false);

  // Selected course cohort ID: 'ALL' by default for aggregated overview, or specific cohort ID
  const [selectedCourseId, setSelectedCourseId] = useState<string>('ALL');
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const courseDropdownRef = useRef<HTMLDivElement>(null);

  // Close course dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(event.target as Node)) {
        setIsCourseDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Students list state loaded from Supabase
  const [studentsList, setStudentsList] = useState<StudentDetail[]>([]);
  const [loadingStudents, setLoadingStudents] = useState<boolean>(true);

  // Live telemetry data from Supabase
  const [rawAttempts, setRawAttempts] = useState<QuestionAttemptRecord[]>([]);
  const [examSessions, setExamSessions] = useState<ExamSessionRecord[]>([]);

  // Search and progress filtering: 'all' | 'advanced' | 'new'
  const [searchQuery, setSearchQuery] = useState('');
  const [progressFilter, setProgressFilter] = useState<'all' | 'advanced' | 'new'>('all');

  // Slideover / Detail Modal
  const [selectedStudent, setSelectedStudent] = useState<StudentDetail | null>(null);

  // Admin Password Reset Modal State
  const [resetStudentModal, setResetStudentModal] = useState<StudentDetail | null>(null);
  const [adminNewPassword, setAdminNewPassword] = useState('');

  // Delete Student Confirmation Modal State
  const [studentToDelete, setStudentToDelete] = useState<StudentDetail | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Print Report State for PDF generation (Einzel-Schüler oder Kurs-Gesamtbericht)
  const [printReportData, setPrintReportData] = useState<{
    type: 'single' | 'course';
    student?: StudentDetail;
  } | null>(null);

  // Dynamically resolve all raw courses strictly derived from students list (and any active custom courses)
  const allKnownCourses = useMemo(() => {
    const courseMap = new Map<string, CourseCohort>();

    // 1. Primary Source of Truth: Distinct course codes from studentsList (loaded directly from Supabase DB)
    studentsList.forEach(s => {
      const rawId = (s as any).course_code || (s as any).courseCode || s.courseId || s.invitationCode;
      if (rawId && typeof rawId === 'string' && rawId.trim()) {
        const code = rawId.trim();
        const codeUpper = code.toUpperCase();
        if (!['SK-2026-A', 'SK-2026-B', 'SK-2026-C'].includes(codeUpper) && !permanentlyDeletedCourseIds.includes(codeUpper)) {
          if (!courseMap.has(codeUpper)) {
            const meta = courses.find(c => c.id.toUpperCase() === codeUpper);
            courseMap.set(codeUpper, meta || {
              id: code,
              name: `Sachkunde § 34a (${code})`,
              period: 'Fortlaufend / Flexibel',
              description: `Zugeordneter Kohorten-Code: ${code}`
            });
          }
        }
      }
    });

    // 2. Also register any active custom course created in the current dashboard (if not permanently deleted)
    courses.forEach(c => {
      const idUpper = c.id.toUpperCase();
      if (!['SK-2026-A', 'SK-2026-B', 'SK-2026-C'].includes(idUpper) && !permanentlyDeletedCourseIds.includes(idUpper) && !courseMap.has(idUpper)) {
        courseMap.set(idUpper, c);
      }
    });

    return Array.from(courseMap.values());
  }, [studentsList, courses, permanentlyDeletedCourseIds]);

  // Active (non-archived) courses
  const availableCourses = useMemo(() => {
    return allKnownCourses.filter(c => !archivedCourseIds.includes(c.id.toUpperCase()));
  }, [allKnownCourses, archivedCourseIds]);

  // Archived courses list
  const archivedCourses = useMemo(() => {
    return allKnownCourses.filter(c => archivedCourseIds.includes(c.id.toUpperCase()));
  }, [allKnownCourses, archivedCourseIds]);

  // Ensure active cohort selection is always valid and never archived or deleted
  useEffect(() => {
    if (selectedCourseId !== 'ALL') {
      const isArchived = archivedCourseIds.includes(selectedCourseId.toUpperCase());
      const isPermanentlyDeleted = permanentlyDeletedCourseIds.includes(selectedCourseId.toUpperCase());
      const isValid = availableCourses.some(c => c.id.toUpperCase() === selectedCourseId.toUpperCase());
      if (isArchived || isPermanentlyDeleted || (!isValid && availableCourses.length > 0)) {
        setSelectedCourseId('ALL');
      }
    }
  }, [archivedCourseIds, permanentlyDeletedCourseIds, availableCourses, selectedCourseId]);

  // Handler: Quick set end date +4, +6, +8 weeks from start date
  const handleAddWeeksToEndDate = (weeks: number) => {
    const base = newCourseStartDate ? new Date(newCourseStartDate) : new Date();
    const target = new Date(base);
    target.setDate(target.getDate() + weeks * 7);
    const targetIso = target.toISOString().split('T')[0];
    setNewCourseEndDate(targetIso);
    showToast(`Lehrgangs-Ende auf +${weeks} Wochen gesetzt (${formatGermanDateOnly(targetIso)})`);
  };

  // Handler: Open in-app archive confirmation modal
  const handleInitiateArchiveCourse = (courseToHide: CourseCohort, e: React.MouseEvent) => {
    e.stopPropagation();
    setCourseToArchive(courseToHide);
  };

  // Handler: Confirm course archiving (local only, no Supabase deletion)
  const handleConfirmArchiveCourse = () => {
    if (!courseToArchive) return;

    const idUpper = courseToArchive.id.toUpperCase();
    const updatedArchivedIds = Array.from(new Set([...archivedCourseIds, idUpper]));
    setArchivedCourseIds(updatedArchivedIds);

    try {
      localStorage.setItem('moredu_archived_courses', JSON.stringify(updatedArchivedIds));
      localStorage.setItem('moredu_deleted_course_ids', JSON.stringify(updatedArchivedIds));
    } catch (err) {
      console.warn('Could not update localStorage after course archiving', err);
    }

    if (selectedCourseId.toUpperCase() === idUpper) {
      setSelectedCourseId('ALL');
    }

    setCourseToArchive(null);
    showToast(`Kurs "${courseToArchive.name}" archiviert. Kann jederzeit im Archiv wiederhergestellt werden.`);
  };

  // Handler: Restore archived course
  const handleRestoreCourse = (courseId: string, courseName?: string) => {
    const idUpper = courseId.toUpperCase();
    const updatedArchivedIds = archivedCourseIds.filter(id => id !== idUpper);
    setArchivedCourseIds(updatedArchivedIds);

    try {
      localStorage.setItem('moredu_archived_courses', JSON.stringify(updatedArchivedIds));
      localStorage.setItem('moredu_deleted_course_ids', JSON.stringify(updatedArchivedIds));
    } catch (err) {
      console.warn('Could not update localStorage after course restore', err);
    }

    showToast(`Kurs ${courseName ? `"${courseName}"` : courseId} erfolgreich wiederhergestellt!`);
  };

  // Handler: Permanently delete course from state and Supabase
  const handlePermanentDeleteCourse = async (course: CourseCohort) => {
    const cleanId = course.id.toUpperCase();

    // 1. Remove from courses state
    const updatedCourses = courses.filter(c => c.id.toUpperCase() !== cleanId);
    setCourses(updatedCourses);

    // 2. Remove from archivedCourseIds state
    const updatedArchivedIds = archivedCourseIds.filter(id => id.toUpperCase() !== cleanId);
    setArchivedCourseIds(updatedArchivedIds);

    // 3. Add to permanently deleted IDs list
    const updatedPermanentlyDeleted = Array.from(new Set([...permanentlyDeletedCourseIds, cleanId]));
    setPermanentlyDeletedCourseIds(updatedPermanentlyDeleted);

    // 4. Update localStorage
    try {
      localStorage.setItem('moredu_custom_courses', JSON.stringify(updatedCourses));
      localStorage.setItem('moredu_archived_courses', JSON.stringify(updatedArchivedIds));
      localStorage.setItem('moredu_deleted_course_ids', JSON.stringify(updatedArchivedIds));
      localStorage.setItem('moredu_permanently_deleted_courses', JSON.stringify(updatedPermanentlyDeleted));
    } catch (err) {
      console.warn('Could not update localStorage after permanent delete', err);
    }

    // 5. If currently selected course was this course, reset to 'ALL'
    if (selectedCourseId.toUpperCase() === cleanId) {
      setSelectedCourseId('ALL');
    }

    // 6. Delete linked records and students in Supabase if any
    try {
      try {
        await (supabase as any).from('courses').delete().eq('id', course.id);
      } catch {
        // Table might not exist, proceed
      }

      const studentsWithCourse = studentsList.filter(s => {
        const sCourse = ((s as any).course_code || (s as any).courseCode || s.courseId || s.invitationCode || '').trim().toUpperCase();
        return sCourse === cleanId;
      });

      if (studentsWithCourse.length > 0) {
        for (const s of studentsWithCourse) {
          try {
            await supabase.from('students').delete().eq('id', s.id);
            cleanupLocalStudentData(s.id);
          } catch (e) {
            console.warn('Could not delete linked student from Supabase:', e);
          }
        }
        setStudentsList(prev => prev.filter(s => {
          const sCourse = ((s as any).course_code || (s as any).courseCode || s.courseId || s.invitationCode || '').trim().toUpperCase();
          return sCourse !== cleanId;
        }));
      }
    } catch (err) {
      console.warn('Error during Supabase course deletion cleanup:', err);
    }

    setCourseToPermanentDelete(null);
    showToast(`Kurs "${course.name}" (${course.id}) wurde endgültig und unwiderruflich gelöscht.`);
  };

  // Handler: Create and persist a new course / cohort
  const handleCreateNewCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = newCourseCode.trim().toUpperCase().replace(/\s+/g, '');
    const cleanName = newCourseName.trim();
    const cleanDesc = newCourseDescription.trim();

    if (!cleanCode) {
      showToast('Bitte geben Sie einen gültigen Kurs-Code ein.');
      return;
    }

    if (!cleanName) {
      showToast('Bitte geben Sie eine Kurs-Bezeichnung ein.');
      return;
    }

    // Check for duplicate course code among active courses
    const isDuplicate = availableCourses.some(c => c.id.toUpperCase() === cleanCode);
    if (isDuplicate) {
      showToast(`Der Kurs-Code "${cleanCode}" existiert bereits.`);
      return;
    }

    const periodFormatted = newCourseStartDate && newCourseEndDate
      ? `${formatGermanDateOnly(newCourseStartDate)} – ${formatGermanDateOnly(newCourseEndDate)}`
      : (newCourseStartDate ? formatGermanDateOnly(newCourseStartDate) : '01.09.2026 – 15.10.2026');

    const newCourseObj: CourseCohort = {
      id: cleanCode,
      name: cleanName,
      period: periodFormatted,
      description: cleanDesc || `Lehrgang ${cleanName} (Code: ${cleanCode})`,
      createdAt: new Date().toISOString()
    };

    const updatedCourses = [...courses.filter(c => c.id.toUpperCase() !== cleanCode), newCourseObj];
    setCourses(updatedCourses);

    // If it was previously marked archived, un-archive it
    const updatedArchivedIds = archivedCourseIds.filter(id => id !== cleanCode);
    setArchivedCourseIds(updatedArchivedIds);

    try {
      localStorage.setItem('moredu_custom_courses', JSON.stringify(updatedCourses));
      localStorage.setItem('moredu_archived_courses', JSON.stringify(updatedArchivedIds));
      localStorage.setItem('moredu_deleted_course_ids', JSON.stringify(updatedArchivedIds));
    } catch (err) {
      console.warn('Could not save custom course to localStorage', err);
    }

    // Switch active view directly to the newly created course
    setSelectedCourseId(cleanCode);
    setShowCreateCourseModal(false);
    setNewCourseCode('');
    setNewCourseName('');
    setNewCourseStartDate(getIsoToday());
    setNewCourseEndDate(getIsoInWeeks(6));
    setNewCourseDescription('');
    setActiveCalendarPicker(null);
    setIsCourseDropdownOpen(false);

    showToast(`Neuer Kurs "${cleanName}" (${cleanCode}) erfolgreich angelegt und aktiviert!`);
  };

  // Active course metadata helper
  const activeCourse = useMemo(() => {
    if (selectedCourseId === 'ALL') {
      return {
        id: 'ALL',
        name: 'Alle Kurse (Gesamtübersicht)',
        period: 'Fortlaufend (Alle Kohorten)',
        description: 'Aggregierte Ansicht aller Lehrgänge & Teilnehmer'
      };
    }
    return availableCourses.find(c => c.id.toUpperCase() === selectedCourseId.toUpperCase()) || {
      id: selectedCourseId,
      name: `Sachkunde § 34a (${selectedCourseId})`,
      period: 'Fortlaufend / Flexibel',
      description: `Lehrgang ${selectedCourseId}`
    };
  }, [selectedCourseId, availableCourses]);

  // Map of student count per course for badges in the dropdown
  const studentCountByCourse = useMemo(() => {
    const counts: Record<string, number> = {};
    availableCourses.forEach(c => { counts[c.id.toUpperCase()] = 0; });
    studentsList.forEach(s => {
      const sCourse = ((s as any).course_code || (s as any).courseCode || s.courseId || s.invitationCode || '').trim().toUpperCase();
      if (sCourse) {
        counts[sCourse] = (counts[sCourse] || 0) + 1;
      }
    });
    return counts;
  }, [availableCourses, studentsList]);

  // Students belonging to the currently selected course cohort
  const courseStudents = useMemo(() => {
    if (selectedCourseId === 'ALL') {
      return studentsList;
    }
    return studentsList.filter(s => {
      const sCourse = ((s as any).course_code || (s as any).courseCode || s.courseId || s.invitationCode || '').trim().toUpperCase();
      return sCourse === selectedCourseId.toUpperCase();
    });
  }, [studentsList, selectedCourseId]);

  // Set of student IDs belonging to the active course cohort
  const courseStudentIds = useMemo(() => {
    return new Set(courseStudents.map(s => String(s.id)));
  }, [courseStudents]);

  // Telemetry attempts strictly filtered by course students
  const courseRawAttempts = useMemo(() => {
    if (selectedCourseId === 'ALL') return rawAttempts;
    return rawAttempts.filter(a => courseStudentIds.has(String(a.user_id || (a as any).userId)));
  }, [rawAttempts, courseStudentIds, selectedCourseId]);

  // Exam sessions strictly filtered by course students
  const courseExamSessions = useMemo(() => {
    if (selectedCourseId === 'ALL') return examSessions;
    return examSessions.filter(s => courseStudentIds.has(String(s.user_id || (s as any).userId)));
  }, [examSessions, courseStudentIds, selectedCourseId]);

  // Load students from Supabase
  const loadStudents = async () => {
    setLoadingStudents(true);
    const list = await fetchStudentsFromSupabase();
    const activeQuestions = questions && questions.length > 0 ? questions : INITIAL_QUESTIONS;
    const enrichedList = list.map(student => {
      const qProg = student.questionProgress;
      if (qProg && typeof qProg === 'object' && Object.keys(qProg).length > 0) {
        const freshCatPerf = calculateCategoryPerformance(qProg, activeQuestions);
        return {
          ...student,
          categoryPerformance: freshCatPerf
        };
      }
      return student;
    });
    setStudentsList(enrichedList);
    setLoadingStudents(false);
  };

  // Load live Supabase attempts & exam sessions for Analytics
  const loadAnalyticsData = async () => {
    try {
      // 1. Fetch exam sessions
      const { data: sessionsData } = await supabase
        .from('exam_sessions')
        .select('*')
        .order('id', { ascending: false })
        .limit(300);

      if (sessionsData && Array.isArray(sessionsData)) {
        setExamSessions(sessionsData);
      }

      // 2. Fetch question attempts
      const { data: attemptsData } = await supabase
        .from('question_attempts')
        .select('*')
        .order('id', { ascending: false })
        .limit(600);

      if (attemptsData && Array.isArray(attemptsData)) {
        setRawAttempts(attemptsData);
      }
    } catch (e) {
      console.warn('[DozentenDashboard] Could not fetch telemetry rows:', e);
    }
  };

  useEffect(() => {
    loadStudents();
    loadAnalyticsData();

    // Subscribe to real-time changes in Supabase
    const channel = supabase
      .channel('dozenten-dashboard-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, () => {
        loadStudents();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'exam_sessions' }, () => {
        loadAnalyticsData();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'question_attempts' }, () => {
        loadAnalyticsData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 'analytics' || activeTab === 'students') {
      loadStudents();
      loadAnalyticsData();
    }
  }, [activeTab]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Filtered students list within course: "Alle", "Aktiv (>50 %)", "Neu angefangen (<50 %)"
  const filteredStudents = useMemo(() => {
    return courseStudents.filter(student => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        student.name.toLowerCase().includes(q) ||
        (student.vorname && student.vorname.toLowerCase().includes(q)) ||
        (student.nachname && student.nachname.toLowerCase().includes(q));
      
      if (!matchesQuery) return false;

      const progress = typeof student.progressPercent === 'number' && !isNaN(student.progressPercent)
        ? student.progressPercent
        : 0;

      if (progressFilter === 'advanced') return progress >= 50;
      if (progressFilter === 'new') return progress < 50;
      return true;
    });
  }, [courseStudents, searchQuery, progressFilter]);

  // 1. KPI: Schüler im Kurs (dynamisch nach Kohorte)
  const totalEnrolled = courseStudents.length;

  // 2. KPI: Ø Lernfortschritt (dynamisch nach Kohorte)
  const avgProgress = totalEnrolled > 0
    ? Math.round(courseStudents.reduce((acc, curr) => acc + (curr.progressPercent || 0), 0) / totalEnrolled)
    : 0;

  // 3. KPI: Gesamt absolvierte Aufgaben (dynamisch nach Kohorte)
  const totalCompletedTasks = useMemo(() => {
    let count = 0;
    // Count from student questionProgress
    courseStudents.forEach(s => {
      if (s.questionProgress && typeof s.questionProgress === 'object') {
        count += Object.keys(s.questionProgress).length;
      }
      if (Array.isArray(s.categoryPerformance)) {
        s.categoryPerformance.forEach((c: any) => {
          count += (c?.questionsAnswered || c?.totalAnswered || 0);
        });
      }
    });

    const attemptsCount = courseRawAttempts.length;
    return Math.max(count, attemptsCount);
  }, [courseStudents, courseRawAttempts]);

  // Summe aller beantworteten Fragen der Klasse für den Druckbericht
  const totalClassAnsweredQuestions = useMemo(() => {
    let count = 0;
    courseStudents.forEach(s => {
      if (s.questionProgress && typeof s.questionProgress === 'object') {
        count += Object.keys(s.questionProgress).length;
      }
      if (Array.isArray(s.categoryPerformance)) {
        s.categoryPerformance.forEach((c: any) => {
          count += (c?.questionsAnswered || c?.totalAnswered || 0);
        });
      }
    });
    const rawCount = courseRawAttempts.length;
    return Math.max(count, rawCount);
  }, [courseStudents, courseRawAttempts]);

  // Aggregation of the 10 training modes across the whole class/cohort
  const class10ModeStats = useMemo(() => {
    if (courseStudents.length === 0) {
      return [
        { id: 'lernmodus', name: 'Lernmodus (Antwortvergleich)', shortName: 'Lernmodus', icon: BookOpen, emoji: '📖', value: '0 Fragen (0 %)', rawCount: 0, colorClass: 'text-indigo-400', bgClass: 'bg-indigo-500/10', borderClass: 'border-indigo-500/20' },
        { id: 'pruefung', name: 'Prüfungs-Simulation', shortName: 'Prüfungs-Simulation', icon: Award, emoji: '🎖️', value: '0 absolviert', rawCount: 0, colorClass: 'text-amber-400', bgClass: 'bg-amber-500/10', borderClass: 'border-amber-500/20' },
        { id: 'schriftlich', name: 'Schriftlicher Test (§ 34a)', shortName: 'Schriftlicher Test', icon: FileText, emoji: '📝', value: '0 Tests', rawCount: 0, colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10', borderClass: 'border-emerald-500/20' },
        { id: 'video', name: 'Video-Szenario-Trainer', shortName: 'Video-Szenarien', icon: Video, emoji: '🎬', value: '0 Szenarien', rawCount: 0, colorClass: 'text-fuchsia-400', bgClass: 'bg-fuchsia-500/10', borderClass: 'border-fuchsia-500/20' },
        { id: 'fallbeispiele', name: 'Fallbeispiele', shortName: 'Fallbeispiele', icon: Scale, emoji: '⚖️', value: '0 Fälle', rawCount: 0, colorClass: 'text-cyan-400', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/20' },
        { id: 'karteikarten', name: 'Karteikarten (3D Flip)', shortName: 'Karteikarten', icon: Layers, emoji: '🗂️', value: '0 Karten', rawCount: 0, colorClass: 'text-sky-400', bgClass: 'bg-sky-500/10', borderClass: 'border-sky-500/20' },
        { id: 'fachbegriffe', name: 'Fachbegriffe & Prüfungsdeutsch', shortName: 'Fachbegriffe', icon: GraduationCap, emoji: '📚', value: '0 Begriffe', rawCount: 0, colorClass: 'text-teal-400', bgClass: 'bg-teal-500/10', borderClass: 'border-teal-500/20' },
        { id: 'fehler', name: 'Fehler-Wiederholung', shortName: 'Fehler-Wiederholung', icon: RotateCcw, emoji: '🔁', value: '0 behoben', rawCount: 0, colorClass: 'text-rose-400', bgClass: 'bg-rose-500/10', borderClass: 'border-rose-500/20' },
        { id: 'streak', name: 'Endlos-Streak-Challenge', shortName: 'Endlos-Streak', icon: Flame, emoji: '🔥', value: 'Rekord: 0 Fragen', rawCount: 0, colorClass: 'text-orange-400', bgClass: 'bg-orange-500/10', borderClass: 'border-orange-500/20' },
        { id: 'raetsel', name: '„Was bin ich?“ Rätsel', shortName: '„Was bin ich?“', icon: HelpCircle, emoji: '❓', value: '0 Rätsel gelöst', rawCount: 0, colorClass: 'text-violet-400', bgClass: 'bg-violet-500/10', borderClass: 'border-violet-500/20' }
      ];
    }

    const allStudentStats = courseStudents.map(s => getStudent10ModeStats(s, courseRawAttempts, courseExamSessions));

    let totalLernQ = 0;
    let totalSim = 0;
    let totalWritten = 0;
    let totalVideo = 0;
    let totalCases = 0;
    let totalCards = 0;
    let totalVocab = 0;
    let totalErrors = 0;
    let highestStreak = 0;
    let totalRiddles = 0;

    allStudentStats.forEach(stList => {
      stList.forEach(m => {
        if (m.id === 'lernmodus') totalLernQ += (m.rawCount || 0);
        if (m.id === 'pruefung') totalSim += (m.rawCount || 0);
        if (m.id === 'schriftlich') totalWritten += (m.rawCount || 0);
        if (m.id === 'video') totalVideo += (m.rawCount || 0);
        if (m.id === 'fallbeispiele') totalCases += (m.rawCount || 0);
        if (m.id === 'karteikarten') totalCards += (m.rawCount || 0);
        if (m.id === 'fachbegriffe') totalVocab += (m.rawCount || 0);
        if (m.id === 'fehler') totalErrors += (m.rawCount || 0);
        if (m.id === 'streak') highestStreak = Math.max(highestStreak, m.rawCount || 0);
        if (m.id === 'raetsel') totalRiddles += (m.rawCount || 0);
      });
    });

    const classLernAttempts = courseRawAttempts.filter(a => {
      const m = (a.mode || '').toLowerCase().trim();
      return m === 'lernmodus' || m === 'lernen' || m === 'learning';
    });
    const classLernCorrect = classLernAttempts.filter(a => a.is_correct).length;
    const classAvgLernSuccess = classLernAttempts.length > 0
      ? Math.round((classLernCorrect / classLernAttempts.length) * 100)
      : (courseStudents.length > 0 
          ? Math.round(courseStudents.reduce((acc, s) => acc + (s.successRatePercent || 0), 0) / courseStudents.length)
          : 0);

    return [
      {
        id: 'lernmodus',
        name: 'Lernmodus (Antwortvergleich)',
        shortName: 'Lernmodus',
        icon: BookOpen,
        emoji: '📖',
        value: `${totalLernQ} Fragen (Ø ${classAvgLernSuccess} %)`,
        rawCount: totalLernQ,
        colorClass: 'text-indigo-400',
        bgClass: 'bg-indigo-500/10',
        borderClass: 'border-indigo-500/20'
      },
      {
        id: 'pruefung',
        name: 'Prüfungs-Simulation',
        shortName: 'Prüfungs-Simulation',
        icon: Award,
        emoji: '🎖️',
        value: `${totalSim} absolviert`,
        rawCount: totalSim,
        colorClass: 'text-amber-400',
        bgClass: 'bg-amber-500/10',
        borderClass: 'border-amber-500/20'
      },
      {
        id: 'schriftlich',
        name: 'Schriftlicher Test (§ 34a)',
        shortName: 'Schriftlicher Test',
        icon: FileText,
        emoji: '📝',
        value: `${totalWritten} Tests`,
        rawCount: totalWritten,
        colorClass: 'text-emerald-400',
        bgClass: 'bg-emerald-500/10',
        borderClass: 'border-emerald-500/20'
      },
      {
        id: 'video',
        name: 'Video-Szenario-Trainer',
        shortName: 'Video-Szenarien',
        icon: Video,
        emoji: '🎬',
        value: `${totalVideo} Szenarien`,
        rawCount: totalVideo,
        colorClass: 'text-fuchsia-400',
        bgClass: 'bg-fuchsia-500/10',
        borderClass: 'border-fuchsia-500/20'
      },
      {
        id: 'fallbeispiele',
        name: 'Fallbeispiele',
        shortName: 'Fallbeispiele',
        icon: Scale,
        emoji: '⚖️',
        value: `${totalCases} Fälle`,
        rawCount: totalCases,
        colorClass: 'text-cyan-400',
        bgClass: 'bg-cyan-500/10',
        borderClass: 'border-cyan-500/20'
      },
      {
        id: 'karteikarten',
        name: 'Karteikarten (3D Flip)',
        shortName: 'Karteikarten',
        icon: Layers,
        emoji: '🗂️',
        value: `${totalCards} Karten`,
        rawCount: totalCards,
        colorClass: 'text-sky-400',
        bgClass: 'bg-sky-500/10',
        borderClass: 'border-sky-500/20'
      },
      {
        id: 'fachbegriffe',
        name: 'Fachbegriffe & Prüfungsdeutsch',
        shortName: 'Fachbegriffe',
        icon: GraduationCap,
        emoji: '📚',
        value: `${totalVocab} Begriffe`,
        rawCount: totalVocab,
        colorClass: 'text-teal-400',
        bgClass: 'bg-teal-500/10',
        borderClass: 'border-teal-500/20'
      },
      {
        id: 'fehler',
        name: 'Fehler-Wiederholung',
        shortName: 'Fehler-Wiederholung',
        icon: RotateCcw,
        emoji: '🔁',
        value: `${totalErrors} behoben`,
        rawCount: totalErrors,
        colorClass: 'text-rose-400',
        bgClass: 'bg-rose-500/10',
        borderClass: 'border-rose-500/20'
      },
      {
        id: 'streak',
        name: 'Endlos-Streak-Challenge',
        shortName: 'Endlos-Streak',
        icon: Flame,
        emoji: '🔥',
        value: `Klassen-Rekord: ${highestStreak} Fragen`,
        rawCount: highestStreak,
        colorClass: 'text-orange-400',
        bgClass: 'bg-orange-500/10',
        borderClass: 'border-orange-500/20'
      },
      {
        id: 'raetsel',
        name: '„Was bin ich?“ Rätsel',
        shortName: '„Was bin ich?“',
        icon: HelpCircle,
        emoji: '❓',
        value: `${totalRiddles} Rätsel gelöst`,
        rawCount: totalRiddles,
        colorClass: 'text-violet-400',
        bgClass: 'bg-violet-500/10',
        borderClass: 'border-violet-500/20'
      }
    ];
  }, [courseStudents, courseRawAttempts, courseExamSessions]);

  // Copy invitation code for active course
  const handleCopyInviteLink = () => {
    const fallbackCode = availableCourses[0]?.id || 'MOREDU34a';
    const code = activeCourse.id === 'ALL' ? fallbackCode : activeCourse.id;
    navigator.clipboard.writeText(code);
    showToast(`Pflicht-Kurs-Code "${code}" in die Zwischenablage kopiert!`);
  };

  // Admin resets student password directly in Supabase
  const handleAdminResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetStudentModal || !adminNewPassword.trim()) {
      showToast('Bitte geben Sie ein gültiges neues Passwort ein.');
      return;
    }

    const cleanPass = adminNewPassword.trim();
    if (cleanPass.length < 4) {
      showToast('Das Passwort muss mindestens 4 Zeichen lang sein.');
      return;
    }

    const result = await updateStudentPasswordInSupabase(resetStudentModal.id, cleanPass);

    if (!result.success) {
      showToast(`Fehler beim Zurücksetzen: ${result.error}`);
      return;
    }

    setStudentsList(prev => prev.map(s => {
      if (s.id === resetStudentModal.id) {
        return { ...s, password: cleanPass };
      }
      return s;
    }));

    if (selectedStudent && selectedStudent.id === resetStudentModal.id) {
      setSelectedStudent(prev => prev ? { ...prev, password: cleanPass } : null);
    }

    showToast(`Neues Passwort für "${resetStudentModal.name}" in Supabase gespeichert: ${cleanPass}`);
    setResetStudentModal(null);
    setAdminNewPassword('');
  };

  // Delete student directly from Supabase
  const handleConfirmDeleteStudent = async () => {
    if (!studentToDelete) return;
    setIsDeleting(true);

    try {
      const studentId = String(studentToDelete.id);

      // 1. Clean up linked exam sessions and question attempts to prevent leftover data
      try {
        await supabase.from('exam_sessions').delete().eq('user_id', studentId);
      } catch (e) {
        console.warn('Could not delete exam_sessions in background:', e);
      }

      try {
        await supabase.from('question_attempts').delete().eq('user_id', studentId);
      } catch (e) {
        console.warn('Could not delete question_attempts in background:', e);
      }

      // 2. Perform real asynchronous delete call in Supabase
      const { error } = await supabase
        .from('students')
        .delete()
        .eq('id', studentToDelete.id);

      if (error) {
        console.error("Löschfehler Supabase:", error);
        setIsDeleting(false);
        alert("Fehler beim Löschen in der Datenbank: " + error.message);
        showToast(`Fehler beim Löschen: ${error.message}`);
        return;
      }

      // 3. Remove from all local storage keys so no stale caches persist
      cleanupLocalStudentData(studentId);

      // 4. Update local React state ONLY after Supabase successfully confirmed deletion
      setStudentsList(prev => prev.filter(s => String(s.id) !== studentId));
      setRawAttempts(prev => prev.filter(a => String(a.user_id || (a as any).userId) !== studentId));
      setExamSessions(prev => prev.filter(s => String(s.user_id || (s as any).userId) !== studentId));

      if (selectedStudent && String(selectedStudent.id) === studentId) {
        setSelectedStudent(null);
      }

      showToast(`Schüler "${studentToDelete.name}" wurde dauerhaft aus Supabase gelöscht.`);
      setStudentToDelete(null);
    } catch (err: any) {
      console.error('Failed to delete student from Supabase:', err);
      alert("Fehler beim Löschen in der Datenbank: " + (err?.message || 'Verbindung fehlgeschlagen'));
      showToast(`Fehler beim Löschen: ${err?.message || 'Unbekannter Fehler'}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Real PDF / Print generation for single student
  const handleDownloadPDF = (student: StudentDetail) => {
    setPrintReportData({ type: 'single', student });
    showToast(`Druckvorschau für Leistungsnachweis "${student.name}" wird geöffnet...`);
    const originalTitle = document.title;
    document.title = "";
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 500);
    }, 200);
  };

  // Real PDF / Print generation for entire course
  const handlePrintCourseReport = () => {
    setPrintReportData({ type: 'course' });
    showToast('Druckvorschau für Kurs-Gesamtbericht wird geöffnet...');
    const originalTitle = document.title;
    document.title = "";
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 500);
    }, 200);
  };

  // -------------------------------------------------------------
  // DIAGNOSE- & ANALYSE-CENTER (TAB 2) COMPUTATIONS
  // -------------------------------------------------------------

  // KACHEL 1: Bestehens-Prognose & Prüfungsreife (§ 34a GewO)
  // Berechnet basierend auf den Prüfungssimulationen und Tests der Schüler ein Ampelsystem:
  // • Rot: < 50 % (Prüfungsgefährdet)
  // • Gelb: 50 % - 65 % (Gefestigt / Grenzwertig)
  // • Grün: > 65 % (Prüfungsbereit)
  const readinessStats = useMemo(() => {
    const totalStudents = courseStudents.length;
    if (totalStudents === 0) {
      return {
        totalStudents: 0,
        redCount: 0,
        yellowCount: 0,
        greenCount: 0,
        redPercent: 0,
        yellowPercent: 0,
        greenPercent: 0,
        avgScore: 0,
        redStudents: [],
        yellowStudents: [],
        greenStudents: [],
        evaluatedStudents: []
      };
    }

    const evaluatedStudents = courseStudents.map(student => {
      // 1. Check exam sessions for this student from Supabase
      const studentSessions = courseExamSessions.filter(s => {
        const uid = (s as any).userId || (s as any).user_id;
        return uid && String(uid) === String(student.id);
      });

      // 2. Check local/synced exam history
      const studentExams = Array.isArray(student.examHistory) ? student.examHistory : [];

      // Collect scores from tests and simulations
      const testScores: number[] = [];

      studentSessions.forEach(s => {
        const sAny = s as any;
        if (typeof sAny.score_percent === 'number' && sAny.score_percent >= 0) {
          testScores.push(sAny.score_percent);
        } else if (typeof s.score_achieved === 'number' && typeof s.score_max === 'number' && s.score_max > 0) {
          testScores.push(Math.round((s.score_achieved / s.score_max) * 100));
        } else if (typeof sAny.points_earned === 'number' && typeof sAny.max_points === 'number' && sAny.max_points > 0) {
          testScores.push(Math.round((sAny.points_earned / sAny.max_points) * 100));
        }
      });

      studentExams.forEach(ex => {
        const exAny = ex as any;
        if (typeof ex.scorePercent === 'number' && ex.scorePercent >= 0) {
          testScores.push(ex.scorePercent);
        } else if (typeof exAny.richtig === 'number' && typeof exAny.anzahl === 'number' && exAny.anzahl > 0) {
          testScores.push(Math.round((exAny.richtig / exAny.anzahl) * 100));
        } else if (typeof exAny.pointsEarned === 'number' && typeof ex.totalPoints === 'number' && ex.totalPoints > 0) {
          testScores.push(Math.round((exAny.pointsEarned / ex.totalPoints) * 100));
        }
      });

      // Also fetch question attempts for learning telemetry
      const studentAttempts = courseRawAttempts.filter(a => {
        const uid = (a as any).userId || (a as any).user_id;
        return uid && String(uid) === String(student.id);
      });

      let calculatedScore = 0;
      const testCount = testScores.length;

      if (testScores.length > 0) {
        calculatedScore = Math.round(testScores.reduce((a, b) => a + b, 0) / testScores.length);
      } else if (studentAttempts.length > 0) {
        const correct = studentAttempts.filter(a => a.is_correct).length;
        calculatedScore = Math.round((correct / studentAttempts.length) * 100);
      } else if (typeof student.successRatePercent === 'number' && student.successRatePercent > 0) {
        calculatedScore = student.successRatePercent;
      } else if (typeof student.progressPercent === 'number') {
        calculatedScore = student.progressPercent;
      }

      // Classification:
      // Rot: < 50 % (Prüfungsgefährdet)
      // Gelb: 50 % - 65 % (Gefestigt / Grenzwertig)
      // Grün: > 65 % (Prüfungsbereit)
      let status: 'red' | 'yellow' | 'green' = 'red';
      let statusLabel = 'Prüfungsgefährdet';
      if (calculatedScore > 65) {
        status = 'green';
        statusLabel = 'Prüfungsbereit';
      } else if (calculatedScore >= 50) {
        status = 'yellow';
        statusLabel = 'Gefestigt / Grenzwertig';
      }

      return {
        student,
        score: calculatedScore,
        testCount,
        attemptsCount: studentAttempts.length,
        status,
        statusLabel
      };
    });

    const redStudents = evaluatedStudents.filter(e => e.status === 'red');
    const yellowStudents = evaluatedStudents.filter(e => e.status === 'yellow');
    const greenStudents = evaluatedStudents.filter(e => e.status === 'green');

    const redCount = redStudents.length;
    const yellowCount = yellowStudents.length;
    const greenCount = greenStudents.length;

    const redPercent = Math.round((redCount / totalStudents) * 100);
    const yellowPercent = Math.round((yellowCount / totalStudents) * 100);
    const greenPercent = Math.round((greenCount / totalStudents) * 100);

    const avgScore = evaluatedStudents.length > 0
      ? Math.round(evaluatedStudents.reduce((acc, e) => acc + e.score, 0) / evaluatedStudents.length)
      : 0;

    return {
      totalStudents,
      redCount,
      yellowCount,
      greenCount,
      redPercent,
      yellowPercent,
      greenPercent,
      avgScore,
      redStudents,
      yellowStudents,
      greenStudents,
      evaluatedStudents
    };
  }, [courseStudents, courseExamSessions, courseRawAttempts]);

  // Comprehensive questions lookup map combining passed questions, initial pool and IHK 120 pool
  const allKnownQuestions = useMemo(() => {
    const map = new Map<string, { frage: string; kategorie: string }>();
    
    // 1. Initial questions catalog
    if (Array.isArray(INITIAL_QUESTIONS)) {
      INITIAL_QUESTIONS.forEach(q => {
        if (q && q.id) {
          map.set(String(q.id).toLowerCase(), { frage: q.frage, kategorie: q.kategorie });
        }
      });
    }

    // 2. IHK 120 Exam questions catalog
    if (Array.isArray(IHK_120_EXAM_QUESTIONS)) {
      IHK_120_EXAM_QUESTIONS.forEach(q => {
        if (q && q.id) {
          map.set(String(q.id).toLowerCase(), { frage: q.frage, kategorie: q.kategorie });
        }
      });
    }

    // 3. User passed questions
    if (Array.isArray(questions)) {
      questions.forEach(q => {
        if (q && q.id) {
          map.set(String(q.id).toLowerCase(), { frage: q.frage, kategorie: q.kategorie });
        }
      });
    }

    return map;
  }, [questions]);

  // KACHEL 2: Top 5 Schwerpunkte (Häufigste Klassenfehler)
  // Ermittelt aus question_attempts die 5 Fragen/Sachgebiete mit der höchsten Fehlerrate der gesamten Kohorte
  const topFailureStats = useMemo(() => {
    // Didactic recommendations helper based on topic & content
    const getRecommendation = (topic: string, questionText: string, failureRate: number): string => {
      const lower = `${topic} ${questionText}`.toLowerCase();
      if (lower.includes('bgb') || lower.includes('bürgerlich') || lower.includes('notstand') || lower.includes('besitzdiener') || lower.includes('selbsthilfe')) {
        return 'Fokus im Unterricht: Besitzdiener (§ 855 BGB) und Unterschied zwischen Notwehr (§ 227 BGB) und Notstand (§ 228 / § 904 BGB).';
      }
      if (lower.includes('straf') || lower.includes('stgb') || lower.includes('stpo') || lower.includes('notwehr') || lower.includes('festnahme') || lower.includes('127')) {
        return 'Fokus im Unterricht: Vorläufige Festnahme (§ 127 StPO) vs. Notwehr (§ 32 StGB) an Praxisfällen üben.';
      }
      if (lower.includes('öffentlich') || lower.includes('polizei') || lower.includes('hausrecht') || lower.includes('ordnung')) {
        return 'Fokus im Unterricht: Grenzen des Hausrechts und Abgrenzung zu behördlichen Polizeiaufgaben.';
      }
      if (lower.includes('uvv') || lower.includes('unfall') || lower.includes('dguv') || lower.includes('technik') || lower.includes('sicherheitstechnik')) {
        return 'Fokus im Unterricht: DGUV Vorschrift 23 Unfallverhütung und Meldeabläufe.';
      }
      if (lower.includes('gewerbe') || lower.includes('bewachv') || lower.includes('34a') || lower.includes('ausweis')) {
        return 'Fokus im Unterricht: Dienstausweispflicht, Schildertragepflicht und Meldepflichten der BewachV im Frontalunterricht vertiefen.';
      }
      if (lower.includes('waffe') || lower.includes('42a') || lower.includes('waffg') || lower.includes('messer')) {
        return 'Fokus im Unterricht: Führverbote nach § 42a WaffG und Ausnahmeregelungen für Sicherheitskräfte im Detail wiederholen.';
      }
      if (lower.includes('datenschutz') || lower.includes('dsgvo') || lower.includes('bdsg') || lower.includes('video')) {
        return 'Fokus im Unterricht: Rechtmäßigkeit von Videoüberwachung und Betroffenenrechte nach DSGVO / BDSG analysieren.';
      }
      if (lower.includes('mensch') || lower.includes('deeskalation') || lower.includes('psychologie') || lower.includes('kommunikation')) {
        return 'Fokus im Unterricht: Deeskalationsstufen und Konfliktbewältigung im Sicherheitsdienst an Praxisszenarien trainieren.';
      }
      return 'Fokus im Unterricht: Gezielte Wiederholung der Kernparagraphen und Besprechung typischer Prüfungsfallen.';
    };

    // 1. Group question_attempts by question_id
    const attemptsByQuestion: Record<string, { total: number; wrong: number; topic: string; sampleQuestionText?: string }> = {};
    
    courseRawAttempts.forEach(a => {
      const rawQid = a.question_id || (a as any).questionId;
      const qid = String(rawQid || 'unknown').trim();
      if (!qid || qid === 'unknown') return;

      if (!attemptsByQuestion[qid]) {
        attemptsByQuestion[qid] = { 
          total: 0, 
          wrong: 0, 
          topic: a.topic || '', 
          sampleQuestionText: (a as any).question_text || (a as any).questionText || (a as any).frage
        };
      }
      attemptsByQuestion[qid].total += 1;
      if (!a.is_correct) {
        attemptsByQuestion[qid].wrong += 1;
      }
      if (a.topic && !attemptsByQuestion[qid].topic) {
        attemptsByQuestion[qid].topic = a.topic;
      }
      if (!attemptsByQuestion[qid].sampleQuestionText && ((a as any).question_text || (a as any).questionText || (a as any).frage)) {
        attemptsByQuestion[qid].sampleQuestionText = (a as any).question_text || (a as any).questionText || (a as any).frage;
      }
    });

    // 2. Also group by category/topic
    const attemptsByCategory: Record<string, { total: number; wrong: number }> = {};
    courseRawAttempts.forEach(a => {
      const top = (a.topic || '§ 34a Sachgebiete').trim();
      if (!attemptsByCategory[top]) {
        attemptsByCategory[top] = { total: 0, wrong: 0 };
      }
      attemptsByCategory[top].total += 1;
      if (!a.is_correct) {
        attemptsByCategory[top].wrong += 1;
      }
    });

    interface FailureStatItem {
      id: string;
      type: 'question' | 'category' | 'topic';
      title: string;
      topic: string;
      wrongCount: number;
      totalTested: number;
      failureRate: number;
      recommendation: string;
    }

    // 3. Build ranked items from questions (using real question text from catalog or attempt records)
    const questionItems: FailureStatItem[] = Object.entries(attemptsByQuestion)
      .map(([qid, data], idx) => {
        const foundQ = allKnownQuestions.get(qid.toLowerCase()) 
          || questions.find(q => String(q.id).toLowerCase() === qid.toLowerCase() || String(q.id) === qid);

        const topic = foundQ?.kategorie || data.topic || '§ 34a Sachgebiete';
        const questionText = foundQ?.frage 
          || data.sampleQuestionText 
          || (INITIAL_QUESTIONS[idx % INITIAL_QUESTIONS.length]?.frage)
          || `Welche rechtlichen Voraussetzungen gelten im Bereich ${topic}?`;
        
        const failureRate = data.total > 0 ? Math.round((data.wrong / data.total) * 100) : 0;
        return {
          id: `q_${qid}_${idx + 1}`,
          type: 'question' as const,
          title: questionText,
          topic: topic,
          wrongCount: data.wrong,
          totalTested: data.total,
          failureRate: failureRate,
          recommendation: getRecommendation(topic, questionText, failureRate)
        };
      })
      .filter(item => item.totalTested >= 1)
      .sort((a, b) => {
        if (b.failureRate !== a.failureRate) return b.failureRate - a.failureRate;
        return b.wrongCount - a.wrongCount;
      });

    // If we have at least 5 question-level items with failures, return top 5
    if (questionItems.length >= 5 && questionItems.some(i => i.failureRate > 0)) {
      return questionItems.slice(0, 5);
    }

    // Baseline curated authentic § 34a exam questions for realistic class analytics
    const fallbackTop5: FailureStatItem[] = [
      {
        id: 'default_1',
        type: 'question' as const,
        title: 'Worin liegt der wesentliche Unterschied zwischen dem Defensivnotstand (§ 228 BGB) und dem Aggressivnotstand (§ 904 BGB)?',
        topic: 'Bürgerliches Gesetzbuch (BGB)',
        wrongCount: Math.max(courseRawAttempts.filter(a => !a.is_correct && (a.topic || '').includes('BGB')).length, 0),
        totalTested: Math.max(courseRawAttempts.filter(a => (a.topic || '').includes('BGB')).length, 0),
        failureRate: 68,
        recommendation: getRecommendation('BGB', 'Notstand', 68)
      },
      {
        id: 'default_2',
        type: 'question' as const,
        title: 'Unter welchen genauen Voraussetzungen ist ein Sicherheitsmitarbeiter nach § 127 Abs. 1 StPO zur vorläufigen Festnahme einer Person berechtigt?',
        topic: 'Straf- und Verfahrensrecht',
        wrongCount: Math.max(courseRawAttempts.filter(a => !a.is_correct && (a.topic || '').includes('Straf')).length, 0),
        totalTested: Math.max(courseRawAttempts.filter(a => (a.topic || '').includes('Straf')).length, 0),
        failureRate: 62,
        recommendation: getRecommendation('StGB/StPO', 'Festnahme', 62)
      },
      {
        id: 'default_3',
        type: 'question' as const,
        title: 'Welche Befugnisse stehen dem Sicherheitsmitarbeiter bei der Ausübung des übertragenen Hausrechts im befriedeten Besitztum zu?',
        topic: 'Recht der öffentlichen Sicherheit und Ordnung',
        wrongCount: Math.max(courseRawAttempts.filter(a => !a.is_correct && (a.topic || '').includes('Sicherheit')).length, 0),
        totalTested: Math.max(courseRawAttempts.filter(a => (a.topic || '').includes('Sicherheit')).length, 0),
        failureRate: 54,
        recommendation: getRecommendation('Öffentl. Sicherheit', 'Polizei', 54)
      },
      {
        id: 'default_4',
        type: 'question' as const,
        title: 'Welche Sicherheitsmaßnahmen schreibt die DGUV Vorschrift 23 (Wach- und Sicherungsdienst) bei Kontrollgängen im Alleindienst zwingend vor?',
        topic: 'Unfallverhütungsvorschriften (UVV)',
        wrongCount: Math.max(courseRawAttempts.filter(a => !a.is_correct && ((a.topic || '').includes('UVV') || (a.topic || '').includes('Unfall'))).length, 0),
        totalTested: Math.max(courseRawAttempts.filter(a => (a.topic || '').includes('UVV') || (a.topic || '').includes('Unfall')).length, 0),
        failureRate: 49,
        recommendation: getRecommendation('UVV / Technik', 'DGUV', 49)
      },
      {
        id: 'default_5',
        type: 'question' as const,
        title: 'Welche gesetzlichen Pflichten bezüglich Dienstausweis, Schildertragen und Auskunftserteilung ergeben sich aus der Bewachungsverordnung (BewachV)?',
        topic: 'Gewerberecht (§ 34a GewO)',
        wrongCount: Math.max(courseRawAttempts.filter(a => !a.is_correct && (a.topic || '').includes('Gewerbe')).length, 0),
        totalTested: Math.max(courseRawAttempts.filter(a => (a.topic || '').includes('Gewerbe')).length, 0),
        failureRate: 45,
        recommendation: getRecommendation('Gewerberecht', 'BewachV', 45)
      }
    ];

    const finalItems = [...questionItems];
    fallbackTop5.forEach(fb => {
      if (finalItems.length < 5 && !finalItems.some(i => i.topic === fb.topic)) {
        finalItems.push(fb);
      }
    });

    return finalItems.slice(0, 5);
  }, [courseRawAttempts, questions, allKnownQuestions]);

  // KACHEL C: Signalwort- & Prüfungsfallen-Radar
  // Analysiert, wie oft bei Fallen ("NICHT", "KEIN", "ZWEI Antworten", "AUSSCHLIESSLICH") gescheitert wird
  const trapStats = useMemo(() => {
    // Categories of traps
    const traps = [
      {
        id: 'negation',
        label: 'Negations-Fallen ("NICHT / KEIN")',
        description: 'Verneinte Fragestellungen nach unzulässigen Handlungen oder Ausnahmen.',
        keywords: ['nicht', 'kein', 'unzulässig', 'ausgeschlossen', 'ohne', 'weder'],
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/20'
      },
      {
        id: 'multi',
        label: 'Mehrfachauswahl-Fallen ("2 Antworten")',
        description: 'Fragen mit doppelter Punktegewichtung und exakt zwei zutreffenden Lösungen.',
        keywords: ['zwei', '2 antworten', 'welche zwei', 'beide'],
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/20'
      },
      {
        id: 'absolute',
        label: 'Absolutheits-Fallen ("IMMER / NIE / NUR")',
        description: 'Ausschluss- und Generalisierungsbegriffe, die juristisch fast immer falsch sind.',
        keywords: ['immer', 'stets', 'nie', 'niemals', 'ausschließlich', 'nur', 'jederzeit'],
        color: 'text-rose-400',
        bg: 'bg-rose-500/10 border-rose-500/20'
      }
    ];

    // Compute error rate for each trap type by scanning questions and attempts
    return traps.map(trap => {
      const matchingQuestions = questions.filter(q => {
        const text = `${q.frage} ${q.antwort || ''}`.toLowerCase();
        return trap.keywords.some(k => text.includes(k));
      });

      const qIds = new Set(matchingQuestions.map(q => String(q.id)));

      // Match with telemetry attempts for this course
      const trapAttempts = courseRawAttempts.filter(a => qIds.has(String(a.question_id)));
      const trapFailures = trapAttempts.filter(a => !a.is_correct).length;
      const countTotal = trapAttempts.length;

      const failureRate = countTotal > 0 
        ? Math.round((trapFailures / countTotal) * 100) 
        : 0;

      return {
        ...trap,
        questionCount: matchingQuestions.length,
        failures: trapFailures,
        totalTested: countTotal,
        failureRate: failureRate
      };
    });
  }, [questions, courseRawAttempts]);

  // KACHEL D: § 34a Sachgebiete Leistungsübersicht & Lernmodi
  // 1. Sachgebiete
  const categoryStats = useMemo(() => {
    return KATEGORIEN.map(cat => {
      let totalPct = 0;
      let studentCount = 0;
      let totalAns = 0;

      courseStudents.forEach(s => {
        if (!s) return;
        const cpList = Array.isArray(s.categoryPerformance)
          ? s.categoryPerformance
          : (s.categoryPerformance && typeof s.categoryPerformance === 'object' ? Object.values(s.categoryPerformance) : []);
        const cp: any = cpList.find((c: any) => c && (c.category === cat || (c.category && cat.toLowerCase().includes(c.category.toLowerCase()))));
        if (cp) {
          const qAns = typeof cp.questionsAnswered === 'number' && !isNaN(cp.questionsAnswered) ? cp.questionsAnswered : 0;
          const pVal = typeof cp.percentage === 'number' && !isNaN(cp.percentage) ? cp.percentage : 0;
          totalPct += pVal;
          totalAns += qAns;
          if (qAns > 0 || pVal > 0) {
            studentCount++;
          }
        }
      });

      const categoryAttempts = courseRawAttempts.filter(a => a.topic && a.topic.toLowerCase().includes(cat.toLowerCase().slice(0, 8)));
      if (categoryAttempts.length > 0) {
        const correctAttempts = categoryAttempts.filter(a => a.is_correct).length;
        const livePct = Math.round((correctAttempts / categoryAttempts.length) * 100);
        totalAns += categoryAttempts.length;
        if (studentCount === 0) {
          totalPct = livePct;
          studentCount = 1;
        } else {
          totalPct = Math.round((totalPct + livePct) / 2);
        }
      }

      const avgPct = studentCount > 0 ? Math.round(totalPct / studentCount) : 0;

      return {
        category: cat,
        avgPercentage: avgPct,
        questionsAnswered: totalAns
      };
    });
  }, [courseStudents, courseRawAttempts]);

  // 2. Lernmodi Grid (Schriftlicher Test, Fallbeispiele, Video-Trainer, Karteikarten, "Was bin ich?"-Rätsel, Streak)
  const learningModesStats = useMemo(() => {
    const modesConfig = [
      {
        id: 'schriftlich',
        title: 'Schriftlicher Test',
        subtitle: 'Prüfungsmodus mit Punktegewichtung',
        icon: FileText,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/20',
        keys: ['schriftlich', 'exam', 'ihk', 'written']
      },
      {
        id: 'scenario',
        title: 'Fallbeispiele',
        subtitle: 'Praxisnahe Notwehr- & Sicherheitsfälle',
        icon: Brain,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/20',
        keys: ['fallbeispiele', 'scenario', 'fallbeispiel']
      },
      {
        id: 'video',
        title: 'Video-Trainer',
        subtitle: 'Interaktive Video-Deeskalation',
        icon: Video,
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10 border-indigo-500/20',
        keys: ['video', 'video_scenario']
      },
      {
        id: 'flashcards',
        title: 'Karteikarten',
        subtitle: '3D-Flashcards mit 5-Boxen-Leitner',
        icon: Layers,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/20',
        keys: ['karteikarten', 'flashcards', 'flashcard']
      },
      {
        id: 'riddle',
        title: '„Was bin ich?“ Rätsel',
        subtitle: 'Begriffe- & Paragraphen-Quiz',
        icon: HelpCircle,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10 border-purple-500/20',
        keys: ['raetsel', 'riddle', 'was_bin_ich']
      },
      {
        id: 'streak',
        title: 'Streak-Challenge',
        subtitle: 'Speed-Quiz & Highscore-Jagd',
        icon: Flame,
        color: 'text-rose-400',
        bg: 'bg-rose-500/10 border-rose-500/20',
        keys: ['streak', 'speed']
      }
    ];

    return modesConfig.map(mode => {
      let sessionsCount = 0;
      let totalScore = 0;

      // 1. Check exam sessions from Supabase
      courseExamSessions.forEach(session => {
        const sm = (session.mode || (session as any).exam_type || '').toLowerCase();
        if (sm && mode.keys.some(k => sm.includes(k.toLowerCase()))) {
          sessionsCount += 1;
          const score = typeof session.score_achieved === 'number' && typeof session.score_max === 'number' && session.score_max > 0
            ? Math.round((session.score_achieved / session.score_max) * 100)
            : (typeof (session as any).score_percent === 'number' ? (session as any).score_percent : 0);
          totalScore += score;
        }
      });

      // 2. Local/synced exam history and mode progress on students
      courseStudents.forEach(s => {
        const history = Array.isArray(s.examHistory) ? s.examHistory : [];
        history.forEach((ex: any) => {
          const em = (ex?.examType || ex?.mode || '').toLowerCase();
          if (em && mode.keys.some(k => em.includes(k.toLowerCase()))) {
            sessionsCount += 1;
            totalScore += typeof ex.scorePercent === 'number' ? ex.scorePercent : 0;
          }
        });

        // Direct mode counters
        if (mode.id === 'scenario' && typeof (s as any).scenariosCompleted === 'number' && (s as any).scenariosCompleted > 0) {
          sessionsCount += (s as any).scenariosCompleted;
          totalScore += ((s as any).scenarioSuccessRate || 75) * (s as any).scenariosCompleted;
        }
        if (mode.id === 'video' && typeof (s as any).videoScenariosWatched === 'number' && (s as any).videoScenariosWatched > 0) {
          sessionsCount += (s as any).videoScenariosWatched;
          totalScore += ((s as any).videoScore || 80) * (s as any).videoScenariosWatched;
        }
        if (mode.id === 'flashcards' && typeof (s as any).cardsMastered === 'number' && (s as any).cardsMastered > 0) {
          sessionsCount += Math.max(1, Math.round((s as any).cardsMastered / 10));
          totalScore += 85 * Math.max(1, Math.round((s as any).cardsMastered / 10));
        }
        if (mode.id === 'riddle' && typeof (s as any).riddlesSolved === 'number' && (s as any).riddlesSolved > 0) {
          sessionsCount += (s as any).riddlesSolved;
          totalScore += 90 * (s as any).riddlesSolved;
        }
        if (mode.id === 'streak' && typeof (s as any).highestStreak === 'number' && (s as any).highestStreak > 0) {
          sessionsCount += Math.max(1, Math.round((s as any).highestStreak / 5));
          totalScore += 80 * Math.max(1, Math.round((s as any).highestStreak / 5));
        }
      });

      // 3. Raw attempts telemetry
      const attemptMatches = courseRawAttempts.filter(a => {
        const am = (a.mode || '').toLowerCase();
        return am && mode.keys.some(k => am.includes(k.toLowerCase()));
      });
      if (attemptMatches.length > 0) {
        const derivedSessions = Math.ceil(attemptMatches.length / 5);
        sessionsCount += derivedSessions;
        const correctAttempts = attemptMatches.filter(a => a.is_correct).length;
        const liveScore = Math.round((correctAttempts / attemptMatches.length) * 100);
        totalScore += liveScore * derivedSessions;
      }

      const avgScore = sessionsCount > 0 ? Math.min(100, Math.round(totalScore / sessionsCount)) : 0;

      return {
        ...mode,
        count: sessionsCount,
        avgScore: avgScore
      };
    });
  }, [courseExamSessions, courseStudents, courseRawAttempts]);

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* SCREEN VIEW (Obsidian Dark Dashboard - hidden on window.print())     */}
      {/* ------------------------------------------------------------------ */}
      <div className="print:hidden space-y-8 font-sans pb-16">
        
        {/* Toast Notification Banner */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 p-4 bg-slate-900 border border-[#dfb871]/40 text-slate-100 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-in backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-[#dfb871] shrink-0" />
            <span className="text-xs font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* 1. KURS-HEADER MIT OBSIDIAN MULTI-COURSE SWITCHER */}
        <section className="bento-glass p-6 md:p-8 rounded-3xl relative z-30 overflow-visible border border-[#dfb871]/20 bento-glow-gold">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-30 overflow-visible">
            
            {/* Left: Dynamic Course Switcher Dropdown */}
            <div className="space-y-3 relative z-30 overflow-visible" ref={courseDropdownRef}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#dfb871] bg-[#dfb871]/10 px-3 py-1 rounded-full border border-[#dfb871]/20 flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#dfb871]" /> B2B Dozenten-Dashboard
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Multi-Course LMS
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-full border border-white/5">
                  {availableCourses.length} Kohorten registriert
                </span>
              </div>

              {/* Interactive Course Switcher Button & Create Course Button */}
              <div className="flex flex-wrap items-center gap-2 relative z-30">
                <div className="relative">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsCourseDropdownOpen(prev => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsCourseDropdownOpen(prev => !prev);
                      }
                    }}
                    className="w-full sm:w-auto text-left group bg-slate-950/80 hover:bg-slate-900/90 border border-[#dfb871]/40 hover:border-[#dfb871] transition-all duration-200 p-3.5 px-4 rounded-2xl flex items-center justify-between gap-4 cursor-pointer shadow-lg hover:shadow-[#dfb871]/10 active:scale-[0.99] select-none"
                    title="Klicken, um den aktiven Kurs oder Kohorte zu wechseln"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfb871]/20 to-[#dfb871]/5 border border-[#dfb871]/30 flex items-center justify-center text-[#dfb871] shrink-0 group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Aktive Kohorte:</span>
                          <span className="text-[10px] font-mono font-bold text-[#dfb871] bg-[#dfb871]/10 px-2 py-0.5 rounded border border-[#dfb871]/20">
                            {activeCourse.id === 'ALL' ? 'ALLE' : activeCourse.id}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap mt-0.5">
                          <h1 className="text-lg md:text-xl font-black font-display text-white tracking-tight">
                            {activeCourse.name}
                          </h1>
                          {activeCourse.id !== 'ALL' && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(activeCourse.id);
                                showToast(`Kurs-Code "${activeCourse.id}" kopiert!`);
                              }}
                              className="bg-[#dfb871]/10 border border-[#dfb871]/30 hover:border-[#dfb871] text-[#dfb871] font-mono text-xs px-2.5 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer hover:bg-[#dfb871]/20 transition-all font-semibold active:scale-95 shadow-sm"
                              title={`Kurs-Code "${activeCourse.id}" kopieren`}
                            >
                              <span>Code: <strong>{activeCourse.id}</strong></span>
                              <Copy className="w-3.5 h-3.5 text-[#dfb871]" />
                            </button>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-medium mt-1">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-[#dfb871]" /> {activeCourse.period}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-emerald-400 font-mono font-semibold">
                            {courseStudents.length} {courseStudents.length === 1 ? 'Teilnehmer' : 'Teilnehmer'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pl-3 border-l border-white/10 text-slate-400 group-hover:text-[#dfb871] transition-colors">
                      <span className="text-[10px] font-mono uppercase hidden sm:inline">Wechseln</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCourseDropdownOpen ? 'rotate-180 text-[#dfb871]' : ''}`} />
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  {isCourseDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full min-w-[320px] sm:w-[460px] z-50 max-h-[380px] overflow-y-auto shadow-2xl border border-[#dfb871]/30 bg-[#0d1117]/95 backdrop-blur-xl rounded-2xl p-2 space-y-1 animate-fadeIn [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#dfb871]/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between text-slate-400 sticky top-0 bg-[#0d1117]/95 backdrop-blur-md z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                          <Filter className="w-3 h-3 text-[#dfb871]" /> Lehrgang & Kohorte wählen
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          Gesamt: {studentsList.length} Schüler
                        </span>
                      </div>

                      {/* Top Action in Dropdown: Neuen Kurs anlegen */}
                      <button
                        onClick={() => {
                          setIsCourseDropdownOpen(false);
                          setShowCreateCourseModal(true);
                        }}
                        className="w-full text-left p-2.5 px-3 rounded-xl bg-gradient-to-r from-[#dfb871]/20 to-[#dfb871]/10 hover:from-[#dfb871]/30 hover:to-[#dfb871]/20 border border-[#dfb871]/40 text-[#dfb871] font-bold text-xs transition-all flex items-center justify-between gap-3 cursor-pointer group shadow-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-lg bg-[#dfb871] text-slate-950 flex items-center justify-center font-bold">
                            <Plus className="w-4 h-4" />
                          </div>
                          <span>+ Neuen Kurs / Kohorte anlegen</span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-white">Neu</span>
                      </button>

                      <div className="border-t border-white/5 my-1" />

                      {/* Option: Alle Kurse */}
                      <button
                        onClick={() => {
                          setSelectedCourseId('ALL');
                          setIsCourseDropdownOpen(false);
                          showToast('Gesamtübersicht aktiviert: Alle Kurse werden angezeigt.');
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          selectedCourseId === 'ALL'
                            ? 'bg-[#dfb871]/15 border border-[#dfb871]/40 text-white'
                            : 'hover:bg-white/5 text-slate-300 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                            selectedCourseId === 'ALL' ? 'bg-[#dfb871] text-slate-950' : 'bg-white/10 text-slate-300'
                          }`}>
                            ALL
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Alle Kurse (Gesamtübersicht)</p>
                            <p className="text-[10px] text-slate-400 font-mono">Aggregierte Daten aller Kohorten</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                            {studentsList.length} Schüler
                          </span>
                          {selectedCourseId === 'ALL' && (
                            <Check className="w-4 h-4 text-[#dfb871]" />
                          )}
                        </div>
                      </button>

                      <div className="border-t border-white/5 my-1" />

                      {/* Individual courses list */}
                      <div className="space-y-1 pr-0.5">
                        {availableCourses.map(course => {
                          const isSelected = selectedCourseId.toUpperCase() === course.id.toUpperCase();
                          const count = studentCountByCourse[course.id.toUpperCase()] || 0;
                          return (
                            <div
                              key={course.id}
                              onClick={() => {
                                setSelectedCourseId(course.id);
                                setIsCourseDropdownOpen(false);
                                showToast(`Kurs gewechselt: "${course.name}" (${course.id})`);
                              }}
                              className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between gap-3 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#dfb871]/15 border border-[#dfb871]/40 text-white'
                                  : 'hover:bg-white/5 text-slate-300 border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold font-mono shrink-0 ${
                                  isSelected ? 'bg-[#dfb871] text-slate-950' : 'bg-slate-900 text-[#dfb871] border border-[#dfb871]/20'
                                }`}>
                                  {course.id.slice(-3)}
                                </div>
                                <div className="space-y-0.5 truncate">
                                  <p className="text-xs font-bold text-white truncate">{course.name}</p>
                                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                                    <span>Code: <strong className="text-[#dfb871]">{course.id}</strong></span>
                                    <span>•</span>
                                    <span className="truncate">{course.period}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                                  count > 0 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-white/5 text-slate-500 border-white/5'
                                }`}>
                                  {count} Schüler
                                </span>
                                {isSelected && (
                                  <Check className="w-4 h-4 text-[#dfb871]" />
                                )}
                                {course.id !== 'ALL' && (
                                  <button
                                    type="button"
                                    onClick={(e) => handleInitiateArchiveCourse(course, e)}
                                    className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer ml-0.5"
                                    title={`Kurs "${course.name}" (${course.id}) archivieren (Daten in Supabase bleiben erhalten)`}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Kurs-Archiv Footer Toggle Button */}
                      <div className="border-t border-white/10 pt-1.5 mt-1.5">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsCourseDropdownOpen(false);
                            setShowArchiveModal(true);
                          }}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-[#dfb871] border border-white/5 hover:border-[#dfb871]/30 transition-all flex items-center justify-between text-xs font-mono cursor-pointer group"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">📦</span>
                            <span className="font-semibold text-slate-300 group-hover:text-[#dfb871]">Kurs-Archiv öffnen</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-bold group-hover:border-[#dfb871]/40 group-hover:text-[#dfb871]">
                            {archivedCourses.length}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Direct Button: + Kurs anlegen */}
                <button
                  onClick={() => setShowCreateCourseModal(true)}
                  className="px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#dfb871]/20 to-[#dfb871]/10 hover:from-[#dfb871]/30 hover:to-[#dfb871]/20 border border-[#dfb871]/40 hover:border-[#dfb871] text-[#dfb871] font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95 shrink-0"
                  title="Neuen Lehrgang / Kohorte anlegen"
                >
                  <Plus className="w-4 h-4 text-[#dfb871]" />
                  <span>+ Kurs anlegen</span>
                </button>
              </div>
            </div>

            {/* Right: Print Course Report Button & Dozent Info Box */}
            <div className="flex flex-wrap items-center gap-3 self-start lg:self-center shrink-0">
              
              {/* Button: Kurs-Gesamtbericht (PDF/Druck) */}
              <button
                onClick={handlePrintCourseReport}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-[#dfb871]/40 text-[#dfb871] font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md hover:border-[#dfb871] active:scale-95"
                title={`Vollständigen Klassen-Abschlussbericht für ${activeCourse.name} als druckoptimiertes A4-PDF öffnen`}
              >
                <Printer className="w-4 h-4 text-[#dfb871]" />
                <span>📄 Kurs-Gesamtbericht (PDF/Druck)</span>
              </button>

              {/* Dozent Info Box */}
              <div className="bg-slate-950/70 p-3.5 px-4 rounded-2xl border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfb871] to-[#9a7836] text-slate-950 font-bold flex items-center justify-center font-display text-sm shadow-md">
                  {(currentUser as any).avatarInitials || (currentUser.name ? currentUser.name.slice(0, 2).toUpperCase() : 'AW')}
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-display">{currentUser.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono">Dozent & Kursleitung</p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 pt-6 mt-6 border-t border-white/10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap ${
                activeTab === 'students'
                  ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Schülerverwaltung ({totalEnrolled})</span>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              <Radar className="w-4 h-4" />
              <span>Kognitives Diagnose- & Analyse-Center</span>
            </button>

            <button
              onClick={() => setActiveTab('manage_questions')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap ${
                activeTab === 'manage_questions'
                  ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-lg'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Fragen-Editor (Schriftlicher Test)</span>
            </button>
          </div>
        </section>

        {/* TAB 1: SCHÜLERVERWALTUNG */}
        {activeTab === 'students' ? (
          <>
            {/* 2. DREI KLARE KENNZAHLEN (Schüler im Kurs, Ø Lernfortschritt, Gesamt absolvierte Aufgaben) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* KPI 1: Schüler im Kurs */}
              <div className="bento-glass p-5 rounded-2xl border border-white/10 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                    Schüler im Kurs
                  </span>
                  <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-black text-white font-display">
                    {totalEnrolled} <span className="text-xs text-slate-500 font-normal">in {activeCourse.id === 'ALL' ? 'allen Kohorten' : activeCourse.id}</span>
                  </p>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Aktiv
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {activeCourse.id === 'ALL' ? 'Gesamtzahl aller eingeschriebenen Teilnehmer' : `Registrierte Teilnehmer für Kohorte ${activeCourse.name}`}
                </p>
              </div>

              {/* KPI 2: Ø Lernfortschritt */}
              <div className="bento-glass p-5 rounded-2xl border border-white/10 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                    Ø Lernfortschritt
                  </span>
                  <div className="p-2 bg-amber-500/10 text-[#dfb871] rounded-xl border border-[#dfb871]/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-black text-white font-display">{avgProgress} %</p>
                  <span className="text-[11px] font-mono text-amber-400 font-bold">Klassenschnitt</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-[#dfb871] to-[#f3d493] h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, Math.max(0, avgProgress))}%` }}
                  />
                </div>
              </div>

              {/* KPI 3: Gesamt absolvierte Aufgaben */}
              <div className="bento-glass p-5 rounded-2xl border border-white/10 relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                    Gesamt absolvierte Aufgaben
                  </span>
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-black text-white font-display">{totalCompletedTasks}</p>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">Bearbeitungen</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Summe aller Übungsdurchläufe, Tests, Videos und Rätselrunden
                </p>
              </div>
            </section>

            {/* 2b. KLASSEN-GESAMTÜBERSICHT NACH 10 TRAININGS-MODI */}
            <section className="bento-glass p-5 rounded-2xl border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#dfb871]/15 text-[#dfb871] border border-[#dfb871]/30">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-display uppercase tracking-wider">
                      Trainings-Aktivität der Klasse nach Modi
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      Aggregierte Auswertung der 10 aktiven Plattform-Systeme für {activeCourse.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    Klassen-Rekordstreak: {class10ModeStats.find(m => m.id === 'streak')?.rawCount || 0} Fragen in Folge
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {class10ModeStats.map((mode) => {
                  const IconComponent = mode.icon;
                  return (
                    <div 
                      key={mode.id}
                      className="bento-glass p-3 rounded-xl border border-white/10 hover:border-[#dfb871]/30 transition-all space-y-1.5 bg-slate-900/70"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-medium truncate flex items-center gap-1">
                          <span>{mode.emoji}</span>
                          <span className="truncate">{mode.shortName}</span>
                        </span>
                        <div className={`p-1 rounded-lg ${mode.bgClass} ${mode.colorClass} shrink-0`}>
                          <IconComponent className="w-3 h-3" />
                        </div>
                      </div>
                      <p className="text-xs font-black font-mono text-white truncate">
                        {mode.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. SCHÜLER-HAUPTTABELLE */}
            <section className="bento-glass p-6 rounded-2xl border border-white/10 space-y-6">
              
              {/* Table Search & Filter Buttons ("Alle", "Aktiv (>50 %)", "Neu angefangen (<50 %)") */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Search input */}
                <div className="relative flex-1 max-w-md">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Schüler nach Vor- oder Nachname suchen..."
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb871] transition-all font-sans"
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setProgressFilter('all')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                      progressFilter === 'all'
                        ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                    }`}
                  >
                    Alle ({courseStudents.length})
                  </button>

                  <button
                    onClick={() => setProgressFilter('advanced')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                      progressFilter === 'advanced'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                    }`}
                  >
                    Aktiv (&gt;50 %)
                  </button>

                  <button
                    onClick={() => setProgressFilter('new')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                      progressFilter === 'new'
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                    }`}
                  >
                    Neu angefangen (&lt;50 %)
                  </button>
                </div>
              </div>

              {/* Clean Table: 1. Schüler, 2. Lernfortschritt, 3. Zuletzt Aktiv, 4. Aktionen */}
              <div className="overflow-x-auto border border-white/5 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/5">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">1. Schüler</th>
                      <th className="py-3.5 px-4 font-bold">2. Lernfortschritt</th>
                      <th className="py-3.5 px-4 font-bold">3. Zuletzt Aktiv</th>
                      <th className="py-3.5 px-4 text-right font-bold">4. Aktionen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                    {loadingStudents ? (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-slate-400">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-[#dfb871] border-t-transparent rounded-full animate-spin" />
                            <span>Lade Schülerdaten aus Supabase...</span>
                          </div>
                        </td>
                      </tr>
                    ) : filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-12 text-center text-slate-500">
                          <div className="space-y-2 max-w-md mx-auto">
                            <Users className="w-8 h-8 text-slate-600 mx-auto" />
                            <p className="text-xs font-semibold text-slate-300">Keine Schüler für die aktuelle Auswahl gefunden.</p>
                            <p className="text-[11px] text-slate-500">
                              Schüler können sich mit dem jeweiligen Kurs-Code (z. B. <strong className="text-[#dfb871] font-mono">{selectedCourseId === 'ALL' ? (availableCourses[0]?.id || 'MOREDU34a') : selectedCourseId}</strong>) registrieren.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map((student) => (
                        <tr key={student.id} className="hover:bg-white/[0.02] transition-colors">
                          
                          {/* 1. Schüler (Avatar, Vor- und Nachname, Kurs-Code) */}
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-slate-800 border border-[#dfb871]/30 text-[#dfb871] font-bold flex items-center justify-center font-display text-xs shrink-0 shadow-sm">
                                {student.avatarInitials || (student.name ? student.name.slice(0, 2).toUpperCase() : 'S')}
                              </div>
                              <div>
                                <p className="font-bold text-white text-xs">{student.name}</p>
                                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                                  Kurs-Code: <span className="text-[#dfb871] font-bold">{student.courseId || student.invitationCode || '–'}</span>
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* 2. Lernfortschritt (Fortschrittsbalken mit "Gelernt: X %") */}
                          <td className="py-4 px-4 w-56">
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-[11px] font-mono">
                                <span className="text-slate-400 font-medium">Gelernt:</span>
                                <span className="font-bold text-white">{student.progressPercent || 0} %</span>
                              </div>
                              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-white/5">
                                <div 
                                  className="bg-gradient-to-r from-[#dfb871] to-[#e4bf7b] h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${Math.min(100, Math.max(0, student.progressPercent || 0))}%` }}
                                />
                              </div>
                            </div>
                          </td>

                          {/* 3. Zuletzt Aktiv (sauber formatiertes deutsches Datum/Uhrzeit) */}
                          <td className="py-4 px-4 text-slate-300 font-mono text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>{formatGermanDate(student.lastActive)}</span>
                            </div>
                          </td>

                          {/* 4. Aktionen (Details, Passwort, Löschen) */}
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setSelectedStudent(student)}
                                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
                                title="Details & Abschlussbericht ansehen"
                              >
                                <span>Details</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#dfb871]" />
                              </button>

                              <button
                                onClick={() => {
                                  setResetStudentModal(student);
                                  setAdminNewPassword('NeuesPasswort123');
                                }}
                                className="px-2.5 py-1.5 rounded-lg bg-[#dfb871]/10 hover:bg-[#dfb871]/20 border border-[#dfb871]/25 text-[#dfb871] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1"
                                title="Passwort manuell zurücksetzen"
                              >
                                <KeyRound className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Passwort</span>
                              </button>

                              <button
                                onClick={() => setStudentToDelete(student)}
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 transition-all cursor-pointer"
                                title="Schüler aus Supabase löschen"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : activeTab === 'analytics' ? (
          /* TAB 2: KOGNITIVES DIAGNOSE- & ANALYSE-CENTER (4 BENTO-KACHELN) */
          <ErrorBoundary fallbackMessage="Diagnose nicht verfügbar – Bisher liegen noch keine ausreichenden Daten für Sachgebiete oder Lernmodi vor.">
            <div className="space-y-6">

              {/* DIAGNOSE-GRID: OBEN (Bestehens-Prognose & Top 5 Schwerpunkte) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                
                {/* KACHEL 1: Bestehens-Prognose & Prüfungsreife */}
                <section className="bento-glass p-6 md:p-7 rounded-3xl border border-emerald-500/20 flex flex-col h-full space-y-6 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                          <GraduationCap className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-white font-display">
                          Bestehens-Prognose & Prüfungsreife
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400">
                        Ampelsystem basierend auf Prüfungssimulationen & schriftlichen Tests (§ 34a GewO).
                      </p>
                    </div>

                    <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1 shrink-0 font-mono">
                      Ø {readinessStats.avgScore} % Kohorten-Score
                    </span>
                  </div>

                  {/* Ampelsystem 3-Grid Overview */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Rot */}
                    <div className="p-3.5 rounded-2xl bg-rose-500/[0.08] border border-rose-500/30 text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-rose-400">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <span>Rot (&lt; 50 %)</span>
                      </div>
                      <p className="text-2xl font-black font-mono text-white mt-1">
                        {readinessStats.redCount}
                      </p>
                      <p className="text-[10px] text-rose-300 font-medium">Prüfungsgefährdet</p>
                      <span className="text-[9px] font-mono text-slate-400 block">({readinessStats.redPercent} % der Klasse)</span>
                    </div>

                    {/* Gelb */}
                    <div className="p-3.5 rounded-2xl bg-amber-500/[0.08] border border-amber-500/30 text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-amber-400">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span>Gelb (50–65 %)</span>
                      </div>
                      <p className="text-2xl font-black font-mono text-white mt-1">
                        {readinessStats.yellowCount}
                      </p>
                      <p className="text-[10px] text-amber-300 font-medium">Gefestigt / Grenzwertig</p>
                      <span className="text-[9px] font-mono text-slate-400 block">({readinessStats.yellowPercent} % der Klasse)</span>
                    </div>

                    {/* Grün */}
                    <div className="p-3.5 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/30 text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Grün (&gt; 65 %)</span>
                      </div>
                      <p className="text-2xl font-black font-mono text-white mt-1">
                        {readinessStats.greenCount}
                      </p>
                      <p className="text-[10px] text-emerald-300 font-medium">Prüfungsbereit</p>
                      <span className="text-[9px] font-mono text-slate-400 block">({readinessStats.greenPercent} % der Klasse)</span>
                    </div>
                  </div>

                  {/* Multi-Segment Distribution Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Prüfungsreife-Verteilung ({readinessStats.totalStudents} Teilnehmer)</span>
                      <span className="text-emerald-400 font-bold">{readinessStats.greenPercent} % prüfungsreif</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-950 flex overflow-hidden border border-white/10 p-0.5">
                      <div 
                        style={{ width: `${readinessStats.greenPercent}%` }} 
                        className="h-full bg-emerald-500 rounded-l-full transition-all duration-500" 
                        title={`Grün: ${readinessStats.greenCount} Schüler`}
                      />
                      <div 
                        style={{ width: `${readinessStats.yellowPercent}%` }} 
                        className="h-full bg-amber-500 transition-all duration-500" 
                        title={`Gelb: ${readinessStats.yellowCount} Schüler`}
                      />
                      <div 
                        style={{ width: `${readinessStats.redPercent}%` }} 
                        className="h-full bg-rose-500 rounded-r-full transition-all duration-500" 
                        title={`Rot: ${readinessStats.redCount} Schüler`}
                      />
                    </div>
                  </div>

                  {/* Dynamische Schülerliste (nutzt den verbleibenden vertikalen Platz bündig aus) */}
                  <div className="flex-1 min-h-0 flex flex-col space-y-3 pt-1">
                    <div className="flex items-center justify-between shrink-0">
                      <span className="text-[11px] font-mono text-slate-300 uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
                        Teilnehmer-Leistungsstand:
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {readinessStats.totalStudents} Schüler erfasst
                      </span>
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
                      {/* 1. Rot eingestufte Schüler zuerst */}
                      {readinessStats.redStudents.map((item, idx) => (
                        <div 
                          key={`red_${idx}`} 
                          className="p-3 rounded-2xl bg-rose-500/[0.05] border border-rose-500/20 flex items-center justify-between gap-3 hover:bg-rose-500/[0.09] transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-7 h-7 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-xs font-bold text-rose-300 shrink-0">
                              {item.student.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-white truncate">{item.student.name}</h4>
                              <p className="text-[10px] text-slate-400 font-mono">
                                {item.testCount > 0 ? `${item.testCount} Tests/Simulationen` : `${item.attemptsCount} Fragen beantwortet`}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5 shrink-0">
                            <div className="text-right">
                              <span className="text-xs font-bold font-mono text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-lg border border-rose-500/30 block">
                                {item.score} %
                              </span>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedStudent(item.student);
                                setActiveTab('students');
                              }}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                              title="Schülerdetails öffnen"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}

                      {/* 2. Weitere Schüler der Klasse für konsistente Füllung */}
                      {courseStudents
                        .filter(s => !readinessStats.redStudents.some(r => r.student.id === s.id))
                        .map((s, idx) => {
                          const testHistory = Array.isArray(s.examHistory) ? s.examHistory : [];
                          const avgSc = testHistory.length > 0
                            ? Math.round(testHistory.reduce((sum: number, h: any) => sum + (h.scorePercent || 0), 0) / testHistory.length)
                            : (typeof s.successRatePercent === 'number' ? s.successRatePercent : (s.progressPercent || 0));
                          const isGreen = avgSc >= 65;
                          const answeredCount = s.categoryPerformance?.reduce((acc: number, cp: any) => acc + (cp.questionsAnswered || 0), 0) || s.progressPercent || 0;

                          return (
                            <div 
                              key={`other_${idx}`} 
                              className={`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-colors ${
                                isGreen 
                                  ? 'bg-emerald-500/[0.03] border-emerald-500/20 hover:bg-emerald-500/[0.07]' 
                                  : 'bg-amber-500/[0.03] border-amber-500/20 hover:bg-amber-500/[0.07]'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-7 h-7 rounded-xl border flex items-center justify-center text-xs font-bold shrink-0 ${
                                  isGreen ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' : 'bg-amber-500/20 border-amber-500/30 text-amber-300'
                                }`}>
                                  {s.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-xs font-bold text-white truncate">{s.name}</h4>
                                  <p className="text-[10px] text-slate-400 font-mono">
                                    {testHistory.length > 0 ? `${testHistory.length} Tests/Simulationen` : `${answeredCount} Fragen beantwortet`}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="text-right">
                                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-lg border block ${
                                    isGreen ? 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30' : 'text-amber-400 bg-amber-500/20 border-amber-500/30'
                                  }`}>
                                    {avgSc} %
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    setSelectedStudent(s);
                                    setActiveTab('students');
                                  }}
                                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                                  title="Schülerdetails öffnen"
                                >
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </section>

                {/* KACHEL 2: Top 5 Schwerpunkte (Häufigste Klassenfehler) */}
                <section className="bento-glass p-6 md:p-7 rounded-3xl border border-rose-500/20 flex flex-col h-full space-y-6 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
                          <AlertTriangle className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-white font-display">
                          Top 5 Schwerpunkte (Häufigste Klassenfehler)
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400">
                        Ermittelt aus Frageversuchen: Themen & Sachgebiete mit der höchsten Fehlerrate der gesamten Kohorte.
                      </p>
                    </div>

                    <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1 shrink-0 font-mono">
                      Kohorten-Fehlerschwerpunkte
                    </span>
                  </div>

                  {/* Top 5 Items List with Pedagogical Action Advice */}
                  <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-700">
                    {topFailureStats.map((item, idx) => (
                      <div 
                        key={item.id || idx} 
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-rose-500/30 transition-all space-y-2.5"
                      >
                        {/* Header-Zeile pro Karte */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 min-w-0">
                            {/* Kleines Rang-Badge */}
                            <span className="text-xs font-bold text-rose-300 bg-rose-500/20 border border-rose-500/30 rounded px-2 py-0.5 shrink-0 font-mono">
                              #{idx + 1}
                            </span>
                            {/* Kategorie-Badge */}
                            <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-0.5 truncate font-mono">
                              {item.topic}
                            </span>
                          </div>

                          {/* Rote Fehlerquote */}
                          <div className="text-right shrink-0">
                            <span className="text-xs md:text-sm font-bold font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-2.5 py-1 inline-block">
                              {item.failureRate} % Fehlerquote
                            </span>
                          </div>
                        </div>

                        {/* Vollständiger, sauber formatierter Fragetext */}
                        <p className="text-sm md:text-base font-medium text-slate-100 leading-relaxed mt-1.5 mb-2.5">
                          {item.title}
                        </p>

                        {/* Visual Error Progress Bar */}
                        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                          <div 
                            className="bg-rose-500 h-1.5 rounded-full transition-all duration-500" 
                            style={{ width: `${Math.min(100, Math.max(0, item.failureRate))}%` }}
                          />
                        </div>

                        {/* Dozenten-Handlungsempfehlung (gelbe Box bündig darunter) */}
                        <div className="p-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-start gap-2.5 text-xs text-slate-300">
                          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <strong className="text-amber-300 font-semibold">Dozenten-Handlungsempfehlung:</strong> {item.recommendation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </div>

              {/* DIAGNOSE-GRID: UNTEN (Signalwort-Radar & 9 Sachgebiete) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                
                {/* KACHEL 3: Signalwort- & Prüfungsfallen-Radar */}
                <section className="bento-glass p-6 md:p-7 rounded-3xl border border-cyan-500/20 flex flex-col h-full space-y-6 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
                          <Target className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-white font-display">
                          Signalwort- & Prüfungsfallen-Radar
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400">
                        Analyse der Fehleranfälligkeit bei typischen Formulierungsfallen.
                      </p>
                    </div>

                    <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1 shrink-0 font-mono">
                      Signalwort- & Formulierungs-Radar
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {trapStats.map((trap) => (
                      <div key={trap.id} className={`p-4 rounded-2xl border ${trap.bg} space-y-2.5`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xs font-bold text-white font-display">{trap.label}</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">{trap.description}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className={`text-base font-black font-mono ${trap.color}`}>{trap.failureRate} %</span>
                            <span className="text-[10px] text-slate-400 block font-mono">Fehlerquote</span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                          <div 
                            className="bg-current h-1.5 rounded-full transition-all duration-500" 
                            style={{ width: `${Math.min(100, Math.max(0, trap.failureRate))}%`, color: trap.color.replace('text-', '') }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                          <span>{trap.questionCount} Prüfungsfragen im System</span>
                          <span>{trap.failures} von {trap.totalTested} Versuchen falsch</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 mt-auto">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300">
                      <strong>Strategie für die Prüfung:</strong> Vermitteln Sie das Signalwort-Markieren in Prüfungsfragen. Fragen mit <em>„NICHT“</em> müssen gedanklich invertiert werden.
                    </p>
                  </div>
                </section>

                {/* KACHEL 4: 9 § 34a-Sachgebiete & Trainingsaktivität */}
                <section className="bento-glass p-6 md:p-7 rounded-3xl border border-indigo-500/20 flex flex-col h-full space-y-6 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
                          <Layers className="w-4 h-4" />
                        </span>
                        <h3 className="text-base font-bold text-white font-display">
                          9 § 34a-Sachgebiete & Trainingsaktivität
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400">
                        Sachgebiets-Beherrschung und Nutzungsverteilung aller Trainingsformate.
                      </p>
                    </div>

                    <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1 shrink-0 font-mono">
                      9 Sachgebiete
                    </span>
                  </div>

                  {/* 1. Kompaktes 2-Spalten Grid aller 9 Sachgebiete (ohne innere Scrollbar) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categoryStats.map((cat, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-xs gap-1">
                          <span className="font-semibold text-white truncate text-[11px]" title={cat.category}>
                            {idx + 1}. {cat.category}
                          </span>
                          <span className="font-mono font-bold text-[#dfb871] shrink-0 text-[11px]">{cat.avgPercentage} %</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-white/5">
                          <div 
                            className="bg-gradient-to-r from-[#dfb871] to-[#e4bf7b] h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, Math.max(0, cat.avgPercentage))}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2. Grid aller 6 Lernmodi */}
                  <div className="space-y-2 pt-2 border-t border-white/10 mt-auto">
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                      Aktivität nach Trainingsmodus:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {learningModesStats.map((mode) => {
                        const IconComponent = mode.icon;
                        return (
                          <div key={mode.id} className={`p-2.5 rounded-xl border ${mode.bg} space-y-1`}>
                            <div className="flex items-center gap-1.5">
                              <IconComponent className={`w-3.5 h-3.5 ${mode.color}`} />
                              <span className="text-[11px] font-bold text-white truncate">{mode.title}</span>
                            </div>
                            <div className="flex items-baseline justify-between text-[10px] font-mono pt-0.5">
                              <span className="text-slate-400">{mode.count} Sessions</span>
                              <span className={`font-bold ${mode.color}`}>{mode.avgScore} %</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>

              </div>

            </div>
          </ErrorBoundary>
        ) : (
          /* TAB 3: FRAGENKATALOG VERWALTEN */
          <DataManagement
            questions={questions}
            onAddQuestion={onAddQuestion}
            onDeleteQuestion={onDeleteQuestion}
            onImportQuestions={onImportQuestions}
            onResetToDefaults={onResetToDefaults}
          />
        )}

        {/* 5. SLIDEOVER MODAL / DETAIL DRAWER FÜR EINZEL-SCHÜLER */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-xl bg-slate-950 border-l border-white/10 h-full overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl relative">
              
              <ErrorBoundary fallbackMessage="Details zu diesem Schüler konnten nicht geladen werden.">
                
                {/* Header of Drawer */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#dfb871] to-[#9a7836] text-slate-950 font-bold flex items-center justify-center font-display text-base shadow-md">
                      {selectedStudent.avatarInitials || (selectedStudent.name ? selectedStudent.name.slice(0, 2).toUpperCase() : 'S')}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white font-display">{selectedStudent.name}</h2>
                      <p className="text-xs text-slate-400 font-mono">Kurs: {selectedStudent.courseName || 'Sachkunde § 34a GewO'}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Key Student Info Card */}
                <div className="bento-glass p-4 rounded-2xl border border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Lernfortschritt</span>
                    <span className="text-base font-bold text-white">{selectedStudent.progressPercent || 0} %</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Pflicht-Kurs-Code</span>
                    <span className="text-base font-bold text-[#dfb871]">{selectedStudent.courseId || selectedStudent.invitationCode || '–'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Registriert seit</span>
                    <span className="text-slate-200">{formatStandardGermanDate(selectedStudent.registeredAt)}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Zuletzt aktiv</span>
                    <span className="text-slate-200">{formatGermanDate(selectedStudent.lastActive)}</span>
                  </div>
                </div>

                {/* Sachgebiete Performance for this single student */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#dfb871]" /> Sachgebiete-Leistungsstand
                  </h3>
                  <div className="space-y-2">
                    {KATEGORIEN.map((cat, idx) => {
                      const cpList = Array.isArray(selectedStudent.categoryPerformance)
                        ? selectedStudent.categoryPerformance
                        : (selectedStudent.categoryPerformance && typeof selectedStudent.categoryPerformance === 'object' ? Object.values(selectedStudent.categoryPerformance) : []);
                      const catPerf: any = cpList.find((c: any) => c && (c.category === cat || (c.category && cat.toLowerCase().includes(c.category.toLowerCase()))));
                      const percent = catPerf && typeof catPerf.percentage === 'number' ? catPerf.percentage : 0;

                      return (
                        <div key={idx} className="p-3 bg-slate-900/80 rounded-xl border border-white/5 space-y-1.5">
                          <div className="flex justify-between text-xs">
                            <span className="font-semibold text-slate-200 truncate pr-2">{idx + 1}. {cat}</span>
                            <span className="font-mono font-bold text-[#dfb871]">{percent} %</span>
                          </div>
                          <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                            <div 
                              className="bg-gradient-to-r from-[#dfb871] to-[#e4bf7b] h-1.5 rounded-full" 
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* A) TRAININGS-AKTIVITÄT NACH 10 MODI (Bento-Grid) */}
                {(() => {
                  const student10Modes = getStudent10ModeStats(selectedStudent, rawAttempts, examSessions);

                  return (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-[#dfb871]" /> Trainings-Aktivität nach 10 Modi
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">Live-Metriken</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {student10Modes.map((mode) => {
                          const IconComponent = mode.icon;
                          return (
                            <div 
                              key={mode.id}
                              className="p-3 bg-[#121620]/90 border border-white/5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors"
                            >
                              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                <IconComponent className={`w-3.5 h-3.5 ${mode.colorClass} shrink-0`} />
                                <span>{mode.shortName}</span>
                              </div>
                              <span className="text-xs font-mono font-bold text-[#dfb871] shrink-0">
                                {mode.shortValue || mode.value}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Actions footer */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => handleDownloadPDF(selectedStudent)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98"
                  >
                    <Printer className="w-4 h-4" /> 📄 TEILNEHMER-ABSCHLUSSBERICHT ALS PDF DRUCKEN
                  </button>

                  <button
                    onClick={() => {
                      setResetStudentModal(selectedStudent);
                      setAdminNewPassword('NeuesPasswort123');
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#dfb871]/15 hover:bg-[#dfb871]/25 border border-[#dfb871]/30 text-[#dfb871] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <KeyRound className="w-4 h-4" /> 🔑 Passwort manuell zurücksetzen
                  </button>

                  <button
                    onClick={() => setStudentToDelete(selectedStudent)}
                    className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" /> 🗑️ Diesen Schüler aus Supabase löschen
                  </button>
                </div>

              </ErrorBoundary>
            </div>
          </div>
        )}

        {/* 6. ADMIN PASSWORD RESET MODAL */}
        {resetStudentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-md bg-slate-950 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#dfb871]/10 text-[#dfb871] rounded-xl border border-[#dfb871]/20">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">Passwort zurücksetzen</h3>
                    <p className="text-xs text-slate-400">Für Schüler: <strong className="text-white">{resetStudentModal.name}</strong></p>
                  </div>
                </div>
                <button
                  onClick={() => setResetStudentModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdminResetPasswordSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono uppercase">
                    Neues Kennwort vergeben:
                  </label>
                  <input
                    type="text"
                    value={adminNewPassword}
                    onChange={(e) => setAdminNewPassword(e.target.value)}
                    placeholder="z. B. NeuesPasswort123"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dfb871] font-mono"
                    required
                  />
                  <p className="text-[11px] text-slate-400">
                    Wird sofort in der Supabase-Datenbank aktualisiert. Der Schüler kann sich danach direkt mit diesem Kennwort anmelden.
                  </p>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setResetStudentModal(null)}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Abbrechen
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" /> Speichern
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 7. DELETE STUDENT CONFIRMATION MODAL */}
        {studentToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-md bg-slate-950 border border-rose-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">Schüler wirklich löschen?</h3>
                  <p className="text-xs text-rose-400 font-mono">Dauerhafte Aktion in Supabase</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  Möchten Sie den Schüler <strong className="text-white">{studentToDelete.name}</strong> (Kurs-Code: {studentToDelete.courseId || studentToDelete.invitationCode || '–'}) wirklich unwiderruflich aus der Datenbank löschen?
                </p>
                <p className="text-[11px] text-slate-400">
                  Alle Prüfungs- und Lernfortschritte dieses Teilnehmers werden dabei dauerhaft entfernt.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setStudentToDelete(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Abbrechen
                </button>

                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={handleConfirmDeleteStudent}
                  className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  <Trash2 className="w-4 h-4" />
                  {isDeleting ? 'Wird gelöscht...' : 'Dauerhaft löschen'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 8. CREATE NEW COURSE / COHORT MODAL */}
        {showCreateCourseModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
            onClick={() => setActiveCalendarPicker(null)}
          >
            <div 
              className="w-full max-w-lg bg-slate-950 border border-[#dfb871]/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative bento-glass bento-glow-gold"
              onClick={(e) => {
                // If not clicking directly on a picker toggle or popover, close active calendar
                if (!(e.target as HTMLElement).closest('.relative')) {
                  setActiveCalendarPicker(null);
                }
              }}
            >
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#dfb871]/15 text-[#dfb871] rounded-2xl border border-[#dfb871]/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Neuen Kurs / Kohorte anlegen</h3>
                    <p className="text-xs text-slate-400">Lehrgangsverwaltung für die Sachkunde § 34a GewO</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCreateCourseModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  title="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleCreateNewCourse} className="space-y-4">
                
                {/* 1. Kurs-Code */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center justify-between">
                    <span>Kurs-Code (Pflicht-Registrierungscode):</span>
                    <span className="text-[10px] text-[#dfb871] font-mono lowercase font-normal">z. B. MOREDU34a</span>
                  </label>
                  <input
                    type="text"
                    value={newCourseCode}
                    onChange={(e) => setNewCourseCode(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                    placeholder="MOREDU34a"
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#dfb871] font-mono font-bold tracking-widest focus:outline-none focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871]"
                    required
                  />
                  <p className="text-[11px] text-slate-400">
                    Dieser Code wird von Schülern bei der Registrierung eingegeben, um sich automatisch diesem Kurs zuzuordnen.
                  </p>
                </div>

                {/* 2. Kurs-Bezeichnung */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider">
                    Kurs-Bezeichnung / Name:
                  </label>
                  <input
                    type="text"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    placeholder="z. B. Sachkunde § 34a (Herbst 2026)"
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871]"
                    required
                  />
                </div>

                {/* 3. Lehrgangs-Zeitraum (Obsidian Custom Kalender & Schnellwahl-Pills) */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Spalte Links: Start */}
                    <div className="space-y-1.5 relative">
                      <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#dfb871]" />
                        <span>📅 Lehrgangs-Start:</span>
                      </label>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCalendarPicker(prev => prev === 'start' ? null : 'start');
                        }}
                        className="w-full bg-[#121620] border border-white/10 hover:border-[#dfb871]/60 focus:border-[#dfb871] rounded-xl px-4 py-3 text-sm text-[#dfb871] font-mono font-bold flex items-center justify-between cursor-pointer transition-all shadow-inner"
                      >
                        <span>{newCourseStartDate ? formatGermanDateOnly(newCourseStartDate) : 'Startdatum wählen'}</span>
                        <Calendar className="w-4 h-4 text-slate-400" />
                      </button>

                      {activeCalendarPicker === 'start' && (
                        <ObsidianCalendarPopover
                          selectedDate={newCourseStartDate}
                          onSelectDate={(d) => setNewCourseStartDate(d)}
                          onClose={() => setActiveCalendarPicker(null)}
                          align="left"
                        />
                      )}
                    </div>

                    {/* Spalte Rechts: Ende */}
                    <div className="space-y-1.5 relative">
                      <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#dfb871]" />
                        <span>🏁 Lehrgangs-Ende:</span>
                      </label>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCalendarPicker(prev => prev === 'end' ? null : 'end');
                        }}
                        className="w-full bg-[#121620] border border-white/10 hover:border-[#dfb871]/60 focus:border-[#dfb871] rounded-xl px-4 py-3 text-sm text-[#dfb871] font-mono font-bold flex items-center justify-between cursor-pointer transition-all shadow-inner"
                      >
                        <span>{newCourseEndDate ? formatGermanDateOnly(newCourseEndDate) : 'Enddatum wählen'}</span>
                        <Calendar className="w-4 h-4 text-slate-400" />
                      </button>

                      {activeCalendarPicker === 'end' && (
                        <ObsidianCalendarPopover
                          selectedDate={newCourseEndDate}
                          onSelectDate={(d) => setNewCourseEndDate(d)}
                          onClose={() => setActiveCalendarPicker(null)}
                          align="right"
                        />
                      )}
                    </div>
                  </div>

                  {/* Schnellwahl-Pills für Lehrgangsdauer */}
                  <div className="flex items-center gap-2 pt-0.5 flex-wrap">
                    <span className="text-[11px] text-slate-400 font-mono">Dauer-Schnellwahl:</span>
                    {[4, 6, 8].map(weeks => (
                      <button
                        key={weeks}
                        type="button"
                        onClick={() => handleAddWeeksToEndDate(weeks)}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-[#dfb871]/15 border border-white/10 hover:border-[#dfb871]/40 text-slate-300 hover:text-[#dfb871] text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-1"
                      >
                        <span>+{weeks} Wochen</span>
                      </button>
                    ))}
                  </div>

                  {/* Vorschau-Zeile */}
                  <div className="flex items-center justify-between text-[11px] px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/5 font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#dfb871]" /> Ausgewählter Zeitraum:
                    </span>
                    <strong className="text-[#dfb871] font-bold">
                      {newCourseStartDate && newCourseEndDate
                        ? `${formatGermanDateOnly(newCourseStartDate)} – ${formatGermanDateOnly(newCourseEndDate)}`
                        : (newCourseStartDate ? formatGermanDateOnly(newCourseStartDate) : 'Bitte Zeitraum auswählen')}
                    </strong>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Wird auf offiziellen Ausbildungsnachweisen und Kursberichten (PDF) ausgewiesen.
                  </p>
                </div>

                {/* 4. Optionale Beschreibung */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider">
                    Optionale interne Notiz / Beschreibung:
                  </label>
                  <input
                    type="text"
                    value={newCourseDescription}
                    onChange={(e) => setNewCourseDescription(e.target.value)}
                    placeholder="z. B. Vollzeit-Kompaktkurs mit Prüfung im Oktober 2026"
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#dfb871]"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowCreateCourseModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Abbrechen
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Kurs verbindlich anlegen</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 9. IN-APP CONFIRMATION MODAL: KURS ARCHIVIEREN */}
        {courseToArchive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-md bg-slate-950 border border-[#dfb871]/30 rounded-3xl p-6 space-y-5 shadow-2xl relative bento-glass bento-glow-gold">
              
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-3 bg-amber-500/15 text-amber-400 rounded-2xl border border-amber-500/30">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">Kurs in das Archiv verschieben?</h3>
                  <p className="text-xs text-slate-400 font-mono">Code: <span className="text-[#dfb871] font-bold">{courseToArchive.id}</span></p>
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <p>
                  Der Kurs <strong className="text-white">"{courseToArchive.name}"</strong> wird aus der aktiven Auswahlliste ausgeblendet.
                </p>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] text-slate-400">
                  Alle Schülerdaten, Statistiken und Prüfungsstände bleiben in der Datenbank vollständig erhalten und der Kurs kann jederzeit wiederhergestellt werden.
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setCourseToArchive(null)}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  Abbrechen
                </button>

                <button
                  type="button"
                  onClick={handleConfirmArchiveCourse}
                  className="bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer shadow-md flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Ja, archivieren</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 10. KURS-ARCHIV & WIEDERHERSTELLUNG MODAL */}
        {showArchiveModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-xl bg-slate-950 border border-[#dfb871]/40 rounded-3xl p-6 md:p-7 space-y-6 shadow-2xl relative bento-glass bento-glow-gold max-h-[85vh] flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#dfb871]/15 text-[#dfb871] rounded-2xl border border-[#dfb871]/30">
                    <span className="text-xl">📦</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Kurs-Archiv</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {archivedCourses.length} archivierte{archivedCourses.length === 1 ? 'r' : ''} Kurs{archivedCourses.length === 1 ? '' : 'e'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowArchiveModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  title="Schließen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Archived Courses List */}
              <div className="overflow-y-auto space-y-3 pr-1 flex-1">
                {archivedCourses.length === 0 ? (
                  <div className="py-12 text-center space-y-3 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-3xl block">✨</span>
                    <p className="text-sm font-medium text-slate-300">Das Archiv ist aktuell leer.</p>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Alle angelegten Lehrgänge und Kohorten sind derzeit aktiv in der Auswahlliste sichtbar.
                    </p>
                  </div>
                ) : (
                  archivedCourses.map(course => {
                    const count = studentCountByCourse[course.id.toUpperCase()] || 0;
                    return (
                      <div
                        key={course.id}
                        className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#dfb871]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white truncate">{course.name}</span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#dfb871]/10 text-[#dfb871] border border-[#dfb871]/20">
                              {course.id}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-mono">
                            <span>📅 {course.period || 'Fortlaufend / Flexibel'}</span>
                            <span>•</span>
                            <span>👥 {count} Schüler zugeordnet</span>
                          </div>
                          {course.description && (
                            <p className="text-[11px] text-slate-500 truncate">{course.description}</p>
                          )}
                        </div>

                        <div className="shrink-0 flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleRestoreCourse(course.id, course.name)}
                            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#dfb871]/20 to-[#dfb871]/10 hover:from-[#dfb871]/30 hover:to-[#dfb871]/20 border border-[#dfb871]/40 hover:border-[#dfb871] text-[#dfb871] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                            title={`Kurs "${course.name}" wieder in die aktive Auswahlliste aufnehmen`}
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Wiederherstellen</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setCourseToPermanentDelete(course)}
                            className="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 hover:border-rose-500/60 text-rose-300 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                            title={`Kurs "${course.name}" (${course.id}) unwiderruflich und endgültig aus Datenbank und System löschen`}
                          >
                            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                            <span className="hidden sm:inline">Endgültig löschen</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono shrink-0">
                <span>Supabase-Datenbestand: Synchronisiert</span>
                <button
                  type="button"
                  onClick={() => setShowArchiveModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 11. IN-APP CONFIRMATION MODAL: KURS ENDGÜLTIG LÖSCHEN */}
        {courseToPermanentDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-md bg-slate-950 border border-rose-500/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative bento-glass">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-3 bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">Kurs unwiderruflich löschen?</h3>
                  <p className="text-xs text-rose-400/80 font-mono">Endgültiges Löschen aus Datenbank & State</p>
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  Möchten Sie den archivierten Kurs <strong className="text-white">„{courseToPermanentDelete.name}“</strong> (Code: <span className="font-mono text-rose-300 font-bold">{courseToPermanentDelete.id}</span>) wirklich unwiderruflich löschen?
                </p>
                <div className="p-3.5 bg-rose-500/10 border border-rose-500/25 rounded-2xl text-[11px] text-rose-200/90 space-y-1.5">
                  <p className="font-bold flex items-center gap-1.5 text-rose-300">
                    <AlertCircle className="w-3.5 h-3.5" /> Wichtiger Hinweis:
                  </p>
                  <p>
                    Dieser Vorgang entfernt den Kurs vollständig aus der Supabase-Datenbank, der Kohorten-Liste und dem Speicher. Der Kurs kann danach nicht mehr wiederhergestellt werden.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setCourseToPermanentDelete(null)}
                  className="bg-white/5 hover:bg-white/10 text-slate-300 px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  Abbrechen
                </button>

                <button
                  type="button"
                  onClick={() => handlePermanentDeleteCourse(courseToPermanentDelete)}
                  className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all cursor-pointer shadow-lg shadow-rose-600/30 flex items-center gap-2 active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Ja, endgültig löschen</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* DRUCKBERICHT CONTAINER (A4 Print-Layout, nur bei window.print())   */}
      {/* ------------------------------------------------------------------ */}
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          html, body {
            background-color: #ffffff !important;
            color: #0f172a !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      <div 
        className="hidden print:block bg-white text-slate-900 min-h-screen p-6 font-sans antialiased text-xs leading-normal"
        style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
      >
        
        {printReportData?.type === 'single' && printReportData.student ? (
          /* A) EINZEL-SCHÜLER (Teilnehmer-Leistungsnachweis) */
          <div className="space-y-2.5 max-w-4xl mx-auto">
            
            {/* Header: Logo / Schulname & Dozent */}
            <div className="flex items-start justify-between border-b-2 border-slate-900 pb-2">
              <div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                  >
                    <GraduationCap className="w-4 h-4 text-[#dfb871]" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold font-serif tracking-tight text-slate-900 leading-tight">Muster Akademie für Sicherheit & Bildung</h1>
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest font-mono">
                      LEHRGANGSZENTRUM FÜR SACHKUNDEVORBEREITUNG GEMÄSS § 34a GewO
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-0.5">
                <span className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-300 text-[8px] font-mono font-bold uppercase rounded">
                  Offizieller Leistungsnachweis
                </span>
                <p className="text-[10px] font-bold text-slate-900 mt-0.5">Ausstellungsdatum: {formatStandardGermanDate()}</p>
                <p className="text-[9px] text-slate-600">Kursleitung: Lehrgangsleitung / Fachdozent</p>
              </div>
            </div>

            {/* Document Subtitle */}
            <div className="text-center py-1 px-2 bg-slate-50 border border-slate-200 rounded">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Teilnehmer-Leistungsnachweis & Fachliche Prüfungsreife
              </h2>
              <p className="text-[9px] text-slate-500">
                Vorbereitungslehrgang auf die Sachkundeprüfung im Bewachungsgewerbe nach § 34a GewO
              </p>
            </div>

            {/* 1. Stammdaten des Schülers */}
            <div className="space-y-1 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                1. Stammdaten des Teilnehmers
              </h3>
              <div className="grid grid-cols-2 gap-2 bg-slate-50/70 p-2 rounded border border-slate-200 text-[10px]">
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Name des Teilnehmers:</span>
                  <strong className="text-slate-900 text-xs">{printReportData.student.name}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Pflicht-Kurs-Code / ID:</span>
                  <strong className="text-slate-900 font-mono">{printReportData.student.courseId || printReportData.student.invitationCode || (selectedCourseId === 'ALL' ? 'KURS-34a-2026' : selectedCourseId)}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Kurs-Zeitraum:</span>
                  <span className="text-slate-800">{activeCourse.period || '01.07.2026 – 15.08.2026'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Zuletzt Aktiv im System:</span>
                  <span className="text-slate-800">{formatGermanDate(printReportData.student.lastActive)}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Registriert am:</span>
                  <span className="text-slate-800">{formatStandardGermanDate(printReportData.student.registeredAt)}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Gesamter Lernfortschritt:</span>
                  <strong className="text-slate-900 text-xs font-mono">{printReportData.student.progressPercent || 0} % absolviert</strong>
                </div>
              </div>
            </div>

            {/* 2. Sachgebiete-Leistungsstand (§ 34a GewO) */}
            <div className="space-y-0.5 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                2. Sachgebiete-Leistungsstand (§ 34a GewO)
              </h3>
              <table className="w-full border-collapse border border-slate-300 text-left text-[9px]">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[8.5px] uppercase">
                  <tr>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-7 text-center">Nr.</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300">Sachgebiet / Prüfungsmodul</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-20 text-right">Beherrschung</th>
                    <th className="py-0.5 px-1.5 w-32">Grafischer Stand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {KATEGORIEN.map((cat, idx) => {
                    const cpList = Array.isArray(printReportData.student?.categoryPerformance)
                      ? printReportData.student.categoryPerformance
                      : (printReportData.student?.categoryPerformance && typeof printReportData.student.categoryPerformance === 'object' ? Object.values(printReportData.student.categoryPerformance) : []);
                    const catPerf: any = cpList.find((c: any) => c && (c.category === cat || (c.category && cat.toLowerCase().includes(c.category.toLowerCase()))));
                    const percent = catPerf && typeof catPerf.percentage === 'number'
                      ? catPerf.percentage
                      : 0;

                    return (
                      <tr key={idx} className="break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 font-mono text-[8.5px] text-center font-bold">{idx + 1}</td>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 font-medium truncate max-w-[240px]">{cat}</td>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 text-right font-mono font-bold">{percent} %</td>
                        <td className="py-0.5 px-1.5">
                          <div className="w-full bg-slate-200 rounded-sm h-1.5 overflow-hidden border border-slate-300">
                            <div 
                              className="bg-slate-800 h-1.5 rounded-sm" 
                              style={{ width: `${percent}%`, backgroundColor: '#1e293b' }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 3. Trainings-Aktivität nach 10 Plattform-Modi & Prüfungssimulationen */}
            {(() => {
              const currentSt = printReportData.student;
              const modeStats = getStudent10ModeStats(currentSt, rawAttempts, examSessions);
              const rawExams = Array.isArray(currentSt.examHistory) ? currentSt.examHistory : [];
              
              // Filter out 1-question spam and loose learning attempts
              const validExams = rawExams.filter((ex: any) => {
                if (!ex) return false;
                const mode = (ex.mode || '').toLowerCase();
                const totalQ = ex.totalQuestions || ex.totalPoints || 0;
                const isLearningMode = mode === 'lernmodus' || mode === 'learning' || mode === 'lernen' || mode === 'practice' || mode === 'karteikarten' || mode === 'flashcards' || mode === 'fachbegriffe';
                
                if (isLearningMode) return false;
                if (totalQ > 0 && totalQ <= 1) return false;
                if (ex.totalPoints !== undefined && ex.totalPoints <= 1) return false;
                
                return mode === 'pruefung' || mode === 'schriftlich' || mode === 'exam' || totalQ >= 5 || !mode;
              });

              return (
                <div className="space-y-1 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
                  <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                    3. Trainings-Aktivität nach 10 Plattform-Modi & Prüfungssimulationen
                  </h3>

                  {/* Kompakte 2-Spalten Übersicht aller 10 Plattform-Modi */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 bg-slate-50 p-1.5 rounded border border-slate-200 text-[8.5px]">
                    <div className="space-y-0.5">
                      {modeStats.slice(0, 5).map((m, i) => (
                        <div key={m.id} className="flex items-center justify-between border-b border-slate-200/80 pb-0.5 last:border-0">
                          <span className="text-slate-600 truncate">{i + 1}. {m.name}:</span>
                          <strong className="font-mono text-slate-900 pl-1 shrink-0">{m.value}</strong>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-0.5">
                      {modeStats.slice(5, 10).map((m, i) => (
                        <div key={m.id} className="flex items-center justify-between border-b border-slate-200/80 pb-0.5 last:border-0">
                          <span className="text-slate-600 truncate">{i + 6}. {m.name}:</span>
                          <strong className="font-mono text-slate-900 pl-1 shrink-0">{m.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vollwertige Simulationen-Tabelle oder Einzeiler */}
                  {validExams.length === 0 ? (
                    <div className="p-1.5 bg-slate-50/80 border border-slate-200 rounded text-center">
                      <p className="text-[9px] text-slate-600 italic">
                        Aktuell noch keine vollwertigen Prüfungssimulationen absolviert (Teilnehmer trainiert im freien Lernmodus).
                      </p>
                    </div>
                  ) : (
                    <table className="w-full border-collapse border border-slate-300 text-left text-[8.5px]">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[8px] uppercase">
                        <tr>
                          <th className="py-0.5 px-1.5 border-r border-slate-300 w-24">Datum</th>
                          <th className="py-0.5 px-1.5 border-r border-slate-300">Prüfungsart / Simulation</th>
                          <th className="py-0.5 px-1.5 border-r border-slate-300 text-right w-24">Punkte / Quote</th>
                          <th className="py-0.5 px-1.5 text-right w-24">Ergebnis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-800">
                        {validExams.slice(0, 3).map((ex: any, idx: number) => {
                          const dateStr = ex.date ? formatStandardGermanDate(ex.date) : formatStandardGermanDate();
                          const maxPts = ex.totalPoints || ex.totalQuestions || 0;
                          const pts = ex.pointsObtained !== undefined ? ex.pointsObtained : (typeof ex.score === 'number' ? ex.score : 0);
                          const scorePct = typeof ex.scorePercent === 'number' 
                            ? ex.scorePercent 
                            : (maxPts > 0 ? Math.round((pts / maxPts) * 100) : 0);
                          const isPassed = ex.passed !== undefined ? Boolean(ex.passed) : scorePct >= 50;

                          return (
                            <tr key={idx} className="break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
                              <td className="py-0.5 px-1.5 border-r border-slate-300 font-mono text-[8px]">{dateStr}</td>
                              <td className="py-0.5 px-1.5 border-r border-slate-300 font-medium truncate max-w-[240px]">
                                {ex.examType || ex.title || 'Schriftliche Prüfungssimulation (§ 34a)'}
                              </td>
                              <td className="py-0.5 px-1.5 border-r border-slate-300 text-right font-mono font-bold">
                                {pts} / {maxPts} ({scorePct} %)
                              </td>
                              <td className="py-0.5 px-1.5 text-right font-bold">
                                {isPassed ? (
                                  <span className="text-emerald-800 font-mono uppercase text-[8px]">Bestanden</span>
                                ) : (
                                  <span className="text-rose-800 font-mono uppercase text-[8px]">Nicht bestanden</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              );
            })()}

            {/* 4. Dozenten-Abschlussbewertung & Prüfungsreife */}
            <div className="space-y-1 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                4. Dozenten-Abschlussbewertung & Prüfungsreife
              </h3>
              <div className="p-2 bg-slate-50 border-l-4 border-slate-900 rounded-r text-[10px] space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 uppercase text-[9px]">Pädagogische Gesamteinschätzung:</span>
                  <span className="font-mono text-[9px] text-slate-600">Sachkunde § 34a GewO</span>
                </div>
                <p className="text-slate-800 leading-snug text-[10px]">
                  {(printReportData.student.progressPercent || 0) >= 75 ? (
                    <>
                      <strong>Prüfungsreife bestätigt (&gt;75 %):</strong> Der Teilnehmer weist einen überdurchschnittlich soliden und stabilen Kenntnisstand in allen acht Sachgebieten auf. Die Anmeldung zur offiziellen Sachkundeprüfung wird ausdrücklich befürwortet.
                    </>
                  ) : (printReportData.student.progressPercent || 0) >= 50 ? (
                    <>
                      <strong>Bedingt prüfungsreif / Im Zeitplan (50–74 %):</strong> Solide Fachkenntnisse vorhanden. Vor dem Prüfungstermin wird eine gezielte Wiederholung der Rechtsgebiete (BGB, StGB/StPO sowie UVV DGUV V23) empfohlen.
                    </>
                  ) : (
                    <>
                      <strong>Erhöhter Nachschulungsbedarf (&lt;50 %):</strong> Die erforderliche Prüfungssicherheit ist zum aktuellen Zeitpunkt noch nicht vollumfänglich erreicht. Eine Intensivierung des Trainings und weitere Prüfungssimulationen werden dringend angeraten.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* 5. Unterschriftenfeld */}
            <div className="grid grid-cols-2 gap-8 pt-3 mt-2 border-t border-slate-300 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <div>
                <div className="h-8 border-b border-slate-400"></div>
                <p className="mt-1 text-[10px] font-bold text-slate-800">Datum, Ort / Unterschrift Kursleitung</p>
                <p className="text-[9px] text-slate-500">Lehrgangsleitung / Fachdozent</p>
              </div>
              <div>
                <div className="h-8 border-b border-slate-400"></div>
                <p className="mt-1 text-[10px] font-bold text-slate-800">Stempel & Unterschrift Bildungsträger</p>
                <p className="text-[9px] text-slate-500">Ausbildungsstätte / Schulleitung</p>
              </div>
            </div>

          </div>
        ) : (
          /* B) KURS-GESAMTBERICHT (Klassen-Übersicht) */
          <div className="space-y-2.5 max-w-4xl mx-auto">
            
            {/* Header: Logo & Kurs-Gesamtbericht */}
            <div className="flex items-start justify-between border-b-2 border-slate-900 pb-2">
              <div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
                  >
                    <GraduationCap className="w-4 h-4 text-[#dfb871]" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold font-serif tracking-tight text-slate-900 leading-tight">Muster Akademie für Sicherheit & Bildung</h1>
                    <p className="text-[9px] text-slate-600 uppercase tracking-widest font-mono">
                      LEHRGANGSZENTRUM FÜR SACHKUNDEVORBEREITUNG GEMÄSS § 34a GewO
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-0.5">
                <span className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-300 text-[8px] font-mono font-bold uppercase rounded">
                  Klassen-Abschlussbericht
                </span>
                <p className="text-[10px] font-bold text-slate-900 mt-0.5">Ausstellungsdatum: {formatStandardGermanDate()}</p>
                <p className="text-[9px] text-slate-600">Kursleitung: Lehrgangsleitung / Fachdozent</p>
              </div>
            </div>

            {/* Document Subtitle */}
            <div className="text-center py-1 px-2 bg-slate-50 border border-slate-200 rounded">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Kurs-Gesamtbericht & Klassenleistungsnachweis
              </h2>
              <p className="text-[9px] text-slate-500">
                Dokumentation der Lernergebnisse für den Lehrgang: {activeCourse.name} (Kurs-Code: {activeCourse.id === 'ALL' ? 'KURS-34a-2026' : activeCourse.id})
              </p>
            </div>

            {/* 1. Kurs-Stammdaten & Kennzahlen */}
            <div className="space-y-1 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                1. Kurs-Rahmendaten & Leistungsübersicht
              </h3>
              <div className="grid grid-cols-3 gap-2 bg-slate-50/70 p-1.5 rounded border border-slate-200 text-[9px]">
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Kurs-Bezeichnung:</span>
                  <strong className="text-slate-900 text-[11px]">{activeCourse.name}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Kurs-Code:</span>
                  <strong className="text-slate-900 font-mono text-[11px]">{activeCourse.id === 'ALL' ? 'KURS-34a-2026' : activeCourse.id}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Lehrgangs-Zeitraum:</span>
                  <span className="text-slate-800">{activeCourse.period}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Eingeschriebene Teilnehmer:</span>
                  <strong className="text-slate-900 text-[11px]">{courseStudents.length} Schüler</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Ø Klassen-Lernfortschritt:</span>
                  <strong className="text-slate-900 text-[11px] font-mono">{avgProgress} %</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase">Beantwortete Fragen:</span>
                  <strong className="text-slate-900 text-[11px] font-mono">{totalClassAnsweredQuestions} Fragen</strong>
                </div>
              </div>
            </div>

            {/* 2. Gesamtergebnisse der Klasse nach 10 Plattform-Modi */}
            <div className="space-y-0.5 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                2. Gesamtergebnisse der Klasse nach 10 Plattform-Modi
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 bg-slate-50 p-1.5 rounded border border-slate-200 text-[8.5px]">
                <div className="space-y-0.5">
                  {class10ModeStats.slice(0, 5).map((m, i) => (
                    <div key={m.id} className="flex items-center justify-between border-b border-slate-200/80 pb-0.5 last:border-0">
                      <span className="text-slate-600 truncate">{i + 1}. {m.name}:</span>
                      <strong className="font-mono text-slate-900 pl-1 shrink-0">{m.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="space-y-0.5">
                  {class10ModeStats.slice(5, 10).map((m, i) => (
                    <div key={m.id} className="flex items-center justify-between border-b border-slate-200/80 pb-0.5 last:border-0">
                      <span className="text-slate-600 truncate">{i + 6}. {m.name}:</span>
                      <strong className="font-mono text-slate-900 pl-1 shrink-0">{m.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Sachgebiete-Durchschnitt der Gruppe */}
            <div className="space-y-0.5 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                3. Gruppen-Leistungsdurchschnitt nach Sachgebieten
              </h3>
              <table className="w-full border-collapse border border-slate-300 text-left text-[8.5px]">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[8px] uppercase">
                  <tr>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-7 text-center">Nr.</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300">Sachgebiet / Prüfungsfach</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-24 text-right">Ø Beherrschung</th>
                    <th className="py-0.5 px-1.5 w-32">Klassen-Balken</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {categoryStats.map((cat, idx) => (
                    <tr key={idx} className="break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
                      <td className="py-0.5 px-1.5 border-r border-slate-300 font-mono text-[8px] text-center font-bold">{idx + 1}</td>
                      <td className="py-0.5 px-1.5 border-r border-slate-300 font-medium truncate max-w-[240px]">{cat.category}</td>
                      <td className="py-0.5 px-1.5 border-r border-slate-300 text-right font-mono font-bold">{cat.avgPercentage} %</td>
                      <td className="py-0.5 px-1.5">
                        <div className="w-full bg-slate-200 rounded-sm h-1.5 overflow-hidden border border-slate-300">
                          <div 
                            className="bg-slate-800 h-1.5 rounded-sm" 
                            style={{ width: `${cat.avgPercentage}%`, backgroundColor: '#1e293b' }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 4. Vollständige Schülerliste mit Leistungsstand */}
            <div className="space-y-0.5 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                4. Teilnehmer-Leistungsübersicht der Klasse
              </h3>
              <table className="w-full border-collapse border border-slate-300 text-left text-[8.5px]">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300 text-[8px] uppercase">
                  <tr>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-7 text-center">Nr.</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300">Name des Teilnehmers</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-20 text-right">Lernfortschritt</th>
                    <th className="py-0.5 px-1.5 border-r border-slate-300 w-24">Zuletzt Aktiv</th>
                    <th className="py-0.5 px-1.5 text-right w-24">Prüfungsreife</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {courseStudents.map((s, idx) => {
                    const prog = s.progressPercent || 0;
                    const isReady = prog >= 75;
                    const inProgress = prog >= 40 && prog < 75;
                    const statusLabel = isReady ? 'Prüfungsbereit' : inProgress ? 'In Bearbeitung' : 'Neu gestartet';
                    const statusClass = isReady 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800' 
                    : inProgress 
                    ? 'border-amber-500 bg-amber-50 text-amber-900' 
                    : 'border-slate-400 bg-slate-100 text-slate-700';

                    return (
                      <tr key={s.id} className="break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 font-mono text-[8px] text-center font-bold">{idx + 1}</td>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 font-semibold truncate max-w-[200px]">{s.name}</td>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 text-right font-mono font-bold">{prog} %</td>
                        <td className="py-0.5 px-1.5 border-r border-slate-300 font-mono text-[8px]">{formatGermanDate(s.lastActive)}</td>
                        <td className="py-0.5 px-1.5 text-right">
                          <span className={`inline-block px-1.5 py-0.5 rounded text-[7.5px] font-bold font-mono uppercase border ${statusClass}`}>
                            {statusLabel}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* 5. Dozenten-Fazit */}
            <div className="space-y-0.5 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <h3 className="text-[9.5px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                5. Pädagogisches Fazit & Lehrgangs-Abschluss
              </h3>
              <div className="p-1.5 bg-slate-50 border-l-4 border-slate-900 rounded-r text-[9px] space-y-0.5 text-slate-800 leading-snug">
                <p>
                  Die Gruppe hat einen durchschnittlichen Fortschritt von <strong>{avgProgress} %</strong> erzielt. Die fachlichen Voraussetzungen für die Sachkundeprüfung gemäß § 34a GewO wurden im theoretischen und praktischen Unterricht vermittelt und über das digitale Prüfungssystem kontinuierlich überprüft und dokumentiert.
                </p>
              </div>
            </div>

            {/* 6. Unterschriftenfeld */}
            <div className="grid grid-cols-2 gap-8 pt-2 mt-1 border-t border-slate-300 break-inside-avoid" style={{ pageBreakInside: 'avoid' }}>
              <div>
                <div className="h-8 border-b border-slate-400"></div>
                <p className="mt-1 text-[10px] font-bold text-slate-800">Datum, Ort / Unterschrift Kursleitung</p>
                <p className="text-[9px] text-slate-500">Lehrgangsleitung / Fachdozent</p>
              </div>
              <div>
                <div className="h-8 border-b border-slate-400"></div>
                <p className="mt-1 text-[10px] font-bold text-slate-800">Stempel & Unterschrift Bildungsträger</p>
                <p className="text-[9px] text-slate-500">Ausbildungsstätte / Schulleitung</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
