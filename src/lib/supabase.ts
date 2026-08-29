/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';
import { StudentDetail } from '../types/auth.ts';
import { WrittenQuestion } from '../types.ts';

const SUPABASE_URL = "https://tfkwxkpbnklwauljauta.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRma3d4a3Bibmtsd2F1bGphdXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NTQ1OTAsImV4cCI6MjEwMDIzMDU5MH0.i1-YXijqWsG6wfY550_svsPE-7hrTZe7m_dlgmTM87s";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Maps Supabase DB row (handles both snake_case and camelCase columns) to StudentDetail
 */
export function mapRowToStudentDetail(r: any): StudentDetail {
  const vorname = r.first_name || r.vorname || '';
  const nachname = r.last_name || r.nachname || '';
  const fullName = r.name || (vorname && nachname ? `${vorname} ${nachname}` : vorname || nachname || 'Schüler');
  const initials = r.avatar_initials || r.avatarInitials || `${vorname[0] || ''}${nachname[0] || ''}`.toUpperCase() || 'S';

  return {
    id: String(r.id),
    name: fullName,
    vorname,
    nachname,
    email: r.email || undefined,
    password: r.password || '',
    securityQuestion: r.security_question || r.securityQuestion || '',
    securityAnswer: r.security_answer || r.securityAnswer || '',
    avatarInitials: initials,
    courseId: r.course_code || r.course_id || r.courseId || '',
    courseName: 'Aktueller Kurs: Sachkunde § 34a',
    progressPercent: typeof r.progress_percent === 'number' ? r.progress_percent : (typeof r.progressPercent === 'number' ? r.progressPercent : 0),
    successRatePercent: typeof r.success_rate_percent === 'number' ? r.success_rate_percent : (typeof r.successRatePercent === 'number' ? r.successRatePercent : 0),
    status: r.status || 'im_zeitplan',
    lastActive: r.last_active || r.lastActive || 'Gerade eben',
    maxStreak: typeof r.max_streak === 'number' ? r.max_streak : (typeof r.maxStreak === 'number' ? r.maxStreak : (typeof r.streak === 'number' ? r.streak : 0)),
    registeredAt: r.registered_at || r.registeredAt || new Date().toLocaleDateString('de-DE'),
    invitationCode: r.course_code || r.invitation_code || '',
    categoryPerformance: r.category_performance || r.categoryPerformance || [
      { category: 'Recht der öffentlichen Sicherheit', percentage: 0, questionsAnswered: 0 },
      { category: 'Gewerberecht (GewO / BewachV)', percentage: 0, questionsAnswered: 0 },
      { category: 'Bürgerliches Gesetzbuch (BGB)', percentage: 0, questionsAnswered: 0 },
      { category: 'Straf- und Strafverfahrensrecht', percentage: 0, questionsAnswered: 0 },
      { category: 'Umgang mit Menschen', percentage: 0, questionsAnswered: 0 },
      { category: 'Unfallverhütungsvorschriften', percentage: 0, questionsAnswered: 0 },
      { category: 'Sicherheitstechnik', percentage: 0, questionsAnswered: 0 },
      { category: 'Datenschutzrecht', percentage: 0, questionsAnswered: 0 }
    ],
    examHistory: r.exam_history || r.examHistory || [],
    questionProgress: r.question_progress || r.questionProgress || r.raw_progress || undefined
  };
}

/**
 * Fetch all students from Supabase `students` table
 */
export async function fetchStudentsFromSupabase(): Promise<StudentDetail[]> {
  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Error fetching students from Supabase:', error);
      return [];
    }

    if (!data) return [];
    return data.map(mapRowToStudentDetail);
  } catch (err) {
    console.error('Failed to fetch students from Supabase:', err);
    return [];
  }
}

/**
 * Create a new student in Supabase
 */
