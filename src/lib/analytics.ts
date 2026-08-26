/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Central EdTech & Telemetry Tracking System
 * Directly synchronizes user question attempts and exam sessions with Supabase tables
 * "question_attempts" and "exam_sessions".
 */

import { supabase } from './supabase.ts';

export type ExamAnalyticsMode = 'exam' | 'flashcards' | 'riddle' | 'scenario' | 'video' | string;

export interface QuestionAttemptData {
  user_id?: string | number;
  session_id?: string;
  mode: ExamAnalyticsMode;
  question_id: string | number;
  topic?: string;
  category?: string;
  selected_option_id?: string | number | null;
  selected_option_ids?: (string | number)[];
  correct_option_id?: string | number | null;
  correct_option_ids?: (string | number)[];
  is_correct: boolean;
  time_spent_ms: number;
  time_to_first_click_ms?: number;
  switched_answers?: boolean;
  decision_path?: (string | number)[] | string | Record<string, any>;
  metadata?: Record<string, any>;
}

export interface ExamSessionData {
  user_id?: string | number;
  session_id?: string;
  mode?: string;
  exam_type?: string;
  total_questions: number;
  correct_count: number;
  incorrect_count?: number;
  score_percent: number;
  points_earned?: number;
  max_points?: number;
  passed: boolean;
  time_spent_seconds?: number;
  category_breakdown?: any;
  metadata?: Record<string, any>;
}

// Active session storage per mode
const activeSessions: Record<string, string> = {};

/**
 * Triggers the visual mobile & desktop feedback toast when Supabase successfully records data
 */
export function triggerSaveIndicator(message: string = 'Gespeichert'): void {
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('supabase-sync-success', {
          detail: { message, timestamp: Date.now() }
        })
      );
    }
  } catch {
    // Ignore in non-browser environments
  }
}

/**
 * Generates a unique session ID for a learning or exam run
 */
export function generateSessionId(mode: string): string {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 9);
  const cleanMode = mode.replace(/[^a-zA-Z0-9_-]/g, '_');
  const sessionId = `sess_${cleanMode}_${timestamp}_${randomSuffix}`;
  activeSessions[mode] = sessionId;
  return sessionId;
}

/**
 * Gets or creates the current active session ID for a mode
 */
export function getOrCreateSessionId(mode: string): string {
  if (!activeSessions[mode]) {
    return generateSessionId(mode);
  }
  return activeSessions[mode];
}

/**
 * Retrieves the current authenticated user ID, prioritizing active user, or default test user '13'
 */
export function getActiveUserId(): string {
  try {
    const localUser = localStorage.getItem('sachkunde_34a_current_user');
    if (localUser) {
      const parsed = JSON.parse(localUser);
      if (parsed?.id) return String(parsed.id);
    }

    const sessionUser = sessionStorage.getItem('sachkunde_34a_current_user');
    if (sessionUser) {
      const parsed = JSON.parse(sessionUser);
      if (parsed?.id) return String(parsed.id);
    }
  } catch {
    // Ignore parse errors
  }

  return '13'; // Standard test user ID as requested
}

/**
 * Robust, direct logger for Supabase `question_attempts`.
 * Inserts the exact specified schema:
 * { user_id, question_id, topic, mode, is_correct, time_spent_ms, switched_answers }
 */
