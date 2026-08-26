/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  Search, 
  Copy, 
  Send, 
  Download, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BookOpen, 
  UserPlus, 
  ShieldCheck, 
  Sparkles,
  User,
  Bell,
  KeyRound,
  Trash2
} from 'lucide-react';
import { UserProfile, StudentDetail } from '../types/auth.ts';
import { Question, KATEGORIEN } from '../types.ts';
import DataManagement from './DataManagement.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { 
  supabase, 
  fetchStudentsFromSupabase, 
  createStudentInSupabase, 
  updateStudentPasswordInSupabase,
  deleteStudentFromSupabase
} from '../lib/supabase.ts';

interface DozentenDashboardProps {
  currentUser: UserProfile;
  questions: Question[];
  onAddQuestion: (q: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onImportQuestions: (imported: Question[], option: 'merge' | 'replace') => void;
  onResetToDefaults: () => void;
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

  // Students list state loaded from Supabase
  const [studentsList, setStudentsList] = useState<StudentDetail[]>([]);
  const [loadingStudents, setLoadingStudents] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pruefungssicher' | 'im_zeitplan' | 'kritisch'>('all');

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

  // Load students from Supabase on mount and set up real-time listener
  const loadStudents = async () => {
    setLoadingStudents(true);
    const list = await fetchStudentsFromSupabase();
    console.log('[Admin Dashboard] Loaded students directly from Supabase students table:', list);
    setStudentsList(list);
    setLoadingStudents(false);
  };

  useEffect(() => {
    loadStudents();

    // Subscribe to real-time changes in Supabase `students` table
    const channel = supabase
      .channel('students-realtime-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'students' },
        (payload) => {
          console.log('[Admin Dashboard Realtime Event]', payload);
          loadStudents();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (activeTab === 'students') {
      loadStudents();
    }
  }, [activeTab]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Filtered students list
  const filteredStudents = studentsList.filter(student => {
    const matchesQuery = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (statusFilter === 'all') return matchesQuery;
    return matchesQuery && student.status === statusFilter;
  });

  // Calculate course KPIs
  const totalEnrolled = studentsList.length;
  const maxCapacity = 30;
  const avgProgress = totalEnrolled > 0
    ? Math.round(studentsList.reduce((acc, curr) => acc + curr.progressPercent, 0) / totalEnrolled)
    : 0;
  const avgExamSuccess = totalEnrolled > 0
    ? Math.round(studentsList.reduce((acc, curr) => acc + curr.successRatePercent, 0) / totalEnrolled)
    : 0;
  const criticalStudentsCount = studentsList.filter(s => s.status === 'kritisch' || s.successRatePercent < 50).length;

  // Copy invitation link
  const handleCopyInviteLink = () => {
    const code = 'MOREDU34a';
    navigator.clipboard.writeText(code);
    showToast(`Pflicht-Kurs-Code "${code}" in Zwischenablage kopiert!`);
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

    const result = await deleteStudentFromSupabase(studentToDelete.id);
    setIsDeleting(false);

    if (!result.success) {
      showToast(`Fehler beim Löschen: ${result.error}`);
      return;
    }

    setStudentsList(prev => prev.filter(s => s.id !== studentToDelete.id));
    if (selectedStudent && selectedStudent.id === studentToDelete.id) {
      setSelectedStudent(null);
    }

    showToast(`Schüler "${studentToDelete.name}" wurde dauerhaft aus Supabase gelöscht.`);
    setStudentToDelete(null);
  };


  // PDF report download simulation
  const handleDownloadPDF = (student: StudentDetail) => {
    showToast(`Fortschrittsbericht für ${student.name} als PDF generiert.`);
  };

  return (
    <div className="space-y-8 font-sans pb-16">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 bg-slate-900 border border-[#dfb871]/40 text-slate-100 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-in backdrop-blur-md">
          <Sparkles className="w-5 h-5 text-[#dfb871] shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* 1. KURS-HEADER */}
      <section className="bento-glass p-6 md:p-8 rounded-3xl relative overflow-hidden border border-[#dfb871]/20 bento-glow-gold">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#dfb871] bg-[#dfb871]/10 px-3 py-1 rounded-full border border-[#dfb871]/20 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> B2B Dozenten-Dashboard
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                Single-Course LMS
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white tracking-tight">
              Aktueller Kurs: Sachkunde § 34a
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#dfb871]" /> Zeitraum: <strong className="text-white">01.07.2026 – 15.08.2026</strong>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-slate-300 font-mono">
                Kurs-Code: <strong className="text-[#dfb871] font-bold">MOREDU34a</strong>
              </span>
            </div>
          </div>

          {/* Dozent Info Box */}
          <div className="bg-slate-950/70 p-4 rounded-2xl border border-white/10 flex items-center gap-3.5 self-start lg:self-center shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfb871] to-[#9a7836] text-slate-950 font-bold flex items-center justify-center font-display text-sm shadow-md">
              AW
            </div>
            <div>
              <p className="text-xs font-bold text-white font-display">{currentUser.name}</p>
              <p className="text-[10px] text-slate-400 font-mono">Dozent & Kursleitung</p>
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
            <TrendingUp className="w-4 h-4" />
            <span>Analyse nach Sachgebieten & Lernmodi</span>
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
            <span>Fragenkatalog verwalten ({questions.length} Fragen)</span>
          </button>
        </div>
      </section>

      {activeTab === 'students' ? (
        <>
          {/* 2. KPI-WIDGETS (4 Kacheln) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* KPI 1 */}
            <div className="bento-glass p-5 rounded-2xl border border-white/5 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                  Schüler im Kurs MOREDU34a
                </span>
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-black text-white font-display">
                  {totalEnrolled} <span className="text-xs text-slate-500 font-normal">/ {maxCapacity}</span>
                </p>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                  {Math.round((totalEnrolled / maxCapacity) * 100)} % belegt
                </span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full" 
                  style={{ width: `${(totalEnrolled / maxCapacity) * 100}%` }}
                />
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bento-glass p-5 rounded-2xl border border-white/5 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                  Ø Kursfortschritt
                </span>
                <div className="p-2 bg-amber-500/10 text-[#dfb871] rounded-xl">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-black text-white font-display">{avgProgress} %</p>
                <span className="text-[10px] font-mono text-amber-400 font-bold">Aktiv</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-[#dfb871] h-1.5 rounded-full" 
                  style={{ width: `${avgProgress}%` }}
                />
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bento-glass p-5 rounded-2xl border border-white/5 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-display">
                  Bestehensquote Probeprüf.
                </span>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-black text-white font-display">{avgExamSuccess} %</p>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">Ziel: &gt;75%</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-1.5 rounded-full" 
                  style={{ width: `${avgExamSuccess}%` }}
                />
              </div>
            </div>

            {/* KPI 4 */}
            <div className="bento-glass p-5 rounded-2xl border border-rose-500/20 relative overflow-hidden space-y-3 bg-rose-500/[0.02]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider font-display">
                  Hilfebedarf / Kritisch
                </span>
                <div className="p-2 bg-rose-500/20 text-rose-400 rounded-xl animate-pulse">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-black text-rose-400 font-display">{criticalStudentsCount} Schüler</p>
                <span className="text-[10px] font-mono text-rose-400 font-bold">&lt; 50% Quote</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                Schüler mit Förderbedarf
              </p>
            </div>
          </section>

          {/* 3. PFLICHT-KURS-CODE BOX */}
          <section className="bento-glass p-6 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#dfb871]" /> Kurs-Zugangskode ("MOREDU34a")
                </h3>
                <p className="text-xs text-slate-400">
                  Schüler registrieren sich selbstständig mit dem Pflicht-Registrierungscode <strong className="text-[#dfb871] font-mono">MOREDU34a</strong>.
                </p>
              </div>

              {/* Strict Course Code Box */}
              <div className="flex items-center gap-3 bg-slate-950/90 p-3 px-5 rounded-xl border border-[#dfb871]/40 shadow-inner shrink-0">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Pflicht-Kurs-Code:</span>
                <code className="text-base font-mono font-black text-[#dfb871] tracking-widest">MOREDU34a</code>
                <button
                  onClick={handleCopyInviteLink}
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer bg-white/5 rounded-lg border border-white/10 flex items-center gap-1.5 text-xs font-semibold"
                  title="Kurs-Code kopieren"
                >
                  <Copy className="w-3.5 h-3.5 text-[#dfb871]" />
                  <span>Kopieren</span>
                </button>
              </div>
            </div>
          </section>

          {/* 4. SCHÜLER-HAUPTTABELLE */}
          <section className="bento-glass p-6 rounded-2xl border border-white/10 space-y-6">
            
            {/* Table Search & Status Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Schüler nach Vorname oder Nachname suchen..."
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb871] transition-all font-sans"
                />
              </div>

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                    statusFilter === 'all'
                      ? 'bg-[#dfb871] text-slate-950 font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  Alle ({studentsList.length})
                </button>

                <button
                  onClick={() => setStatusFilter('pruefungssicher')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                    statusFilter === 'pruefungssicher'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  🟢 Sicher (&gt;80%)
                </button>

                <button
                  onClick={() => setStatusFilter('im_zeitplan')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                    statusFilter === 'im_zeitplan'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  🟡 Zeitplan (50-79%)
                </button>

                <button
                  onClick={() => setStatusFilter('kritisch')}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer font-sans whitespace-nowrap ${
                    statusFilter === 'kritisch'
                      ? 'bg-rose-500 text-white font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  🔴 Kritisch (&lt;50%)
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-white/5 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/80 text-slate-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/5">
                  <tr>
                    <th className="py-3 px-4">Schüler</th>
                    <th className="py-3 px-4">Fortschritt</th>
                    <th className="py-3 px-4">Erfolgsquote</th>
                    <th className="py-3 px-4">Zuletzt Aktiv</th>
                    <th className="py-3 px-4 text-right">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        <div className="space-y-2">
                          <Users className="w-8 h-8 text-slate-600 mx-auto" />
                          <p className="text-xs font-semibold text-slate-400">Noch keine registrierten Schüler im Kurs MOREDU34a.</p>
                          <p className="text-[11px] text-slate-500">
                            Geben Sie Schülern den Registrierungs-Code <strong className="text-[#dfb871] font-mono">MOREDU34a</strong> für die Registrierung.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-white/[0.02] transition-colors">
                        
                        {/* Student Name */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 text-slate-200 font-bold flex items-center justify-center font-display text-xs shrink-0">
                              {student.avatarInitials || 'S'}
                            </div>
                            <div>
                              <p className="font-bold text-white text-xs">{student.name}</p>
                              <p className="text-[10px] text-slate-500 font-mono">Kurs: MOREDU34a</p>
                            </div>
                          </div>
                        </td>

                        {/* Progress Bar */}
                        <td className="py-3.5 px-4 w-44">
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-mono">
                              <span className="text-slate-400">Gelernt:</span>
                              <span className="font-bold text-white">{student.progressPercent} %</span>
                            </div>
                            <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                              <div 
                                className="bg-[#dfb871] h-1.5 rounded-full" 
                                style={{ width: `${student.progressPercent}%` }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Success Rate Badges */}
                        <td className="py-3.5 px-4">
                          {student.successRatePercent >= 80 ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              🟢 {student.successRatePercent} % (Sicher)
                            </span>
                          ) : student.successRatePercent >= 50 ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              🟡 {student.successRatePercent} % (Zeitplan)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                              🔴 {student.successRatePercent} % (Kritisch)
                            </span>
                          )}
                        </td>

                        {/* Last Active */}
                        <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">
                          {student.lastActive}
                        </td>

                        {/* Action buttons */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedStudent(student)}
                              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all cursor-pointer flex items-center gap-1"
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
        /* TAB 2: KURS-ANALYSE NACH SACHGEBIETEN & LERNMODI */
        <ErrorBoundary fallbackMessage="Analyse nicht verfügbar – Bisher liegen noch keine ausreichenden Daten für Sachgebiete oder Lernmodi vor.">
          <div className="space-y-6">
            {/* Sachgebiete Breakdown */}
            <div className="bento-glass p-6 rounded-3xl border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#dfb871]" /> Kursweite Analyse nach Sachgebieten (§ 34a)
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Durchschnittlicher Leistungsstand aller {totalEnrolled} Schüler aufgeteilt nach den 8 Prüfungsgebieten.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#dfb871]/10 text-[#dfb871] border border-[#dfb871]/20 self-start sm:self-center">
                  Live Supabase Synchronisiert
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {KATEGORIEN.map((cat, idx) => {
                  let totalPct = 0;
                  let studentCount = 0;
                  let totalAns = 0;

                  (Array.isArray(studentsList) ? studentsList : []).forEach(s => {
                    if (!s) return;
                    const cpList = Array.isArray(s?.categoryPerformance)
                      ? s.categoryPerformance
                      : (s?.categoryPerformance && typeof s.categoryPerformance === 'object' ? Object.values(s.categoryPerformance) : []);
                    const cp: any = cpList.find((c: any) => c && c.category === cat);
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

                  const avgPct = studentCount > 0 ? Math.round(totalPct / studentCount) : 0;

                  return (
                    <div key={idx} className="p-4 bg-slate-900/70 border border-white/5 rounded-2xl space-y-3 hover:border-[#dfb871]/30 transition-all">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-white font-display">{cat}</h4>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {totalAns > 0 ? `Insg. ${totalAns} Antworten ausgewertet (${studentCount} aktiv)` : 'Bisher noch keine Aufgaben gelöst'}
                          </p>
                        </div>
                        <span className={`text-sm font-black font-mono px-2.5 py-1 rounded-lg border ${
                          avgPct >= 75 ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                          avgPct >= 50 ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                          'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {avgPct} %
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-white/5">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              avgPct >= 75 ? 'bg-emerald-500' :
                              avgPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${Math.min(100, Math.max(0, avgPct))}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                          <span>0%</span>
                          <span>50% (Bestehensgrenze)</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lernmodi Breakdown */}
            <div className="bento-glass p-6 rounded-3xl border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#dfb871]" /> Kurs-Aktivität nach Lernmodi
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Übersicht der absolvierten Einheiten und Erfolgsquoten nach Modus.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Schriftlicher Test (§ 34a)', key: 'Schriftlich' },
                  { title: 'Lernmodus (Selbstkontrolle)', key: 'Lernmodus' },
                  { title: 'Karteikarten (Flashcards)', key: 'Karteikarten' },
                  { title: 'Prüfungssimulation', key: 'Prüfung' }
                ].map((m, idx) => {
                  let count = 0;
                  let totalScore = 0;

                  (Array.isArray(studentsList) ? studentsList : []).forEach(s => {
                    if (!s) return;
                    const exList = Array.isArray(s?.examHistory)
                      ? s.examHistory
                      : (s?.examHistory && typeof s.examHistory === 'object' ? Object.values(s.examHistory) : []);
                    exList.forEach((e: any) => {
                      if (e && e.examType && typeof e.examType === 'string' && e.examType.includes(m.key)) {
                        count++;
                        totalScore += (typeof e.scorePercent === 'number' && !isNaN(e.scorePercent) ? e.scorePercent : 0);
                      }
                    });
                  });

                  const avgScore = count > 0 ? Math.round(totalScore / count) : 0;

                  return (
                    <div key={idx} className="p-4 bg-slate-900/70 border border-white/5 rounded-2xl space-y-2">
                      <h4 className="text-xs font-bold text-slate-200 font-display">{m.title}</h4>
                      <div className="flex items-baseline justify-between pt-1">
                        <p className="text-2xl font-black text-white font-display">{count}</p>
                        <span className="text-xs font-mono font-bold text-[#dfb871]">{avgScore}% Ø-Quote</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono">Absolvierte Einheiten</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ErrorBoundary>
      ) : (
        /* TAB 3: FRAGENKATALOG VERWALTEN */
        <section className="space-y-6">
          <div className="bento-glass p-6 rounded-2xl border border-white/10 space-y-2">
            <h2 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#dfb871]" />
              Dozenten-Fragenverwaltung § 34a
            </h2>
            <p className="text-xs text-slate-400">
              Als Dozent können Sie hier neue Prüfungsfragen und Musterlösungen hinzufügen, bestehende Fragen sichten oder den Fragenpool sichern.
            </p>
          </div>

          <DataManagement
            questions={questions}
            onAddQuestion={onAddQuestion}
            onDeleteQuestion={onDeleteQuestion}
            onImportQuestions={onImportQuestions}
            onResetToDefaults={onResetToDefaults}
          />
        </section>
      )}

      {/* 5. DETAIL-SLIDEOVER / MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl h-full bg-slate-950 border-l border-white/10 shadow-2xl p-6 md:p-8 overflow-y-auto space-y-6 animate-slide-left">
            <ErrorBoundary fallbackMessage="Analyse nicht verfügbar – Dieser Schüler hat bisher noch keine Aufgaben gelöst.">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#dfb871] text-slate-950 font-bold text-base flex items-center justify-center font-display shadow-lg shrink-0">
                    {selectedStudent?.avatarInitials || 'S'}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">{selectedStudent?.name || 'Schüler'}</h3>
                    <p className="text-xs text-slate-400 font-mono">Kurs-Code: {selectedStudent?.courseId || selectedStudent?.invitationCode || 'MOREDU34a'}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudent(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Stats overview */}
              {(() => {
                const progress = typeof selectedStudent?.progressPercent === 'number' && !isNaN(selectedStudent.progressPercent) ? selectedStudent.progressPercent : 0;
                const success = typeof selectedStudent?.successRatePercent === 'number' && !isNaN(selectedStudent.successRatePercent) ? selectedStudent.successRatePercent : 0;
                
                return (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Fortschritt:</span>
                      <p className="text-base font-bold text-white font-display">{progress} %</p>
                    </div>

                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Erfolgsquote:</span>
                      <p className={`text-base font-bold font-display ${
                        success >= 80 ? 'text-emerald-400' :
                        success >= 50 ? 'text-amber-400' : 'text-rose-400'
                      }`}>
                        {success} %
                      </p>
                    </div>

                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl space-y-0.5 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-slate-400 font-mono uppercase">Registriert:</span>
                      <p className="text-xs font-bold text-slate-300 font-mono">{selectedStudent?.registeredAt || 'Neu'}</p>
                    </div>
                  </div>
                );
              })()}

              {/* 1. Schwächen-Analyse nach Sachgebieten */}
              {(() => {
                const rawCategories = selectedStudent?.categoryPerformance || (selectedStudent as any)?.stats?.answeredCategories || [];
                const safeCategories: any[] = Array.isArray(rawCategories)
                  ? rawCategories
                  : (rawCategories && typeof rawCategories === 'object' ? Object.values(rawCategories) : []);

                const totalAnswered = safeCategories.reduce((acc: number, c: any) => acc + (c?.questionsAnswered || c?.totalAnswered || 0), 0);
                const hasActivity = totalAnswered > 0 || (selectedStudent?.progressPercent || 0) > 0;

                return (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-[#dfb871] font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" /> Schwächen-Analyse nach Sachgebieten
                    </h4>

                    {!hasActivity || safeCategories.length === 0 ? (
                      <div className="p-5 bg-slate-900/60 border border-white/5 rounded-2xl text-center space-y-2">
                        <AlertTriangle className="w-6 h-6 text-amber-400 mx-auto" />
                        <p className="text-xs font-bold text-slate-200">
                          Analyse nicht verfügbar – Dieser Schüler hat bisher noch keine Aufgaben gelöst.
                        </p>
                        <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm mx-auto">
                          Sobald {selectedStudent?.name || 'der Schüler'} erste Fragen im Lern- oder Prüfungsmodus bearbeitet, erscheinen die Sachgebiete hier detailliert aufgeschlüsselt.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {safeCategories.map((cat: any, idx: number) => {
                          const questionsAnswered = cat?.questionsAnswered ?? cat?.totalAnswered ?? 0;
                          const correctAnswers = cat?.correctAnswers ?? cat?.correct ?? 0;
                          
                          // Division by zero safe accuracy calculation
                          const accuracy = questionsAnswered > 0 
                            ? (typeof cat?.percentage === 'number' && !isNaN(cat.percentage) ? cat.percentage : Math.round((correctAnswers / questionsAnswered) * 100))
                            : 0;

                          const catName = cat?.category || cat?.name || 'Sachgebiet';

                          return (
                            <div key={idx} className="p-3 bg-slate-900/60 border border-white/5 rounded-xl space-y-1.5">
                              <div className="flex justify-between text-xs">
                                <span className="font-medium text-slate-200">{catName}</span>
                                <span className={`font-mono font-bold ${
                                  accuracy >= 80 ? 'text-emerald-400' :
                                  accuracy >= 50 ? 'text-amber-400' : 'text-rose-400'
                                }`}>
                                  {accuracy} %
                                </span>
                              </div>

                              <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    accuracy >= 80 ? 'bg-emerald-500' :
                                    accuracy >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                  }`}
                                  style={{ width: `${Math.min(100, Math.max(0, accuracy))}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* 2. Historie der Probeprüfungen */}
              {(() => {
                const rawHistory = selectedStudent?.examHistory || [];
                const safeHistory: any[] = Array.isArray(rawHistory)
                  ? rawHistory
                  : (rawHistory && typeof rawHistory === 'object' ? Object.values(rawHistory) : []);

                return (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-[#dfb871] font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> Historie der Probeprüfungen
                    </h4>

                    {safeHistory.length === 0 ? (
                      <p className="text-xs text-slate-400 italic p-4 bg-slate-900/40 rounded-xl border border-white/5 text-center">
                        Noch keine Probeprüfungen absolviert.
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {safeHistory.map((ex: any) => {
                          if (!ex) return null;
                          const totalP = ex.totalPoints || 1;
                          const obtainedP = ex.pointsObtained || 0;
                          const scorePct = typeof ex.scorePercent === 'number' && !isNaN(ex.scorePercent) 
                            ? ex.scorePercent 
                            : (totalP > 0 ? Math.round((obtainedP / totalP) * 100) : 0);

                          return (
                            <div key={ex.id || Math.random()} className="p-3 bg-slate-900/60 border border-white/5 rounded-xl flex items-center justify-between text-xs">
                              <div>
                                <p className="font-bold text-white">{ex.examType || 'Probeprüfung'}</p>
                                <p className="text-[10px] text-slate-400 font-mono">Datum: {ex.date || 'Unbekannt'}</p>
                              </div>

                              <div className="text-right space-y-0.5">
                                <div className="flex items-center justify-end gap-1.5">
                                  <span className="font-mono font-bold text-slate-200">
                                    {obtainedP} / {totalP} P ({scorePct}%)
                                  </span>
                                  {ex.passed ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-rose-400" />
                                  )}
                                </div>
                                <span className={`text-[10px] font-mono font-bold uppercase ${
                                  ex.passed ? 'text-emerald-400' : 'text-rose-400'
                                }`}>
                                  {ex.passed ? 'Bestanden' : 'Nicht bestanden'}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Actions footer */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => {
                    setResetStudentModal(selectedStudent);
                    setAdminNewPassword('NeuesPasswort123');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#dfb871]/15 hover:bg-[#dfb871]/25 border border-[#dfb871]/30 text-[#dfb871] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <KeyRound className="w-4 h-4" /> Passwort manuell zurücksetzen
                </button>

                <button
                  onClick={() => handleDownloadPDF(selectedStudent)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4" /> Fortschrittsbericht als PDF herunterladen
                </button>

                <button
                  onClick={() => setStudentToDelete(selectedStudent)}
                  className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 text-rose-400 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Trash2 className="w-4 h-4" /> Schüler löschen
                </button>
              </div>

            </ErrorBoundary>
          </div>
        </div>
      )}

      {/* 6. ADMIN PASSWORD RESET MODAL */}
      {resetStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bento-glass p-6 rounded-3xl border border-[#dfb871]/30 shadow-2xl space-y-5 relative animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={() => setResetStudentModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#dfb871]/20 text-[#dfb871] rounded-2xl border border-[#dfb871]/30">
                <KeyRound className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">Passwort zurücksetzen</h3>
                <p className="text-xs text-slate-400 font-sans">Schüler: <strong className="text-white">{resetStudentModal.name}</strong></p>
              </div>
            </div>

            <form onSubmit={handleAdminResetPasswordSubmit} className="space-y-4 font-sans">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Neues temporäres Passwort
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <KeyRound className="w-4 h-4 text-[#dfb871]" />
                  </span>
                  <input
                    type="text"
                    required
                    value={adminNewPassword}
                    onChange={(e) => setAdminNewPassword(e.target.value)}
                    placeholder="z. B. NeuesPasswort123"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#dfb871] transition-all font-mono"
                  />
                </div>
                <span className="text-[10px] text-slate-400 block">
                  Der Schüler kann sich anschließend sofort mit diesem neuen Passwort anmelden.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setResetStudentModal(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  Passwort Speichern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 7. DELETE STUDENT CONFIRMATION MODAL */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bento-glass p-6 rounded-3xl border border-rose-500/30 shadow-2xl space-y-5 relative animate-in fade-in zoom-in-95">
            <button
              type="button"
              onClick={() => setStudentToDelete(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-rose-500/20 text-rose-400 rounded-2xl border border-rose-500/30">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">Schüler löschen</h3>
                <p className="text-xs text-rose-300/80 font-sans">Aktion kann nicht rückgängig gemacht werden</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              Möchtest du diesen Schüler <strong className="text-white">{studentToDelete.name}</strong> wirklich löschen?
            </p>
            <p className="text-xs text-slate-400 font-sans bg-rose-950/40 p-3 rounded-xl border border-rose-500/20">
              Der Schüler wird direkt aus der Supabase-Datenbank gelöscht und verliert sofort den Zugang zum System.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteStudent}
                disabled={isDeleting}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                {isDeleting ? 'Wird gelöscht...' : 'Ja, Schüler Löschen'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