export async function createStudentInSupabase(data: {
  vorname: string;
  nachname: string;
  password: string;
  securityQuestion: string;
  securityAnswer: string;
  courseCode?: string;
}): Promise<{ student: StudentDetail | null; error: string | null }> {
  try {
    const firstName = data.vorname.trim();
    const lastName = data.nachname.trim();
    const fullName = `${firstName} ${lastName}`;
    const courseCode = data.courseCode ? data.courseCode.trim().toUpperCase() : '';

    const insertPayload = {
      first_name: firstName,
      last_name: lastName,
      name: fullName,
      password: data.password,
      security_question: data.securityQuestion,
      security_answer: data.securityAnswer.trim().toLowerCase(),
      course_code: courseCode,
      progress_percent: 0,
      success_rate_percent: 0,
      status: 'im_zeitplan',
      last_active: 'Gerade eben',
      registered_at: new Date().toLocaleDateString('de-DE')
    };

    const { data: insertedData, error } = await supabase
      .from('students')
      .insert([insertPayload])
      .select();

    if (error) {
      console.error('Error inserting student into Supabase:', error);
      // Fallback payload if table expects camelCase columns instead of snake_case
      const fallbackPayload = {
        first_name: firstName,
        last_name: lastName,
        vorname: firstName,
        nachname: lastName,
        name: fullName,
        password: data.password,
        securityQuestion: data.securityQuestion,
        securityAnswer: data.securityAnswer.trim().toLowerCase(),
        security_question: data.securityQuestion,
        security_answer: data.securityAnswer.trim().toLowerCase(),
        course_code: courseCode,
        courseCode: courseCode,
        progressPercent: 0,
        successRatePercent: 0,
        status: 'im_zeitplan'
      };
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('students')
        .insert([fallbackPayload])
        .select();

      if (fallbackError) {
        return { student: null, error: error.message || fallbackError.message };
      }
      if (fallbackData && fallbackData.length > 0) {
        return { student: mapRowToStudentDetail(fallbackData[0]), error: null };
      }
    }

    if (insertedData && insertedData.length > 0) {
      return { student: mapRowToStudentDetail(insertedData[0]), error: null };
    }

    return { student: null, error: 'Keine Daten von Supabase zurückgegeben.' };
  } catch (err: any) {
    console.error('Failed to create student in Supabase:', err);
    return { student: null, error: err?.message || 'Netzwerkfehler' };
  }
}

/**
 * Clean up all local storage and session cache keys for a deleted student
 */
export function cleanupLocalStudentData(studentId: string): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const sId = String(studentId);

    // 1. Remove per-student stored metrics and progress
    localStorage.removeItem(`sachkunde_34a_progress_${sId}`);
    localStorage.removeItem(`sachkunde_34a_history_${sId}`);
    localStorage.removeItem(`sachkunde_34a_study_duration_${sId}`);

    // 2. Remove from active user storage if it was the deleted user
    const currentRaw = localStorage.getItem('sachkunde_34a_current_user');
    if (currentRaw) {
      try {
        const u = JSON.parse(currentRaw);
        if (u && (String(u.id) === sId || String(u.id) === studentId)) {
          localStorage.removeItem('sachkunde_34a_current_user');
        }
      } catch {}
    }

    const currentSessionRaw = sessionStorage.getItem('sachkunde_34a_current_user');
    if (currentSessionRaw) {
      try {
        const u = JSON.parse(currentSessionRaw);
        if (u && (String(u.id) === sId || String(u.id) === studentId)) {
          sessionStorage.removeItem('sachkunde_34a_current_user');
        }
      } catch {}
    }

    // 3. Clean any legacy or cached student arrays
    const arrayKeys = [
      'sachkunde_34a_registered_students',
      'sachkunde_students',
      'student_records',
      'sachkunde_users'
    ];

    arrayKeys.forEach(key => {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) {
            const filtered = list.filter((item: any) => item && String(item.id) !== sId);
            if (filtered.length === 0) {
              localStorage.removeItem(key);
            } else {
              localStorage.setItem(key, JSON.stringify(filtered));
            }
          }
        } catch {}
      }
    });
  } catch (err) {
    console.warn('Could not cleanup local student data:', err);
  }
}

/**
 * Delete a student from Supabase `students` table along with linked records
 */
