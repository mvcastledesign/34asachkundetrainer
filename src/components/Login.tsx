/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  Sparkles, 
  UserPlus, 
  CheckCircle2, 
  Building2,
  HelpCircle,
  KeyRound,
  ArrowLeft,
  Check
} from 'lucide-react';
import CustomDropdown from './CustomDropdown.tsx';
import { UserProfile, StudentDetail } from '../types/auth.ts';
import { 
  fetchStudentsFromSupabase, 
  createStudentInSupabase, 
  updateStudentPasswordInSupabase 
} from '../lib/supabase.ts';

interface LoginProps {
  onLoginSuccess: (user: UserProfile, rememberMe?: boolean) => void;
}

type AuthMode = 'login' | 'register' | 'forgot_password';

const SECURITY_QUESTIONS = [
  'In welcher Stadt bist du geboren?',
  'Wie heißt deine erste Schule?',
  'Wie lautet der Name deines ersten Haustiers?',
  'Was ist dein Lieblingsgericht?',
  'Wie lautet der Mädchenname deiner Mutter?'
];

export default function Login({ onLoginSuccess }: LoginProps) {
  const [mode, setMode] = useState<AuthMode>('login');

  // Login form states
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  // Register form states
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState(SECURITY_QUESTIONS[0]);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [kursCode, setKursCode] = useState('');
  const [consentGdpra, setConsentGdpra] = useState(false);

  // Forgot password states
  const [resetStep, setResetStep] = useState<1 | 2 | 3>(1);
  const [resetName, setResetName] = useState('');
  const [foundStudentForReset, setFoundStudentForReset] = useState<StudentDetail | null>(null);
  const [resetAnswer, setResetAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // UI states
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Helper to load students from localStorage with seed default
  const getRegisteredStudents = (): StudentDetail[] => {
    const savedStudentsStr = localStorage.getItem('sachkunde_34a_registered_students');
    let registeredStudents: StudentDetail[] = [];
    if (savedStudentsStr) {
      try {
        registeredStudents = JSON.parse(savedStudentsStr);
      } catch {
        registeredStudents = [];
      }
    }

    // Seed default student if empty
    if (registeredStudents.length === 0) {
      const defaultStudent: StudentDetail = {
        id: 'usr-demo-max',
        name: 'Maximilian Schulze',
        vorname: 'Maximilian',
        nachname: 'Schulze',
        password: 'demo123',
        securityQuestion: 'In welcher Stadt bist du geboren?',
        securityAnswer: 'berlin',
        avatarInitials: 'MS',
        courseId: 'MOREDU34a',
        courseName: 'Aktueller Kurs: Sachkunde § 34a',
        progressPercent: 65,
        successRatePercent: 82,
        status: 'pruefungssicher',
        lastActive: 'Vor 10 Min.',
        registeredAt: '10.05.2026',
        invitationCode: 'MOREDU34a',
        categoryPerformance: [],
        examHistory: []
      };
      registeredStudents = [defaultStudent];
      localStorage.setItem('sachkunde_34a_registered_students', JSON.stringify(registeredStudents));
    }

    return registeredStudents;
  };

  // Submit LOGIN with automatic role detection
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanName = loginName.trim();
    const cleanPassword = loginPassword.trim();

    if (!cleanName) {
      setError('Bitte geben Sie Ihren Vornamen/Nachnamen oder Benutzernamen ein.');
      return;
    }

    if (!cleanPassword) {
      setError('Bitte geben Sie Ihr Passwort ein.');
      return;
    }

    setLoading(true);

    const lowerName = cleanName.toLowerCase();

    // 1. Check Dozent / Admin credentials
    const isAdminAccount = lowerName === 'admin' || 
                           lowerName === 'dozent' || 
                           lowerName.includes('weber') ||
                           lowerName.includes('alexander');

    if (isAdminAccount) {
      // Validate admin password strictly
      if (cleanPassword === 'Admin' || cleanPassword === 'admin' || cleanPassword === 'demo123' || cleanPassword === 'admin123') {
        const dozentProfile: UserProfile = {
          id: 'usr-dozent-demo',
          name: 'Dr. Alexander Weber',
          vorname: 'Alexander',
          nachname: 'Weber',
          role: 'dozent',
          companyName: 'MOREDU 34a-Gruppe',
          registeredAt: '01.01.2026'
        };
        setLoading(false);
        onLoginSuccess(dozentProfile, rememberMe);
        return;
      } else {
        setLoading(false);
        setError('Falsches Passwort!');
        return;
      }
    }

    // 2. Fetch students directly from Supabase `students` table
    const registeredStudents = await fetchStudentsFromSupabase();

    const foundStudent = registeredStudents.find(
      s => s.name.toLowerCase() === lowerName ||
           (s.vorname && s.nachname && `${s.vorname} ${s.nachname}`.toLowerCase() === lowerName) ||
           (s.vorname && s.vorname.toLowerCase() === lowerName) ||
           (s.nachname && s.nachname.toLowerCase() === lowerName)
    );

    // If student not found
    if (!foundStudent) {
      setLoading(false);
      setError('Benutzer nicht gefunden! Bitte erst registrieren.');
      return;
    }

    // Compare password directly with saved password in Supabase
    const savedPassword = foundStudent.password || 'demo123';
    if (cleanPassword !== savedPassword) {
      setLoading(false);
      setError('Falsches Passwort!');
      return;
    }

    const studentProfile: UserProfile = {
      id: foundStudent.id,
      name: foundStudent.name,
      vorname: foundStudent.vorname,
      nachname: foundStudent.nachname,
      role: 'schueler',
      courseId: foundStudent.courseId || 'MOREDU34a',
      courseName: 'Aktueller Kurs: Sachkunde § 34a',
      invitationCode: 'MOREDU34a',
      registeredAt: foundStudent.registeredAt,
      progressPercent: foundStudent.progressPercent,
      successRatePercent: foundStudent.successRatePercent,
      status: foundStudent.status,
      lastActive: foundStudent.lastActive,
      categoryPerformance: foundStudent.categoryPerformance,
      examHistory: foundStudent.examHistory,
      questionProgress: foundStudent.questionProgress
    };
    setLoading(false);
    onLoginSuccess(studentProfile, rememberMe);
  };

  // Submit REGISTER directly to Supabase `students` table
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!vorname.trim() || !nachname.trim()) {
      setError('Bitte geben Sie Ihren Vornamen und Nachnamen ein.');
      return;
    }

    if (registerPassword.length < 4) {
      setError('Das Passwort muss mindestens 4 Zeichen lang sein.');
      return;
    }

    if (registerPassword !== confirmPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }

    if (!securityAnswer.trim()) {
      setError('Bitte geben Sie eine Antwort auf die Sicherheitsfrage ein.');
      return;
    }

    // STRICT COURSE CODE VALIDATION
    if (!kursCode || kursCode.trim() !== 'MOREDU34a') {
      setError('Ungültiger Kurs-Code! Bitte geben Sie MOREDU34a ein.');
      return;
    }

    if (!consentGdpra) {
      setError('Bitte stimmen Sie den AGB und Datenschutzbestimmungen zu.');
      return;
    }

    setLoading(true);

    const fullName = `${vorname.trim()} ${nachname.trim()}`;

    // Insert new student into Supabase `students` table
    const result = await createStudentInSupabase({
      vorname: vorname.trim(),
      nachname: nachname.trim(),
      password: registerPassword,
      securityQuestion: securityQuestion,
      securityAnswer: securityAnswer.trim().toLowerCase(),
      courseCode: 'MOREDU34a'
    });

    if (result.error || !result.student) {
      setLoading(false);
      setError(`Registrierung fehlgeschlagen: ${result.error || 'Datenbank-Fehler'}`);
      return;
    }

    const newStudent = result.student;

    const newUserProfile: UserProfile = {
      id: newStudent.id,
      name: fullName,
      vorname: vorname.trim(),
      nachname: nachname.trim(),
      role: 'schueler',
      courseId: 'MOREDU34a',
      courseName: 'Aktueller Kurs: Sachkunde § 34a',
      invitationCode: 'MOREDU34a',
      registeredAt: newStudent.registeredAt,
      progressPercent: newStudent.progressPercent || 0,
      successRatePercent: newStudent.successRatePercent || 0,
      status: newStudent.status || 'im_zeitplan',
      lastActive: newStudent.lastActive || 'Gerade eben',
      categoryPerformance: newStudent.categoryPerformance,
      examHistory: newStudent.examHistory,
      questionProgress: newStudent.questionProgress
    };

    setLoading(false);
    onLoginSuccess(newUserProfile, rememberMe);
  };

  // FORGOT PASSWORD FLOW HANDLERS (Supabase)
  // Step 1: Find student by Name in Supabase
  const handleResetStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanName = resetName.trim().toLowerCase();
    if (!cleanName) {
      setError('Bitte geben Sie Ihren Namen ein.');
      return;
    }

    setLoading(true);
    const registeredStudents = await fetchStudentsFromSupabase();
    setLoading(false);

    const student = registeredStudents.find(
      s => s.name.toLowerCase() === cleanName ||
           (s.vorname && s.nachname && `${s.vorname} ${s.nachname}`.toLowerCase() === cleanName) ||
           (s.vorname && s.vorname.toLowerCase() === cleanName)
    );

    if (!student) {
      setError('Kein Schüler mit diesem Namen gefunden.');
      return;
    }

    setFoundStudentForReset(student);
    setResetStep(2);
    setResetAnswer('');
  };

  // Step 2: Check Security Answer
  const handleResetStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!foundStudentForReset) return;

    const savedAnswer = (foundStudentForReset.securityAnswer || 'berlin').trim().toLowerCase();
    const entered = resetAnswer.trim().toLowerCase();

    if (entered !== savedAnswer) {
      setError('Die Antwort ist nicht korrekt. Bitte versuche es erneut.');
      return;
    }

    setResetStep(3);
    setNewPassword('');
    setConfirmNewPassword('');
  };

  // Step 3: Set New Password in Supabase
  const handleResetStep3 = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!foundStudentForReset) return;

    if (newPassword.length < 4) {
      setError('Das Passwort muss mindestens 4 Zeichen lang sein.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('Die Passwörter stimmen nicht überein.');
      return;
    }

    setLoading(true);
    const updateResult = await updateStudentPasswordInSupabase(foundStudentForReset.id, newPassword);
    setLoading(false);

    if (!updateResult.success) {
      setError(`Passwort-Update fehlgeschlagen: ${updateResult.error}`);
      return;
    }

    setSuccessMsg('Dein Passwort wurde erfolgreich geändert! Du kannst dich jetzt anmelden.');
    setMode('login');
    setLoginName(foundStudentForReset.name);
    setLoginPassword(newPassword);
    setResetStep(1);
    setFoundStudentForReset(null);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060b] overflow-y-auto px-4 py-8">
      {/* Obsidian Backdrop */}
      <div className="obsidian-overlay" />

      {/* Dynamic colorful blur radiance */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#dfb871]/5 blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md bento-glass p-6 md:p-8 rounded-3xl border border-[#dfb871]/15 shadow-2xl relative z-10 space-y-6">
        
        {/* Top Header Logo & Mode Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 bg-gradient-to-br from-[#dfb871]/20 to-[#9a7836]/20 text-[#dfb871] rounded-2xl border border-[#dfb871]/20 mb-1 shadow-lg shadow-amber-500/5">
            {mode === 'login' && <Lock className="w-6 h-6" />}
            {mode === 'register' && <UserPlus className="w-6 h-6" />}
            {mode === 'forgot_password' && <KeyRound className="w-6 h-6" />}
          </div>
          <h2 className="text-2xl font-bold font-display text-white tracking-tight">
            {mode === 'login' && '§ 34a Lernportal Login'}
            {mode === 'register' && 'Schüler-Registrierung'}
            {mode === 'forgot_password' && 'Passwort zurücksetzen'}
          </h2>
          <p className="text-xs text-slate-400 font-medium font-sans">
            {mode === 'login' && 'Zentraler Login für Schüler und Dozenten'}
            {mode === 'register' && 'Konto erstellen mit Kurs-Code MOREDU34a'}
            {mode === 'forgot_password' && 'Identität über Sicherheitsfrage bestätigen'}
          </p>
        </div>

        {/* Navigation Tabs between Login & Register */}
        {mode !== 'forgot_password' && (
          <div className="flex bg-slate-950/80 p-1 rounded-2xl border border-white/5 gap-1">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2 text-xs font-bold font-sans rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Lock className="w-3.5 h-3.5" /> Anmelden
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError('');
                setSuccessMsg('');
              }}
              className={`flex-1 py-2 text-xs font-bold font-sans rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" /> Registrieren
            </button>
          </div>
        )}

        {/* Success Message Banner */}
        {successMsg && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-2xl text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Erfolgreich!</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{successMsg}</p>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="flex items-start gap-2.5 p-3.5 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl text-xs animate-[shake_0.4s_ease-in-out]">
            <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
            <span className="leading-tight">{error}</span>
          </div>
        )}

        {/* MODE 1: SINGLE CLEAN LOGIN FORM */}
        {mode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4 font-sans">
            
            {/* Name / Username Field */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Name oder Benutzername
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <User className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  required
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  placeholder="z. B. Admin oder Maximilian Schulze"
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/35 transition-all font-sans"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Passwort
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setMode('forgot_password');
                    setResetStep(1);
                    setError('');
                    setSuccessMsg('');
                  }}
                  className="text-[11px] text-[#dfb871] hover:underline font-semibold cursor-pointer"
                >
                  Passwort vergessen?
                </button>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Passwort eingeben..."
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 focus:ring-1 focus:ring-[#dfb871]/35 transition-all font-sans"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
                  disabled={loading}
                >
                  {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Angemeldet bleiben & Passwort vergessen */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                <label
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer select-none group ${
                    rememberMe
                      ? 'bg-[#dfb871]/10 border-[#dfb871]/40 text-white shadow-[0_0_15px_rgba(223,184,113,0.1)]'
                      : 'bg-slate-950/60 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                      rememberMe
                        ? 'bg-gradient-to-br from-[#dfb871] to-[#c8a97e] border-[#dfb871] text-slate-950 shadow-sm shadow-amber-500/20'
                        : 'bg-slate-900 border-white/20 group-hover:border-[#dfb871]/50'
                    }`}
                  >
                    {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-semibold">Angemeldet bleiben</span>
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setMode('forgot_password');
                    setResetStep(1);
                    setError('');
                    setSuccessMsg('');
                  }}
                  className="text-[11px] text-[#dfb871] hover:text-[#f5db9f] hover:underline font-semibold cursor-pointer transition-colors self-end sm:self-center px-1"
                >
                  Passwort vergessen?
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] hover:opacity-95 text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer active:scale-98 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-1.5 mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Anmeldung wird geprüft...
                </span>
              ) : (
                <>
                  Anmelden <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* MODE 2: REGISTER FORM */}
        {mode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-3.5 font-sans">
            {/* Vorname & Nachname Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Vorname <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
                  placeholder="z. B. Max"
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                  disabled={loading}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Nachname <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nachname}
                  onChange={(e) => setNachname(e.target.value)}
                  placeholder="z. B. Mustermann"
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Passwords Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Passwort <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showRegisterPassword ? 'text' : 'password'}
                    required
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Mind. 4 Zeichen"
                    className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
                    disabled={loading}
                  >
                    {showRegisterPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Wiederholen <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Bestätigen"
                    className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-3.5 pr-10 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
                    disabled={loading}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Security Question Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Sicherheitsfrage auswählen <span className="text-rose-400">*</span>
              </label>
              <CustomDropdown
                options={SECURITY_QUESTIONS.map((q) => ({
                  value: q,
                  label: q,
                  icon: <HelpCircle className="w-4 h-4 text-[#dfb871] shrink-0" />
                }))}
                value={securityQuestion}
                onChange={(val) => setSecurityQuestion(val)}
                className="w-full"
                maxWidth="w-full"
              />
            </div>

            {/* Security Answer Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Antwort auf Sicherheitsfrage <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <HelpCircle className="w-4 h-4 text-[#dfb871]" />
                </span>
                <input
                  type="text"
                  required
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  placeholder="z. B. Berlin oder Bello"
                  className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                  disabled={loading}
                />
              </div>
              <span className="text-[10px] text-slate-500 block">
                Diese Antwort benötigst du, falls du dein Passwort vergessen solltest.
              </span>
            </div>

            {/* Mandatory Course Code "MOREDU34a" */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Kurs-Code</span>
                <span className="text-[10px] text-[#dfb871] font-mono font-bold">(Pflichtfeld)</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                  <Building2 className="w-4 h-4 text-[#dfb871]" />
                </span>
                <input
                  type="text"
                  required
                  value={kursCode}
                  onChange={(e) => setKursCode(e.target.value)}
                  placeholder="MOREDU34a"
                  className="w-full bg-slate-950/70 border border-[#dfb871]/30 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871] transition-all font-mono font-bold"
                  disabled={loading}
                />
              </div>
              <span className="text-[10px] text-slate-400 block font-sans">
                Geben Sie den Kurscode <strong className="text-[#dfb871] font-mono">MOREDU34a</strong> ein.
              </span>
            </div>

            {/* DSGVO Consent Checkbox */}
            <div className="pt-1">
              <label
                onClick={() => setConsentGdpra(!consentGdpra)}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none group ${
                  consentGdpra
                    ? 'bg-[#dfb871]/10 border-[#dfb871]/40 text-white shadow-[0_0_15px_rgba(223,184,113,0.1)]'
                    : 'bg-slate-950/60 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <div
                  className={`mt-0.5 shrink-0 w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                    consentGdpra
                      ? 'bg-gradient-to-br from-[#dfb871] to-[#c8a97e] border-[#dfb871] text-slate-950 shadow-sm shadow-amber-500/20'
                      : 'bg-slate-900 border-white/20 group-hover:border-[#dfb871]/50'
                  }`}
                >
                  {consentGdpra && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs leading-relaxed font-sans">
                  Ich stimme den <span className="text-[#dfb871] font-semibold underline hover:text-[#f5db9f]">AGB</span> und den{' '}
                  <span className="text-[#dfb871] font-semibold underline hover:text-[#f5db9f]">DSGVO-Datenschutzbestimmungen</span> zu. <span className="text-rose-400">*</span>
                </span>
              </label>
            </div>

            {/* Submit Register */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] hover:opacity-95 text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer active:scale-98 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-1.5 mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Konto wird erstellt...
                </span>
              ) : (
                <>
                  Kostenlos Registrieren <UserPlus className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* MODE 3: FORGOT PASSWORD (3-STEP RECOVERY) */}
        {mode === 'forgot_password' && (
          <div className="space-y-4 font-sans">
            {/* Step Indicator */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-950/60 p-2 px-3 rounded-xl border border-white/5">
              <span>Schritt {resetStep} von 3</span>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setError('');
                }}
                className="text-[#dfb871] hover:underline flex items-center gap-1 cursor-pointer font-bold font-sans"
              >
                <ArrowLeft className="w-3 h-3" /> Zurück zum Login
              </button>
            </div>

            {/* STEP 1: Enter Name */}
            {resetStep === 1 && (
              <form onSubmit={handleResetStep1} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Vorname & Nachname
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={resetName}
                      onChange={(e) => setResetName(e.target.value)}
                      placeholder="z. B. Maximilian Schulze"
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Gib deinen registrierten Namen ein, um dein Konto zu suchen.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg cursor-pointer active:scale-98"
                >
                  Konto suchen & Weiter
                </button>
              </form>
            )}

            {/* STEP 2: Answer Security Question */}
            {resetStep === 2 && foundStudentForReset && (
              <form onSubmit={handleResetStep2} className="space-y-4">
                <div className="p-3 bg-slate-950/90 rounded-xl border border-[#dfb871]/30 space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block font-bold">
                    Deine Sicherheitsfrage:
                  </span>
                  <p className="text-xs font-bold text-white font-display">
                    "{foundStudentForReset.securityQuestion || 'In welcher Stadt bist du geboren?'}"
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Deine Antwort
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                      <HelpCircle className="w-4 h-4 text-[#dfb871]" />
                    </span>
                    <input
                      type="text"
                      required
                      value={resetAnswer}
                      onChange={(e) => setResetAnswer(e.target.value)}
                      placeholder="Antwort eingeben..."
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Groß- und Kleinschreibung wird ignoriert. (Demo-Antwort: Berlin)
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg cursor-pointer active:scale-98"
                >
                  Antwort prüfen
                </button>
              </form>
            )}

            {/* STEP 3: Enter New Password */}
            {resetStep === 3 && (
              <form onSubmit={handleResetStep3} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Neues Passwort
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Mindestens 4 Zeichen"
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Neues Passwort wiederholen
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showConfirmNewPassword ? 'text' : 'password'}
                      required
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Bestätigen..."
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#dfb871]/50 transition-all font-sans"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer"
                    >
                      {showConfirmNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#dfb871] via-[#f5db9f] to-[#dfb871] text-slate-950 text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg cursor-pointer active:scale-98"
                >
                  Neues Passwort speichern
                </button>
              </form>
            )}

            {/* Instructor fallback note */}
            <div className="p-3 bg-[#dfb871]/10 border border-[#dfb871]/20 rounded-xl text-[11px] text-slate-300 space-y-1 mt-3">
              <span className="font-bold text-[#dfb871] block">Sicherheitsfrage auch vergessen?</span>
              <p className="text-slate-400 leading-snug">
                Wende dich bitte an deinen Dozenten, damit er dein Passwort manuell zurücksetzt.
              </p>
            </div>
          </div>
        )}

        {/* Footer info/meta */}
        <div className="text-center pt-3 border-t border-white/5 space-y-1">
          <p className="text-[10px] text-slate-500 font-medium font-sans">
            Geprüftes Schulungsportal nach § 34a GewO & BewachV
          </p>
          <p className="text-[9.5px] text-slate-600 font-sans leading-tight">
            Hinweis: Dieses Lernportal ist ein unabhängiges Vorbereitungsprogramm und steht in keiner offiziellen Verbindung zu einer Industrie- und Handelskammer.
          </p>
        </div>
      </div>

      {/* Shake keyframe styling */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
