/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  PlusCircle, 
  Upload, 
  Trash2, 
  Edit3, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Check, 
  X, 
  RefreshCw, 
  Award,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { WrittenQuestion } from '../types.ts';
import { IHK_CATEGORIES_CONFIG } from '../data/ihk120ExamQuestions.ts';
import CustomDropdown from './CustomDropdown.tsx';
import { 
  fetchWrittenQuestionsFromSupabase, 
  saveWrittenQuestionToSupabase, 
  deleteWrittenQuestionFromSupabase, 
  importWrittenQuestionsToSupabase 
} from '../lib/supabase.ts';

interface DataManagementProps {
  questions?: any[];
  onAddQuestion?: (q: any) => void;
  onDeleteQuestion?: (id: string) => void;
  onImportQuestions?: (imported: any[], option: 'merge' | 'replace') => void;
  onResetToDefaults?: () => void;
}

/**
 * Wandelt beliebige IDs (z. B. "ihk-oeff-1", "ihk-bgb-2" oder UUIDs) in neutrale SK-Bezeichner um
 */
export function normalizeToNeutralId(rawId: string | undefined, category: string, index: number): string {
  const catMap: Record<string, string> = {
    'recht der öffentlichen sicherheit': 'OEFF',
    'öffentliche sicherheit': 'OEFF',
    'gewerberecht': 'GEW',
    'datenschutz': 'DS',
    'bürgerliches gesetzbuch': 'BGB',
    'bgb': 'BGB',
    'straf-': 'STRAF',
    'strafrecht': 'STRAF',
    'waffen': 'WAFF',
    'unfallverhütung': 'UVV',
    'uvv': 'UVV',
    'umgang mit menschen': 'MENSCH',
    'mensch': 'MENSCH',
    'sicherheitstechnik': 'TECH',
    'technik': 'TECH'
  };

  let prefix = 'SK';
  const lowerCat = (category || '').toLowerCase();
  for (const [key, val] of Object.entries(catMap)) {
    if (lowerCat.includes(key)) {
      prefix = `SK-${val}`;
      break;
    }
  }
  if (prefix === 'SK') {
    prefix = 'SK-FRAGE';
  }

  // Extrahiere vorhandene Nummer oder nutze laufenden Index
  const numMatch = rawId ? rawId.match(/(\d+)$/) : null;
  const num = numMatch ? parseInt(numMatch[1], 10) : (index + 1);
  const padded = String(num).padStart(3, '0');
  return `${prefix}-${padded}`;
}