export async function deleteStudentFromSupabase(
  studentId: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const sId = String(studentId);

    // 1. Delete associated exam_sessions and question_attempts first
    try {
      await supabase.from('exam_sessions').delete().eq('user_id', sId);
    } catch (err) {
      console.warn('Could not clean up exam_sessions for student:', err);
    }

    try {
      await supabase.from('question_attempts').delete().eq('user_id', sId);
    } catch (err) {
      console.warn('Could not clean up question_attempts for student:', err);
    }

    // 2. Delete student record from students table
    const { error } = await supabase
      .from('students')
      .delete()
      .eq('id', studentId);

    if (error) {
      console.error('Löschfehler Supabase:', error);
      return { success: false, error: error.message };
    }

    // 3. Clean up local browser cache
    cleanupLocalStudentData(studentId);

    return { success: true, error: null };
  } catch (err: any) {
    console.error('Failed to delete student from Supabase:', err);
    return { success: false, error: err?.message || 'Fehler beim Löschen des Schülers' };
  }
}

/**
 * Update student password in Supabase
 */
export async function updateStudentPasswordInSupabase(
  studentId: string,
  newPassword: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    // Try updating snake_case password field or password column
    const { error } = await supabase
      .from('students')
      .update({ password: newPassword })
      .eq('id', studentId);

    if (error) {
      console.error('Error updating password in Supabase:', error);
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: any) {
    console.error('Failed to update password in Supabase:', err);
    return { success: false, error: err?.message || 'Fehler beim Passwort-Reset' };
  }
}

/**
 * Update student progress & details in Supabase
 */
export async function updateStudentProgressInSupabase(
  studentId: string,
  progressData: {
    progressPercent?: number;
    successRatePercent?: number;
    status?: 'pruefungssicher' | 'im_zeitplan' | 'kritisch';
    lastActive?: string;
    categoryPerformance?: any[];
    examHistory?: any[];
    questionProgress?: any;
  }
): Promise<{ success: boolean; error: string | null }> {
  try {
    const nowIso = new Date().toISOString();
    console.log(`[Supabase Progress Update] Student ID: ${studentId}`, {
      progress_percent: progressData.progressPercent,
      success_rate_percent: progressData.successRatePercent,
      status: progressData.status,
      last_active: nowIso
    });

    // 1. Build clean snake_case payload
    const snakePayload: any = {
      last_active: nowIso
    };
    if (typeof progressData.progressPercent === 'number') {
      snakePayload.progress_percent = progressData.progressPercent;
    }
    if (typeof progressData.successRatePercent === 'number') {
      snakePayload.success_rate_percent = progressData.successRatePercent;
    }
    if (progressData.status) {
      snakePayload.status = progressData.status;
    }
    if (progressData.categoryPerformance) {
      snakePayload.category_performance = progressData.categoryPerformance;
    }
    if (progressData.examHistory) {
      snakePayload.exam_history = progressData.examHistory;
    }
    if (progressData.questionProgress) {
      snakePayload.question_progress = progressData.questionProgress;
    }

    // Direct Supabase update attempt
    const isNumeric = !isNaN(Number(studentId)) && studentId.trim() !== '';
    const queryId = isNumeric ? Number(studentId) : studentId;

    let { data, error } = await supabase
      .from('students')
      .update(snakePayload)
      .eq('id', queryId)
      .select();

    if (error) {
      console.error('Supabase Update Error:', error);

      // Fallback try with camelCase schema if database columns use camelCase
      const camelPayload: any = {
        lastActive: nowIso
      };
      if (typeof progressData.progressPercent === 'number') {
        camelPayload.progressPercent = progressData.progressPercent;
      }
      if (typeof progressData.successRatePercent === 'number') {
        camelPayload.successRatePercent = progressData.successRatePercent;
      }
      if (progressData.status) {
        camelPayload.status = progressData.status;
      }
      if (progressData.categoryPerformance) {
        camelPayload.categoryPerformance = progressData.categoryPerformance;
      }
      if (progressData.examHistory) {
        camelPayload.examHistory = progressData.examHistory;
      }

      const fallbackRes = await supabase
        .from('students')
        .update(camelPayload)
        .eq('id', queryId)
        .select();

      if (fallbackRes.error) {
        console.error('Supabase Update Error (fallback failed):', fallbackRes.error);
        return { success: false, error: fallbackRes.error.message };
      }
    } else {
      console.log(`[Supabase Progress Update Success] Updated student ${studentId}:`, data);
    }

    return { success: true, error: null };
  } catch (err: any) {
    console.error('Supabase Update Error (Exception):', err);
    return { success: false, error: err?.message || 'Unbekannter Fehler' };
  }
}

