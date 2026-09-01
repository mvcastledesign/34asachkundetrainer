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
  GraduationCap,
  Clock,
  KeyRound,
  ChevronRight,
  Activity,
  TrendingUp,
  Zap,
  Radar,
  Printer,
  AlertTriangle,
  ShieldCheck,
  Search,
  RotateCcw,
  XCircle,
  Copy
} from 'lucide-react';
import { UserProfile, StudentDetail } from '../types/auth.ts';
import { CourseTask } from './DashboardView.tsx';
import { 
  supabase, 
  fetchStudentsFromSupabase, 
  updateStudentPasswordInSupabase, 
  deleteStudentFromSupabase, 
  cleanupLocalStudentData 
} from '../lib/supabase.ts';
import { INITIAL_QUESTIONS } from '../initialQuestions.ts';

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

// --------------------------------------------------------------------------
// 1. ZENTRALE KURS-DEFINITION
// --------------------------------------------------------------------------
const COURSES = [
  { id: 'MOREDU34a', name: 'Sachkunde § 34a (Sommer 2026)', code: 'MOREDU34A' },
  { id: 'test123', name: 'Sachkunde § 34a (TEST123)', code: 'TEST123' }
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
    id: 'test123',
    name: 'Sachkunde § 34a (TEST123)',
    period: 'Fortlaufend / Flexibel',
    description: 'Test- und Übungskohorte'
  }
];

// Datums-Formatierer für deutsche Zeitanzeige
function formatGermanDate(dateStr?: string): string {
  if (!dateStr) return 'Keine Aktivität';
  if (dateStr === 'Gerade eben' || dateStr.startsWith('Gerade')) return 'Gerade eben';
  
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' Uhr';
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}

