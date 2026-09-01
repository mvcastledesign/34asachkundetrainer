import fs from 'fs';
import path from 'path';
import { initialWrittenQuestionsData } from './data_initial_written.js';
import { ihkPart1Questions } from './data_ihk_part1.js';
import { ihkPart2Questions } from './data_ihk_part2.js';
import { ihkPart3Questions } from './data_ihk_part3.js';
import { ihkPart4Questions } from './data_ihk_part4.js';

// Build src/initialWrittenQuestions.ts
const initialWrittenContent = `import { WrittenQuestion } from './types.ts';

export const INITIAL_WRITTEN_QUESTIONS: WrittenQuestion[] = ${JSON.stringify(initialWrittenQuestionsData, null, 2)};
`;

fs.writeFileSync(path.resolve('./src/initialWrittenQuestions.ts'), initialWrittenContent, 'utf-8');
console.log('Successfully wrote src/initialWrittenQuestions.ts (' + initialWrittenQuestionsData.length + ' questions)');

// Combine all IHK questions
const allIhkQuestions = [
  ...ihkPart1Questions,
  ...ihkPart2Questions,
  ...ihkPart3Questions,
  ...ihkPart4Questions
];

const ihkCategoriesConfig = `export interface IhkCategoryConfig {
  id: string;
  name: string;
  shortName: string;
  maxPoints: number;
  questionCount: number;
  onePointCount: number;
  twoPointCount: number;
  iconName: string;
  color: string;
}

export const IHK_CATEGORIES_CONFIG: IhkCategoryConfig[] = [
  {
    id: 'oeff_recht',
    name: 'Recht der öffentlichen Sicherheit und Ordnung',
    shortName: 'Öffentl. Sicherheit & Ordnung',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Scale',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'bgb',
    name: 'Bürgerliches Gesetzbuch (BGB)',
    shortName: 'Bürgerliches Recht (BGB)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'BookOpen',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'stgb_stpo',
    name: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    shortName: 'StGB & StPO (§ 127 Festnahme)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'ShieldAlert',
    color: 'from-rose-500 to-red-500'
  },
  {
    id: 'deeskalation',
    name: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    shortName: 'Umgang mit Menschen & Deeskalation',
    maxPoints: 20,
    questionCount: 14,
    onePointCount: 8,
    twoPointCount: 6,
    iconName: 'Users',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'uvv',
    name: 'Unfallverhütungsvorschriften (UVV)',
    shortName: 'UVV (DGUV Vorschrift 23)',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'HardHat',
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 'technik',
    name: 'Grundsätze der Sicherheitstechnik',
    shortName: 'Grundlagen der Sicherheitstechnik',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Cpu',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'datenschutz',
    name: 'Datenschutzrecht',
    shortName: 'Datenschutz (DSGVO / BDSG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Lock',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'waffenrecht',
    name: 'Umgang mit Waffen',
    shortName: 'Waffenrecht (WaffG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Crosshair',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'gewerberecht',
    name: 'Gewerberecht (GewO / BewachV)',
    shortName: 'Gewerberecht (§ 34a GewO / BewachV)',
    maxPoints: 4,
    questionCount: 3,
    onePointCount: 2,
    twoPointCount: 1,
    iconName: 'Briefcase',
    color: 'from-lime-500 to-emerald-600'
  }
];
`;

const ihkContent = `import { WrittenQuestion } from '../types.ts';

${ihkCategoriesConfig}

export const IHK_120_EXAM_QUESTIONS: WrittenQuestion[] = ${JSON.stringify(allIhkQuestions, null, 2)};
`;

fs.writeFileSync(path.resolve('./src/data/ihk120ExamQuestions.ts'), ihkContent, 'utf-8');
console.log('Successfully wrote src/data/ihk120ExamQuestions.ts (' + allIhkQuestions.length + ' questions)');
