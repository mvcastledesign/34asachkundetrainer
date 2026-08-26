/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Central EdTech & Psychometric Diagnostic Tracking System
 * Logs detailed learner behavior and cognitive patterns to Supabase `question_attempts` and `exam_sessions` tables.
 */

import { supabase } from './supabase.ts';

export type ExamAnalyticsMode = 'exam' | 'flashcards' | 'riddle' | 'scenario' | 'video' | string;

export interface QuestionAttemptData {
  user_id?: string;
  session_id?: string;
  mode: ExamAnalyticsMode;
  question_id: string | number;
  topic: string;
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
  user_id?: string;
  session_id?: string;
  mode?: string;
  exam_type?: string;
  total_questions: number;
  correct_count: number;
  incorrect_count: number;
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
 * Retrieves the current authenticated user ID or fallback
 */
export function getActiveUserId(): string {
  try {
    // 1. Check current logged in user from localStorage
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

  return 'anonymous_student';
}

/**
 * Standard logQuestionAttempt:
 * Non-blocking, resilient attempt logger for Supabase `question_attempts`.
 * Captures all critical EdTech and diagnostic telemetry without interfering with the user experience.
 */
export function logQuestionAttempt(attempt: QuestionAttemptData): void {
  // Execute completely asynchronously in background
  setTimeout(async () => {
    try {
      const userId = String(attempt.user_id || getActiveUserId());
      const sessionId = attempt.session_id || getOrCreateSessionId(attempt.mode);
      const timeSpent = Math.max(0, Math.round(attempt.time_spent_ms || 0));
      const timeToFirstClick = typeof attempt.time_to_first_click_ms === 'number' 
        ? Math.max(0, Math.round(attempt.time_to_first_click_ms))
        : timeSpent;
      const switched = Boolean(attempt.switched_answers);
      const nowIso = new Date().toISOString();

      // Normalize single vs array option IDs
      let singleSelected: string | number | null = null;
      let arraySelected: (string | number)[] = [];

      if (attempt.selected_option_id !== undefined && attempt.selected_option_id !== null) {
        singleSelected = attempt.selected_option_id;
        arraySelected = attempt.selected_option_ids || [attempt.selected_option_id];
      } else if (attempt.selected_option_ids && attempt.selected_option_ids.length > 0) {
        singleSelected = attempt.selected_option_ids[0];
        arraySelected = attempt.selected_option_ids;
      }

      let singleCorrect: string | number | null = null;
      let arrayCorrect: (string | number)[] = [];

      if (attempt.correct_option_id !== undefined && attempt.correct_option_id !== null) {
        singleCorrect = attempt.correct_option_id;
        arrayCorrect = attempt.correct_option_ids || [attempt.correct_option_id];
      } else if (attempt.correct_option_ids && attempt.correct_option_ids.length > 0) {
        singleCorrect = attempt.correct_option_ids[0];
        arrayCorrect = attempt.correct_option_ids;
      }

      const decisionPath = attempt.decision_path ?? [];

      // 1. Full rich payload (handles schemas with single option or array columns)
      const primaryPayload: Record<string, any> = {
        user_id: userId,
        session_id: sessionId,
        mode: attempt.mode,
        question_id: String(attempt.question_id),
        topic: attempt.topic || 'Allgemein',
        selected_option_id: singleSelected !== null ? String(singleSelected) : null,
        selected_option_ids: arraySelected,
        correct_option_id: singleCorrect !== null ? String(singleCorrect) : null,
        correct_option_ids: arrayCorrect,
        is_correct: attempt.is_correct,
        time_spent_ms: timeSpent,
        time_to_first_click_ms: timeToFirstClick,
        switched_answers: switched,
        decision_path: decisionPath,
        created_at: nowIso
      };

      // Buffer in localStorage for immediate inspection & offline sync
      try {
        const existingRecentRaw = localStorage.getItem('sachkunde_34a_recent_attempts');
        const existingRecent: any[] = existingRecentRaw ? JSON.parse(existingRecentRaw) : [];
        existingRecent.unshift({ ...primaryPayload, metadata: attempt.metadata });
        // Keep last 100 attempts locally
        localStorage.setItem('sachkunde_34a_recent_attempts', JSON.stringify(existingRecent.slice(0, 100)));
      } catch {
        // localStorage quota exceeded or disabled
      }

      // 2. Fire Supabase Insert with primary payload
      const { error } = await supabase
        .from('question_attempts')
        .insert([primaryPayload]);

      if (error) {
        // Fallback 1: Try minimal single-option schema (if array columns don't exist in the DB table)
        const minimalSnakePayload = {
          user_id: userId,
          session_id: sessionId,
          mode: attempt.mode,
          question_id: String(attempt.question_id),
          topic: attempt.topic || 'Allgemein',
          selected_option_id: singleSelected !== null ? String(singleSelected) : null,
          correct_option_id: singleCorrect !== null ? String(singleCorrect) : null,
          is_correct: attempt.is_correct,
          time_spent_ms: timeSpent,
          switched_answers: switched,
          created_at: nowIso
        };

        const { error: fallbackError } = await supabase
          .from('question_attempts')
          .insert([minimalSnakePayload]);

        if (fallbackError) {
          // Fallback 2: Try camelCase columns if Supabase was created with camelCase DDL
          const camelPayload = {
            userId: userId,
            sessionId: sessionId,
            mode: attempt.mode,
            questionId: String(attempt.question_id),
            topic: attempt.topic || 'Allgemein',
            selectedOptionId: singleSelected !== null ? String(singleSelected) : null,
            correctOptionId: singleCorrect !== null ? String(singleCorrect) : null,
            isCorrect: attempt.is_correct,
            timeSpentMs: timeSpent,
            switchedAnswers: switched,
            createdAt: nowIso
          };

          await (supabase
            .from('question_attempts')
            .insert([camelPayload]) as any);
        }
      }
    } catch (err) {
      // Completely resilient - never crash user UI on network hiccup
      console.warn('[Analytics] Notice logging attempt to Supabase:', err);
    }
  }, 0);
}

/**
 * Standard logExamSession:
 * Non-blocking, resilient logger for finished exam sessions to Supabase `exam_sessions` table.
 */
export function logExamSession(session: ExamSessionData): void {
  setTimeout(async () => {
    try {
      const userId = String(session.user_id || getActiveUserId());
      const sessionId = session.session_id || getOrCreateSessionId(session.mode || 'exam');
      const nowIso = new Date().toISOString();

      const primaryPayload: Record<string, any> = {
        user_id: userId,
        session_id: sessionId,
        mode: session.mode || 'exam',
        exam_type: session.exam_type || 'Schriftliche Prüfung',
        total_questions: session.total_questions,
        correct_count: session.correct_count,
        incorrect_count: session.incorrect_count,
        score_percent: session.score_percent,
        points_earned: session.points_earned !== undefined ? session.points_earned : session.correct_count,
        max_points: session.max_points !== undefined ? session.max_points : session.total_questions,
        passed: session.passed,
        time_spent_seconds: session.time_spent_seconds || 0,
        category_breakdown: session.category_breakdown || null,
        created_at: nowIso
      };

      // Also store in localStorage buffer
      try {
        const existingRecentRaw = localStorage.getItem('sachkunde_34a_recent_exam_sessions');
        const existingRecent: any[] = existingRecentRaw ? JSON.parse(existingRecentRaw) : [];
        existingRecent.unshift({ ...primaryPayload, metadata: session.metadata });
        localStorage.setItem('sachkunde_34a_recent_exam_sessions', JSON.stringify(existingRecent.slice(0, 50)));
      } catch {
        // Ignore quota limits
      }

      // 1. Insert into Supabase `exam_sessions` table
      const { error } = await supabase
        .from('exam_sessions')
        .insert([primaryPayload]);

      if (error) {
        // Fallback 1: minimal snake_case
        const minimalPayload = {
          user_id: userId,
          session_id: sessionId,
          mode: session.mode || 'exam',
          total_questions: session.total_questions,
          correct_count: session.correct_count,
          score_percent: session.score_percent,
          passed: session.passed,
          created_at: nowIso
        };
        const { error: fallbackError } = await supabase
          .from('exam_sessions')
          .insert([minimalPayload]);

        if (fallbackError) {
          // Fallback 2: camelCase
          const camelPayload = {
            userId: userId,
            sessionId: sessionId,
            mode: session.mode || 'exam',
            examType: session.exam_type || 'Schriftliche Prüfung',
            totalQuestions: session.total_questions,
            correctCount: session.correct_count,
            incorrectCount: session.incorrect_count,
            scorePercent: session.score_percent,
            pointsEarned: session.points_earned !== undefined ? session.points_earned : session.correct_count,
            maxPoints: session.max_points !== undefined ? session.max_points : session.total_questions,
            passed: session.passed,
            createdAt: nowIso
          };
          await (supabase
            .from('exam_sessions')
            .insert([camelPayload]) as any);
        }
      }
    } catch (err) {
      console.warn('[Analytics] Notice logging exam session to Supabase:', err);
    }
  }, 0);
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
    const totalTime = Math.max(50, now - this.startTime);
    const firstClick = this.firstClickTime !== null ? this.firstClickTime : totalTime;
    const hasSwitched = this.switched || this.clickCount > 1;

    return {
      time_spent_ms: totalTime,
      time_to_first_click_ms: firstClick,
      switched_answers: hasSwitched
    };
  }
}