export default function DataManagement({}: DataManagementProps) {
  // Fragenpool aus der Cloud (target_mode = 'written_test')
  const [cloudQuestions, setCloudQuestions] = useState<WrittenQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Formular State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [kategorie, setKategorie] = useState<string>(IHK_CATEGORIES_CONFIG[0]?.name || 'Recht der öffentlichen Sicherheit und Ordnung');
  const [frage, setFrage] = useState<string>('');
  const [optionA, setOptionA] = useState<string>('');
  const [optionB, setOptionB] = useState<string>('');
  const [optionC, setOptionC] = useState<string>('');
  const [optionD, setOptionD] = useState<string>('');
  const [korrekteAntworten, setKorrekteAntworten] = useState<number[]>([0]);
  const [punkte, setPunkte] = useState<number>(1);
  const [erklaerung, setErklaerung] = useState<string>('');

  // UI / Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPoints, setFilterPoints] = useState<'all' | '1' | '2'>('all');
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  // Toast / Benachrichtigungen
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Dateiupload Ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formTopRef = useRef<HTMLDivElement>(null);

  // Sachgebiete für Dropdown
  const categoryOptions = IHK_CATEGORIES_CONFIG.map(c => ({
    value: c.name,
    label: `${c.shortName} (${c.maxPoints} Pkt.)`
  }));

  // Fragen beim Laden abrufen
  const loadQuestions = async () => {
    setIsLoading(true);
    try {
      const list = await fetchWrittenQuestionsFromSupabase();
      setCloudQuestions(list);
    } catch (err) {
      console.error('Error loading written questions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  // Checkbox für richtige Antwort(en) umschalten
  const handleToggleCorrect = (index: number) => {
    setKorrekteAntworten(prev => {
      let next: number[];
      if (prev.includes(index)) {
        next = prev.filter(i => i !== index);
      } else {
        next = [...prev, index].sort((a, b) => a - b);
      }

      if (next.length === 2) {
        setPunkte(2);
      } else if (next.length === 1) {
        setPunkte(1);
      }

      return next;
    });
  };

  // Punkte umschalten
  const handleSetPoints = (pts: number) => {
    setPunkte(pts);
    if (pts === 1 && korrekteAntworten.length > 1) {
      setKorrekteAntworten([korrekteAntworten[0]]);
    }
  };

  // Formular zurücksetzen
  const handleResetForm = () => {
    setEditingId(null);
    setFrage('');
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setKorrekteAntworten([0]);
    setPunkte(1);
    setErklaerung('');
    setErrorMsg('');
  };

  // Frage zur Bearbeitung laden
  const handleStartEdit = (q: WrittenQuestion) => {
    setEditingId(q.id);
    setKategorie(q.kategorie);
    setFrage(q.frage);
    setOptionA(q.optionen[0] || '');
    setOptionB(q.optionen[1] || '');
    setOptionC(q.optionen[2] || '');
    setOptionD(q.optionen[3] || '');
    setKorrekteAntworten(q.korrekteAntworten || [0]);
    setPunkte(q.punkte === 2 ? 2 : 1);
    setErklaerung(q.erklaerung || '');
    setErrorMsg('');
    setSuccessMsg('');

    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Frage speichern
  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Validierung
    if (!frage.trim()) {
      setErrorMsg('Bitte geben Sie einen Prüfungsfragetext ein.');
      return;
    }
    if (!optionA.trim() || !optionB.trim() || !optionC.trim() || !optionD.trim()) {
      setErrorMsg('Alle 4 Antwortoptionen (A, B, C und D) müssen vollständig ausgefüllt sein.');
      return;
    }
    if (korrekteAntworten.length === 0) {
      setErrorMsg('Mindestens eine Option muss als richtige Antwort markiert sein.');
      return;
    }
    if (punkte === 1 && korrekteAntworten.length !== 1) {
      setErrorMsg('Eine 1-Punkt-Frage (Einfachauswahl) muss genau 1 richtige Antwort haben.');
      return;
    }
    if (punkte === 2 && korrekteAntworten.length !== 2) {
      setErrorMsg('Eine 2-Punkte-Frage (Mehrfachauswahl) muss genau 2 richtige Antworten haben.');
      return;
    }

    setIsSaving(true);
    try {
      const questionPayload: Omit<WrittenQuestion, 'id'> & { id?: string } = {
        id: editingId || undefined,
        kategorie,
        frage: frage.trim(),
        optionen: [optionA.trim(), optionB.trim(), optionC.trim(), optionD.trim()],
        korrekteAntworten,
        punkte: punkte === 2 ? 2 : 1,
        erklaerung: erklaerung.trim(),
        target_mode: 'written_test'
      };

      const res = await saveWrittenQuestionToSupabase(questionPayload);

      if (!res.success) {
        throw new Error(res.error || 'Speichern fehlgeschlagen.');
      }

      setSuccessMsg(editingId ? 'Frage erfolgreich im Katalog aktualisiert.' : 'Frage erfolgreich im Katalog gespeichert.');
      handleResetForm();
      await loadQuestions();
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err: any) {
      setErrorMsg(err?.message || 'Fehler beim Speichern. Bitte Eingaben prüfen.');
    } finally {
      setIsSaving(false);
    }
  };

  // Frage löschen
  const handleDeleteQuestion = async (id: string) => {
    try {
      const res = await deleteWrittenQuestionFromSupabase(id);
      if (!res.success) {
        throw new Error(res.error || 'Löschen fehlgeschlagen.');
      }
      setSuccessMsg('Frage erfolgreich aus dem Katalog gelöscht.');
      setDeleteConfirmId(null);
      await loadQuestions();
      setTimeout(() => setSuccessMsg(''), 3500);
    } catch (err: any) {
      setErrorMsg(err?.message || 'Fehler beim Löschen der Frage.');
    }
  };

  // Robuster JSON Import (flexible Feldnamen & automatische neutrale IDs)
  const handleImportJSON = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const rawContent = event.target?.result as string;
        const parsed = JSON.parse(rawContent);
        if (!Array.isArray(parsed)) {
          throw new Error('Die JSON-Datei muss ein Array von Fragen-Objekten enthalten.');
        }

        const validQuestions: WrittenQuestion[] = [];

        parsed.forEach((obj, idx) => {
          const frageText = obj.frage || obj.question_text || obj.question || obj.Frage || obj.text;
          const opts = obj.optionen || obj.options || obj.Optionen || obj.answers || obj.antworten;
          
          if (frageText && Array.isArray(opts) && opts.length >= 4) {
            const rawCorrect = 
              obj.richtige_antworten || 
              obj.korrekte_antworten || 
              obj.korrekteAntworten || 
              obj.correct_answers || 
              obj.correctAnswers || 
              obj.correct_indices || 
              [0];
            
            const correctIndices = Array.isArray(rawCorrect) ? rawCorrect.map(Number) : [0];
            const pts = (obj.punkte === 2 || obj.points === 2 || obj.Punkte === 2 || correctIndices.length === 2) ? 2 : 1;
            const category = obj.kategorie || obj.category || obj.sachgebiet || obj.Kategorie || IHK_CATEGORIES_CONFIG[0].name;
            const explanation = obj.begruendung || obj.erklaerung || obj.explanation || obj.Begruendung || obj.Erklaerung || '';
            const neutralId = normalizeToNeutralId(obj.id, category, idx);

            validQuestions.push({
              id: neutralId,
              kategorie: String(category).trim(),
              frage: String(frageText).trim(),
              optionen: [String(opts[0]).trim(), String(opts[1]).trim(), String(opts[2]).trim(), String(opts[3]).trim()],
              korrekteAntworten: correctIndices.length > 0 ? correctIndices : [0],
              punkte: pts,
              erklaerung: String(explanation).trim(),
              target_mode: 'written_test'
            });
          }
        });

        if (validQuestions.length === 0) {
          throw new Error('Keine gültigen Multiple-Choice-Fragen mit 4 Optionen gefunden.');
        }

        setIsSaving(true);
        const res = await importWrittenQuestionsToSupabase(validQuestions);

        if (!res.success) {
          throw new Error(res.error || 'Import fehlgeschlagen.');
        }

        setSuccessMsg(`${res.count} Fragen erfolgreich importiert.`);
        await loadQuestions();
        setTimeout(() => setSuccessMsg(''), 4500);
      } catch (err: any) {
        setErrorMsg(err?.message || 'Fehler beim Importieren. Bitte Dateiformat prüfen.');
      } finally {
        setIsSaving(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  // Fragen für die Listenansicht filtern
  const displayedQuestions = (cloudQuestions.length > 0 ? cloudQuestions : []).filter(q => {
    const matchesCategory = filterCategory === 'all' || q.kategorie === filterCategory;
    const matchesPoints = filterPoints === 'all' || (filterPoints === '1' && q.punkte === 1) || (filterPoints === '2' && q.punkte === 2);
    const matchesSearch = !searchQuery.trim() || 
      q.frage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.optionen.some(opt => opt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.erklaerung && q.erklaerung.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesPoints && matchesSearch;
  });

  return (
    <div className="space-y-8" ref={formTopRef}>
      
      {/* Header Banner */}
      <div className="bento-glass p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden bento-glow-gold">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 bg-[#dfb871]/15 rounded-xl border border-[#dfb871]/30 text-[#dfb871]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                Fragen-Editor für den Schriftlichen Test (§ 34a GewO)
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-2xl">
              Multiple-Choice-Fragenkatalog für die schriftliche Prüfung nach § 34a GewO. Alle erstellten oder importierten Fragen stehen im Prüfungstraining sofort zur Verfügung.
            </p>
          </div>

          {/* Badge & Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3 py-2 rounded-xl bg-slate-950/70 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">
                Fragenpool: <strong className="text-white font-bold">{cloudQuestions.length}</strong> Fragen
              </span>
            </div>

            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
                id="json-file-import"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isSaving}
                className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 border border-white/10 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2 transition-all cursor-pointer hover:border-white/20 active:scale-95 disabled:opacity-50"
                title="JSON-Datei mit Fragen importieren"
              >
                <Upload className="w-3.5 h-3.5 text-indigo-400" />
                <span>JSON Import</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Column = Formular, Right Column = Bewertungsschlüssel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* FORM CONTAINER (Left 2 Columns) */}
        <div className="lg:col-span-2 bento-glass p-6 md:p-8 rounded-2xl border border-white/10 relative space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                {editingId ? <Edit3 className="w-5 h-5" /> : <PlusCircle className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">
                  {editingId ? 'Prüfungsfrage bearbeiten' : 'Neue Multiple-Choice-Frage anlegen'}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  {editingId ? 'Änderungen werden im Fragenkatalog gespeichert.' : 'Neue Multiple-Choice-Prüfungsfrage anlegen.'}
                </p>
              </div>
            </div>

            {editingId && (
              <button
                type="button"
                onClick={handleResetForm}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Abbrechen</span>
              </button>
            )}
          </div>

          {/* Feedback messages */}
          {successMsg && (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2.5 animate-fade-in shadow-lg">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span className="font-medium">{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 bg-rose-950/40 border border-rose-500/40 rounded-xl text-rose-300 text-xs flex items-center gap-2.5 animate-fade-in shadow-lg">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span className="font-medium">{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSaveQuestion} className="space-y-6">
            
            {/* Row 1: Sachgebiet & Punkte Selection */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Dropdown: Sachgebiet (7 cols) */}
              <div className="md:col-span-7 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  Sachgebiet (§ 34a GewO) <span className="text-rose-400">*</span>
                </label>
                <CustomDropdown
                  options={categoryOptions}
                  value={kategorie}
                  onChange={setKategorie}
                  className="w-full"
                  maxWidth="w-full"
                />
              </div>

              {/* Toggle: Punkte & Fragetyp (5 cols) */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  PUNKTE & FRAGETYP <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-1 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => handleSetPoints(1)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      punkte === 1
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>1 Punkt</span>
                    <span className="text-[10px] opacity-75 font-normal font-sans">(1 Richtige)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSetPoints(2)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      punkte === 2
                        ? 'bg-[#dfb871]/20 text-[#dfb871] border border-[#dfb871]/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>2 Punkte</span>
                    <span className="text-[10px] opacity-75 font-normal font-sans">(2 Richtige)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: Textfeld Prüfungsfrage */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  Prüfungsfrage <span className="text-rose-400">*</span>
                </label>
                <span className="text-[10px] text-slate-500 font-mono">
                  {frage.length} Zeichen
                </span>
              </div>
              <textarea
                value={frage}
                onChange={e => setFrage(e.target.value)}
                placeholder="Formulieren Sie hier die Prüfungsfrage..."
                rows={3}
                className="w-full bg-slate-950/80 text-white text-xs md:text-sm p-3.5 rounded-xl border border-white/10 focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871] focus:outline-none placeholder-slate-600 font-sans transition-all resize-y"
              />
            </div>

            {/* Row 3: 4 Textfelder für Option A, B, C, D mit Checkboxen für 'Richtige Antwort' */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  Antwortoptionen (A, B, C, D) & Richtige Lösung <span className="text-rose-400">*</span>
                </label>
                <span className="text-[10px] font-mono text-[#dfb871]">
                  {korrekteAntworten.length} {korrekteAntworten.length === 1 ? 'Option' : 'Optionen'} als richtig markiert
                </span>
              </div>

              {/* Option A */}
              <div className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                korrekteAntworten.includes(0)
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  : 'bg-slate-950/60 border-white/10'
              }`}>
                <button
                  type="button"
                  onClick={() => handleToggleCorrect(0)}
                  className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    korrekteAntworten.includes(0)
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                      : 'border-white/30 bg-slate-900 hover:border-white/60'
                  }`}
                  title="Option A als richtig markieren"
                >
                  {korrekteAntworten.includes(0) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold font-mono ${korrekteAntworten.includes(0) ? 'text-emerald-400' : 'text-slate-400'}`}>
                      Option A {korrekteAntworten.includes(0) && '(Richtige Antwort)'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={optionA}
                    onChange={e => setOptionA(e.target.value)}
                    placeholder="Antworttext für Option A..."
                    className="w-full bg-slate-900/80 text-white text-xs md:text-sm px-3.5 py-2 rounded-lg border border-white/10 focus:border-[#dfb871] focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>
              </div>

              {/* Option B */}
              <div className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                korrekteAntworten.includes(1)
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  : 'bg-slate-950/60 border-white/10'
              }`}>
                <button
                  type="button"
                  onClick={() => handleToggleCorrect(1)}
                  className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    korrekteAntworten.includes(1)
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                      : 'border-white/30 bg-slate-900 hover:border-white/60'
                  }`}
                  title="Option B als richtig markieren"
                >
                  {korrekteAntworten.includes(1) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold font-mono ${korrekteAntworten.includes(1) ? 'text-emerald-400' : 'text-slate-400'}`}>
                      Option B {korrekteAntworten.includes(1) && '(Richtige Antwort)'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={optionB}
                    onChange={e => setOptionB(e.target.value)}
                    placeholder="Antworttext für Option B..."
                    className="w-full bg-slate-900/80 text-white text-xs md:text-sm px-3.5 py-2 rounded-lg border border-white/10 focus:border-[#dfb871] focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>
              </div>

              {/* Option C */}
              <div className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                korrekteAntworten.includes(2)
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  : 'bg-slate-950/60 border-white/10'
              }`}>
                <button
                  type="button"
                  onClick={() => handleToggleCorrect(2)}
                  className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    korrekteAntworten.includes(2)
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                      : 'border-white/30 bg-slate-900 hover:border-white/60'
                  }`}
                  title="Option C als richtig markieren"
                >
                  {korrekteAntworten.includes(2) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold font-mono ${korrekteAntworten.includes(2) ? 'text-emerald-400' : 'text-slate-400'}`}>
                      Option C {korrekteAntworten.includes(2) && '(Richtige Antwort)'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={optionC}
                    onChange={e => setOptionC(e.target.value)}
                    placeholder="Antworttext für Option C..."
                    className="w-full bg-slate-900/80 text-white text-xs md:text-sm px-3.5 py-2 rounded-lg border border-white/10 focus:border-[#dfb871] focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>
              </div>

              {/* Option D */}
              <div className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                korrekteAntworten.includes(3)
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                  : 'bg-slate-950/60 border-white/10'
              }`}>
                <button
                  type="button"
                  onClick={() => handleToggleCorrect(3)}
                  className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    korrekteAntworten.includes(3)
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                      : 'border-white/30 bg-slate-900 hover:border-white/60'
                  }`}
                  title="Option D als richtig markieren"
                >
                  {korrekteAntworten.includes(3) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <div className="w-full space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold font-mono ${korrekteAntworten.includes(3) ? 'text-emerald-400' : 'text-slate-400'}`}>
                      Option D {korrekteAntworten.includes(3) && '(Richtige Antwort)'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={optionD}
                    onChange={e => setOptionD(e.target.value)}
                    placeholder="Antworttext für Option D..."
                    className="w-full bg-slate-900/80 text-white text-xs md:text-sm px-3.5 py-2 rounded-lg border border-white/10 focus:border-[#dfb871] focus:outline-none placeholder-slate-600 font-sans"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Textfeld: Rechtliche Begründung / Musterlösung */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                Rechtliche Begründung / Musterlösung (Paragraphen, Gesetzesfundstellen)
              </label>
              <textarea
                value={erklaerung}
                onChange={e => setErklaerung(e.target.value)}
                placeholder="z. B. Gemäß § 34a Abs. 1 GewO i. V. m. § 3 BewachV ist der Nachweis der Sachkundeprüfung zwingend erforderlich..."
                rows={3}
                className="w-full bg-slate-950/80 text-white text-xs md:text-sm p-3.5 rounded-xl border border-white/10 focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871] focus:outline-none placeholder-slate-600 font-sans transition-all resize-y"
              />
            </div>

            {/* Submit & Reset Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={handleResetForm}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 text-xs font-semibold transition-all cursor-pointer hover:text-white"
              >
                Felder leeren
              </button>

              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Wird gespeichert...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{editingId ? 'Änderungen speichern' : 'Frage speichern'}</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

        {/* RIGHT COLUMN: BEWERTUNGSSCHLÜSSEL */}
        <div className="space-y-6">
          
          <div className="bento-glass p-6 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
              <Award className="w-4 h-4 text-[#dfb871]" />
              BEWERTUNGSSCHLÜSSEL
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-sans leading-relaxed">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl space-y-1">
                <span className="font-bold text-blue-400 block font-display">1-Punkt-Fragen (Einfachauswahl)</span>
                <p className="text-[11px] text-slate-300">
                  Genau 1 richtige Option. 1 Punkt bei richtiger Antwort, sonst 0 Punkte.
                </p>
              </div>

              <div className="p-3 bg-[#dfb871]/10 border border-[#dfb871]/20 rounded-xl space-y-1">
                <span className="font-bold text-[#dfb871] block font-display">2-Punkte-Fragen (Mehrfachauswahl)</span>
                <p className="text-[11px] text-slate-300">
                  Genau 2 richtige Antworten: 2 Punkte bei beiden richtig. 1 Teilpunkt, wenn mindestens 1 richtige Antwort ausgewählt wurde (auch wenn 1 falsche Option gewählt wurde). 0 Punkte bei 0 richtigen Antworten.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* SECTION: FRAGENKATALOG DURCHSUCHEN & VERWALTEN */}
      <section className="bento-glass p-6 md:p-8 rounded-2xl border border-white/10 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#dfb871]" />
              Gespeicherte Prüfungsfragen ({displayedQuestions.length} von {cloudQuestions.length})
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Übersicht aller Fragen mit Filtermöglichkeit, Direktbearbeitung und Löschfunktion.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          
          {/* Suchfeld (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Frage, Option oder Begründung durchsuchen..."
              className="w-full bg-slate-950/80 text-white text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-white/10 focus:border-[#dfb871] focus:outline-none placeholder-slate-600 font-sans"
            />
          </div>

          {/* Kategorie-Filter (4 cols) */}
          <div className="lg:col-span-4">
            <CustomDropdown
              options={[
                { value: 'all', label: 'Alle Sachgebiete (§ 34a)' },
                ...categoryOptions
              ]}
              value={filterCategory}
              onChange={setFilterCategory}
              className="w-full"
              maxWidth="w-full"
            />
          </div>

          {/* Punkte-Filter (3 cols) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-1 bg-slate-950/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setFilterPoints('all')}
                className={`py-1.5 rounded-lg text-center transition-all ${
                  filterPoints === 'all' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Alle Pkt.
              </button>
              <button
                type="button"
                onClick={() => setFilterPoints('1')}
                className={`py-1.5 rounded-lg text-center transition-all ${
                  filterPoints === '1' ? 'bg-blue-500/20 text-blue-300 font-bold' : 'text-slate-400 hover:text-blue-300'
                }`}
              >
                1 Pkt.
              </button>
              <button
                type="button"
                onClick={() => setFilterPoints('2')}
                className={`py-1.5 rounded-lg text-center transition-all ${
                  filterPoints === '2' ? 'bg-[#dfb871]/20 text-[#dfb871] font-bold' : 'text-slate-400 hover:text-[#dfb871]'
                }`}
              >
                2 Pkt.
              </button>
            </div>
          </div>

        </div>

        {/* Fragenliste */}
        {isLoading ? (
          <div className="py-16 text-center space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin text-[#dfb871] mx-auto" />
            <p className="text-xs text-slate-400 font-mono">Lade Fragenkatalog...</p>
          </div>
        ) : displayedQuestions.length === 0 ? (
          <div className="py-12 text-center bg-slate-950/40 rounded-xl border border-white/5 space-y-2">
            <p className="text-sm font-bold text-slate-300 font-display">Keine Fragen gefunden</p>
            <p className="text-xs text-slate-500 font-sans">
              Passen Sie Ihre Such- oder Filterkriterien an oder legen Sie oben eine neue Prüfungsfrage an.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedQuestions.map((q, idx) => {
              const isExpanded = !!expandedDetails[q.id];
              return (
                <div 
                  key={q.id || idx}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-white/20 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 font-mono">
                        {q.kategorie}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold font-mono ${
                        q.punkte === 2 
                          ? 'bg-[#dfb871]/15 text-[#dfb871] border border-[#dfb871]/30' 
                          : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                      }`}>
                        {q.punkte === 2 ? '2 Punkte (Mehrfachauswahl)' : '1 Punkt (Einfachauswahl)'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => handleStartEdit(q)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                        title="Frage im Formular bearbeiten"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#dfb871]" />
                        <span>Bearbeiten</span>
                      </button>

                      <button
                        onClick={() => setDeleteConfirmId(q.id)}
                        className="px-3 py-1.5 rounded-lg bg-rose-950/30 hover:bg-rose-900/40 border border-rose-900/40 text-rose-300 hover:text-rose-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                        title="Frage aus dem Katalog entfernen"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                        <span>Löschen</span>
                      </button>
                    </div>
                  </div>

                  {/* Fragetext */}
                  <div>
                    <h4 className="text-sm font-semibold text-white font-sans leading-relaxed">
                      {q.frage}
                    </h4>
                  </div>

                  {/* 4 Optionen */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                    {q.optionen.map((opt, optIdx) => {
                      const isCorrect = q.korrekteAntworten.includes(optIdx);
                      const optionLetter = String.fromCharCode(65 + optIdx);
                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                            isCorrect
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                              : 'bg-slate-900/50 border-white/5 text-slate-400'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 font-mono ${
                            isCorrect 
                              ? 'bg-emerald-500 text-slate-950' 
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {isCorrect ? <Check className="w-3 h-3 stroke-[3]" /> : optionLetter}
                          </span>
                          <span className="leading-snug">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Rechtliche Begründung Toggle */}
                  {q.erklaerung && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setExpandedDetails(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="text-[11px] text-[#dfb871] hover:underline flex items-center gap-1.5 cursor-pointer font-sans"
                      >
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        <span>{isExpanded ? 'Begründung verbergen' : 'Rechtliche Begründung anzeigen'}</span>
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300 font-sans leading-relaxed animate-fade-in">
                          <strong className="text-white font-semibold block mb-1">Musterlösung & Begründung:</strong>
                          {q.erklaerung}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Lösch-Bestätigungsmodal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md bento-glass p-6 rounded-2xl border border-rose-500/30 shadow-2xl relative space-y-4 text-center">
            <div className="inline-flex p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 mb-1">
              <Trash2 className="w-6 h-6 text-rose-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-display">Frage wirklich aus dem Katalog entfernen?</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Möchten Sie diesen Datensatz wirklich dauerhaft entfernen? Schüler können diese Frage danach nicht mehr im Test aufrufen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => handleDeleteQuestion(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all cursor-pointer active:scale-95 shadow-lg shadow-rose-900/40"
              >
                Ja, Frage löschen
              </button>
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer active:scale-95"
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
