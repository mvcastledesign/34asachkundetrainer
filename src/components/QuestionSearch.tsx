/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Eye, Filter, CheckCircle, XCircle, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { Question, UserProgressMap, KATEGORIEN, Schwierigkeit } from '../types.ts';
import TranslationView from './TranslationView.tsx';
import CustomDropdown from './CustomDropdown.tsx';

interface QuestionSearchProps {
  questions: Question[];
  progress: UserProgressMap;
  translationLang?: string;
}

export default function QuestionSearch({ questions, progress, translationLang = 'deaktiviert' }: QuestionSearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [selectedSchwierigkeit, setSelectedSchwierigkeit] = useState<string>('Alle');
  const [selectedStatus, setSelectedStatus] = useState<string>('Alle');
  
  // Expanded item state maps
  const [expandedIds, setExpandedIds] = useState<{ [id: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Big filtered query list computation
  const filteredList = useMemo(() => {
    return questions.filter(q => {
      // Search matches question or answer or category
      const query = searchQuery.trim().toLowerCase();
      const matchQuery = query === '' || 
        q.frage.toLowerCase().includes(query) || 
        q.antwort.toLowerCase().includes(query) || 
        q.kategorie.toLowerCase().includes(query);

      const matchCategory = selectedCategory === 'Alle' || q.kategorie === selectedCategory;
      const matchSchwierigkeit = selectedSchwierigkeit === 'Alle' || q.schwierigkeit === selectedSchwierigkeit;
      
      const pState = progress[q.id]?.status || 'neu';
      const matchStatus = selectedStatus === 'Alle' || 
        (selectedStatus === 'gewusst' && pState === 'gewusst') || 
        (selectedStatus === 'nicht_gewusst' && pState === 'nicht_gewusst') || 
        (selectedStatus === 'neu' && pState === 'neu');

      return matchQuery && matchCategory && matchSchwierigkeit && matchStatus;
    });
  }, [questions, progress, searchQuery, selectedCategory, selectedSchwierigkeit, selectedStatus]);

  return (
    <div className="space-y-6">
      {/* Search Input Bar & filter controls */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4 relative z-30">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Suche nach Stichwörtern in Prüfungsfragen und Antworten..."
            className="w-full bg-slate-950 text-slate-200 text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-700"
          />
        </div>

        {/* Filters grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Category Filter */}
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Kategorie</label>
            <CustomDropdown
              options={[
                { value: "Alle", label: `Alle Kategorien (${questions.length})` },
                ...KATEGORIEN.map(kat => ({
                  value: kat,
                  label: `${kat} (${questions.filter(q => q.kategorie === kat).length})`
                }))
              ]}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="w-full"
              maxWidth="w-full sm:w-[320px]"
            />
          </div>

          {/* Difficulty filter */}
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Schwierigkeit</label>
            <CustomDropdown
              options={[
                { value: "Alle", label: "Alle Schwierigkeiten" },
                { value: "Leicht", label: "Leicht" },
                { value: "Mittel", label: "Mittel" },
                { value: "Schwer", label: "Schwer" }
              ]}
              value={selectedSchwierigkeit}
              onChange={setSelectedSchwierigkeit}
              className="w-full"
              maxWidth="w-full"
            />
          </div>

          {/* Status filter */}
          <div className="space-y-1">
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Lernstatus</label>
            <CustomDropdown
              options={[
                { value: "Alle", label: "Alle Statusvarianten" },
                { value: "gewusst", label: "Beherrscht (Wusste ich)" },
                { value: "nicht_gewusst", label: "Lernbedarf (Nicht gewusst)" },
                { value: "neu", label: "Ungelernt" }
              ]}
              value={selectedStatus}
              onChange={setSelectedStatus}
              className="w-full"
              maxWidth="w-full"
            />
          </div>
        </div>
      </div>

      {/* Results Header Counter */}
      <div className="flex justify-between items-center px-2 text-xs text-slate-400">
        <span>Gefunden: <strong className="text-slate-200">{filteredList.length}</strong> von {questions.length} Fragen</span>
        {searchQuery.trim() !== '' && (
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Alle');
              setSelectedSchwierigkeit('Alle');
              setSelectedStatus('Alle');
            }}
            className="text-emerald-400 hover:underline cursor-pointer"
          >
            Filter zurücksetzen
          </button>
        )}
      </div>

      {/* Actual list of matching questions */}
      {filteredList.length === 0 ? (
        <div className="bg-slate-900/40 p-12 text-center rounded-2xl border border-slate-800/60 font-sans">
          <Layers className="w-12 h-12 text-slate-700 mx-auto mb-3" />
          <p className="text-slate-350 font-bold">Keine Treffer gefunden</p>
          <p className="text-xs text-slate-550 mt-1">Überprüfe das Suchwort oder setze die Filter zurück.</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredList.map(q => {
            const isExpanded = expandedIds[q.id] || false;
            const qProgress = progress[q.id]?.status || 'neu';
            
            return (
              <div 
                key={q.id}
                className="bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden shadow transition-all duration-200 hover:border-slate-700"
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 flex justify-between items-center cursor-pointer select-none gap-4"
                >
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-semibold text-emerald-400 font-mono tracking-tight bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-950">
                        {q.kategorie}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        q.schwierigkeit === 'Leicht' 
                          ? 'text-emerald-300 bg-emerald-950/40' 
                          : q.schwierigkeit === 'Schwer' 
                          ? 'text-rose-300 bg-rose-950/40' 
                          : 'text-amber-300 bg-amber-950/40'
                      }`}>
                        {q.schwierigkeit}
                      </span>
                      
                      {/* Learning status pill */}
                      {qProgress === 'gewusst' ? (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full text-emerald-400 bg-slate-950 border border-emerald-900/20 flex items-center gap-1">
                          <CheckCircle className="w-2.5 h-2.5" /> Beherrscht
                        </span>
                      ) : qProgress === 'nicht_gewusst' ? (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full text-rose-400 bg-slate-950 border border-rose-900/20 flex items-center gap-1">
                          <XCircle className="w-2.5 h-2.5" /> Lernbedarf
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm font-semibold text-slate-200 leading-snug">
                      {q.frage}
                    </p>
                  </div>

                  <div className="p-2 rounded bg-slate-950 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Expanded Answer Content */}
                {isExpanded && (
                  <div className="p-4 bg-slate-950 border-t border-[#dfb871]/15 text-xs md:text-sm text-slate-300 leading-relaxed space-y-3">
                    {translationLang !== 'deaktiviert' && (
                      <div className="pb-3 border-b border-white/[0.04]">
                        <span className="text-[#dfb871] text-[10px] font-black uppercase tracking-wider block mb-1">Frage Übersetzung:</span>
                        <TranslationView 
                          text={q.frage} 
                          questionId={q.id} 
                          targetLanguage={translationLang} 
                          type="frage" 
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-emerald-400 text-[10px] font-black uppercase tracking-wider block mb-1">
                        {translationLang !== 'deaktiviert' ? "Musterlösung (Deutsch):" : "Musterlösung:"}
                      </span>
                      <div className="whitespace-pre-wrap">{q.antwort}</div>
                      {translationLang !== 'deaktiviert' && (
                        <TranslationView 
                          text={q.antwort} 
                          questionId={q.id} 
                          targetLanguage={translationLang} 
                          type="antwort" 
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
