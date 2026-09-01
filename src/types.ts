/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Schwierigkeit = 'Leicht' | 'Mittel' | 'Schwer';

export interface Question {
  id: string;
  kategorie: string;
  frage: string;
  antwort: string;
  schwierigkeit: Schwierigkeit;
}

export interface WrittenQuestionOptionTranslations {
  ru: string;
  en: string;
  ar: string;
  fa: string;
}

export interface WrittenQuestionOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  translations: WrittenQuestionOptionTranslations;
}

export interface WrittenQuestionLangTranslation {
  question: string;
  explanation: string;
}

export interface WrittenQuestionTranslations {
  ru: WrittenQuestionLangTranslation;
  en: WrittenQuestionLangTranslation;
  ar: WrittenQuestionLangTranslation;
  fa: WrittenQuestionLangTranslation;
}

export interface WrittenQuestion {
  id: string;
  kategorie: string;
  frage: string;
  optionen: string[]; // 4 options (text strings)
  options?: WrittenQuestionOption[]; // 4 options (rich objects with ru, en, ar, fa translations)
  korrekteAntworten: number[]; // indices of correct option(s) (0 to 3)
  punkte: number; // point value (1 or 2)
  erklaerung: string; // solution explanation
  translations?: WrittenQuestionTranslations; // translations for question and explanation
  target_mode?: string; // 'written_test'
}

export type Lernstatus = 'neu' | 'gewusst' | 'nicht_gewusst';

export interface UserProgressValue {
  status: Lernstatus;
  correctCount: number;
  incorrectCount: number;
  lastTested: number; // timestamp
  leitnerBox: number; // Leitner system box (1 to 5) for Spaced Repetition
}

export interface UserProgressMap {
  [questionId: string]: UserProgressValue;
}

export type ActivityModeType = 
  | 'karteikarten' 
  | 'video' 
  | 'ihk_pruefung' 
  | 'streak' 
  | 'fallbeispiel' 
  | 'raetsel'
  | 'lernen'
  | 'pruefung'
  | 'karteikarte';

export interface LernhistorieItem {
  id: string;
  timestamp: string | number;
  rawTimestamp?: number;
  typ: string;
  mode?: ActivityModeType | string;
  anzahl: number;
  richtig: number;
  falsch: number;
  quote?: number;
}

export interface AppState {
  questions: Question[];
  progress: UserProgressMap;
  history: LernhistorieItem[];
  dailyGoal: number; // Questions to answer per day
  studyDuration: number; // Seconds spent studying this session/overall
}

export const KATEGORIEN = [
  'Umgang mit Waffen',
  'Recht der öffentlichen Sicherheit und Ordnung',
  'Gewerberecht (GewO / BewachV)',
  'Bürgerliches Gesetzbuch (BGB)',
  'Straf- und Strafverfahrensrecht (StGB / StPO)',
  'Umgang mit Menschen und Verhalten in Gefahrensituationen',
  'Unfallverhütungsvorschriften (UVV)',
  'Grundsätze der Sicherheitstechnik',
  'Datenschutzrecht'
] as const;

export type KategorieType = typeof KATEGORIEN[number];

/**
 * Standardisierte Bezeichner für alle 10 Trainings- und Prüfungsmodi der Plattform
 */
export type TrainingMode = 
  | 'lernmodus'        // Lernmodus (Antwortvergleich)
  | 'schriftlich'      // Schriftlicher Test (§ 34a)
  | 'pruefung'         // Prüfungs-Simulation
  | 'video'            // Video-Szenario-Trainer
  | 'fallbeispiele'    // Fallbeispiele
  | 'karteikarten'     // Karteikarten (3D Flip)
  | 'fachbegriffe'     // Fachbegriffe & Prüfungsdeutsch
  | 'wiederholung'     // Fehler-Wiederholung
  | 'streak'           // Endlos-Streak-Challenge
  | 'raetsel';         // „Was bin ich?“ Rätsel

// Re-export Auth & Management Types
export * from './types/auth.ts';
