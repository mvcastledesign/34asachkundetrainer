/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  PlusCircle, 
  Upload, 
  Download, 
  Trash2, 
  Edit3, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Check, 
  X, 
  RefreshCw, 
  FileText, 
  Sparkles,
  HelpCircle,
  Scale,
  Award,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { WrittenQuestion } from '../types.ts';
import { IHK_CATEGORIES_CONFIG } from '../data/ihk120ExamQuestions.ts';
import CustomDropdown from './CustomDropdown.tsx';
import { 
  supabase, 
  fetchWrittenQuestionsFromSupabase, 
  saveWrittenQuestionToSupabase, 
  deleteWrittenQuestionFromSupabase, 
  importWrittenQuestionsToSupabase,
  mapRowToWrittenQuestion 
} from '../lib/supabase.ts';
import { IHK_120_EXAM_QUESTIONS } from '../data/ihk120ExamQuestions.ts';

interface DataManagementProps {
  questions?: any[];
  onAddQuestion?: (q: any) => void;
  onDeleteQuestion?: (id: string) => void;
  onImportQuestions?: (imported: any[], option: 'merge' | 'replace') => void;
  onResetToDefaults?: () => void;
}

export default function DataManagement({}: DataManagementProps) {
  // Cloud Questions Pool (target_mode = 'written_test')
  const [cloudQuestions, setCloudQuestions] = useState<WrittenQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSeeding, setIsSeeding] = useState<boolean>(false);

  // Form State
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

  // Feedback notifications
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // File import ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formTopRef = useRef<HTMLDivElement>(null);

  // Categories list for dropdown
  const categoryOptions = IHK_CATEGORIES_CONFIG.map(c => ({
    value: c.name,
    label: `${c.shortName} (${c.maxPoints} Pkt.)`
  }));

  // Fetch written questions from Supabase on mount
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

  // Toggle correct answer checkbox
  const handleToggleCorrect = (index: number) => {
    setKorrekteAntworten(prev => {
      let next: number[];
      if (prev.includes(index)) {
        next = prev.filter(i => i !== index);
      } else {
        next = [...prev, index].sort((a, b) => a - b);
      }

      // Auto-adjust points based on count of correct answers
      if (next.length === 2) {
        setPunkte(2);
      } else if (next.length === 1) {
        setPunkte(1);
      }

      return next;
    });
  };

  // Toggle points switch and sync selection
  const handleSetPoints = (pts: number) => {
    setPunkte(pts);
    if (pts === 1 && korrekteAntworten.length > 1) {
      setKorrekteAntworten([korrekteAntworten[0]]);
    }
  };

  // Reset form
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

  // Load question into form for editing
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

  // Save question to Supabase
  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Validation
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
        throw new Error(res.error || 'Speichern in Supabase fehlgeschlagen.');
      }

      setSuccessMsg(editingId ? 'Frage erfolgreich in Supabase aktualisiert!' : 'Neue Prüfungsfrage erfolgreich in Supabase gespeichert!');
      handleResetForm();
      await loadQuestions();
      setTimeout(() => setSuccessMsg(''), 4500);
    } catch (err: any) {
      setErrorMsg(err.message || 'Fehler beim Speichern der Frage.');
    } finally {
      setIsSaving(false);
    }
  };

  // Delete question from Supabase
  const handleDeleteQuestion = async (id: string) => {
    try {
      const res = await deleteWrittenQuestionFromSupabase(id);
      if (!res.success) {
        throw new Error(res.error || 'Löschen fehlgeschlagen.');
      }
      setSuccessMsg('Frage erfolgreich aus Supabase gelöscht.');
      setDeleteConfirmId(null);
      await loadQuestions();
      setTimeout(() => setSuccessMsg(''), 3500);
    } catch (err: any) {
      setErrorMsg(`Fehler beim Löschen: ${err.message}`);
    }
  };

  // JSON Export (direct from Supabase pool)
  const handleExportJSON = () => {
    try {
      const exportList = cloudQuestions.length > 0 ? cloudQuestions : IHK_120_EXAM_QUESTIONS;
      const dataStr = JSON.stringify(exportList, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `supabase_written_test_fragenkatalog_${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setSuccessMsg(`Export von ${exportList.length} Fragen erfolgreich abgeschlossen.`);
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch (err) {
      console.error(err);
      setErrorMsg('Der JSON-Export ist fehlgeschlagen.');
    }
  };

  // JSON Import directly into Supabase (target_mode = 'written_test')
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
          const frageText = obj.frage || obj.question;
          const opts = obj.optionen || obj.options;
          if (frageText && Array.isArray(opts) && opts.length >= 4) {
            const rawCorrect = obj.korrekteAntworten || obj.korrekte_antworten || obj.correct_answers || [0];
            const correctIndices = Array.isArray(rawCorrect) ? rawCorrect.map(Number) : [0];
            const pts = (obj.punkte === 2 || obj.points === 2 || correctIndices.length === 2) ? 2 : 1;

            validQuestions.push({
              id: `imported-${idx}-${Date.now()}`,
              kategorie: obj.kategorie || obj.category || IHK_CATEGORIES_CONFIG[0].name,
              frage: String(frageText).trim(),
              optionen: [String(opts[0]).trim(), String(opts[1]).trim(), String(opts[2]).trim(), String(opts[3]).trim()],
              korrekteAntworten: correctIndices.length > 0 ? correctIndices : [0],
              punkte: pts,
              erklaerung: String(obj.erklaerung || obj.explanation || obj.begruendung || '').trim(),
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
          throw new Error(res.error || 'Import in Supabase fehlgeschlagen.');
        }

        setSuccessMsg(`Erfolgreich ${res.count} Fragen direkt in Supabase (target_mode: 'written_test') importiert!`);
        await loadQuestions();
        setTimeout(() => setSuccessMsg(''), 4500);
      } catch (err: any) {
        setErrorMsg(`Fehler beim Importieren: ${err.message}`);
      } finally {
        setIsSaving(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  // Seed default 82 IHK questions into Supabase
  const handleSeedDefaults = async () => {
    if (isSeeding) return;
    setIsSeeding(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const res = await importWrittenQuestionsToSupabase(IHK_120_EXAM_QUESTIONS);
      if (!res.success) {
        throw new Error(res.error || 'Initialisierung in Supabase fehlgeschlagen.');
      }
      setSuccessMsg(`Erfolgreich ${res.count} offizielle IHK-Prüfungsfragen in Supabase eingepflegt!`);
      await loadQuestions();
      setTimeout(() => setSuccessMsg(''), 4500);
    } catch (err: any) {
      setErrorMsg(`Fehler beim Einpflegen des Katalogs: ${err.message}`);
    } finally {
      setIsSeeding(false);
    }
  };

  // Filter questions for the list view
  const displayedQuestions = (cloudQuestions.length > 0 ? cloudQuestions : []).filter(q => {
    const matchesCategory = filterCategory === 'all' || q.kategorie === filterCategory;
    const matchesPoints = filterPoints === 'all' || (filterPoints === '1' && q.punkte === 1) || (filterPoints === '2' && q.punkte === 2);
    const matchesSearch = !searchQuery.trim() || 
      q.frage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.optionen.some(opt => opt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      q.erklaerung.toLowerCase().includes(searchQuery.toLowerCase());
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
              Multiple-Choice-Fragenkatalog mit direkter Supabase-Cloud-Synchronisation (<code className="text-[#dfb871] bg-slate-950/80 px-1.5 py-0.5 rounded font-mono text-[11px]">target_mode: 'written_test'</code>). Alle erstellten oder importierten Fragen stehen den Schülern im Schriftlichen Testmodus sofort zur Verfügung.
            </p>
          </div>

          {/* Cloud Badge & Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3 py-2 rounded-xl bg-slate-950/70 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">
                Supabase Pool: <strong className="text-white font-bold">{cloudQuestions.length}</strong> Fragen
              </span>
            </div>

            <button
              onClick={handleExportJSON}
              className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 border border-white/10 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2 transition-all cursor-pointer hover:border-white/20 active:scale-95"
              title="Aktuellen Fragenkatalog als JSON herunterladen"
            >
              <Download className="w-3.5 h-3.5 text-[#dfb871]" />
              <span>JSON Export</span>
            </button>

            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
                id="supabase-json-import"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isSaving}
                className="px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 border border-white/10 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2 transition-all cursor-pointer hover:border-white/20 active:scale-95 disabled:opacity-50"
                title="JSON-Datei mit Fragen direkt in Supabase hochladen"
              >
                <Upload className="w-3.5 h-3.5 text-indigo-400" />
                <span>JSON Import</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cloud database empty notice & quick seed */}
        {cloudQuestions.length === 0 && !isLoading && (
          <div className="mt-6 p-4 rounded-xl bg-[#dfb871]/10 border border-[#dfb871]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#dfb871] shrink-0" />
              <div>
                <p className="text-xs font-bold text-white font-display">Supabase-Fragenkatalog ist noch leer</p>
                <p className="text-[11px] text-slate-300 font-sans">
                  Sie können entweder neue Fragen im Formular anlegen oder mit einem Klick den offiziellen 82-Fragen IHK-Standardkatalog in Supabase einpflegen.
                </p>
              </div>
            </div>
            <button
              onClick={handleSeedDefaults}
              disabled={isSeeding}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0 disabled:opacity-50 shadow-md"
            >
              {isSeeding ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <PlusCircle className="w-3.5 h-3.5" />}
              <span>82 IHK-Fragen in Supabase laden</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Grid: Left Column = Form (Multiple Choice Editor), Right Column = Tips & Info */}
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
                  {editingId ? 'Änderungen werden direkt in Supabase gespeichert.' : 'Wird in der Tabelle questions mit target_mode: \'written_test\' gespeichert.'}
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
            
            {/* Row 1: Sachgebiet & IHK-Punkte Selection */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Dropdown: Sachgebiete des § 34a GewO (7 cols) */}
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

              {/* Toggle: IHK-Punkte (1 Punkt vs 2 Punkte) (5 cols) */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  IHK-Punkte & Fragetyp <span className="text-rose-400">*</span>
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
                placeholder="Formulieren Sie hier die genaue Multiple-Choice-Prüfungsfrage nach IHK-Standard..."
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
                    <span>In Supabase speichern...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{editingId ? 'Änderungen in Supabase speichern' : 'Frage in Supabase speichern'}</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

        {/* RIGHT COLUMN: INFOS & BEWERTUNGSSCHLÜSSEL (§ 34a) */}
        <div className="space-y-6">
          
          {/* Box 1: IHK Bewertungsschlüssel Details */}
          <div className="bento-glass p-6 rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
              <Award className="w-4 h-4 text-[#dfb871]" />
              IHK-Bewertungsschlüssel
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
                  Genau 2 richtige Optionen. 2 Punkte bei beiden richtig, 1 Teilpunkt bei 1 richtig & 0 falsch. Übermarkierung oder falsche Option = 0 Punkte.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: Synchronisations-Status */}
          <div className="bento-glass p-6 rounded-2xl border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-400" />
              Direkte Cloud-Bindung
            </h4>
            <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
              Alle Fragen in dieser Ansicht sind direkt mit der Supabase-Cloud synchronisiert. Andere Übungsmodi (wie die mündliche Prüfung oder Fallbeispiele) bleiben unabhängig und greifen auf ihren jeweiligen Fachdatenbestand zu.
            </p>
            <div className="pt-2">
              <button
                onClick={loadQuestions}
                disabled={isLoading}
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#dfb871]' : ''}`} />
                <span>Katalog aus Supabase neu laden</span>
              </button>
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
          
          {/* Search field (5 cols) */}
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

          {/* Category Filter (4 cols) */}
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

          {/* Points Filter (3 cols) */}
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

        {/* Questions Cards List */}
        {isLoading ? (
          <div className="py-16 text-center space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin text-[#dfb871] mx-auto" />
            <p className="text-xs text-slate-400 font-mono">Lade Fragenkatalog aus Supabase...</p>
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
                        title="Frage aus Supabase löschen"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                        <span>Löschen</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Stem */}
                  <div>
                    <h4 className="text-sm font-semibold text-white font-sans leading-relaxed">
                      {q.frage}
                    </h4>
                  </div>

                  {/* 4 Options Grid */}
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

                  {/* Explanation Toggle */}
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

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md bento-glass p-6 rounded-2xl border border-rose-500/30 shadow-2xl relative space-y-4 text-center">
            <div className="inline-flex p-3 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 mb-1">
              <Trash2 className="w-6 h-6 text-rose-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white font-display">Prüfungsfrage löschen?</h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Möchten Sie diesen Datensatz wirklich dauerhaft aus der Supabase-Datenbank entfernen? Schüler können diese Frage danach nicht mehr im Test aufrufen.
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
