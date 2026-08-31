/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  Megaphone, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  BookOpen, 
  Target, 
  Layers, 
  Video, 
  FileText, 
  Check,
  Send,
  UserCheck,
  ChevronDown,
  Loader2,
  Plus,
  X,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { UserProfile } from '../types/auth.ts';
import { CourseTask } from './DashboardView.tsx';
import { supabase } from '../lib/supabase.ts';

export interface CourseCohort {
  id: string;
  name: string;
  period: string;
  start_date?: string;
  end_date?: string;
  description?: string;
  createdAt?: string;
  is_active?: boolean;
}

export interface LecturerViewProps {
  currentUser?: UserProfile | null;
  cohorts?: CourseCohort[];
  selectedCohortId?: string;
  onTaskUpdated?: (task: CourseTask | null) => void;
  onCourseCreated?: (newCourse: CourseCohort) => void;
}

// --------------------------------------------------------------------------
// DEFINIERTE SACHGEBIETE (OHNE EMOJIS)
// --------------------------------------------------------------------------
const SACHGEBIETE_LIST = [
  { id: 'all', name: 'Gesamter Prüfungsstoff (Alle Sachgebiete)' },
  { id: 'Recht der öffentlichen Sicherheit und Ordnung', name: 'Recht der öffentlichen Sicherheit und Ordnung' },
  { id: 'Gewerberecht (§ 34a GewO / BewachV)', name: 'Gewerberecht (§ 34a GewO / BewachV)' },
  { id: 'Bürgerliches Gesetzbuch (BGB)', name: 'Bürgerliches Gesetzbuch (BGB)' },
  { id: 'Straf- und Strafverfahrensrecht (StGB / StPO)', name: 'Straf- und Strafverfahrensrecht (StGB / StPO)' },
  { id: 'Umgang mit Waffen & Notwehr', name: 'Umgang mit Waffen & Notwehr' },
  { id: 'Unfallverhütungsvorschriften (UVV / DGUV 23)', name: 'Unfallverhütungsvorschriften (UVV / DGUV 23)' },
  { id: 'Umgang mit Menschen & Deeskalation', name: 'Umgang mit Menschen & Deeskalation' },
  { id: 'Grundzüge der Sicherheitstechnik', name: 'Grundzüge der Sicherheitstechnik' },
  { id: 'Datenschutzrecht (BDSG / DSGVO)', name: 'Datenschutzrecht (BDSG / DSGVO)' }
];

// --------------------------------------------------------------------------
// ZIEL-LERNFORMATE
// --------------------------------------------------------------------------
const TARGET_MODES = [
  { id: 'schriftlich', label: 'Schriftliche Prüfungssimulation (82 Fragen)', icon: FileText },
  { id: 'lernen', label: 'Sachgebiets-Training (Lernmodus mit Sofort-Feedback)', icon: BookOpen },
  { id: 'video', label: 'Video-Szenario-Trainer', icon: Video },
  { id: 'karteikarten', label: 'Karteikarten (3D Flip)', icon: Layers }
];

// Fallback Standard-Kurse
const DEFAULT_FALLBACK_COHORTS: CourseCohort[] = [
  {
    id: 'MOREDU34a',
    name: 'Sachkunde § 34a (Sommer 2026)',
    period: '01.06.2026 – 31.08.2026',
    description: 'Hauptkurs Sachkunde § 34a GewO'
  },
  {
    id: 'TEST123',
    name: 'Sachkunde § 34a (TEST123)',
    period: 'Fortlaufend / Flexibel',
    description: 'Test- und Übungskohorte'
  }
];