export async function logQuestionAttempt(attempt: QuestionAttemptData): Promise<boolean> {
  try {
    const userId = String(attempt.user_id || getActiveUserId() || '13');
    const topic = String(attempt.topic || attempt.category || 'Sachkunde § 34a');
    const timeSpent = Math.max(100, Math.round(attempt.time_spent_ms || 1500));
    const switched = Boolean(attempt.switched_answers);
    const questionId = String(attempt.question_id || 'q_item');
    const mode = attempt.mode || 'exam';
    const isCorrect = Boolean(attempt.is_correct);

    // Primary exact payload
    const primaryPayload = {
      user_id: userId,
      question_id: questionId,
      topic: topic,
      mode: mode,
      is_correct: isCorrect,
      time_spent_ms: timeSpent,
      switched_answers: switched
    };

    // Buffer in localStorage for offline & testing inspector
    try {
      const existingRecentRaw = localStorage.getItem('sachkunde_34a_recent_attempts');
      const existingRecent: any[] = existingRecentRaw ? JSON.parse(existingRecentRaw) : [];
      existingRecent.unshift({
        ...primaryPayload,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('sachkunde_34a_recent_attempts', JSON.stringify(existingRecent.slice(0, 100)));
    } catch {
      // Ignore localStorage limits
    }

    // Direct Supabase insert
    const { error } = await supabase
      .from('question_attempts')
      .insert([primaryPayload]);

    if (!error) {
      // Visual feedback toast on success
      triggerSaveIndicator('Antwort gespeichert');
      return true;
    } else {
      console.warn('[Supabase question_attempts primary insert warning]:', error.message || error);

      // Fallback 1: in case user_id is integer in Postgres DDL
      const numUserId = parseInt(userId, 10);
      if (!isNaN(numUserId)) {
        const altPayload = {
          ...primaryPayload,
          user_id: numUserId
        };
        const { error: altError } = await supabase
          .from('question_attempts')
          .insert([altPayload]);

        if (!altError) {
          triggerSaveIndicator('Antwort gespeichert');
          return true;
        }
      }

      // Fallback 2: in case columns are camelCase
      const camelPayload = {
        userId: userId,
        questionId: questionId,
        topic: topic,
        mode: mode,
        isCorrect: isCorrect,
        timeSpentMs: timeSpent,
        switchedAnswers: switched
      };
      const { error: camelError } = await (supabase
        .from('question_attempts')
        .insert([camelPayload]) as any);

      if (!camelError) {
        triggerSaveIndicator('Antwort gespeichert');
        return true;
      }
    }
  } catch (err) {
    console.error('[Supabase question_attempts exception]:', err);
  }

  return false;
}

/**
 * Standard logExamSession:
 * Synchronizes completed exam sessions into Supabase `exam_sessions` table.
 */
export async function logExamSession(session: ExamSessionData): Promise<boolean> {
  try {
    const userId = String(session.user_id || getActiveUserId() || '13');
    const sessionId = session.session_id || getOrCreateSessionId(session.mode || 'exam');
    const totalQ = session.total_questions || 1;
    const correctC = session.correct_count || 0;
    const incorrectC = session.incorrect_count !== undefined ? session.incorrect_count : Math.max(0, totalQ - correctC);
    const scorePct = session.score_percent !== undefined ? session.score_percent : Math.round((correctC / totalQ) * 100);
    const passed = session.passed !== undefined ? session.passed : (scorePct >= 50);
    const timeSpent = session.time_spent_seconds || 0;

    const primaryPayload = {
      user_id: userId,
      session_id: sessionId,
      mode: session.mode || 'exam',
      exam_type: session.exam_type || 'Schriftliche Prüfung',
      total_questions: totalQ,
      correct_count: correctC,
      incorrect_count: incorrectC,
      score_percent: scorePct,
      points_earned: session.points_earned !== undefined ? session.points_earned : correctC,
      max_points: session.max_points !== undefined ? session.max_points : totalQ,
      passed: passed,
      time_spent_seconds: timeSpent
    };

    // Buffer in localStorage
    try {
      const existingRecentRaw = localStorage.getItem('sachkunde_34a_recent_exam_sessions');
      const existingRecent: any[] = existingRecentRaw ? JSON.parse(existingRecentRaw) : [];
      existingRecent.unshift({ ...primaryPayload, created_at: new Date().toISOString() });
      localStorage.setItem('sachkunde_34a_recent_exam_sessions', JSON.stringify(existingRecent.slice(0, 50)));
    } catch {
      // Ignore
    }

    const { error } = await supabase
      .from('exam_sessions')
      .insert([primaryPayload]);

    if (!error) {
      triggerSaveIndicator('Prüfungssitzung gespeichert');
      return true;
    } else {
      console.warn('[Supabase exam_sessions primary insert warning]:', error.message || error);

      // Fallback: minimal schema
      const minimalPayload = {
        user_id: userId,
        session_id: sessionId,
        mode: session.mode || 'exam',
        total_questions: totalQ,
        correct_count: correctC,
        score_percent: scorePct,
        passed: passed
      };
      const { error: minError } = await supabase
        .from('exam_sessions')
        .insert([minimalPayload]);

      if (!minError) {
        triggerSaveIndicator('Prüfungssitzung gespeichert');
        return true;
      }
    }
  } catch (err) {
    console.error('[Supabase exam_sessions exception]:', err);
  }

  return false;
}

/**
 * Backward compatibility alias for trackAttempt
 */
export const trackAttempt = logQuestionAttempt;

/**
 * Lightweight Interaction Tracker Class for UI Components
 * Accurately tracks total duration (ms), hesitation (time_to_first_click), and switching uncertainty.
 */
export class InteractionTracker {
  private startTime: number = Date.now();
  private firstClickTime: number | null = null;
  private clickCount: number = 0;
  private previousSelectionKey: string | null = null;
  private switched: boolean = false;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.startTime = Date.now();
    this.firstClickTime = null;
    this.clickCount = 0;
    this.previousSelectionKey = null;
    this.switched = false;
  }

  public recordInteraction(currentSelectionSummary?: any): void {
    const now = Date.now();
    if (this.firstClickTime === null) {
      this.firstClickTime = Math.max(1, now - this.startTime);
    }
    this.clickCount++;

    if (currentSelectionSummary !== undefined) {
      const key = JSON.stringify(currentSelectionSummary);
      if (this.previousSelectionKey !== null && this.previousSelectionKey !== key) {
        this.switched = true;
      }
      this.previousSelectionKey = key;
    }
  }

  public getMetrics(): {
    time_spent_ms: number;
    time_to_first_click_ms: number;
    switched_answers: boolean;
  } {
    const now = Date.now();
    const totalTime = Math.max(100, now - this.startTime);
    const firstClick = this.firstClickTime !== null ? this.firstClickTime : totalTime;
    const hasSwitched = this.switched || this.clickCount > 1;

    return {
      time_spent_ms: totalTime,
      time_to_first_click_ms: firstClick,
      switched_answers: hasSwitched
    };
  }
}
