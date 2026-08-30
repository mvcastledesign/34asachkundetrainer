/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, UserProgressMap, KATEGORIEN } from '../types.ts';
import { CategoryPerformance } from '../types/auth.ts';
import { INITIAL_QUESTIONS } from '../initialQuestions.ts';

/**
 * Calculates category performance based on true learning progress across the entire question catalog.
 * Formula per category: percentage = Math.min(100, Math.round((stats.correct / totalCategoryQuestions) * 100))
 */
export function calculateCategoryPerformance(
  progressMap: UserProgressMap | Record<string, any> | undefined | null,
  questionList: Question[] = INITIAL_QUESTIONS
): CategoryPerformance[] {
  const activeQuestions = questionList && questionList.length > 0 ? questionList : INITIAL_QUESTIONS;
  const categoryStatsMap: Record<string, { answered: number; correct: number }> = {};

  KATEGORIEN.forEach(cat => {
    categoryStatsMap[cat] = { answered: 0, correct: 0 };
  });

  if (progressMap && typeof progressMap === 'object') {
    activeQuestions.forEach(q => {
      const p = progressMap[q.id];
      if (p && p.status !== 'neu') {
        const correct = typeof p.correctCount === 'number' ? p.correctCount : (p.status === 'gewusst' ? 1 : 0);
        const incorrect = typeof p.incorrectCount === 'number' ? p.incorrectCount : 0;
        const total = (typeof p.correctCount === 'number' && typeof p.incorrectCount === 'number')
          ? (p.correctCount + p.incorrectCount)
          : 1;

        // Match category safely with fallback for minor naming variations
        const matchedCat = KATEGORIEN.find(c => 
          c === q.kategorie || 
          q.kategorie?.toLowerCase().includes(c.toLowerCase()) || 
          c.toLowerCase().includes(q.kategorie?.toLowerCase())
        ) || q.kategorie;

        if (!categoryStatsMap[matchedCat]) {
          categoryStatsMap[matchedCat] = { answered: 0, correct: 0 };
        }
        categoryStatsMap[matchedCat].answered += total > 0 ? total : 1;
        const isCorrect = p.status === 'gewusst' || correct > 0;
        categoryStatsMap[matchedCat].correct += isCorrect ? 1 : 0;
      }
    });
  }

  return Object.entries(categoryStatsMap).map(([category, stats]) => {
    const totalCategoryQuestions = activeQuestions.filter(q => 
      q.kategorie === category || 
      q.kategorie?.toLowerCase().includes(category.toLowerCase()) || 
      category.toLowerCase().includes(q.kategorie?.toLowerCase())
    ).length;

    // Secure division by zero (fallback to 0%)
    const percentage = totalCategoryQuestions > 0
      ? Math.min(100, Math.round((stats.correct / totalCategoryQuestions) * 100))
      : 0;

    return {
      category,
      percentage,
      questionsAnswered: stats.answered
    };
  });
}