/**
 * Maps Supabase row to WrittenQuestion
 */
export function mapRowToWrittenQuestion(r: any): WrittenQuestion {
  let optionen: string[] = [];
  if (Array.isArray(r.optionen)) {
    optionen = r.optionen;
  } else if (Array.isArray(r.options)) {
    optionen = r.options;
  } else if (typeof r.optionen === 'string') {
    try { 
      const parsed = JSON.parse(r.optionen); 
      if (Array.isArray(parsed)) optionen = parsed;
      else optionen = [r.optionen];
    } catch { 
      optionen = [r.optionen]; 
    }
  } else if (typeof r.options === 'string') {
    try { 
      const parsed = JSON.parse(r.options); 
      if (Array.isArray(parsed)) optionen = parsed;
      else optionen = [r.options];
    } catch { 
      optionen = [r.options]; 
    }
  } else {
    const a = r.option_a || r.optionA || '';
    const b = r.option_b || r.optionB || '';
    const c = r.option_c || r.optionC || '';
    const d = r.option_d || r.optionD || '';
    if (a || b || c || d) {
      optionen = [a, b, c, d];
    }
  }

  // Ensure exactly 4 options
  while (optionen.length < 4) {
    optionen.push('');
  }

  let korrekteAntworten: number[] = [];
  const rawCorrect = r.korrekte_antworten ?? r.correct_answers ?? r.korrekteAntworten ?? r.correctAnswers;
  if (Array.isArray(rawCorrect)) {
    korrekteAntworten = rawCorrect.map(Number).filter(n => !isNaN(n));
  } else if (typeof rawCorrect === 'string') {
    try {
      const parsed = JSON.parse(rawCorrect);
      if (Array.isArray(parsed)) {
        korrekteAntworten = parsed.map(Number).filter(n => !isNaN(n));
      }
    } catch {
      if (rawCorrect.includes(',')) {
        korrekteAntworten = rawCorrect.split(',').map(s => {
          const trimmed = s.trim().toUpperCase();
          if (trimmed === 'A') return 0;
          if (trimmed === 'B') return 1;
          if (trimmed === 'C') return 2;
          if (trimmed === 'D') return 3;
          return Number(trimmed);
        }).filter(n => !isNaN(n));
      } else {
        const trimmed = rawCorrect.trim().toUpperCase();
        if (trimmed === 'A') korrekteAntworten = [0];
        else if (trimmed === 'B') korrekteAntworten = [1];
        else if (trimmed === 'C') korrekteAntworten = [2];
        else if (trimmed === 'D') korrekteAntworten = [3];
        else if (!isNaN(Number(trimmed))) korrekteAntworten = [Number(trimmed)];
      }
    }
  } else if (typeof rawCorrect === 'number') {
    korrekteAntworten = [rawCorrect];
  }

  if (korrekteAntworten.length === 0) {
    korrekteAntworten = [0];
  }

  const rawPunkte = typeof r.punkte === 'number' ? r.punkte : (typeof r.points === 'number' ? r.points : (korrekteAntworten.length === 2 ? 2 : 1));
  const punkte = rawPunkte === 2 ? 2 : 1;

  return {
    id: String(r.id),
    kategorie: r.kategorie || r.category || 'Recht der öffentlichen Sicherheit und Ordnung',
    frage: r.frage || r.question || '',
    optionen: optionen.slice(0, 4),
    korrekteAntworten: korrekteAntworten,
    punkte: punkte,
    erklaerung: r.erklaerung || r.explanation || r.begruendung || '',
    target_mode: r.target_mode || 'written_test'
  };
}

/**
 * Fetch all written test questions from Supabase (target_mode = 'written_test')
 */
export async function fetchWrittenQuestionsFromSupabase(): Promise<WrittenQuestion[]> {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('target_mode', 'written_test')
      .order('id', { ascending: true });

    if (error) {
      console.warn('Supabase fetch written questions notice:', error.message);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    return data.map(mapRowToWrittenQuestion);
  } catch (err) {
    console.error('Failed to fetch written questions from Supabase:', err);
    return [];
  }
}