export default function LecturerView({
  currentUser,
  cohorts: propCohorts,
  selectedCohortId: propSelectedCohortId = 'MOREDU34a',
  onTaskUpdated,
  onCourseCreated
}: LecturerViewProps) {
  // --------------------------------------------------------------------------
  // 1. ZENTRALE KURS-LISTE (Synchronisiert mit Dozenten-Dashboard & Supabase)
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

  // Aktiver Haupt-Tab ('students' | 'analytics' | 'tasks')
  const [activeTab, setActiveTab] = useState<'students' | 'analytics' | 'tasks'>('tasks');

  // Synchronisation bei externer Kursänderung
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
  // 2. STATE: SCHÜLER & TELEMETRIE DATEN
  // --------------------------------------------------------------------------
  const [students, setStudents] = useState<StudentDetail[]>([]);
  const [loadingStudents, setLoadingStudents] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [progressFilter, setProgressFilter] = useState<'all' | 'advanced' | 'new'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentDetail | null>(null);

  // Modals für Schüleraktionen
  const [resetStudentModal, setResetStudentModal] = useState<StudentDetail | null>(null);
  const [adminNewPassword, setAdminNewPassword] = useState<string>('NeuesPasswort123');
  const [studentToDelete, setStudentToDelete] = useState<StudentDetail | null>(null);
  const [isDeletingStudent, setIsDeletingStudent] = useState<boolean>(false);
  const [copiedPassword, setCopiedPassword] = useState<boolean>(false);

  // Modal: Aufgabe zurückziehen / beenden
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [isDeactivatingTask, setIsDeactivatingTask] = useState<boolean>(false);

  // --------------------------------------------------------------------------
  // 3. STATE: AKTIVE AUFGABE (DYNAMISCHE SYNCHRONISATION MIT SUPABASE)
  // --------------------------------------------------------------------------
  const [activeTask, setActiveTask] = useState<CourseTask | null>(null);

  // --------------------------------------------------------------------------
  // 4. STATE: FORMULAR-FELDER FÜR AUFGABEN-ERSTELLUNG
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
  // 5. DROPDOWN OPEN/CLOSE STEUERUNG
  // --------------------------------------------------------------------------
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<'header-course' | 'category' | 'mode' | null>(null);
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
        setIsCourseDropdownOpen(false);
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
  // SUPABASE: SCHÜLERLISTE LADEN
  // --------------------------------------------------------------------------
  const loadStudents = useCallback(async () => {
    setLoadingStudents(true);
    try {
      const data = await fetchStudentsFromSupabase();
      setStudents(data);
    } catch (err) {
      console.error('Fehler beim Laden der Schüler:', err);
    } finally {
      setLoadingStudents(false);
    }
  }, []);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  // --------------------------------------------------------------------------
  // 1. DYNAMISCHES LADEN DER AKTIVEN AUFGABE AUS SUPABASE
  // --------------------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;

    async function fetchTask() {
      // Falls keine konkrete Kurs-ID gewählt ist (oder "ALL" aktiv ist), leeren
      if (!selectedCourseId || selectedCourseId === 'ALL') {
        setActiveTask(null);
        return;
      }

      // Kurs-Code bereinigen (z. B. falls String "Sachkunde § 34a (MOREDU34a)" gewählt ist)
      const cleanId = selectedCourseId.includes('(')
        ? selectedCourseId.match(/\(([^)]+)\)/)?.[1]?.trim() || selectedCourseId.trim()
        : selectedCourseId.trim();

      try {
        const { data, error } = await supabase
          .from('course_tasks')
          .select('*')
          .ilike('course_id', cleanId)
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error('Fehler beim Abrufen der Aufgabe:', error);
          if (isMounted) setActiveTask(null);
          return;
        }

        if (isMounted) {
          setActiveTask(data || null);
        }
      } catch (err) {
        console.error('Unerwarteter Fehler:', err);
        if (isMounted) setActiveTask(null);
      }
    }

    fetchTask();

    return () => {
      isMounted = false;
    };
  }, [selectedCourseId]);

  // --------------------------------------------------------------------------
  // 3. KURS-DROPDOWN-SYNCHRONISATION
  // --------------------------------------------------------------------------
  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setFormCourseId(courseId);
    setOpenDropdown(null);
  };

  // Vorbereitung zum Bearbeiten der Aufgabe
  const startEditing = (taskToEdit?: CourseTask | null) => {
    setActiveTab('tasks');
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
    setTimeout(() => {
      const formElem = document.getElementById('dozenten-form-section');
      if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
  // SUPABASE: AKTIVE AUFGABEN BEENDEN / BULK-DEAKTIVIEREN (is_active: false)
  // --------------------------------------------------------------------------
  const handleDeactivateTask = async () => {
    if (!selectedCourseId) return;

    const cleanId = selectedCourseId.includes('(')
      ? selectedCourseId.match(/\(([^)]+)\)/)?.[1]?.trim() || selectedCourseId.trim()
      : selectedCourseId.trim();

    try {
      setIsDeactivatingTask(true);
      
      // 1. In Supabase ALLE aktiven Aufgaben für diesen Kurs auf is_active: false setzen
      const { error } = await supabase
        .from('course_tasks')
        .update({ is_active: false })
        .or(`course_id.eq.${selectedCourseId},course_id.ilike.${selectedCourseId}`)
        .eq('is_active', true);

      if (!error) {
        setActiveTask(null);
      } else {
        console.warn('Supabase Deaktivierung Hinweis:', error);
      }

      // 2. Lokalen State sofort leeren
      setActiveTask(null);
      localStorage.removeItem('sachkunde_34a_active_course_task');
      localStorage.removeItem('sachkunde_34a_active_task');
      localStorage.removeItem('activeCourseTask');
      localStorage.removeItem(`sachkunde_34a_course_task_${cleanId}`);
      localStorage.removeItem(`course_task_${cleanId}`);

      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('sachkunde_course_task_updated', { detail: null }));

      if (onTaskUpdated) {
        onTaskUpdated(null);
      }

      setShowDeleteModal(false);
      setToastMessage(`Alle aktiven Aufgaben für Kurs ${cleanId} erfolgreich beendet.`);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      console.error('Fehler beim Deaktivieren der Aufgabe:', err);
    } finally {
      setIsDeactivatingTask(false);
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

  // --------------------------------------------------------------------------
  // SCHÜLER: PASSWORT ZURÜCKSETZEN & LÖSCHEN
  // --------------------------------------------------------------------------
  const handleConfirmResetPassword = async () => {
    if (!resetStudentModal || !adminNewPassword.trim()) return;

    try {
      await updateStudentPasswordInSupabase(resetStudentModal.id, adminNewPassword.trim());
      setStudents(prev => prev.map(s => s.id === resetStudentModal.id ? { ...s, password: adminNewPassword.trim() } : s));
      setToastMessage(`Passwort für ${resetStudentModal.name} erfolgreich aktualisiert.`);
      setResetStudentModal(null);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      alert('Fehler beim Zurücksetzen des Passworts.');
    }
  };

  const handleConfirmDeleteStudent = async () => {
    if (!studentToDelete) return;
    setIsDeletingStudent(true);

    try {
      await deleteStudentFromSupabase(studentToDelete.id);
      cleanupLocalStudentData(studentToDelete.id);
      setStudents(prev => prev.filter(s => s.id !== studentToDelete.id));
      if (selectedStudent?.id === studentToDelete.id) {
        setSelectedStudent(null);
      }
      setToastMessage(`Schüler "${studentToDelete.name}" wurde gelöscht.`);
      setStudentToDelete(null);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err) {
      alert('Fehler beim Löschen des Schülers.');
    } finally {
      setIsDeletingStudent(false);
    }
  };

  // Kurs-Report drucken
  const handlePrintCourseReport = () => {
    window.print();
  };

  // --------------------------------------------------------------------------
  // GEFILTERTE SCHÜLER & BERECHNUNGEN FÜR DIE AUSGEWÄHLTE KOHORTE
  // --------------------------------------------------------------------------
  const courseStudents = useMemo(() => {
    if (!selectedCourseId) return students;
    return students.filter(s => {
      const cId = (s.courseId || s.invitationCode || '').toUpperCase().trim();
      return cId === selectedCourseId.toUpperCase().trim();
    });
  }, [students, selectedCourseId]);

  const filteredStudents = useMemo(() => {
    return courseStudents.filter(s => {
      // Suchfilter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = (s.name || '').toLowerCase().includes(q);
        const matchesCourse = (s.courseId || s.invitationCode || '').toLowerCase().includes(q);
        if (!matchesName && !matchesCourse) return false;
      }
      // Fortschrittsfilter
      const prog = s.progressPercent || 0;
      if (progressFilter === 'advanced' && prog <= 50) return false;
      if (progressFilter === 'new' && prog > 50) return false;
      return true;
    });
  }, [courseStudents, searchQuery, progressFilter]);

  // Kennzahlen für den Kurs
  const avgProgress = useMemo(() => {
    if (courseStudents.length === 0) return 0;
    const sum = courseStudents.reduce((acc, s) => acc + (s.progressPercent || 0), 0);
    return Math.round(sum / courseStudents.length);
  }, [courseStudents]);

  const readinessStats = useMemo(() => {
    const total = courseStudents.length;
    if (total === 0) {
      return { redCount: 0, yellowCount: 0, greenCount: 0, redPercent: 0, yellowPercent: 0, greenPercent: 0, avgScore: 0 };
    }
    let red = 0;
    let yellow = 0;
    let green = 0;
    let scoreSum = 0;

    courseStudents.forEach(s => {
      const score = s.successRatePercent || s.progressPercent || 0;
      scoreSum += score;
      if (score > 65) green++;
      else if (score >= 50) yellow++;
      else red++;
    });

    return {
      redCount: red,
      yellowCount: yellow,
      greenCount: green,
      redPercent: Math.round((red / total) * 100),
      yellowPercent: Math.round((yellow / total) * 100),
      greenPercent: Math.round((green / total) * 100),
      avgScore: Math.round(scoreSum / total)
    };
  }, [courseStudents]);

  // Aktive Auswahlobjekte ermitteln
  const selectedCourseObj = validCourses.find(c => c.id === formCourseId) || validCourses.find(c => c.id === selectedCourseId) || validCourses[0];
  const selectedCategoryObj = SACHGEBIETE_LIST.find(s => s.id === formCategoryId) || SACHGEBIETE_LIST[0];
  const selectedModeObj = TARGET_MODES.find(m => m.id === formTargetMode) || TARGET_MODES[0];

  const hasCourses = validCourses.length > 0;

  return (
    <div className="space-y-6 font-sans" ref={dropdownRef}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-slate-950 font-bold shadow-2xl flex items-center gap-3 border border-emerald-400 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 fill-slate-950 text-emerald-300 shrink-0" />
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}

      {/* ---------------------------------------------------------------------
          HEADER-SECTION: AKTIONEN & HAUPT-NAVIGATION
          --------------------------------------------------------------------- */}
      <section className="bento-glass p-5 md:p-7 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl space-y-5">
        
        {/* OBERE LEISTE: TITEL & ACTION-BUTTONS (FLEX-WRAP FÜR SMARTPHONES) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wide border bg-amber-500/15 border-amber-500/30 text-amber-300 flex items-center gap-1.5 shadow-sm">
                <Megaphone className="w-4 h-4 text-amber-400" />
                Dozenten-Zentrale • § 34a Sachkunde
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
              Akademie- & Kurssteuerung
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Verwalten Sie Lehrgangs-Kohorten, prüfen Sie den kognitiven Lernstand und schalten Sie verbindliche Aufgaben live.
            </p>
          </div>

          {/* ACTION-BUTTONS & KURS-DROPDOWN */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* OBERE ACTION-BUTTONS (FLEX-WRAP) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setCourseFormError(null);
                  setShowCreateCourseModal(true);
                }}
                className="px-3.5 py-2.5 rounded-xl bg-[#dfb871]/15 hover:bg-[#dfb871]/25 border border-[#dfb871]/40 text-[#dfb871] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 whitespace-nowrap"
                title="Neuen Kurs in Supabase anlegen"
              >
                <Plus className="w-4 h-4 text-[#dfb871]" />
                <span>+ Kurs anlegen</span>
              </button>

              <button
                type="button"
                onClick={handlePrintCourseReport}
                className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-[#dfb871]/40 text-slate-200 hover:text-[#dfb871] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 whitespace-nowrap"
                title="Vollständigen Klassenbericht als druckoptimierte Ansicht öffnen"
              >
                <Printer className="w-4 h-4 text-[#dfb871]" />
                <span>Kurs-Gesamtbericht</span>
              </button>
            </div>

            {/* KURS-DROPDOWN IM HEADER */}
            <div className="relative min-w-[200px]">
              <div
                onClick={() => setOpenDropdown(openDropdown === 'header-course' ? null : 'header-course')}
                className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 flex items-center justify-between cursor-pointer transition-all shadow-inner"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Users className="w-3.5 h-3.5 text-[#dfb871] shrink-0" />
                  <span className="font-semibold truncate">
                    {selectedCourseObj?.name || selectedCourseId || 'Kurs wählen'}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${openDropdown === 'header-course' ? 'rotate-180 text-amber-400' : ''}`} />
              </div>

              {openDropdown === 'header-course' && (
                <div className="absolute z-50 right-0 mt-2 w-72 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
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

        {/* ANFORDERUNG 3: HAUPT-TABS ALS HORIZONTAL WISCHBARE LEISTE (no-scrollbar gap-2) */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/10 overflow-x-auto no-scrollbar pb-1">
          <button
            type="button"
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap shrink-0 ${
              activeTab === 'students'
                ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Schülerverwaltung ({courseStudents.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap shrink-0 ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
            }`}
          >
            <Radar className="w-4 h-4" />
            <span>Kognitives Diagnose-Center</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer font-sans whitespace-nowrap shrink-0 ${
              activeTab === 'tasks'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
            }`}
          >
            <Megaphone className="w-4 h-4 text-amber-400" />
            <span>Kurs-Aufgaben</span>
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          TAB 1: SCHÜLERVERWALTUNG (DESKTOP TABELLE + SMARTPHONE CARD-DESIGN)
          --------------------------------------------------------------------- */}
      {activeTab === 'students' && (
        <section className="bento-glass p-5 md:p-7 rounded-3xl border border-white/10 space-y-5 shadow-2xl">
          
          {/* OBERE KONTROLLEN: SUCHE & FILTER-PILLEN */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            
            {/* Suchfeld */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Schüler nach Name oder Kurs-Code suchen..."
                className="w-full bg-slate-950/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb871] transition-all font-sans"
              />
            </div>

            {/* ANFORDERUNG 4: FILTER-PILLEN HORIZONTAL SCROLLBAR */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setProgressFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap shrink-0 ${
                  progressFilter === 'all'
                    ? 'bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                }`}
              >
                Alle ({courseStudents.length})
              </button>

              <button
                type="button"
                onClick={() => setProgressFilter('advanced')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap shrink-0 ${
                  progressFilter === 'advanced'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                }`}
              >
                Aktiv (&gt;50 %)
              </button>

              <button
                type="button"
                onClick={() => setProgressFilter('new')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans whitespace-nowrap shrink-0 ${
                  progressFilter === 'new'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/5'
                }`}
              >
                Neu angefangen (&lt;50 %)
              </button>
            </div>

          </div>

          {/* SCHÜLERDATEN: LOADING & EMPTY STATES */}
          {loadingStudents ? (
            <div className="p-12 text-center text-slate-400 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#dfb871]" />
              <span className="text-xs">Lade Schülerdaten aus Supabase...</span>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="p-12 text-center text-slate-500 space-y-2">
              <Users className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="text-xs font-semibold text-slate-300">Keine Schüler für die aktuelle Auswahl gefunden.</p>
              <p className="text-[11px] text-slate-500">
                Schüler können sich mit dem Kurs-Code <strong className="text-[#dfb871] font-mono">{selectedCourseId}</strong> registrieren.
              </p>
            </div>
          ) : (
            <>
              {/* ANFORDERUNG 4: DESKTOP TABELLE (ab md:) */}
              <div className="hidden md:block overflow-x-auto border border-white/5 rounded-2xl bg-slate-950/40">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950/90 text-slate-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/5">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">1. Schüler</th>
                      <th className="py-3.5 px-4 font-bold">2. Lernfortschritt</th>
                      <th className="py-3.5 px-4 font-bold">3. Zuletzt Aktiv</th>
                      <th className="py-3.5 px-4 text-right font-bold">4. Aktionen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                    {filteredStudents.map((student) => {
                      const courseCodeUpper = (student.courseId || student.invitationCode || '–').toUpperCase();
                      return (
                        <tr key={student.id} className="hover:bg-white/[0.02] transition-colors">
                          
                          {/* 1. Schüler */}
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-slate-800 border border-[#dfb871]/30 text-[#dfb871] font-bold flex items-center justify-center font-display text-xs shrink-0 shadow-sm">
                                {student.avatarInitials || (student.name ? student.name.slice(0, 2).toUpperCase() : 'S')}
                              </div>
                              <div>
                                <p className="font-bold text-white text-xs">{student.name}</p>
                                <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                                  Kurs-Code: <span className="text-[#dfb871] font-bold">{courseCodeUpper}</span>
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* 2. Lernfortschritt */}
                          <td className="py-4 px-4 w-56">
                            <div className="space-y-1.5">
                              <div className="flex justify-between text-[11px] font-mono">
                                <span className="text-slate-400 font-medium">Gelernt:</span>
                                <span className="font-bold text-white">{student.progressPercent || 0} %</span>
                              </div>
                              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-white/5">
                                <div 
                                  className="bg-gradient-to-r from-[#dfb871] to-[#e4bf7b] h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${Math.min(100, Math.max(0, student.progressPercent || 0))}%` }}
                                />
                              </div>
                            </div>
                          </td>

                          {/* 3. Zuletzt Aktiv */}
                          <td className="py-4 px-4 text-slate-300 font-mono text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span>{formatGermanDate(student.lastActive)}</span>
                            </div>
                          </td>

                          {/* 4. Aktionen */}
                          <td className="py-4 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => setSelectedStudent(student)}
                                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
                                title="Details ansehen"
                              >
                                <span>Details</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#dfb871]" />
                              </button>

                              <button
                                type="button"
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
                                type="button"
                                onClick={() => setStudentToDelete(student)}
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 transition-all cursor-pointer"
                                title="Schüler aus Supabase löschen"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* ANFORDERUNG 4: SMARTPHONE CARD-DESIGN (unter md:) */}
              <div className="block md:hidden space-y-3">
                {filteredStudents.map((student) => {
                  const courseCodeFormatted = (student.courseId || student.invitationCode || 'MOREDU34A').toUpperCase();
                  const progressVal = student.progressPercent || 0;

                  return (
                    <div 
                      key={student.id} 
                      className="p-4 rounded-2xl bg-slate-950/70 border border-white/10 space-y-3 shadow-lg hover:border-[#dfb871]/40 transition-all"
                    >
                      {/* Oben: Initialen-Avatar, Name (bold) und Kurs-Code (.toUpperCase()) */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#dfb871]/30 text-[#dfb871] font-bold flex items-center justify-center font-display text-xs shrink-0 shadow-sm">
                            {student.avatarInitials || (student.name ? student.name.slice(0, 2).toUpperCase() : 'S')}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-white text-sm truncate leading-snug">{student.name}</h4>
                            <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                              <span>Kurs:</span>
                              <span className="text-[#dfb871] font-bold font-mono tracking-wider">{courseCodeFormatted}</span>
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedStudent(student)}
                          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all cursor-pointer flex items-center gap-1 shrink-0"
                          title="Details ansehen"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#dfb871]" />
                        </button>
                      </div>

                      {/* Mitte: Prozentanzeige "X % Gelernt" und ein horizontaler Fortschrittsbalken */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400 font-medium">Lernfortschritt:</span>
                          <span className="font-bold text-[#dfb871]">{progressVal} % Gelernt</span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-white/5">
                          <div 
                            className="bg-gradient-to-r from-[#dfb871] via-amber-400 to-[#f3d493] h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, Math.max(0, progressVal))}%` }}
                          />
                        </div>
                      </div>

                      {/* Unten: "Zuletzt aktiv" mit Zeitstempel oder Datumsanzeige (kein Textumbruch) */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
                        <div className="flex items-center gap-1.5 text-slate-400 font-mono truncate min-w-0 pr-2">
                          <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className="truncate">Zuletzt aktiv: <strong className="text-slate-300 font-semibold">{formatGermanDate(student.lastActive)}</strong></span>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setResetStudentModal(student);
                              setAdminNewPassword('NeuesPasswort123');
                            }}
                            className="p-1.5 rounded-lg bg-[#dfb871]/10 hover:bg-[#dfb871]/20 border border-[#dfb871]/25 text-[#dfb871] transition-all cursor-pointer"
                            title="Passwort zurücksetzen"
                          >
                            <KeyRound className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setStudentToDelete(student)}
                            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 transition-all cursor-pointer"
                            title="Schüler löschen"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </>
          )}

        </section>
      )}

      {/* ---------------------------------------------------------------------
          TAB 2: KOGNITIVES DIAGNOSE-CENTER (AMPELSYSTEM & STATISTIKEN)
          --------------------------------------------------------------------- */}
      {activeTab === 'analytics' && (
        <section className="space-y-6">
          
          {/* KACHEL: BESTEHENS-PROGNOSE & PRÜFUNGSREIFE */}
          <div className="bento-glass p-6 md:p-7 rounded-3xl border border-emerald-500/20 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <h3 className="text-base font-bold text-white font-display">
                    Bestehens-Prognose & Prüfungsreife ({selectedCourseObj?.name || selectedCourseId})
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Ampelsystem basierend auf Prüfungssimulationen & schriftlichen Tests (§ 34a GewO).
                </p>
              </div>

              <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700/60 rounded px-2.5 py-1 shrink-0 font-mono">
                Ø {readinessStats.avgScore} % Kohorten-Score
              </span>
            </div>

            {/* Ampelsystem 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Rot */}
              <div className="p-4 rounded-2xl bg-rose-500/[0.08] border border-rose-500/30 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-rose-400">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>Rot (&lt; 50 %)</span>
                </div>
                <p className="text-2xl font-black font-mono text-white mt-1">
                  {readinessStats.redCount}
                </p>
                <p className="text-[11px] text-rose-300 font-medium">Prüfungsgefährdet</p>
                <span className="text-[10px] font-mono text-slate-400 block">({readinessStats.redPercent} % der Klasse)</span>
              </div>

              {/* Gelb */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.08] border border-amber-500/30 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Gelb (50–65 %)</span>
                </div>
                <p className="text-2xl font-black font-mono text-white mt-1">
                  {readinessStats.yellowCount}
                </p>
                <p className="text-[11px] text-amber-300 font-medium">Gefestigt / Grenzwertig</p>
                <span className="text-[10px] font-mono text-slate-400 block">({readinessStats.yellowPercent} % der Klasse)</span>
              </div>

              {/* Grün */}
              <div className="p-4 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/30 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Grün (&gt; 65 %)</span>
                </div>
                <p className="text-2xl font-black font-mono text-white mt-1">
                  {readinessStats.greenCount}
                </p>
                <p className="text-[11px] text-emerald-300 font-medium">Prüfungsbereit</p>
                <span className="text-[10px] font-mono text-slate-400 block">({readinessStats.greenPercent} % der Klasse)</span>
              </div>
            </div>

            {/* Distribution Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Prüfungsreife-Verteilung ({courseStudents.length} Teilnehmer)</span>
                <span className="text-emerald-400 font-bold">{readinessStats.greenPercent} % prüfungsbereit</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-950 flex overflow-hidden border border-white/10 p-0.5">
                <div 
                  style={{ width: `${readinessStats.greenPercent}%` }} 
                  className="h-full bg-emerald-500 rounded-l-full transition-all duration-500" 
                  title={`Grün: ${readinessStats.greenCount} Schüler`}
                />
                <div 
                  style={{ width: `${readinessStats.yellowPercent}%` }} 
                  className="h-full bg-amber-500 transition-all duration-500" 
                  title={`Gelb: ${readinessStats.yellowCount} Schüler`}
                />
                <div 
                  style={{ width: `${readinessStats.redPercent}%` }} 
                  className="h-full bg-rose-500 rounded-r-full transition-all duration-500" 
                  title={`Rot: ${readinessStats.redCount} Schüler`}
                />
              </div>
            </div>

          </div>

        </section>
      )}

      {/* ---------------------------------------------------------------------
          TAB 3: KURS-AUFGABEN & AKADEMIE-MITTEILUNGEN
          --------------------------------------------------------------------- */}
      {activeTab === 'tasks' && (
        <div className="space-y-6">
          
          {/* ANFORDERUNG 1 & 2: AKTIVER AUFGABENSTATUS (LIVE AUS SUPABASE) */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                Aktiver Aufgabenstatus für Kurs ({selectedCourseObj?.name || selectedCourseId})
              </h3>
              
              {/* STATUS PILLE */}
              {activeTask ? (
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold border bg-emerald-500/15 border-emerald-500/30 text-emerald-300 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>🟢 1 aktive Aufgabe</span>
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-slate-800 border-white/10 text-slate-400 flex items-center gap-1.5">
                  ⚪ Keine aktive Aufgabe
                </span>
              )}
            </div>

            {activeTask ? (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 border border-amber-500/40 relative overflow-hidden shadow-xl backdrop-blur-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Task Details */}
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-300">
                        Kurs: {activeTask.courseId || activeTask.course_id}
                      </span>
                      <span className="text-xs text-slate-400 font-sans">
                        Dozent: <strong className="text-white">{activeTask.lecturerName || activeTask.lecturer_name || 'Kursleitung'}</strong>
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
                        <span>Sachgebiet: <strong className="text-white">{activeTask.targetCategoryName || activeTask.target_category_id || activeTask.targetCategoryId || 'Gesamter Prüfungsstoff'}</strong></span>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-slate-950/60 border border-white/10 text-slate-300 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Format: <strong className="text-white">{activeTask.targetMode || activeTask.target_mode || 'Standard'}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Bearbeiten & Beenden/Deaktivieren */}
                  <div className="shrink-0 flex flex-row lg:flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => startEditing(activeTask)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                    >
                      <Edit3 className="w-4 h-4 text-[#dfb871]" />
                      <span>Bearbeiten</span>
                    </button>

                    {/* ANFORDERUNG 2: ROTER BUTTON ZUM BEENDEN / DEAKTIVIEREN */}
                    <button
                      type="button"
                      onClick={() => setShowDeleteModal(true)}
                      className="px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 font-bold text-xs border border-rose-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                    >
                      <Trash2 className="w-4 h-4 text-rose-400" />
                      <span>Aufgabe beenden / deaktivieren</span>
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 text-center space-y-3">
                <h4 className="text-base font-bold text-white font-display">
                  Keine aktive Hausaufgabe für diesen Kurs
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Erstellen Sie über das nachfolgende Formular eine verbindliche Dozenten-Aufgabe für diesen Lehrgang.
                </p>
              </div>
            )}
          </section>

          {/* FORMULAR: AUFGABE ERSTELLEN / VERÖFFENTLICHEN */}
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
                  
                  {/* FELD 1: ZIELKURS (ANFORDERUNG 2: FORMULAR-DROPDOWN FIX MIT COURSES) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      1. Zielkurs / Kohorte *
                    </label>
                    <div className="relative">
                      <div
                        onClick={() => {
                          if (hasCourses) {
                            setIsCourseDropdownOpen(!isCourseDropdownOpen);
                          }
                        }}
                        className={`bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-100 flex items-center justify-between cursor-pointer transition-all ${
                          formErrors.course
                            ? 'border-rose-500'
                            : 'border-slate-800 hover:border-amber-500/50'
                        } ${!hasCourses ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="truncate font-medium">
                          {COURSES.find(c => c.id.toLowerCase() === formCourseId.toLowerCase())?.name ||
                           validCourses.find(c => c.id.toLowerCase() === formCourseId.toLowerCase())?.name ||
                           selectedCourseObj?.name ||
                           formCourseId ||
                           'Bitte Kurs wählen'}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${isCourseDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
                      </div>

                      {isCourseDropdownOpen && hasCourses && (
                        <div className="absolute z-50 mt-2 w-full bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-xl p-1.5 max-h-60 overflow-y-auto">
                          {validCourses.map((c) => {
                            const isSelected = formCourseId.toLowerCase() === c.id.toLowerCase();
                            return (
                              <div
                                key={c.id}
                                onClick={() => {
                                  setFormCourseId(c.id);
                                  setSelectedCourseId(c.id);
                                  setIsCourseDropdownOpen(false);
                                }}
                                className={`px-3 py-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? 'bg-amber-500/15 text-amber-300 font-bold'
                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                              >
                                <span className="truncate">{c.name}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-2" />}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {formErrors.course && (
                      <p className="text-[11px] text-rose-400">{formErrors.course}</p>
                    )}
                  </div>

                  {/* FELD 2: DOZENT */}
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

                  {/* FELD 3: SACHGEBIET */}
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
                  
                  {/* FELD 4: ZIEL-LERNFORMAT */}
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

                  {/* FELD 5: AUFGABENTITEL */}
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

                  {/* FELD 6: DOZENTEN-ANWEISUNG */}
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

              {/* SUBMIT BUTTON */}
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

        </div>
      )}

      {/* ---------------------------------------------------------------------
          MODAL: NEUEN KURS IN SUPABASE ANLEGEN
          --------------------------------------------------------------------- */}
      {showCreateCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in overflow-y-auto">
          <div className="w-full max-w-lg bg-slate-950 border border-[#dfb871]/40 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl relative bento-glass my-8">
            
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
              <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
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

      {/* ---------------------------------------------------------------------
          MODAL: AUFGABE ZURÜCKZIEHEN / BEENDEN
          --------------------------------------------------------------------- */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-slate-100 space-y-5 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-display text-white">Aufgabe zurückziehen?</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Möchten Sie die aktive Aufgabe für diesen Kurs wirklich beenden? Die Teilnehmer sehen diese Aufgabe danach nicht mehr.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeactivatingTask}
                className="px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleDeactivateTask}
                disabled={isDeactivatingTask}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-all shadow-lg flex items-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {isDeactivatingTask ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Wird beendet...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    <span>Ja, Aufgabe beenden</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------
          MODAL: PASSWORT MANUELL ZURÜCKSETZEN
          --------------------------------------------------------------------- */}
      {resetStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md bg-slate-950 border border-[#dfb871]/40 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl relative bento-glass">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#dfb871]/15 text-[#dfb871] rounded-xl border border-[#dfb871]/30">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">Passwort zurücksetzen</h3>
                  <p className="text-xs text-slate-400">Für Schüler: <strong className="text-white">{resetStudentModal.name}</strong></p>
                </div>
              </div>
              <button
                onClick={() => setResetStudentModal(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                Neues Passwort vergeben:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={adminNewPassword}
                  onChange={(e) => setAdminNewPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-[#dfb871] font-mono font-bold focus:outline-none focus:border-[#dfb871]"
                />
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(adminNewPassword);
                    setCopiedPassword(true);
                    setTimeout(() => setCopiedPassword(false), 2000);
                  }}
                  className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors"
                  title="Passwort kopieren"
                >
                  {copiedPassword ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setResetStudentModal(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleConfirmResetPassword}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#dfb871] to-[#c8a97e] text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
              >
                Passwort speichern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------
          MODAL: SCHÜLER LÖSCHEN CONFIRMATION
          --------------------------------------------------------------------- */}
      {studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-md bg-slate-950 border border-rose-500/40 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl relative bento-glass">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 bg-rose-500/15 text-rose-400 rounded-2xl border border-rose-500/30">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">Schüler wirklich löschen?</h3>
                <p className="text-xs text-rose-300">Dieser Vorgang kann nicht rückgängig gemacht werden.</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Möchten Sie den Schüler <strong className="text-white">{studentToDelete.name}</strong> (Kurs-Code: <span className="text-[#dfb871] font-mono font-bold">{studentToDelete.courseId}</span>) endgültig aus der Datenbank entfernen?
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStudentToDelete(null)}
                disabled={isDeletingStudent}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleConfirmDeleteStudent}
                disabled={isDeletingStudent}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                {isDeletingStudent ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Lösche...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    <span>Endgültig löschen</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------
          SLIDEOVER DRAWER: SCHÜLER-DETAILS
          --------------------------------------------------------------------- */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xl bg-slate-950 border-l border-white/10 h-full overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl relative">
            
            {/* Header Drawer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#dfb871] to-[#9a7836] text-slate-950 font-bold flex items-center justify-center font-display text-base shadow-md">
                  {selectedStudent.avatarInitials || (selectedStudent.name ? selectedStudent.name.slice(0, 2).toUpperCase() : 'S')}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">{selectedStudent.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Kurs-Code: <span className="text-[#dfb871] font-bold">{(selectedStudent.courseId || selectedStudent.invitationCode || '–').toUpperCase()}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lernfortschritt & Status */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Gesamter Lernfortschritt</span>
                <span className="text-base font-bold text-[#dfb871] font-mono">{selectedStudent.progressPercent || 0} % Gelernt</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-white/5">
                <div 
                  className="bg-gradient-to-r from-[#dfb871] to-[#e4bf7b] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, selectedStudent.progressPercent || 0))}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Zuletzt aktiv:</span>
                <strong className="text-white font-mono">{formatGermanDate(selectedStudent.lastActive)}</strong>
              </div>
            </div>

            {/* Sachgebiete Übersicht */}
            {selectedStudent.categoryPerformance && selectedStudent.categoryPerformance.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
                  Sachgebiete-Leistung (§ 34a GewO)
                </h4>
                <div className="space-y-2">
                  {selectedStudent.categoryPerformance.map((cat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-slate-300 truncate max-w-[260px]">{cat.category}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-slate-400">{cat.questionsAnswered} Fragen</span>
                        <span className={`font-mono font-bold ${cat.percentage >= 65 ? 'text-emerald-400' : cat.percentage >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                          {cat.percentage} %
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Aktionen im Drawer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setResetStudentModal(selectedStudent);
                  setAdminNewPassword('NeuesPasswort123');
                }}
                className="px-4 py-2.5 rounded-xl bg-[#dfb871]/15 hover:bg-[#dfb871]/25 border border-[#dfb871]/30 text-[#dfb871] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <KeyRound className="w-4 h-4" />
                <span>Passwort ändern</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setStudentToDelete(selectedStudent);
                }}
                className="px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Schüler löschen</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
