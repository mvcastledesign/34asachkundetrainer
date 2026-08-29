/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Schwierigkeit = 'Leicht' | 'Mittel' | 'Schwer';

export interface QuestionTranslation {
  frage?: string;
  text?: string;
  antwort?: string;
  erklaerung?: string;
  optionen?: string[];
}

export interface Question {
  id: string;
  kategorie: string;
  frage: string;
  antwort: string;
  schwierigkeit: Schwierigkeit;
  translations?: Record<string, QuestionTranslation>;
}

export interface WrittenQuestion {
  id: string;
  kategorie: string;
  frage: string;
  optionen: string[]; // 4 options
  korrekteAntworten: number[]; // indices of correct option(s) (0 to 3)
  punkte: number; // point value (1 or 2)
  erklaerung: string; // solution explanation
  target_mode?: string; // 'written_test'
  translations?: Record<string, QuestionTranslation>;
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

export interface LernhistorieItem {
  id: string;
  timestamp: string;
  typ: 'Lernen' | 'Prüfung' | 'Karteikarte';
  anzahl: number;
  richtig: number;
  falsch: number;
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
