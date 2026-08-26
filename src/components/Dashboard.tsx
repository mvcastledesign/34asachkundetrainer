/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  Award, 
  Target, 
  Flame, 
  Play, 
  Clock, 
  Scale, 
  FileText, 
  Video,
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { Question, UserProgressMap, KATEGORIEN } from '../types.ts';

interface DashboardProps {
  questions: Question[];
  progress: UserProgressMap;
  studyDuration: number;
  dailyGoal: number;
  setDailyGoal: (g: number) => void;
  onNavigate: (view: string) => void;
}

export default function Dashboard({
  questions,
  progress,
  studyDuration,
  dailyGoal,
  setDailyGoal,
  onNavigate
}: DashboardProps) {
  const [isDailyGoalRevealed, setIsDailyGoalRevealed] = React.useState(false);
  const [isPurpleRevealed, setIsPurpleRevealed] = React.useState(false);

  // Calculations
  const totalQuestions = questions.length;
  
  const progressEntries = Object.values(progress);
  const totalAnswered = progressEntries.filter(p => p.correctCount > 0 || p.incorrectCount > 0).length;
  const totalCorrect = progressEntries.filter(p => p.status === 'gewusst').length;
  const totalIncorrect = progressEntries.filter(p => p.status === 'nicht_gewusst').length;

  const progressPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  
  // Daily Goal answered calculations: Count questions tested today (within last 24 hours)
  const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
  const answeredToday = progressEntries.filter(p => p.lastTested > oneDayAgo).length;
  const dailyGoalPercent = Math.min(100, Math.round((answeredToday / dailyGoal) * 100));

  // Category progress
  const categoryStats = KATEGORIEN.map(kat => {
    const katQuestions = questions.filter(q => q.kategorie === kat);
    const katTotal = katQuestions.length;
    const katCorrect = katQuestions.filter(q => progress[q.id]?.status === 'gewusst').length;
    const katPercent = katTotal > 0 ? Math.round((katCorrect / katTotal) * 100) : 0;
    
    return {
      name: kat,
      total: katTotal,
      correct: katCorrect,
      percent: katPercent
    };
  });

  // Formatting study duration (seconds to hh:mm:ss)
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8">
      {/* Hero Welcome Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-950/90 via-[#dfb871]/10 to-slate-950/60 border border-[#dfb871]/30 relative overflow-hidden bento-glow-gold shadow-2xl">
        <div className="relative z-10 max-w-4xl">
          <span className="px-3.5 py-1 text-[10px] sm:text-xs font-mono font-bold text-[#dfb871] bg-[#dfb871]/10 rounded-full border border-[#dfb871]/30 tracking-wider uppercase inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb871]" /> § 34A GEWO TRAININGSZENTRUM
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight leading-tight">
            § 34a Sachkundetraining
          </h1>
          <p className="text-slate-300 mt-2.5 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
            Wähle deinen Trainingsmodus: Teste dein Fachwissen, absolviere Prüfungs-Simulationen oder vertiefe deine Kenntnisse mit Fallbeispielen und Karteikarten.
          </p>

          {/* 6-Button Responsive Grid (3 Desktop / 2 Mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 mt-7">
            
            {/* Button 1: Highlight / Primary - Schriftlicher Test */}
            <button
              onClick={() => onNavigate('schriftlich')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-slate-900/80 hover:bg-slate-800/90 border border-amber-400/50 hover:border-amber-400 text-amber-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-sm shadow-amber-500/10 group"
            >
              <span className="text-base">📝</span>
              <span>Schriftlicher Test</span>
            </button>

            {/* Button 2: Video-Trainer */}
            <button
              onClick={() => onNavigate('video-trainer')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-slate-900/80 hover:bg-slate-800/90 border border-blue-400/50 hover:border-blue-400 text-blue-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-sm shadow-blue-500/10 group"
            >
              <span className="text-base">🎥</span>
              <span>Video-Trainer</span>
            </button>

            {/* Button 3: Fallbeispiele */}
            <button
              onClick={() => onNavigate('fallbeispiele')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-amber-500/40 text-slate-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-md hover:shadow-amber-500/10 group"
            >
              <span className="text-base">⚖️</span>
              <span>Fallbeispiele</span>
            </button>

            {/* Button 4: Karteikarten */}
            <button
              onClick={() => onNavigate('karteikarten')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-purple-500/40 text-slate-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-md hover:shadow-purple-500/10 group"
            >
              <span className="text-base">🗂️</span>
              <span>Karteikarten</span>
            </button>

            {/* Button 5: Endlos-Streak */}
            <button
              onClick={() => onNavigate('streak-challenge')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-rose-500/40 text-slate-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-md hover:shadow-rose-500/10 group"
            >
              <span className="text-base">🔥</span>
              <span>Endlos-Streak</span>
            </button>

            {/* Button 6: „Was bin ich?“ Quiz */}
            <button
              onClick={() => onNavigate('was-bin-ich')}
              className="py-2.5 px-3 sm:px-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white font-display font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center sm:justify-start gap-2.5 backdrop-blur-md active:scale-[0.98] cursor-pointer shadow-md hover:shadow-emerald-500/10 group"
            >
              <span className="text-base">❓</span>
              <span>„Was bin ich?“ Quiz</span>
            </button>

          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-8 opacity-10 hidden xl:block select-none pointer-events-none">
          <Award className="w-72 h-72 text-[#dfb871]" />
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Progress */}
        <div className="bento-glass p-5 rounded-3xl flex flex-col justify-between min-h-[160px] relative overflow-hidden bento-glow-green">
          <div className="flex justify-between items-start relative z-10">
            <span className="text-slate-400 text-xs font-semibold tracking-wide font-display">Lernfortschritt</span>
            <div className="p-2 rounded-xl bg-[#dfb871]/10 text-[#dfb871] border border-[#dfb871]/15">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 relative z-10">
            <span className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">{progressPercent}%</span>
            <div className="w-full bg-white/[0.05] h-1.5 rounded-full mt-2 overflow-hidden border border-white/5">
              <div 
                className="bg-gradient-to-r from-[#dfb871] to-[#f5db9f] h-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-400 block mt-1.5 font-medium font-sans">
              {totalCorrect} von {totalQuestions} Fragen beherrscht
            </span>
          </div>
        </div>

        {/* Action / Answered Stats - Dynamic folding hover card */}
        <div 
          onClick={() => setIsPurpleRevealed(!isPurpleRevealed)}
          className={`interactive-purple-card ${isPurpleRevealed ? 'revealed' : ''}`}
        >
          {/* Card Front */}
          <div className="purple-card-front">
            <div className="flex justify-between items-start w-full">
              <span className="text-slate-200 text-xs font-semibold tracking-wide font-display">Beantwortet</span>
              <div className="p-2 rounded-xl bg-white/10 text-white/90 purple-card-icon">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            
            <div className="mt-3 text-left -translate-y-1 transform">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">{totalAnswered}</span>
                <span className="text-[#c7d2fe] text-xs font-medium ml-1">/ {totalQuestions}</span>
              </div>
              <span className="text-[10px] text-[#e0e7ff] block mt-2 font-bold uppercase tracking-widest font-display animate-pulse">
                Details ansehen
              </span>
            </div>
          </div>

          {/* Card Back / Hover slide content */}
          <div className="purple-card-content">
            <div className="flex justify-between items-center w-full">
              <span className="text-white text-xs font-bold font-display uppercase tracking-wider">Ergebnis-Details</span>
              <span className="text-[10px] text-[#c7d2fe] font-mono font-semibold">
                {Math.round((totalAnswered / (totalQuestions || 1)) * 100)}% Antwortquote
              </span>
            </div>

            <div className="my-auto py-1 text-white text-left font-sans">
              <h4 className="text-xs font-bold mb-1.5 text-white">Statistik:</h4>
              <p className="text-[11px] leading-relaxed text-[#e0e7ff] font-medium font-sans">
                Du hast bereits {totalAnswered} von {totalQuestions} Fragen im Lern- oder Prüfungsmodus bearbeitet.
              </p>
            </div>

            <div className="flex gap-2 mt-2 text-[10px] font-mono font-medium">
              <span className="flex items-center gap-1 text-emerald-350 bg-[#000]/30 px-2 py-0.5 rounded border border-emerald-500/20">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-300" /> {totalCorrect} richtig
              </span>
              <span className="flex items-center gap-1 text-rose-300 bg-[#000]/30 px-2 py-0.5 rounded border border-rose-500/20">
                <XCircle className="w-3.5 h-3.5 text-rose-300" /> {totalIncorrect} falsch
              </span>
            </div>
          </div>
        </div>

        {/* Daily Goal Tracking - Dynamic 3D folding flap card */}
        <div 
          onClick={() => setIsDailyGoalRevealed(!isDailyGoalRevealed)}
          className={`interactive-metric-card ${isDailyGoalRevealed ? 'revealed' : ''}`}
        >
          {/* Card Front (Primary screen) */}
          <div className="metric-card-front">
            <div className="flex justify-between items-start w-full">
              <span className="text-slate-400 text-xs font-semibold tracking-wide font-display">Tagesziel</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-450 border border-amber-500/15">
                <Target className="w-4 h-4" />
              </div>
            </div>
            
            <div className="mt-2 flex flex-col items-center justify-center flex-1 w-full text-center py-1">
              <Target className="w-10 h-10 text-[#dfb871] tracking-icon animate-pulse mb-1.5" />
              <span className="text-3xl font-bold text-white font-display tracking-tight">
                {answeredToday} <span className="text-slate-500 text-xs font-semibold">/ {dailyGoal}</span>
              </span>
              <span className="text-[10px] text-[#dfb871] font-bold uppercase tracking-widest mt-1">
                Klicke für Details
              </span>
            </div>
          </div>

          {/* Card Content (Bottom-hinged flap) */}
          <div className="metric-card-content">
            <div className="flex justify-between items-center w-full">
              <span className="text-slate-300 text-xs font-bold font-display">Tagesziel</span>
              <span className="text-[11px] text-[#dfb871] font-semibold font-mono bg-[#dfb871]/10 px-1.5 py-0.5 rounded border border-[#dfb871]/20">
                {dailyGoalPercent}%
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-end mt-1">
              {/* ProgressBar */}
              <div className="w-full bg-white/[0.05] h-1.5 rounded-full mt-2 overflow-hidden border border-white/5">
                <div 
                  className="bg-gradient-to-r from-[#dfb871] to-[#f5db9f] h-full transition-all duration-500" 
                  style={{ width: `${dailyGoalPercent}%` }}
                />
              </div>

              {/* Goal Increments */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-[10px] text-slate-400 font-medium font-sans">Ziel anpassen</span>
                <div className="flex gap-1.5">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setDailyGoal(Math.max(5, dailyGoal - 5));
                    }}
                    className="px-2 py-0.5 text-[9px] font-mono text-slate-300 bg-white/[0.04] border border-white/5 rounded-md hover:bg-white/[0.1] hover:text-white transition-all cursor-pointer active:scale-95"
                  >
                    -5
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setDailyGoal(dailyGoal + 5);
                    }}
                    className="px-2 py-0.5 text-[9px] font-mono text-slate-300 bg-white/[0.04] border border-white/5 rounded-md hover:bg-white/[0.1] hover:text-white transition-all cursor-pointer active:scale-95"
                  >
                    +5
                  </button>
                </div>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 uppercase tracking-widest text-center mt-3 pt-2 border-t border-white/5 font-bold font-display">
              Klicke zum Schließen
            </div>
          </div>
        </div>

        {/* Study Time */}
        <div className="bento-glass p-5 rounded-3xl flex flex-col justify-between min-h-[160px] relative overflow-hidden bento-glow-indigo">
          <div className="flex justify-between items-start">
            <span className="text-slate-400 text-xs font-semibold tracking-wide font-display">Lernzeit gesamt</span>
            <div className="p-2 rounded-xl bg-amber-550/10 text-[#dfb871] border border-[#dfb871]/15">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tight font-display">
              {formatTime(studyDuration)}
            </span>
            <p className="text-[10px] text-[#dfb871] font-medium mt-2 flex items-center gap-1 font-sans">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Aktiv am Lernen!
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Category Progress & Quick Spaced Repetition Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category breakdown (2cols equivalent on large screens) */}
        <div className="lg:col-span-2 bento-glass p-6 rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold font-display text-white">
                  Themengebiete des § 34a GewO
                </h2>
                <p className="text-xs text-slate-400 mt-0.5 font-medium font-sans">
                  Fortschritt nach richtig beantworteten Fragen pro Prüfungsfeld
                </p>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-display font-semibold tracking-wide text-[#dfb871] bg-[#dfb871]/5 rounded-lg border border-[#dfb871]/15">
                11 Sachgebiete
              </span>
            </div>

            <div className="space-y-4">
              {categoryStats.map(cat => (
                <div key={cat.name} className="group">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-semibold truncate max-w-[280px] md:max-w-md group-hover:text-[#dfb871] transition-colors font-sans">
                      {cat.name}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {cat.correct} / {cat.total} <span className="text-slate-500">({cat.percent}%)</span>
                    </span>
                  </div>
                  <div className="w-full bg-white/[0.03] h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                    <div 
                      className="bg-gradient-to-r from-[#dfb871] to-[#f5db9f ] h-full rounded-full transition-all duration-500 group-hover:from-[#f5db9f] group-hover:to-[#dfb871]" 
                      style={{ width: `${cat.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions, Streak Challenge & Video Trainer Feature Cards */}
        <div className="space-y-6 flex flex-col">
          {/* Spotlight Card: Fachbegriffe-Glossar & Prüfungsdeutsch */}
          <div 
            onClick={() => onNavigate('glossar')}
            className="bento-glass p-5 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-slate-950 hover:border-cyan-400 transition-all cursor-pointer group shadow-xl active:scale-[0.99] relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> NEU: GLOSSAR & SIGNALWÖRTER
              </span>
              <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white group-hover:scale-110 transition-transform shadow-md">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-bold text-white font-display group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                Fachbegriffe & Prüfungsdeutsch-Knacker
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Verstehe Prüfungsfallen wie „trifft NICHT zu“, „ZWEI Antworten“, „unverzüglich“ und schlage Begriffe mit Wachdienst-Merksätzen nach.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-cyan-300">
              <span>Glossar & Fallen öffnen</span>
              <span className="group-hover:translate-x-1 transition-transform">📖 →</span>
            </div>
          </div>

          {/* Spotlight Card: Endlos-Streak-Challenge */}
          <div 
            onClick={() => onNavigate('streak-challenge')}
            className="bento-glass p-5 rounded-3xl border border-amber-500/50 bg-gradient-to-br from-amber-500/20 via-slate-900 to-rose-950/40 hover:border-amber-400 transition-all cursor-pointer group shadow-2xl active:scale-[0.99] relative overflow-hidden ring-1 ring-amber-500/30"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-400/40 text-[10px] font-mono font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> HIGHSCORE-MODUS
              </span>
              <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 text-slate-950 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                <Flame className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-black text-white font-display group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                Endlos-Streak-Challenge & Leaderboard
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Wie viele § 34a Fragen schaffst du fehlerfrei hintereinander? Klettere an die Spitze der Klassen-Bestenliste!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400">
              <span>Challenge starten</span>
              <span className="group-hover:translate-x-1 transition-transform">🔥 →</span>
            </div>
          </div>

          {/* Spotlight Card: Video Trainer */}
          <div 
            onClick={() => onNavigate('video-trainer')}
            className="bento-glass p-5 rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-500/10 via-slate-900 to-slate-950 hover:border-blue-400/70 transition-all cursor-pointer group shadow-xl active:scale-[0.99] relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> LIVE VIDEO
              </span>
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform shadow-md">
                <Video className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-bold text-white font-display group-hover:text-blue-300 transition-colors">
                Interaktiver Video-Szenario-Trainer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Einlasskontrolle Club Aura: Triff sekundenschnelle Verzweigungsentscheidungen im flüssigen Video-Stream (§ 34a GewO).
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-blue-300">
              <span>Fallbeispiel starten</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Spotlight Card: Was bin ich? */}
          <div 
            onClick={() => onNavigate('was-bin-ich')}
            className="bento-glass p-5 rounded-3xl border border-[#dfb871]/40 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 hover:border-[#dfb871]/70 transition-all cursor-pointer group shadow-xl active:scale-[0.99] relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> SPIELMODUS
              </span>
              <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-[#dfb871] text-slate-950 group-hover:scale-110 transition-transform shadow-md">
                <HelpCircle className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <h3 className="text-sm font-bold text-white font-display group-hover:text-[#dfb871] transition-colors">
                „Was bin ich?“ – 20 Rechtsbegriffe-Quiz
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Errate wichtige Rechtsbegriffe (Notwehr, Besitzkehr, Garantenstellung etc.) anhand von Mystery-Aussagen in der Ich-Perspektive!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#dfb871]">
              <span>Rätsel starten (20 Fragen)</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="bento-glass p-6 rounded-3xl flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-sm font-bold font-display text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-[#dfb871]" />
                Prüfungsdauer & Ablauf
              </h3>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed font-sans">
                Die mündliche Prüfung dauert in der Regel ca. <strong>15 bis 20 Minuten</strong> pro Teilnehmer. 
                Anders als beim schriftlichen Teil (Multiple Choice) kommt es hier darauf an, Paragraphen, 
                Befugnisse und Sicherheitsmechanismen <strong className="text-[#dfb871]">frei und präzise mündlich zu erklären</strong>.
              </p>
            </div>
            <div className="bg-[#dfb871]/5 p-4 rounded-2xl border border-[#dfb871]/15 mt-5">
              <p className="text-[11px] font-bold text-[#dfb871] flex items-center gap-1 font-display uppercase tracking-widest">🎓 Tipp für das Bestehen:</p>
              <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed font-semibold font-sans">
                Antworte ruhig und gliedere deine Sätze strukturiert! Beginne oft mit der rechtlichen 
                Grundlage (z.B. „Jedermannsrechte gemäß § 127 StPO...“ oder „Besitzstörungsrecht nach BGB...“).
              </p>
            </div>
          </div>

          {/* Quick Stats Summary circle chart (pure SVG) */}
          <div className="bento-glass p-6 rounded-3xl flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-bold font-display text-white mb-4 w-full text-left">Lernquote</h3>
            
            {/* SVG Donut */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background track */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  className="stroke-slate-900/80 fill-none" 
                  strokeWidth="8" 
                />
                {/* Progress bar */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  className="stroke-[#dfb871] fill-none transition-all duration-700" 
                  strokeWidth="8" 
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progressPercent / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-3xl font-bold font-display text-white tracking-tight">{progressPercent}%</span>
                <span className="text-[9px] text-slate-450 block mt-0.5 font-bold uppercase tracking-wider font-display text-[#dfb871]">Erlernt</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 leading-relaxed font-semibold font-sans">
              Deine aktuelle Erfolgsquote. Versuche in jeder Kategorie mindestens zwei Kontrollfragen auf „Wusste ich“ zu setzen!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .interactive-metric-card {
          position: relative;
          min-height: 160px;
          background-color: rgba(10, 11, 18, 0.85);
          border: 1px solid rgba(223, 184, 113, 0.15);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          perspective: 1000px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
        .interactive-metric-card:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(223, 184, 113, 0.18);
          border-color: rgba(223, 184, 113, 0.35);
        }
        .metric-card-front {
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .tracking-icon {
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .interactive-metric-card.revealed .tracking-icon {
          scale: 0;
          opacity: 0;
        }
        .metric-card-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: #05060b;
          border-radius: 24px;
          border: 1px solid rgba(223, 184, 113, 0.35);
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 20;
        }
        .interactive-metric-card.revealed .metric-card-content {
          transform: rotateX(0deg);
        }

        /* Interactive purple folding card style */
        .interactive-purple-card {
          position: relative;
          min-height: 160px;
          background-color: #474dc3;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          perspective: 1000px;
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
        .interactive-purple-card:hover, .interactive-purple-card.revealed {
          transform: scale(1.04);
          box-shadow: 0 8px 16px #000000;
          background-color: #474dc3;
          color: #ffffff;
        }
        .purple-card-front {
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .purple-card-icon {
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .interactive-purple-card:hover .purple-card-icon, .interactive-purple-card.revealed .purple-card-icon {
          transform: scale(0);
          opacity: 0;
        }
        .purple-card-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: #474dc3;
          border-radius: 24px;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 20;
        }
        .interactive-purple-card:hover .purple-card-content, .interactive-purple-card.revealed .purple-card-content {
          transform: rotateX(0deg);
        }
      `}</style>
    </div>
  );
}