/**
 * Saves or updates a written question in Supabase (target_mode = 'written_test')
 */
export async function saveWrittenQuestionToSupabase(
  q: Omit<WrittenQuestion, 'id'> & { id?: string }
): Promise<{ success: boolean; data?: WrittenQuestion; error?: string }> {
  try {
    const isEdit = Boolean(q.id && !q.id.startsWith('ihk-') && !q.id.startsWith('temp-') && !q.id.startsWith('local-'));
    
    const payload: any = {
      target_mode: 'written_test',
      kategorie: q.kategorie,
      frage: q.frage.trim(),
      optionen: q.optionen.map(opt => opt.trim()),
      korrekte_antworten: q.korrekteAntworten,
      punkte: q.punkte === 2 ? 2 : 1,
      erklaerung: q.erklaerung.trim()
    };

    if (isEdit && q.id) {
      const isNumericId = /^\d+$/.test(String(q.id));
      const targetId = isNumericId ? parseInt(String(q.id), 10) : q.id;

      const { data, error } = await supabase
        .from('questions')
        .update(payload)
        .eq('id', targetId)
        .select();

      if (error) {
        // Fallback with english keys
        const fallbackPayload = {
          target_mode: 'written_test',
          category: q.kategorie,
          question: q.frage.trim(),
          options: q.optionen.map(opt => opt.trim()),
          correct_answers: q.korrekteAntworten,
          points: q.punkte === 2 ? 2 : 1,
          explanation: q.erklaerung.trim()
        };
        const { data: fbData, error: fbError } = await supabase
          .from('questions')
          .update(fallbackPayload)
          .eq('id', targetId)
          .select();

        if (fbError) {
          return { success: false, error: error.message || fbError.message };
        }
        return { success: true, data: fbData && fbData[0] ? mapRowToWrittenQuestion(fbData[0]) : undefined };
      }

      return { success: true, data: data && data[0] ? mapRowToWrittenQuestion(data[0]) : undefined };
    } else {
      // Insert new question
      const { data, error } = await supabase
        .from('questions')
        .insert([payload])
        .select();

      if (error) {
        // Fallback with english keys
        const fallbackPayload = {
          target_mode: 'written_test',
          category: q.kategorie,
          question: q.frage.trim(),
          options: q.optionen.map(opt => opt.trim()),
          correct_answers: q.korrekteAntworten,
          points: q.punkte === 2 ? 2 : 1,
          explanation: q.erklaerung.trim()
        };
        const { data: fbData, error: fbError } = await supabase
          .from('questions')
          .insert([fallbackPayload])
          .select();

        if (fbError) {
          return { success: false, error: error.message || fbError.message };
        }
        return { success: true, data: fbData && fbData[0] ? mapRowToWrittenQuestion(fbData[0]) : undefined };
      }

      return { success: true, data: data && data[0] ? mapRowToWrittenQuestion(data[0]) : undefined };
    }
  } catch (err: any) {
    console.error('Error saving written question to Supabase:', err);
    return { success: false, error: err?.message || 'Speichern fehlgeschlagen' };
  }
}

/**
 * Delete a written question from Supabase
 */
export async function deleteWrittenQuestionFromSupabase(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const isNumericId = /^\d+$/.test(String(id));
    const targetId = isNumericId ? parseInt(String(id), 10) : id;

    const { error } = await supabase
      .from('questions')
      .delete()
      .eq('id', targetId);

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err: any) {
    console.error('Error deleting written question:', err);
    return { success: false, error: err?.message || 'Löschen fehlgeschlagen' };
  }
}

/**
 * Import a list of questions directly into Supabase (target_mode = 'written_test')
 */
