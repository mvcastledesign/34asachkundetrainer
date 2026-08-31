/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { 
  Flame, 
  Clock, 
  Target, 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  Layers, 
  ArrowRight, 
  Info, 
  Play 
} from 'lucide-react';
import { Question, UserProgressMap, LernhistorieItem, KATEGORIEN, UserProfile } from '../types.ts';

export interface ProgressStatsViewProps {
  questions?: Question[];
  progress?: UserProgressMap | any;
  history?: LernhistorieItem[];
  studyDuration?: number;
  currentUser?: UserProfile | null;
  onNavigate?: (view: string) => void;
}

// Prüfungsrelevante Punktegewichtung nach § 34a Rahmenlehrplan
const SACHGEBIET_DETAILS: Record<string, { punkte: number; maxScore: string; beschreibung: string }> = {
  'Recht der öffentlichen Sicherheit und Ordnung': {
    punkte: 16,
    maxScore: '16 Punkte (Kernfach)',
    beschreibung: 'Grundrechte, Polizeirecht, Abgrenzung privater Sicherheitsdienst'
  },
  'Gewerberecht (GewO / BewachV)': {
    punkte: 4,
    maxScore: '4 Punkte',
    beschreibung: '§ 34a GewO, Bewachungsverordnung, Ausweispflichten'
  },
  'Datenschutzrecht': {
    punkte: 8,
    maxScore: '8 Punkte',
    beschreibung: 'DSGVO, BDSG, Videoüberwachung im öffentlichen Raum'
  },
  'Bürgerliches Gesetzbuch (BGB)': {
    punkte: 16,
    maxScore: '16 Punkte (Kernfach)',
    beschreibung: 'Notwehr (§ 227), Notstand (§ 228/904), Hausrecht, Selbsthilfe (§ 229)'
  },
  'Straf- und Strafverfahrensrecht (StGB / StPO)': {
    punkte: 16,
    maxScore: '16 Punkte (Kernfach)',
    beschreibung: '§ 127 Abs. 1 StPO Jedermann-Festnahme, Notwehr (§ 32 StGB), Straftatbestände'
  },
  'Umgang mit Waffen': {
    punkte: 4,
    maxScore: '4 Punkte',
    beschreibung: 'Waffengesetz, Schreckschuss, Pfefferspray, Führen von Hiebwaffen'
  },
  'Unfallverhütungsvorschriften (UVV)': {
    punkte: 8,
    maxScore: '8 Punkte',
    beschreibung: 'DGUV Vorschrift 23 (Wach- und Sicherungsdienst), PSA'
  },
  'Umgang mit Menschen und Verhalten in Gefahrensituationen': {
    punkte: 16,
    maxScore: '16 Punkte (Kernfach)',
    beschreibung: 'Deeskalation, Konfliktbewältigung, Kommunikation, Eigensicherung'
  },
  'Grundsätze der Sicherheitstechnik': {
    punkte: 8,
    maxScore: '8 Punkte',
    beschreibung: 'Mechanische Sicherung, Brandmeldeanlagen (BMA), Einbruchmelder (EMA)'
  }
};

interface NormalizedExam {
  id: string;
  timestamp: number;
  dateFormatted: string;
  typ: string;
  mode: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  score: number; // 0 - 100 %
  pointsObtained: number;
  totalPoints: number;
  passed: boolean;
  durationSeconds?: number;
}

