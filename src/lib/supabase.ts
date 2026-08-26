/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@supabase/supabase-js';
import { StudentDetail } from '../types/auth.ts';

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
    courseId: r.course_code || r.course_id || r.courseId || 'MOREDU34a',
    courseName: 'Aktueller Kurs: Sachkunde § 34a',
    progressPercent: typeof r.progress_percent === 'number' ? r.progress_percent : (typeof r.progressPercent === 'number' ? r.progressPercent : 0),
    successRatePercent: typeof r.success_rate_percent === 'number' ? r.success_rate_percent : (typeof r.successRatePercent === 'number' ? r.successRatePercent : 0),
    status: r.status || 'im_zeitplan',
    lastActive: r.last_active || r.lastActive || 'Gerade eben',
    maxStreak: typeof r.max_streak === 'number' ? r.max_streak : (typeof r.maxStreak === 'number' ? r.maxStreak : (typeof r.streak === 'number' ? r.streak : 0)),
    registeredAt: r.registered_at || r.registeredAt || new Date().toLocaleDateString('de-DE'),
    invitationCode: r.course_code || r.invitation_code || 'MOREDU34a',
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
    const courseCode = data.courseCode || 'MOREDU34a';

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
 * Delete a student from Supabase `students` table
 */
export async function deleteStudentFromSupabase(
  studentId: string
): Promise<{ success: boolean; error: string | null }> {
  try {
    const { error } = await supabase
      .from('students')
      .delete()
      .eq('id', studentId);

    if (error) {
      console.error('Error deleting student from Supabase:', error);
      return { success: false, error: error.message };
    }

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