export async function importWrittenQuestionsToSupabase(
  questionsList: WrittenQuestion[]
): Promise<{ success: boolean; count: number; error?: string }> {
  try {
    const payloads = questionsList.map(q => ({
      target_mode: 'written_test',
      kategorie: q.kategorie,
      frage: q.frage.trim(),
      optionen: q.optionen.map(opt => opt.trim()),
      korrekte_antworten: q.korrekteAntworten,
      punkte: q.punkte === 2 ? 2 : 1,
      erklaerung: q.erklaerung.trim()
    }));

    const { data, error } = await supabase
      .from('questions')
      .insert(payloads)
      .select();

    if (error) {
      // Fallback with english keys
      const fallbackPayloads = questionsList.map(q => ({
        target_mode: 'written_test',
        category: q.kategorie,
        question: q.frage.trim(),
        options: q.optionen.map(opt => opt.trim()),
        correct_answers: q.korrekteAntworten,
        points: q.punkte === 2 ? 2 : 1,
        explanation: q.erklaerung.trim()
      }));

      const { data: fbData, error: fbErr } = await supabase
        .from('questions')
        .insert(fallbackPayloads)
        .select();

      if (fbErr) {
        return { success: false, count: 0, error: error.message || fbErr.message };
      }
      return { success: true, count: fbData ? fbData.length : questionsList.length };
    }

    return { success: true, count: data ? data.length : questionsList.length };
  } catch (err: any) {
    console.error('Error batch importing written questions:', err);
    return { success: false, count: 0, error: err?.message || 'Import fehlgeschlagen' };
  }
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  maxStreak: number;
  date?: string;
  courseName?: string;
  avatarInitials?: string;
}

/**
 * Saves new max streak for a user in Supabase
 */
export async function saveUserMaxStreakInSupabase(
  studentId: string, 
  userName: string,
  newMaxStreak: number
): Promise<{ success: boolean; error: string | null }> {
  try {
    const isNumericId = /^\d+$/.test(String(studentId));
    const queryId = isNumericId ? parseInt(String(studentId), 10) : studentId;

    // 1. Try updating student in `students` table
    const { error: studentErr } = await supabase
      .from('students')
      .update({ 
        max_streak: newMaxStreak, 
        last_active: 'Gerade eben' 
      })
      .eq('id', queryId);

    if (studentErr) {
      // Try fallback to camelCase or streak
      await supabase
        .from('students')
        .update({ maxStreak: newMaxStreak })
        .eq('id', queryId);
    }

    // 2. Try upserting into dedicated `leaderboard` table if exists
    try {
      await supabase
        .from('leaderboard')
        .upsert({
          user_id: String(studentId),
          name: userName,
          max_streak: newMaxStreak,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id' });
    } catch {
      // ignore if leaderboard table is optional
    }

    return { success: true, error: null };
  } catch (err: any) {
    console.error('Error saving streak to Supabase:', err);
    return { success: false, error: err?.message || 'Speicherfehler' };
  }
}

/**
 * Fetches the Top 10 / Leaderboard list from Supabase
 */
export async function fetchLeaderboardFromSupabase(): Promise<LeaderboardEntry[]> {
  try {
    // First try fetching from dedicated leaderboard table
    const { data: lbData, error: lbErr } = await supabase
      .from('leaderboard')
      .select('*')
      .order('max_streak', { ascending: false })
      .limit(10);

    if (!lbErr && lbData && lbData.length > 0) {
      return lbData.map(r => ({
        id: String(r.user_id || r.id),
        name: r.name || 'Schüler',
        maxStreak: Number(r.max_streak || r.maxStreak || 0),
        date: r.updated_at ? new Date(r.updated_at).toLocaleDateString('de-DE') : 'Heute',
        avatarInitials: (r.name ? r.name.split(' ').map((n: string) => n[0]).join('') : 'S').slice(0, 2).toUpperCase()
      }));
    }

    // Fallback: Fetch from students table
    const { data: studentsData, error: stErr } = await supabase
      .from('students')
      .select('*');

    if (!stErr && studentsData && studentsData.length > 0) {
      const mapped = studentsData
        .map(mapRowToStudentDetail)
        .map(s => ({
          id: s.id,
          name: s.name,
          maxStreak: s.maxStreak || 0,
          date: s.registeredAt || 'Heute',
          courseName: s.courseName,
          avatarInitials: s.avatarInitials
        }))
        .sort((a, b) => b.maxStreak - a.maxStreak)
        .slice(0, 10);

      return mapped;
    }

    return [];
  } catch (err) {
    console.error('Error fetching leaderboard:', err);
    return [];
  }
}