export default function LecturerView({
  currentUser,
  cohorts: propCohorts,
  selectedCohortId: propSelectedCohortId = 'MOREDU34a',
  onTaskUpdated,
  onCourseCreated
}: LecturerViewProps) {
  // --------------------------------------------------------------------------
  // 1. ZENTRALE KURS-LISTE (Synchronisiert mit Dozenten-Dashboard)
  // --------------------------------------------------------------------------
  const [dbCourses, setDbCourses] = useState<CourseCohort[]>([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState<boolean>(false);

  // Filtert Meta-Einträge wie "ALL" oder "Alle Kurse (Gesamtübersicht)" heraus
  const validCourses = useMemo<CourseCohort[]>(() => {
    const rawList: CourseCohort[] = [];

    // 1. Priorität: Aus Props übergebene zentrale Kohortenliste
    if (propCohorts && propCohorts.length > 0) {
      rawList.push(...propCohorts);
    }

    // 2. Ergänzung: In Supabase neu angelegte Kurse
    dbCourses.forEach(dc => {
      if (!rawList.some(c => c.id.toUpperCase() === dc.id.toUpperCase())) {
        rawList.push(dc);
      }
    });

    // 3. Fallback: Wenn Liste noch leer ist
    if (rawList.length === 0) {
      rawList.push(...DEFAULT_FALLBACK_COHORTS);
    }

    // Streng filtern: Keine Meta-Einträge wie "ALL" oder "Alle Kurse (Gesamtübersicht)"
    return rawList.filter(c => {
      if (!c || !c.id) return false;
      const idUpper = c.id.toUpperCase().trim();
      const nameLower = (c.name || '').toLowerCase().trim();
      if (idUpper === 'ALL' || idUpper === 'ALLE') return false;
      if (nameLower.includes('gesamtübersicht') || nameLower.includes('alle kurse')) return false;
      return true;
    });
  }, [propCohorts, dbCourses]);

  // Initialen Standard-Kurs ermitteln (kein '-', kein leerer String, kein 'ALL')
  const initialValidCourseId = useMemo(() => {
    if (propSelectedCohortId && propSelectedCohortId.toUpperCase() !== 'ALL') {
      const match = validCourses.find(c => c.id.toUpperCase() === propSelectedCohortId.toUpperCase());
      if (match) return match.id;
    }
    return validCourses[0]?.id || 'MOREDU34a';
  }, [propSelectedCohortId, validCourses]);

  // Aktiver Kurs-Filter & Formular-Zielkurs (synchronisiert)
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialValidCourseId);
  const [formCourseId, setFormCourseId] = useState<string>(initialValidCourseId);

  // Synchronisation bei Wechsel von außen
  useEffect(() => {
    if (propSelectedCohortId && propSelectedCohortId.toUpperCase() !== 'ALL') {
      const exists = validCourses.find(c => c.id.toUpperCase() === propSelectedCohortId.toUpperCase());
      if (exists) {
        setSelectedCourseId(exists.id);
        setFormCourseId(exists.id);
      }
    } else if (validCourses.length > 0 && (!selectedCourseId || !validCourses.some(c => c.id === selectedCourseId))) {
      const firstId = validCourses[0].id;
      setSelectedCourseId(firstId);
      setFormCourseId(firstId);
    }
  }, [propSelectedCohortId, validCourses, selectedCourseId]);

  // --------------------------------------------------------------------------
  // 2. STATE: AKTIVE AUFGABE (AUS SUPABASE & LOKALEM SYNC)
  // --------------------------------------------------------------------------
  const [activeTask, setActiveTask] = useState<CourseTask | null>(null);
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // 3. STATE: FORMULAR-FELDER
  // --------------------------------------------------------------------------
  const lecturerNameDefault = useMemo(() => {
    return currentUser?.name || 'Herr Beloev (Kursleitung)';
  }, [currentUser]);

  const [formLecturerName, setFormLecturerName] = useState<string>(lecturerNameDefault);
  const [formCategoryId, setFormCategoryId] = useState<string>('all');
  const [formTargetMode, setFormTargetMode] = useState<string>('schriftlich');
  const [formTitle, setFormTitle] = useState<string>('');
  const [formDescription, setFormDescription] = useState<string>('');

  // --------------------------------------------------------------------------
  // 4. DROPDOWN OPEN/CLOSE STEUERUNG
  // --------------------------------------------------------------------------
  const [openDropdown, setOpenDropdown] = useState<'header-course' | 'form-course' | 'category' | 'mode' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Modal: Neuen Kurs anlegen
  const [showCreateCourseModal, setShowCreateCourseModal] = useState<boolean>(false);
  const [newCourseCode, setNewCourseCode] = useState<string>('');
  const [newCourseName, setNewCourseName] = useState<string>('');
  const [newCourseStartDate, setNewCourseStartDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [newCourseEndDate, setNewCourseEndDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 42);
    return d.toISOString().split('T')[0];
  });
  const [newCourseDescription, setNewCourseDescription] = useState<string>('');
  const [isSubmittingCourse, setIsSubmittingCourse] = useState<boolean>(false);
  const [courseFormError, setCourseFormError] = useState<string | null>(null);

  // Feedback State
  const [isSubmittingTask, setIsSubmittingTask] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Outside click listener für Custom Dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --------------------------------------------------------------------------
  // SUPABASE: ZUSÄTZLICHE KURSE LADEN
  // --------------------------------------------------------------------------
  const fetchDbCourses = useCallback(async () => {
    setIsLoadingCourses(true);
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_active', true)
        .order('id', { ascending: true });

      if (!error && data && data.length > 0) {
        const mapped: CourseCohort[] = data.map((c: any) => ({
          id: c.id,
          name: c.name || c.id,
          period: c.start_date && c.end_date ? `${c.start_date} – ${c.end_date}` : (c.start_date || 'Laufender Lehrgang'),
          description: c.description,
          start_date: c.start_date,
          end_date: c.end_date,
          is_active: c.is_active
        }));
        setDbCourses(mapped);
      }
    } catch (err) {
      console.warn('Hinweis beim Laden zusätzlicher Kurse:', err);
    } finally {
      setIsLoadingCourses(false);
    }
  }, []);

  useEffect(() => {
    fetchDbCourses();
  }, [fetchDbCourses]);

  // --------------------------------------------------------------------------
  // AKTIVE AUFGABE FÜR AUSGEWÄHLTEN KURS AUS SUPABASE LADEN
  // --------------------------------------------------------------------------
  const loadActiveTaskForCourse = useCallback(async (courseId: string) => {
    if (!courseId) {
      setActiveTask(null);
      return;
    }

    setIsLoadingTask(true);
    try {
      const { data, error } = await supabase
        .from('course_tasks')
        .select('*')
        .eq('course_id', courseId)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        const mappedTask: CourseTask = {
          id: data.id ? String(data.id) : `task_${courseId}`,
          courseId: data.course_id,
          course_id: data.course_id,
          title: data.title || '',
          description: data.description || '',
          targetCategoryId: data.target_category_id || undefined,
          target_category_id: data.target_category_id || undefined,
          targetCategoryName: data.target_category_id && data.target_category_id !== 'all'
            ? data.target_category_id
            : 'Gesamter Prüfungsstoff',
          targetMode: data.target_mode || 'schriftlich',
          target_mode: data.target_mode || 'schriftlich',
          targetCount: data.target_count || 1,
          target_count: data.target_count || 1,
          completedCount: 0,
          lecturerName: data.lecturer_name || lecturerNameDefault,
          lecturer_name: data.lecturer_name || lecturerNameDefault,
          isCompleted: false,
          is_active: true
        };
        setActiveTask(mappedTask);
      } else {
        // Lokaler Fallback
        const directKey = `course_task_${courseId}`;
        const stored = 
          localStorage.getItem(directKey) || 
          localStorage.getItem(`sachkunde_34a_course_task_${courseId}`) || 
          localStorage.getItem('sachkunde_34a_active_course_task');

        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed && (parsed.courseId === courseId || parsed.course_id === courseId) && !parsed.isCompleted) {
              setActiveTask(parsed);
            } else {
              setActiveTask(null);
            }
          } catch {
            setActiveTask(null);
          }
        } else {
          setActiveTask(null);
        }
      }
    } catch (err) {
      console.warn('Laden der aktiven Aufgabe fehlgeschlagen:', err);
      setActiveTask(null);
    } finally {
      setIsLoadingTask(false);
    }
  }, [lecturerNameDefault]);

  useEffect(() => {
    if (selectedCourseId) {
      loadActiveTaskForCourse(selectedCourseId);
    }
  }, [selectedCourseId, loadActiveTaskForCourse]);

  // Synchroner Wechsel des Kurses im Dropdown
  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setFormCourseId(courseId);
    setOpenDropdown(null);
  };

  // Vorbereitung zum Bearbeiten
  const startEditing = (taskToEdit?: CourseTask | null) => {
    const t = taskToEdit || activeTask;
    if (t) {
      const targetCId = t.courseId || t.course_id || selectedCourseId;
      setSelectedCourseId(targetCId);
      setFormCourseId(targetCId);
      setFormLecturerName(t.lecturerName || t.lecturer_name || lecturerNameDefault);
      setFormTitle(t.title || '');
      setFormDescription(t.description || '');
      setFormCategoryId(t.targetCategoryId || t.target_category_id || 'all');
      setFormTargetMode(t.targetMode || t.target_mode || 'schriftlich');
    }
    setFormErrors({});
    const formElem = document.getElementById('dozenten-form-section');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --------------------------------------------------------------------------
  // SUPABASE: AUFGABE VERÖFFENTLICHEN (UPSERT)
  // --------------------------------------------------------------------------
  const handlePublishTask = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formCourseId) {
      setFormErrors({ course: 'Bitte wählen Sie einen Zielkurs aus.' });
      return;
    }

    const errors: { [key: string]: string } = {};
    if (!formTitle.trim()) {
      errors.title = 'Bitte geben Sie einen prägnanten Aufgabentitel ein.';
    }
    if (!formDescription.trim()) {
      errors.description = 'Bitte formulieren Sie eine verbindliche Dozenten-Anweisung.';
    }
    if (!formLecturerName.trim()) {
      errors.lecturerName = 'Bitte geben Sie den Namen der Kursleitung an.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmittingTask(true);
    setFormErrors({});

    const cleanTitle = formTitle.trim();
    const cleanDesc = formDescription.trim();
    const cleanLecturer = formLecturerName.trim();
    const targetCategory = SACHGEBIETE_LIST.find(s => s.id === formCategoryId);
    const categoryName = targetCategory ? targetCategory.name : 'Gesamter Prüfungsstoff';

    try {
      // 1. In Supabase Tabelle 'course_tasks' speichern
      const { error: sbError } = await supabase.from('course_tasks').upsert({
        course_id: formCourseId,
        lecturer_name: cleanLecturer,
        title: cleanTitle,
        description: cleanDesc,
        target_category_id: formCategoryId,
        target_mode: formTargetMode,
        is_active: true
      });

      if (sbError) {
        console.error('Fehler beim Upsert in Supabase course_tasks:', sbError);
      }

      // 2. Lokales Task-Objekt für Dashboard & State
      const newTask: CourseTask = {
        id: `task_${formCourseId}_${Date.now()}`,
        courseId: formCourseId,
        course_id: formCourseId,
        title: cleanTitle,
        description: cleanDesc,
        targetCategoryId: formCategoryId !== 'all' ? formCategoryId : undefined,
        target_category_id: formCategoryId !== 'all' ? formCategoryId : undefined,
        targetCategoryName: categoryName,
        targetMode: formTargetMode,
        target_mode: formTargetMode,
        targetCount: formTargetMode === 'schriftlich' ? 1 : 25,
        target_count: formTargetMode === 'schriftlich' ? 1 : 25,
        completedCount: 0,
        lecturerName: cleanLecturer,
        lecturer_name: cleanLecturer,
        isCompleted: false,
        is_active: true
      };

      setActiveTask(newTask);

      // 3. LocalStorage Synchronisierung für Schüler-Dashboard
      const taskJson = JSON.stringify(newTask);
      localStorage.setItem('sachkunde_34a_active_course_task', taskJson);
      localStorage.setItem('sachkunde_34a_active_task', taskJson);
      localStorage.setItem('activeCourseTask', taskJson);
      localStorage.setItem(`sachkunde_34a_course_task_${formCourseId}`, taskJson);
      localStorage.setItem(`course_task_${formCourseId}`, taskJson);

      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('sachkunde_course_task_updated', { detail: newTask }));

      if (onTaskUpdated) {
        onTaskUpdated(newTask);
      }

      setToastMessage(`Aufgabe erfolgreich für Kurs ${formCourseId} veröffentlicht!`);
      setTimeout(() => setToastMessage(null), 4500);

    } catch (err: any) {
      console.error('Unerwarteter Fehler beim Veröffentlichen der Aufgabe:', err);
      setToastMessage('Aufgabe lokal aktiviert (Supabase-Sync fehlgeschlagen).');
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsSubmittingTask(false);
    }
  };

  // --------------------------------------------------------------------------
  // SUPABASE: AKTIVE AUFGABE ZURÜCKZIEHEN (is_active: false)
  // --------------------------------------------------------------------------
  const handleDeactivateTask = async () => {
    if (!selectedCourseId) return;

    if (!window.confirm(`Möchten Sie die aktive Akademie-Aufgabe für Kurs ${selectedCourseId} wirklich zurückziehen?`)) {
      return;
    }

    try {
      // 1. In Supabase auf is_active: false setzen
      const { error } = await supabase
        .from('course_tasks')
        .update({ is_active: false })
        .eq('course_id', selectedCourseId);

      if (error) {
        console.warn('Supabase Deaktivierung Hinweis:', error);
      }

      // 2. State & LocalStorage leeren
      setActiveTask(null);
      localStorage.removeItem('sachkunde_34a_active_course_task');
      localStorage.removeItem('sachkunde_34a_active_task');
      localStorage.removeItem('activeCourseTask');
      localStorage.removeItem(`sachkunde_34a_course_task_${selectedCourseId}`);
      localStorage.removeItem(`course_task_${selectedCourseId}`);

      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('sachkunde_course_task_updated', { detail: null }));

      if (onTaskUpdated) {
        onTaskUpdated(null);
      }

      setToastMessage(`Aufgabe für Kurs ${selectedCourseId} erfolgreich zurückgezogen.`);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      console.error('Fehler beim Zurückziehen der Aufgabe:', err);
    }
  };

  // --------------------------------------------------------------------------
  // MODAL: NEUEN KURS IN SUPABASE ANLEGEN
  // --------------------------------------------------------------------------
  const handleCreateNewCourseDirect = async (e: React.FormEvent) => {
    e.preventDefault();
    setCourseFormError(null);

    const cleanCode = newCourseCode.trim().toUpperCase().replace(/\s+/g, '');
    const cleanName = newCourseName.trim();
    const cleanDesc = newCourseDescription.trim();

    if (!cleanCode) {
      setCourseFormError('Bitte geben Sie einen gültigen Kurs-Code (id) ein.');
      return;
    }
    if (!cleanName) {
      setCourseFormError('Bitte geben Sie eine Kurs-Bezeichnung (name) ein.');
      return;
    }

    setIsSubmittingCourse(true);

    try {
      const { error } = await supabase
        .from('courses')
        .insert({
          id: cleanCode,
          name: cleanName,
          start_date: newCourseStartDate || null,
          end_date: newCourseEndDate || null,
          description: cleanDesc || null,
          is_active: true
        });

      if (error) {
        if (error.code === '23505' || error.message.includes('unique') || error.message.includes('duplicate')) {
          setCourseFormError(`Der Kurs-Code "${cleanCode}" existiert bereits in der Datenbank.`);
        } else {
          setCourseFormError(`Fehler beim Speichern in Supabase: ${error.message}`);
        }
        setIsSubmittingCourse(false);
        return;
      }

      const createdCohort: CourseCohort = {
        id: cleanCode,
        name: cleanName,
        period: newCourseStartDate && newCourseEndDate ? `${newCourseStartDate} – ${newCourseEndDate}` : (newCourseStartDate || 'Laufender Lehrgang'),
        description: cleanDesc,
        start_date: newCourseStartDate || undefined,
        end_date: newCourseEndDate || undefined,
        is_active: true
      };

      setDbCourses(prev => [...prev.filter(c => c.id !== cleanCode), createdCohort]);
      setSelectedCourseId(cleanCode);
      setFormCourseId(cleanCode);

      if (onCourseCreated) {
        onCourseCreated(createdCohort);
      }

      setShowCreateCourseModal(false);
      setNewCourseCode('');
      setNewCourseName('');
      setNewCourseDescription('');
      setIsSubmittingCourse(false);

      setToastMessage(`Kurs "${cleanName}" (${cleanCode}) erfolgreich in Supabase angelegt!`);
      setTimeout(() => setToastMessage(null), 4500);

    } catch (err: any) {
      setCourseFormError(err?.message || 'Unerwarteter Fehler beim Anlegen des Kurses.');
      setIsSubmittingCourse(false);
    }
  };

  // Aktive Auswahlobjekte ermitteln
  const selectedCourseObj = validCourses.find(c => c.id === formCourseId) || validCourses.find(c => c.id === selectedCourseId) || validCourses[0];
  const selectedCategoryObj = SACHGEBIETE_LIST.find(s => s.id === formCategoryId) || SACHGEBIETE_LIST[0];
  const selectedModeObj = TARGET_MODES.find(m => m.id === formTargetMode) || TARGET_MODES[0];

  const hasCourses = validCourses.length > 0;

  return (
    <div className="space-y-8 font-sans" ref={dropdownRef}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-slate-950 font-bold shadow-2xl flex items-center gap-3 border border-emerald-400 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 fill-slate-950 text-emerald-300 shrink-0" />
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}

      {/* ---------------------------------------------------------------------
          HEADER-SECTION: KURS-AUSWAHL & ÜBERSICHT
          --------------------------------------------------------------------- */}
      <section className="bento-glass p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wide border bg-amber-500/15 border-amber-500/30 text-amber-300 flex items-center gap-1.5 shadow-sm">
                <Megaphone className="w-4 h-4 text-amber-400" />
                Dozenten-Zentrale • Kurssteuerung
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Kurs-Aufgaben & Akademie-Mitteilungen
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Steuern Sie verbindliche Prüfungsaufgaben und Schwerpunkte für Ihre Lehrgänge. Die veröffentlichte Aufgabe erscheint synchron als primäre Aktion im Schüler-Dashboard.
            </p>
          </div>

          {/* Kurs-Filter Dropdown & Neuer Kurs Button */}
          <div className="shrink-0 flex flex-col gap-2 min-w-[280px] bg-slate-950/80 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#dfb871]" />
                Aktueller Kurs:
              </label>
              <button
                type="button"
                onClick={() => {
                  setCourseFormError(null);
                  setShowCreateCourseModal(true);
                }}
                className="text-[11px] font-mono font-bold text-[#dfb871] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                title="Neuen Kurs in Supabase anlegen"
              >
                <Plus className="w-3 h-3" />
                <span>+ Neuer Kurs</span>
              </button>
            </div>

            {/* Custom Dropdown für Kurs-Filter */}
            <div className="relative">
              <div
                onClick={() => setOpenDropdown(openDropdown === 'header-course' ? null : 'header-course')}
                className="bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 rounded-xl px-4 py-2.5 text-xs text-slate-100 flex items-center justify-between cursor-pointer transition-all"
              >
                <span className="font-semibold truncate">
                  {selectedCourseObj?.name || selectedCourseId || 'Bitte Kurs wählen'}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${openDropdown === 'header-course' ? 'rotate-180 text-amber-400' : ''}`} />
              </div>

              {openDropdown === 'header-course' && (
                <div className="absolute z-50 mt-2 w-full bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
                  {validCourses.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleSelectCourse(c.id)}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                        selectedCourseId === c.id
                          ? 'bg-amber-500/15 text-amber-300 font-bold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{c.name}</span>
                      {selectedCourseId === c.id && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          STATUS-ÜBERSICHT: AKTUELLE AKTIVE AUFGABE
          --------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-400" />
            Aktiver Aufgabenstatus für Kurs ({selectedCourseObj?.name || selectedCourseId})
          </h3>
          {activeTask ? (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border bg-emerald-500/15 border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              🟢 Aktiv geschaltet
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-slate-800 border-white/10 text-slate-400 flex items-center gap-1.5">
              ⚪ Keine aktive Aufgabe
            </span>
          )}
        </div>

        {isLoadingTask ? (
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 text-center flex items-center justify-center gap-2 text-slate-400 text-xs">
            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
            <span>Lade aktiven Aufgabenstatus aus Supabase...</span>
          </div>
        ) : activeTask ? (
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 border border-amber-500/40 relative overflow-hidden shadow-xl backdrop-blur-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Task Details */}
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-300">
                    Kurs: {activeTask.courseId || activeTask.course_id}
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    Dozent: <strong className="text-white">{activeTask.lecturerName || activeTask.lecturer_name}</strong>
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-bold font-display text-white">
                    {activeTask.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {activeTask.description}
                  </p>
                </div>

                {/* Meta-Pills */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <div className="px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#dfb871]" />
                    <span>Sachgebiet: <strong className="text-white">{activeTask.targetCategoryName || activeTask.targetCategoryId || 'Gesamter Prüfungsstoff'}</strong></span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Format: <strong className="text-white">{activeTask.targetMode || activeTask.target_mode}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="shrink-0 flex flex-row lg:flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => startEditing(activeTask)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <Edit3 className="w-4 h-4 text-[#dfb871]" />
                  <span>Bearbeiten</span>
                </button>
                <button
                  type="button"
                  onClick={handleDeactivateTask}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 font-bold text-xs border border-rose-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <span>Aufgabe zurückziehen</span>
                </button>
              </div>

            </div>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 text-center space-y-3">
            <h4 className="text-base font-bold text-white font-display">
              Keine aktive Hausaufgabe für Kurs {selectedCourseObj?.name || selectedCourseId}
            </h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Erstellen Sie über das nachfolgende Formular eine verbindliche Dozenten-Aufgabe für diesen Lehrgang.
            </p>
          </div>
        )}
      </section>

      {/* ---------------------------------------------------------------------
          FORMULAR: DOZENTEN-AUFGABE ERSTELLEN / VERÖFFENTLICHEN (6 FELDER)
          --------------------------------------------------------------------- */}
      <section id="dozenten-form-section" className="bento-glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
        <div className="border-b border-white/10 pb-4">
          <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-[#dfb871]" />
            Dozenten-Aufgabe erstellen / aktualisieren
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Definieren Sie Kurs, Sachgebiet, Lernformat und Anweisung für die Klasse
          </p>
        </div>

        <form onSubmit={handlePublishTask} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LINKE SPALTE: KURS, DOZENT, SACHGEBIET */}
            <div className="space-y-5">
              
              {/* FELD 1: ZIELKURS / KOHORTE (CUSTOM SELECT) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  1. Zielkurs / Kohorte *
                </label>
                <div className="relative">
                  <div
                    onClick={() => {
                      if (hasCourses) {
                        setOpenDropdown(openDropdown === 'form-course' ? null : 'form-course');
                      }
                    }}
                    className={`bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-100 flex items-center justify-between cursor-pointer transition-all ${
                      formErrors.course
                        ? 'border-rose-500'
                        : 'border-slate-800 hover:border-amber-500/50'
                    } ${!hasCourses ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span className="truncate font-medium">
                      {selectedCourseObj?.name || formCourseId || 'Bitte Kurs wählen'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${openDropdown === 'form-course' ? 'rotate-180 text-amber-400' : ''}`} />
                  </div>

                  {openDropdown === 'form-course' && hasCourses && (
                    <div className="absolute z-50 mt-2 w-full bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
                      {validCourses.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => {
                            setFormCourseId(c.id);
                            setSelectedCourseId(c.id);
                            setOpenDropdown(null);
                          }}
                          className={`px-3 py-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                            formCourseId === c.id
                              ? 'bg-amber-500/15 text-amber-300 font-bold'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="truncate">{c.name}</span>
                          {formCourseId === c.id && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {formErrors.course && (
                  <p className="text-[11px] text-rose-400">{formErrors.course}</p>
                )}
              </div>

              {/* FELD 2: DOZENT / KURSLEITUNG (DARK TEXT-INPUT) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  2. Dozent / Kursleitung *
                </label>
                <div className="relative">
                  <UserCheck className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={formLecturerName}
                    onChange={(e) => setFormLecturerName(e.target.value)}
                    placeholder="z. B. Herr Beloev (Kursleitung)"
                    className={`w-full bg-slate-950/90 border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none ${
                      formErrors.lecturerName ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-[#dfb871]'
                    }`}
                  />
                </div>
                {formErrors.lecturerName && (
                  <p className="text-[11px] text-rose-400">{formErrors.lecturerName}</p>
                )}
              </div>

              {/* FELD 3: SACHGEBIET-FOKUS (CUSTOM SELECT OHNE EMOJIS) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  3. Sachgebiet-Fokus (Offizieller Rahmenplan) *
                </label>
                <div className="relative">
                  <div
                    onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                    className="bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-slate-100 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <span className="truncate font-medium">{selectedCategoryObj.name}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${openDropdown === 'category' ? 'rotate-180 text-amber-400' : ''}`} />
                  </div>

                  {openDropdown === 'category' && (
                    <div className="absolute z-50 mt-2 w-full bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
                      {SACHGEBIETE_LIST.map((cat) => (
                        <div
                          key={cat.id}
                          onClick={() => {
                            setFormCategoryId(cat.id);
                            setOpenDropdown(null);
                          }}
                          className={`px-3 py-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                            formCategoryId === cat.id
                              ? 'bg-amber-500/15 text-amber-300 font-bold'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="truncate">{cat.name}</span>
                          {formCategoryId === cat.id && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* RECHTE SPALTE: LERNFORMAT, TITEL, ANWEISUNG */}
            <div className="space-y-5">
              
              {/* FELD 4: ZIEL-LERNFORMAT (CUSTOM SELECT) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  4. Ziel-Lernformat *
                </label>
                <div className="relative">
                  <div
                    onClick={() => setOpenDropdown(openDropdown === 'mode' ? null : 'mode')}
                    className="bg-slate-950/60 border border-slate-800 hover:border-amber-500/50 rounded-xl px-4 py-3 text-sm text-slate-100 flex items-center justify-between cursor-pointer transition-all"
                  >
                    <span className="truncate font-medium">{selectedModeObj.label}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${openDropdown === 'mode' ? 'rotate-180 text-amber-400' : ''}`} />
                  </div>

                  {openDropdown === 'mode' && (
                    <div className="absolute z-50 mt-2 w-full bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
                      {TARGET_MODES.map((mode) => (
                        <div
                          key={mode.id}
                          onClick={() => {
                            setFormTargetMode(mode.id);
                            setOpenDropdown(null);
                          }}
                          className={`px-3 py-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                            formTargetMode === mode.id
                              ? 'bg-amber-500/15 text-amber-300 font-bold'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="truncate">{mode.label}</span>
                          {formTargetMode === mode.id && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* FELD 5: AUFGABENTITEL (TEXT-INPUT) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  5. Aufgabentitel *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="z. B. Wochenaufgabe: BGB & Hausrecht vertiefen"
                  className={`w-full bg-slate-950/90 border rounded-xl px-4 py-3 text-sm text-white font-medium focus:outline-none ${
                    formErrors.title ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-[#dfb871]'
                  }`}
                />
                {formErrors.title && (
                  <p className="text-[11px] text-rose-400">{formErrors.title}</p>
                )}
              </div>

              {/* FELD 6: DOZENTEN-ANWEISUNG / NACHRICHT (TEXTAREA) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  6. Dozenten-Anweisung / Nachricht an die Klasse *
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="z. B. Bitte bis Freitag 3 Simulationen in diesem Modul abschließen und Erklärungen bei Fehlern aufmerksam studieren."
                  className={`w-full bg-slate-950/90 border rounded-xl px-4 py-3 text-sm text-white leading-relaxed focus:outline-none ${
                    formErrors.description ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-[#dfb871]'
                  }`}
                />
                {formErrors.description && (
                  <p className="text-[11px] text-rose-400">{formErrors.description}</p>
                )}
              </div>

            </div>

          </div>

          {/* SUBMIT BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="submit"
              disabled={!hasCourses || isSubmittingTask}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm font-display tracking-wide shadow-xl flex items-center justify-center gap-2.5 transition-all ${
                hasCourses && !isSubmittingTask
                  ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-[#dfb871] hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-900/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed opacity-60'
              }`}
            >
              {isSubmittingTask ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Speichere in Supabase...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Aufgabe jetzt veröffentlichen</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* ---------------------------------------------------------------------
          MODAL: NEUEN KURS / KOHORTE IN SUPABASE ANLEGEN
          --------------------------------------------------------------------- */}
      {showCreateCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in overflow-y-auto">
          <div className="w-full max-w-lg bg-slate-950 border border-[#dfb871]/40 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl relative bento-glass bento-glow-gold my-8">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#dfb871]/15 text-[#dfb871] rounded-2xl border border-[#dfb871]/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Neuen Kurs / Kohorte anlegen</h3>
                  <p className="text-xs text-slate-400">Speichert direkt in Supabase-Tabelle <code className="text-[#dfb871] font-mono">courses</code></p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!isSubmittingCourse) setShowCreateCourseModal(false);
                }}
                disabled={isSubmittingCourse}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                title="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {courseFormError && (
              <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-shake">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{courseFormError}</span>
              </div>
            )}

            <form onSubmit={handleCreateNewCourseDirect} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center justify-between">
                  <span>Kurs-Code (id in Supabase): *</span>
                  <span className="text-[10px] text-[#dfb871] font-mono lowercase font-normal">z. B. MOREDU34a</span>
                </label>
                <input
                  type="text"
                  value={newCourseCode}
                  onChange={(e) => setNewCourseCode(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                  placeholder="MOREDU34a"
                  disabled={isSubmittingCourse}
                  className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#dfb871] font-mono font-bold tracking-widest focus:outline-none focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871] disabled:opacity-50"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider">
                  Kurs-Bezeichnung / Name: *
                </label>
                <input
                  type="text"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  placeholder="z. B. Sachkunde § 34a (Herbst 2026)"
                  disabled={isSubmittingCourse}
                  className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871] disabled:opacity-50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#dfb871]" />
                    <span>Startdatum:</span>
                  </label>
                  <input
                    type="date"
                    value={newCourseStartDate}
                    onChange={(e) => setNewCourseStartDate(e.target.value)}
                    disabled={isSubmittingCourse}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#dfb871] font-mono font-semibold focus:outline-none focus:border-[#dfb871] disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#dfb871]" />
                    <span>Enddatum:</span>
                  </label>
                  <input
                    type="date"
                    value={newCourseEndDate}
                    onChange={(e) => setNewCourseEndDate(e.target.value)}
                    disabled={isSubmittingCourse}
                    className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#dfb871] font-mono font-semibold focus:outline-none focus:border-[#dfb871] disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-200 font-mono uppercase tracking-wider">
                  Optionale Beschreibung / Notiz:
                </label>
                <input
                  type="text"
                  value={newCourseDescription}
                  onChange={(e) => setNewCourseDescription(e.target.value)}
                  placeholder="z. B. Vollzeit-Kompaktkurs mit Prüfung im Oktober 2026"
                  disabled={isSubmittingCourse}
                  className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#dfb871] disabled:opacity-50"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowCreateCourseModal(false)}
                  disabled={isSubmittingCourse}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold cursor-pointer transition-colors disabled:opacity-50"
                >
                  Abbrechen
                </button>

                <button
                  type="submit"
                  disabled={isSubmittingCourse}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmittingCourse ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Speichere...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>✓ Kurs anlegen</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