export default function ProgressStatsView({
  questions = [],
  progress = {},
  history = [],
  studyDuration = 0,
  currentUser,
  onNavigate
}: ProgressStatsViewProps) {
  const totalCatalogQuestions = questions.length > 0 ? questions.length : 180;

  // --------------------------------------------------------------------------
  // 1. REALE PRÜFUNGSSIMULATIONEN FILTERN & SORTIEREN
  // --------------------------------------------------------------------------
  const examHistory = useMemo<NormalizedExam[]>(() => {
    if (!Array.isArray(history)) return [];

    // Filter echte Prüfungen aus der Historie (ignoriere reine 1-Fragen-Klicks)
    const exams = history.filter(item => {
      if (!item) return false;
      const mode = (item.mode || '').toLowerCase();
      const typ = (item.typ || '').toLowerCase();
      
      const isExamMode = 
        mode === 'pruefung' ||
        mode === 'ihk_pruefung' ||
        mode === 'schriftlich' ||
        mode === 'exam';

      const isExamTyp = 
        typ.includes('prüf') || 
        typ.includes('test') || 
        typ.includes('schriftlich');

      // Mindestens 1 Frage oder dezidierter Prüfungsmodus
      return isExamMode || isExamTyp;
    });

    const mapped: NormalizedExam[] = exams.map((item, idx) => {
      let ts = Date.now();
      if (typeof item.rawTimestamp === 'number') {
        ts = item.rawTimestamp;
      } else if (typeof item.timestamp === 'number') {
        ts = item.timestamp;
      } else if (typeof item.timestamp === 'string') {
        const p = Date.parse(item.timestamp);
        if (!isNaN(p)) ts = p;
      }

      const score = typeof item.quote === 'number'
        ? item.quote
        : (item.anzahl > 0 ? Math.round((item.richtig / item.anzahl) * 100) : 0);

      const totalQuestions = item.anzahl || 0;
      const correctCount = item.richtig || 0;
      const incorrectCount = item.falsch || 0;
      const passed = score >= 50;

      const itemAny = item as any;
      const pointsObtained = typeof itemAny.pointsObtained === 'number' 
        ? itemAny.pointsObtained 
        : (typeof itemAny.punkte === 'number' ? itemAny.punkte : correctCount);

      const totalPoints = typeof itemAny.totalPoints === 'number' 
        ? itemAny.totalPoints 
        : (typeof itemAny.maxPunkte === 'number' ? itemAny.maxPunkte : (totalQuestions > 0 ? totalQuestions : 100));

      const durationSeconds = typeof itemAny.durationSeconds === 'number'
        ? itemAny.durationSeconds
        : (typeof itemAny.time_spent_seconds === 'number' ? itemAny.time_spent_seconds : undefined);

      const dateFormatted = new Date(ts).toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      return {
        id: item.id || `exam-${ts}-${idx}`,
        timestamp: ts,
        dateFormatted,
        typ: item.typ || 'IHK-Prüfungssimulation',
        mode: item.mode || 'schriftlich',
        totalQuestions,
        correctCount,
        incorrectCount,
        score,
        pointsObtained,
        totalPoints,
        passed,
        durationSeconds
      };
    });

    // Chronologisch aufsteigend sortieren (ältester Test zuerst, neuester Test zuletzt)
    return mapped.sort((a, b) => a.timestamp - b.timestamp);
  }, [history]);

  // Die bis zu 3 neuesten Prüfungssimulationen
  const last3Exams = useMemo(() => {
    return examHistory.slice(-3);
  }, [examHistory]);

  // Notendurchschnitt der letzten 3 Tests
  const avgScore = useMemo(() => {
    if (last3Exams.length === 0) return 0;
    const sum = last3Exams.reduce((acc, e) => acc + e.score, 0);
    return Math.round(sum / last3Exams.length);
  }, [last3Exams]);

  // --------------------------------------------------------------------------
  // 2. DYNAMISCHE GESAMTMETRIKEN AUS PROGRESS
  // --------------------------------------------------------------------------
  const { totalAnswered, totalCorrect, totalIncorrect } = useMemo(() => {
    if (!progress) {
      return { totalAnswered: 0, totalCorrect: 0, totalIncorrect: 0 };
    }

    const progAny = progress as any;
    if (Array.isArray(progAny.beherrschtIds) || Array.isArray(progAny.lernbedarfIds)) {
      const beherrscht = Array.isArray(progAny.beherrschtIds) ? progAny.beherrschtIds : [];
      const lernbedarf = Array.isArray(progAny.lernbedarfIds) ? progAny.lernbedarfIds : [];
      return {
        totalAnswered: beherrscht.length + lernbedarf.length,
        totalCorrect: beherrscht.length,
        totalIncorrect: lernbedarf.length
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
      totalIncorrect: incorrect
    };
  }, [progress]);

  // Gesamtkatalog-Quote
  const catalogProgressPercent = totalCatalogQuestions > 0 
    ? Math.min(100, Math.round((totalCorrect / totalCatalogQuestions) * 100)) 
    : 0;

  // Fehlerquote
  const errorRatePercent = totalAnswered > 0
    ? Math.round((totalIncorrect / totalAnswered) * 100)
    : 0;

  // Zeitformatierung
  const formattedStudyTime = useMemo(() => {
    const totalSecs = Math.max(0, studyDuration);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);

    if (hrs === 0 && mins === 0) {
      return totalSecs > 0 ? `${totalSecs} Sek.` : '0 Min.';
    }
    if (hrs === 0) {
      return `${mins} Min.`;
    }
    return `${hrs} Std. ${mins} Min.`;
  }, [studyDuration]);

  // Aktive Serie berechnen
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

  // --------------------------------------------------------------------------
  // 3. TIEFENANALYSE ALLER 9 SACHGEBIETE
  // --------------------------------------------------------------------------
  const categoryAnalysis = useMemo(() => {
    return KATEGORIEN.map(kat => {
      const katQuestions = questions.filter(q => q.kategorie === kat);
      const katTotal = katQuestions.length;
      let katMastered = 0;
      let katIncorrect = 0;
      let katUntested = 0;

      katQuestions.forEach(q => {
        const p = (progress as UserProgressMap)?.[q.id];
        if (!p || p.status === 'neu') {
          katUntested++;
        } else if (p.status === 'gewusst') {
          katMastered++;
        } else if (p.status === 'nicht_gewusst') {
          katIncorrect++;
        } else if ((p.correctCount || 0) > 0) {
          katMastered++;
        } else {
          katUntested++;
        }
      });

      const katPercent = katTotal > 0 ? Math.round((katMastered / katTotal) * 100) : 0;
      const details = SACHGEBIET_DETAILS[kat] || { punkte: 10, maxScore: 'Punkte nach Rahmenplan', beschreibung: 'Fachgebiet Sachkunde' };

      let statusBadge: { label: string; bg: string; text: string; border: string };
      if (katMastered === 0 && katIncorrect === 0) {
        statusBadge = {
          label: 'Noch unberührt',
          bg: 'bg-slate-800/60',
          text: 'text-slate-400',
          border: 'border-white/10'
        };
      } else if (katPercent >= 75) {
        statusBadge = {
          label: 'Ausgezeichnet',
          bg: 'bg-emerald-500/15',
          text: 'text-emerald-300',
          border: 'border-emerald-500/30'
        };
      } else if (katPercent >= 50) {
        statusBadge = {
          label: 'Auf gutem Weg',
          bg: 'bg-amber-500/15',
          text: 'text-amber-300',
          border: 'border-amber-500/30'
        };
      } else {
        statusBadge = {
          label: 'Lernbedarf',
          bg: 'bg-rose-500/15',
          text: 'text-rose-300',
          border: 'border-rose-500/30'
        };
      }

      return {
        name: kat,
        total: katTotal,
        mastered: katMastered,
        incorrect: katIncorrect,
        untested: katUntested,
        percent: katPercent,
        details,
        statusBadge
      };
    });
  }, [questions, progress]);

  return (
    <div className="space-y-8">
      {/* ---------------------------------------------------------------------
          1. KOPFZEILE & HAUPT-PRÜFUNGSREIFE (BASIEREND AUF LETZTEN 3 TESTS)
          --------------------------------------------------------------------- */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Detaillierte Lernanalyse & Prüfungsreife
          </h1>
          <p className="text-sm text-slate-400 mt-1 font-sans">
            Validierte 3-Test-Formkurve und Auswertung aller 9 Sachgebiete nach § 34a Rahmenstoffplan.
          </p>
        </div>

        {/* ===================================================================
            FALL 0: KEINE PRÜFUNG ABSOLVIERT (last3Exams.length === 0)
            =================================================================== */}
        {last3Exams.length === 0 && (
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 border border-blue-500/30 relative overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wide border bg-blue-500/15 border-blue-500/30 text-blue-300 flex items-center gap-1.5 shadow-sm">
                    <Info className="w-4 h-4 text-blue-400" />
                    Status: Prüfungssimulation ausstehend
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    IHK-Standard: 82 Fragen • 120 Minuten • Bestehen ab 50%
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight">
                    Prüfungsreife noch nicht ermittelbar
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                    Du hast noch keine vollständige Prüfungssimulation absolviert. Starte einen Probelauf (82 Fragen, 120 Min.), um deine IHK-Bestehenschance auf Basis echter Prüfungsbedingungen zu berechnen.
                  </p>
                </div>

                {/* Vorschau der 3-Test-Erfassung */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Berechnungsgrundlage (Letzte 3 IHK-Simulationen):
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-dashed border-white/20 text-slate-500 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      Test 1: Ausstehend
                    </div>
                    <span className="text-slate-600 font-mono">➔</span>
                    <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-dashed border-white/20 text-slate-500 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      Test 2: Ausstehend
                    </div>
                    <span className="text-slate-600 font-mono">➔</span>
                    <div className="px-3 py-2 rounded-xl bg-slate-900/80 border border-dashed border-white/20 text-slate-500 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      Test 3: Ausstehend
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex flex-col gap-3 min-w-[240px]">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('schriftlich')}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm font-display tracking-wide shadow-xl shadow-amber-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
                  >
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>Ersten Probelauf starten (1/3)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-[11px] text-slate-400 font-sans text-center">
                  💡 82 Fragen nach originalem IHK-Punkteschlüssel
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            FALL 1: 1 BIS 2 PRÜFUNGEN ABSOLVIERT (VORLÄUFIGE AUSWERTUNG)
            =================================================================== */}
        {last3Exams.length >= 1 && last3Exams.length < 3 && (
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 border border-amber-500/40 relative overflow-hidden shadow-2xl backdrop-blur-md bento-glow-gold">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wide border bg-amber-500/15 border-amber-500/30 text-amber-300 flex items-center gap-1.5 shadow-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Vorläufige Auswertung ({last3Exams.length}/3 Tests)
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    Prüfungsstandard: Mind. 3 Probeläufe für finale Freigabe
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                      {avgScore}%
                    </span>
                    <span className="text-sm font-semibold text-amber-300 font-sans">
                      Aktueller Durchschnitt ({last3Exams.length} {last3Exams.length === 1 ? 'Simulation' : 'Simulationen'} absolviert)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                    Basiert auf deinen bisherigen {last3Exams.length} von 3 empfohlenen Prüfungen. Absolviere noch {3 - last3Exams.length} weitere Simulation(en) unter Realbedingungen für eine statistisch belastbare IHK-Bestehensprognose.
                  </p>
                </div>

                {/* Dual-Marker Fortschrittsbalken */}
                <div className="space-y-1.5 pt-1">
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-white/10 p-[2px] relative">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full transition-all duration-700 shadow-sm"
                      style={{ width: `${Math.max(4, avgScore)}%` }}
                    />
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-amber-400/70 z-20 pointer-events-none" title="50% Bestehensgrenze" />
                    <div className="absolute top-0 bottom-0 left-3/4 w-[2px] bg-emerald-400/90 z-20 pointer-events-none" title="75% Prüfungsreife" />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 px-0.5">
                    <span>0%</span>
                    <span className="text-amber-400/90 font-bold">50% Bestehen</span>
                    <span className="text-emerald-400/90 font-bold">75% Sicher</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Rechte Box: Visuelle Form-Kurve mit Pills & Next Button */}
              <div className="shrink-0 flex flex-col gap-4 min-w-[260px]">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      FORM-KURVE (3ER-SERIE)
                    </span>
                  </div>

                  {/* Pills */}
                  <div className="flex items-center gap-2">
                    {last3Exams.map((e, idx) => (
                      <React.Fragment key={e.id}>
                        {idx > 0 && <span className="text-slate-500 text-xs">➔</span>}
                        <div className={`px-3 py-2 rounded-xl text-xs font-mono font-bold border flex flex-col items-center flex-1 ${
                          e.score >= 50 
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                            : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                        }`}>
                          <span className="text-[10px] text-slate-400 font-normal">Test {idx + 1}</span>
                          <span>{e.score}%</span>
                        </div>
                      </React.Fragment>
                    ))}

                    {/* Fehlende Slots auffüllen */}
                    {Array.from({ length: 3 - last3Exams.length }).map((_, i) => (
                      <React.Fragment key={`pending-${i}`}>
                        <span className="text-slate-600 text-xs">➔</span>
                        <div className="px-3 py-2 rounded-xl text-xs font-mono border border-dashed border-white/15 bg-slate-950/40 text-slate-500 flex flex-col items-center flex-1">
                          <span className="text-[10px]">Test {last3Exams.length + i + 1}</span>
                          <span className="text-[11px]">Offen</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('schriftlich')}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>
                      {examHistory.length === 1 
                        ? '2. Probelauf starten (1 von 3 absolviert)' 
                        : '3. Probelauf starten (2 von 3 absolviert)'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            FALL 2: 3 ODER MEHR PRÜFUNGEN ABSOLVIERT (FINALE IHK-BEWERTUNG)
            =================================================================== */}
        {last3Exams.length >= 3 && (
          <div className={`p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl backdrop-blur-md transition-all ${
            avgScore >= 75 
              ? 'bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/40 bento-glow-green' 
              : avgScore >= 50 
                ? 'bg-gradient-to-br from-amber-950/25 via-slate-900 to-slate-950 border border-amber-500/40 bento-glow-gold' 
                : 'bg-gradient-to-br from-rose-950/30 via-slate-900 to-slate-950 border border-rose-500/40 bento-glow-red'
          }`}>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wide border flex items-center gap-1.5 shadow-sm ${
                    avgScore >= 75 
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                      : avgScore >= 50 
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                        : 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                  }`}>
                    {avgScore >= 75 ? (
                      <>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Sicher prüfungsreif (IHK-Standard erfüllt)
                      </>
                    ) : avgScore >= 50 ? (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        Prüfung bestanden – Risikozone
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-400" />
                        Nicht bestanden – Dringender Trainingsbedarf
                      </>
                    )}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    3-Test-Auswertung • Zuverlässigkeit: Hoch
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                      {avgScore}%
                    </span>
                    <span className="text-sm font-semibold text-slate-300 font-sans">
                      Notendurchschnitt der letzten 3 Prüfungssimulationen
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                    {avgScore >= 75 ? (
                      'Hervorragend! Mit einem Durchschnitt von ' + avgScore + '% in deinen letzten 3 Prüfungen erfüllst du den sicheren Zielkorridor der IHK (ab 75%) und bist bestens für die offizielle Sachkundeprüfung gerüstet.'
                    ) : avgScore >= 50 ? (
                      'Du erreichst mit ' + avgScore + '% im Schnitt die 50%-Bestehensgrenze. Um in der echten Prüfung unvorhergesehene Punktabzüge sicher abzufedern, solltest du gezielt deine Schwachstellen trainieren und mindestens 75% anstreben.'
                    ) : (
                      'Dein 3-Test-Schnitt liegt mit ' + avgScore + '% unter der 50%-Bestehensgrenze. Nutze die Fehler-Wiederholung und den Fragenkatalog, um deine Wissenslücken vor der Prüfung systematisch zu schließen.'
                    )}
                  </p>
                </div>

                {/* Dual-Marker Fortschrittsbalken */}
                <div className="space-y-1.5 pt-1">
                  <div className="w-full bg-slate-950 h-3.5 rounded-full overflow-hidden border border-white/10 p-[2px] relative">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 shadow-sm ${
                        avgScore >= 75 
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                          : avgScore >= 50 
                            ? 'bg-gradient-to-r from-amber-500 to-emerald-400' 
                            : 'bg-gradient-to-r from-rose-600 to-amber-500'
                      }`}
                      style={{ width: `${Math.max(4, avgScore)}%` }}
                    />
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-amber-400/70 z-20 pointer-events-none" title="50% Bestehensgrenze" />
                    <div className="absolute top-0 bottom-0 left-3/4 w-[2px] bg-emerald-400/90 z-20 pointer-events-none" title="75% Prüfungsreife" />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 px-0.5">
                    <span>0%</span>
                    <span className="text-amber-400/90 font-bold">50% Bestehen</span>
                    <span className="text-emerald-400/90 font-bold">75% Prüfungsreif</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Rechte Box: 3 Pills & Form Kurve Header */}
              <div className="shrink-0 flex flex-col gap-4 min-w-[280px]">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      FORM-KURVE (3ER-SERIE)
                    </span>
                  </div>

                  {/* 3 Resultats-Pills */}
                  <div className="flex items-center gap-2">
                    {last3Exams.map((e, idx) => (
                      <React.Fragment key={e.id}>
                        {idx > 0 && <span className="text-slate-500 text-xs">➔</span>}
                        <div className={`px-3 py-2.5 rounded-xl text-xs font-mono font-bold border flex flex-col items-center flex-1 shadow-sm ${
                          e.score >= 50 
                            ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                            : 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                        }`}>
                          <span className="text-[10px] text-slate-400 font-normal">Test {idx + 1}</span>
                          <span className="text-sm font-extrabold">{e.score}%</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate('schriftlich')}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <Play className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Neue Prüfungssimulation starten</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------------------------
          2. 4 METRIK-KARTEN IM DARK-GLASS-DESIGN
          --------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Karte 1: Gesamte Lernzeit */}
        <div className="bento-glass p-5 rounded-3xl border border-white/10 flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display">Gesamte Lernzeit</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              {formattedStudyTime}
            </span>
            <span className="text-[11px] text-slate-400 block mt-1 font-medium font-sans">
              ⏱️ Reale Netto-Trainingsdauer
            </span>
          </div>
        </div>

        {/* Karte 2: Bearbeitete Fragen */}
        <div className="bento-glass p-5 rounded-3xl border border-white/10 flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display">Katalog-Fortschritt</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                {totalCorrect}
              </span>
              <span className="text-xs font-semibold text-slate-400 font-mono">
                / {totalCatalogQuestions} gemeistert
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block mt-1 font-medium font-sans">
              📚 {catalogProgressPercent}% des Gesamtkatalogs erfasst
            </span>
          </div>
        </div>

        {/* Karte 3: Letzter 3-Test-Schnitt */}
        <div className="bento-glass p-5 rounded-3xl border border-white/10 flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display">3-Test-Schnitt</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-1.5">
              <span className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight ${
                last3Exams.length === 0 
                  ? 'text-slate-500' 
                  : avgScore >= 75 
                    ? 'text-emerald-400' 
                    : avgScore >= 50 
                      ? 'text-amber-400' 
                      : 'text-rose-400'
              }`}>
                {last3Exams.length > 0 ? `${avgScore}%` : '–'}
              </span>
              <span className="text-xs font-semibold text-slate-400 font-mono">
                ({last3Exams.length}/3 Tests)
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block mt-1 font-medium font-sans">
              {last3Exams.length >= 3 ? '🛡️ Vollständig ermittelt' : '⏳ Vorläufiger Stand'}
            </span>
          </div>
        </div>

        {/* Karte 4: Aktuelle Lernserie */}
        <div className="bento-glass p-5 rounded-3xl border border-white/10 flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display">Aktuelle Lernserie</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                {streakDays}
              </span>
              <span className="text-sm font-bold text-amber-300 font-sans">
                {streakDays === 1 ? 'Tag' : 'Tage'}
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block mt-1 font-medium font-sans">
              🔥 Kontinuierlich aktiv gelernt
            </span>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------
          3. TIEFENANALYSE ALLER 9 SACHGEBIETE: Interaktives Grid
          --------------------------------------------------------------------- */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#dfb871]" />
              Tiefenanalyse aller 9 Sachgebiete
            </h2>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Detaillierte Aufschlüsselung nach Prüfungsrelevanz, Punkten und Beherrschungsgrad
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 text-xs font-mono font-semibold text-[#dfb871] bg-[#dfb871]/10 rounded-xl border border-[#dfb871]/20">
            9 von 9 Sachgebieten aktiv
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryAnalysis.map((cat) => (
            <div 
              key={cat.name} 
              className="bento-glass p-5 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-lg group bg-gradient-to-br from-slate-900/90 to-slate-950"
            >
              <div>
                {/* Header: Status-Badge & Punktegewichtung */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${cat.statusBadge.bg} ${cat.statusBadge.text} ${cat.statusBadge.border}`}>
                    {cat.statusBadge.label}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px] font-semibold shrink-0">
                    {cat.details.maxScore}
                  </span>
                </div>

                {/* Vollständiger Name */}
                <h3 className="text-sm font-bold text-white font-display leading-snug group-hover:text-[#dfb871] transition-colors break-words min-h-[2.5rem] flex items-center">
                  {cat.name}
                </h3>

                <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed font-sans line-clamp-2">
                  {cat.details.beschreibung}
                </p>
              </div>

              {/* Progress Bar & Detailzahlen */}
              <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium font-sans">
                    <strong className="text-white font-bold">{cat.mastered}</strong> von {cat.total} Fragen
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    {cat.percent}%
                  </span>
                </div>

                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <div 
                    className="bg-gradient-to-r from-[#dfb871] to-emerald-400 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.max(2, cat.percent)}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                  <span className="text-emerald-400/90">{cat.mastered} gemeistert</span>
                  {cat.incorrect > 0 && <span className="text-rose-400/90">{cat.incorrect} Fehler</span>}
                  <span className="text-slate-400">{cat.untested} offen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
