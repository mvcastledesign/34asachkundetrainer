/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Zap, History, TrendingUp, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Question, UserProgressMap, LernhistorieItem, KATEGORIEN } from '../types.ts';

interface StatsViewProps {
  questions: Question[];
  progress: UserProgressMap;
  history: LernhistorieItem[];
  studyDuration: number;
}

export default function StatsView({
  questions,
  progress,
  history,
  studyDuration
}: StatsViewProps) {
  // Stats calculation
  const totalQuestions = questions.length;
  const progressEntries = Object.values(progress);
  const totalCorrect = progressEntries.filter(p => p.status === 'gewusst').length;
  const totalIncorrect = progressEntries.filter(p => p.status === 'nicht_gewusst').length;
  const untested = totalQuestions - (totalCorrect + totalIncorrect);

  const progressPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  
  // Category progress calculations with names truncated for aesthetics
  const categoryChartData = KATEGORIEN.map((kat, idx) => {
    const katQuestions = questions.filter(q => q.kategorie === kat);
    const katTotal = katQuestions.length;
    const katCorrect = katQuestions.filter(q => progress[q.id]?.status === 'gewusst').length;
    const percent = katTotal > 0 ? Math.round((katCorrect / katTotal) * 100) : 0;
    
    return {
      category: kat,
      shortLabel: kat.length > 20 ? `${kat.slice(0, 18)}...` : kat,
      percent,
      correct: katCorrect,
      total: katTotal
    };
  });

  // Calculate achievements/awards
  const achievements = [
    {
      id: 'ach-1',
      title: 'Der Anfang ist gemacht',
      desc: 'Beantworte deine erste Frage im Lernmodus.',
      unlocked: progressEntries.length > 0,
      badge: '🎯'
    },
    {
      id: 'ach-2',
      title: 'Erstes Etappenziel',
      desc: 'Beherrsche mindestens 10 Prüfungsfragen.',
      unlocked: totalCorrect >= 10,
      badge: '⭐'
    },
    {
      id: 'ach-3',
      title: 'Fachgebiet-Experte',
      desc: 'Erreiche 100% Lernfortschritt in mindestens einer Kategorie.',
      unlocked: categoryChartData.some(c => c.percent === 100),
      badge: '👑'
    },
    {
      id: 'ach-4',
      title: 'Ernster Anwärter',
      desc: 'Absolviere mindestens eine vollständige Prüfungssimulation.',
      unlocked: history.some(h => h.typ === 'Prüfung'),
      badge: '🎓'
    },
    {
      id: 'ach-5',
      title: 'Paragraphen-Reitmeister',
      desc: 'Beachte Gesetzlichkeiten und lerne über 2 Stunden.',
      unlocked: studyDuration >= 7200,
      badge: '🔥'
    }
  ];

  // Helper formatting seconds to printable string
  const formatTimeMinutes = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    if (mins < 60) return `${mins} Min.`;
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs} Std. ${remMins} Min.`;
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Success Quote Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Erfolgsquote</span>
            <h3 className="text-2xl font-bold font-mono text-emerald-400 mt-2">
              {progressPercent}% <span className="text-slate-500 text-xs font-sans font-normal">Gesamtwert</span>
            </h3>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Dein Fortschritt berechnet sich aus dem Verhältnis der vollständig beherrschten Fragen zur Gesamtfrageanzahl.
            </p>
          </div>
          <div className="mt-4 flex gap-1.5 text-[10px] font-mono text-slate-400">
            <span className="text-emerald-400">● {totalCorrect} Beherrscht</span>
            <span className="text-rose-400">● {totalIncorrect} Lernbedarf</span>
            <span className="text-slate-500">● {untested} Ungelernt</span>
          </div>
        </div>

        {/* Milestones Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Lernaktivität</span>
            <h3 className="text-2xl font-bold font-mono text-indigo-400 mt-2">
              {history.length} <span className="text-slate-500 text-xs font-sans font-normal">Sitzungen</span>
            </h3>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Deine Lernhistorie protokolliert jede abgeschlossene Lerneinheit oder Prüfungssimulation.
            </p>
          </div>
          <div className="mt-4 text-[10px] text-slate-300 font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-indigo-400" /> Gesamtzeit: {formatTimeMinutes(studyDuration)}
          </div>
        </div>

        {/* Level details Card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Empfehlung</span>
            <h3 className="text-base font-bold text-slate-200 mt-2">
              {progressPercent >= 75 ? '🔥 Prüfungsbereit!' : progressPercent >= 40 ? '⚡ Auf gutem Weg' : '📚 Weiter lernen'}
            </h3>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Unsere Empfehlung: Tritt erst zur echten mündlichen Sachkundeprüfung an, wenn dein Lernfortschritt mindestens 75% beträgt.
            </p>
          </div>
          <div className="mt-4">
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div className="bg-gradient-to-r from-orange-500 to-emerald-500 h-full" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Custom Charts & History / Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Custom SVG Bar Chart: Progress per category */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> Fortschritt nach Sachgebieten
            </h3>
            <p className="text-[10px] text-slate-400">Verteilung deiner gemeisterten Fragen</p>
          </div>

          <div className="space-y-3 pt-2">
            {categoryChartData.map(item => (
              <div key={item.category} className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span className="truncate max-w-[200px]" title={item.category}>{item.shortLabel}</span>
                  <span className="font-mono text-slate-400 font-semibold">{item.percent}%</span>
                </div>
                {/* Horizontal bar representation */}
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800 flex">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-500" 
                    style={{ width: `${item.percent}%` }}
                  />
                  <div className="bg-transparent h-full flex-grow" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action History logs & Achievements columns */}
        <div className="space-y-6">
          {/* Historical Logs List */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              <History className="w-4 h-4 text-indigo-400" /> Letzte Aktivitäten
            </h3>
            
            {history.length === 0 ? (
              <p className="text-[11px] text-slate-500 italic py-4 text-center">Noch keine Lernhistorie vorhanden.</p>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {[...history].reverse().slice(0, 10).map((hist) => (
                  <div key={hist.id} className="p-3 bg-slate-950/40 rounded-xl border border-slate-850 flex justify-between items-center text-xs">
                    <div>
                      <p className="text-slate-300 font-semibold">{hist.typ}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{hist.timestamp}</p>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <span className="text-emerald-400" title="Richtig">{hist.richtig}R</span>{' / '}
                      <span className="text-rose-400" title="Falsch">{hist.falsch}F</span>
                      <p className="text-[10px] text-slate-500">({hist.anzahl} Fragen)</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Achievement Badges Collection */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Erfolge & Meilensteine
            </h3>

            <div className="space-y-3">
              {achievements.map((ach) => (
                <div 
                  key={ach.id} 
                  className={`p-3 rounded-xl border flex items-center gap-3.5 transition-all ${
                    ach.unlocked 
                      ? 'bg-slate-950 border-slate-800 text-slate-200' 
                      : 'bg-slate-950/20 border-slate-900/50 text-slate-600 select-none'
                  }`}
                >
                  <span className={`text-2xl p-1.5 bg-slate-900 rounded-lg ${!ach.unlocked && 'opacity-20'}`}>
                    {ach.badge}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold">{ach.title}</h4>
                    <p className="text-[10px] text-slate-500">{ach.desc}</p>
                  </div>
                  {ach.unlocked && (
                    <span className="ml-auto text-[10px] text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/10 font-bold uppercase">
                      Gelöst
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
