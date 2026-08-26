/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Upload, Download, Trash2, PlusCircle, AlertCircle, RefreshCw, CheckCircle } from 'lucide-react';
import { Question, KATEGORIEN, Schwierigkeit } from '../types.ts';
import CustomDropdown from './CustomDropdown.tsx';

interface DataManagementProps {
  questions: Question[];
  onAddQuestion: (q: Question) => void;
  onDeleteQuestion: (id: string) => void;
  onImportQuestions: (imported: Question[], option: 'merge' | 'replace') => void;
  onResetToDefaults: () => void;
}

export default function DataManagement({
  questions,
  onAddQuestion,
  onDeleteQuestion,
  onImportQuestions,
  onResetToDefaults
}: DataManagementProps) {
  // Add question state
  const [newKategorie, setNewKategorie] = useState<string>(KATEGORIEN[0]);
  const [newFrage, setNewFrage] = useState<string>('');
  const [newAntwort, setNewAntwort] = useState<string>('');
  const [newSchwierigkeit, setNewSchwierigkeit] = useState<Schwierigkeit>('Mittel');
  
  // Status feedback
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  
  // Reference imports
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFrage.trim() || !newAntwort.trim()) {
      setErrorMsg('Bitte fülle sowohl die Frage als auch die Antwort vollständig aus.');
      return;
    }

    const newQ: Question = {
      id: `q-custom-${Date.now()}`,
      kategorie: newKategorie,
      frage: newFrage.trim(),
      antwort: newAntwort.trim(),
      schwierigkeit: newSchwierigkeit
    };

    onAddQuestion(newQ);
    
    // Reset parameters
    setNewFrage('');
    setNewAntwort('');
    setErrorMsg('');
    setSuccessMsg('Frage erfolgreich hinzugefügt und lokal gespeichert!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Export as file
  const handleExportJSON = () => {
    try {
      const dataStr = JSON.stringify(questions, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `sachkundepruefung_34a_fragen_${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert('Der Export ist fehlgeschlagen.');
    }
  };

  // Import form file
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>, option: 'merge' | 'replace') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!Array.isArray(parsed)) {
          throw new Error('JSON Daten müssen ein Array von Fragen sein.');
        }

        // Validate parsed objects
        const validated: Question[] = [];
        parsed.forEach((obj, idx) => {
          if (typeof obj.frage === 'string' && typeof obj.antwort === 'string') {
            validated.push({
              id: obj.id || `q-imp-${idx}-${Date.now()}`,
              kategorie: typeof obj.kategorie === 'string' ? obj.kategorie : 'Sonstige Prüfungsfragen',
              frage: obj.frage,
              antwort: obj.antwort,
              schwierigkeit: (obj.schwierigkeit === 'Leicht' || obj.schwierigkeit === 'Mittel' || obj.schwierigkeit === 'Schwer') ? obj.schwierigkeit : 'Mittel'
            });
          }
        });

        if (validated.length === 0) {
          setErrorMsg('Es wurden keine gültigen Sachkunde-Fragen in der JSON-Datei gefunden.');
          return;
        }

        onImportQuestions(validated, option);
        setSuccessMsg(`Erfolgreich ${validated.length} Fragen importiert!`);
        setTimeout(() => setSuccessMsg(''), 4000);
        setErrorMsg('');
        
        // Reset file inputs values
        if (fileInputRef.current) fileInputRef.current.value = '';
      } catch (err: any) {
        setErrorMsg(`Fehler beim Einlesen der JSON-Datei: ${err.message || 'Ungültiges Format'}`);
      }
    };
    reader.readAsText(file);
  };

  const handleResetDefaultsTrigger = () => {
    setShowResetConfirm(true);
  };

  const handlePerformReset = () => {
    onResetToDefaults();
    setShowResetConfirm(false);
    setSuccessMsg('Fragenkatalog auf Werkseinstellung zurückgesetzt.');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Form column (Left 2/3) */}
      <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
        <div className="flex gap-2 items-center">
          <PlusCircle className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-slate-100 font-sans">Neue Prüfungsfrage anlegen</h2>
        </div>

        {successMsg && (
          <div className="p-3.5 bg-emerald-950/30 border border-emerald-900/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" /> {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="p-3.5 bg-rose-950/30 border border-rose-900/60 rounded-xl text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category selection */}
            <div className="space-y-1.5 row-span-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Kategorie des § 34a GewO</label>
              <CustomDropdown
                options={KATEGORIEN.map(kat => ({ value: kat, label: kat }))}
                value={newKategorie}
                onChange={setNewKategorie}
                className="w-full"
                maxWidth="w-full"
              />
            </div>

            {/* Level selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Prüfungs-Schwierigkeit</label>
              <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800 gap-1 select-none">
                {(['Leicht', 'Mittel', 'Schwer'] as Schwierigkeit[]).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setNewSchwierigkeit(lvl)}
                    className={`flex-1 text-center py-2 text-[10px] font-bold uppercase rounded-md transition-all cursor-pointer ${
                      newSchwierigkeit === lvl
                        ? 'bg-slate-800 text-slate-100 shadow-inner'
                        : 'text-slate-550 hover:text-slate-300'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Question Text block */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Frage</label>
            <input
              type="text"
              value={newFrage}
              onChange={e => setNewFrage(e.target.value)}
              placeholder="Welche Voraussetzungen müssen für den Betrieb eines Gewerbes erfüllt sein..."
              className="w-full bg-slate-950 text-slate-200 text-xs px-3.5 py-2.5 rounded-lg border border-slate-800 focus:ring-1 focus:ring-emerald-500 focus:outline-none placeholder-slate-700 font-sans"
            />
          </div>

          {/* Answer Text block */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Antwort (Musterlösung)</label>
            <textarea
              value={newAntwort}
              onChange={e => setNewAntwort(e.target.value)}
              placeholder="Hier kommt die Musterantwort hin, gegliedert nach Aufzählungen, Gesetzen und relevanten Paragraphen..."
              className="w-full h-32 bg-slate-950 text-slate-200 text-xs p-3.5 rounded-lg border border-slate-800 focus:ring-1 focus:ring-emerald-500 focus:outline-none placeholder-slate-700 resize-none font-sans"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer shadow-lg transition-all"
            >
              Lokal speichern
            </button>
          </div>
        </form>
      </div>

      {/* Roster & file actions (Right column) */}
      <div className="space-y-6">
        {/* Backup / Export / Import actions card */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <Upload className="w-4 h-4 text-emerald-400" /> Daten sichern / Einlesen
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Deine Lernfortschritte und hinzugefügten Fragen werden browserintern gespeichert. 
            Sichere deine Fragen als JSON-Datei ab, um sie nicht zu verlieren, oder spiele hunderte Fragen ein.
          </p>

          <div className="pt-2 space-y-3">
            {/* Export File Button */}
            <button
              onClick={handleExportJSON}
              className="w-full flex items-center justify-between px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-xs text-slate-200 font-semibold cursor-pointer select-none transition-all"
            >
              Fragenkatalog exportieren <Download className="w-4 h-4 text-emerald-400" />
            </button>

            {/* Import Merge File Button */}
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={e => handleImportJSON(e, 'merge')}
                className="hidden"
                id="file-import-input"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-between px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-xs text-slate-200 font-semibold cursor-pointer select-none transition-all"
              >
                Fragen importieren (.json) <Upload className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
            
            <p className="text-[9px] text-slate-500 italic text-center">
              * Unterstützt das §34a JSON-Objekt Format.
            </p>
          </div>
        </div>

        {/* Database cleanup / reset */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-rose-400 flex items-center gap-2">
            <Trash2 className="w-4 h-4 text-rose-500" /> Werkseinstellung
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Hast du fehlerhafte Daten geladen oder möchtest die Standardfragen wiederherstellen? 
            Dies setzt den Fragenpool auf die 22 ursprünglichen Expertenfragen zurück.
          </p>

          <div className="pt-2">
            <button
              onClick={handleResetDefaultsTrigger}
              className="w-full flex items-center justify-between px-4 py-2 bg-rose-950/20 hover:bg-rose-950/30 border border-rose-900/30 hover:border-rose-900/50 rounded-xl text-xs text-rose-300 font-semibold cursor-pointer transition-all"
            >
              Katalog zurücksetzen <RefreshCw className="w-4 h-4 text-rose-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Elegant custom interactive overlay modal for resetting catalog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4">
          <div className="w-full max-w-sm bento-glass p-6 rounded-2xl border border-rose-550/20 shadow-2xl relative space-y-4 text-center">
            <div className="inline-flex p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-[#dfb871]/15 mb-1.5 animate-pulse">
              <Trash2 className="w-6 h-6 text-rose-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-display">Katalog zurücksetzen?</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Deine eigenen hinzugefügten Prüfungsfragen und Anpassungen werden dabei unwiderruflich gelöscht. Möchtest du wirklich fortfahren?
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={handlePerformReset}
                className="w-full py-2.5 rounded-xl bg-rose-500/90 hover:bg-rose-550 text-white font-bold text-xs transition-all cursor-pointer active:scale-95"
              >
                Ja, alles zurücksetzen
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-750 text-xs font-semibold transition-all cursor-pointer active:scale-95"
              >
                Nein, Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
