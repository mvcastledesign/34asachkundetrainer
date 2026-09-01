import fs from 'fs';
import path from 'path';
import { initialWrittenQuestionsData } from './data_initial_written.js';
import { ihkPart1Questions } from './data_ihk_part1.js';
import { ihkPart2Questions } from './data_ihk_part2.js';
import { ihkPart3Questions } from './data_ihk_part3.js';
import { ihkPart4Questions } from './data_ihk_part4.js';

// Regex patterns to clean German parentheses and artifacts in foreign texts
function cleanForeignText(text, lang) {
  if (typeof text !== 'string') return text;
  let cleaned = text;

  // Specific common German notes in brackets or phrases to clean in foreign fields
  const replacements = [
    // German term parentheses in foreign text
    [/\s*\(Hausrecht\)/gi, ''],
    [/\s*\(Besitzdiener\)/gi, ''],
    [/\s*\(Eigentümer\)/gi, ''],
    [/\s*\(Besitzer\)/gi, ''],
    [/\s*\(Notwehr\)/gi, ''],
    [/\s*\(Notstand\)/gi, ''],
    [/\s*\(Selbsthilfe\)/gi, ''],
    [/\s*\(Berufsgenossenschaft\)/gi, ''],
    [/\s*\(Magnetkontakte\)/gi, ''],
    [/\s*\(Glasbruchmelder\)/gi, ''],
    [/\s*\(Außenhautüberwachung\)/gi, ''],
    [/\s*\(Fallenüberwachung\)/gi, ''],
    [/\s*\(Schwerpunktüberwachung\)/gi, ''],
    [/\s*\(führt\)/gi, ''],
    [/\s*\(Führen\)/gi, ''],
    [/\s*\(Tagessätze\)/gi, ''],
    [/\s*\(Schreckschusswaffen\)/gi, ''],
    [/\s*\(Schlagringe\)/gi, ''],
    [/\s*\(Butterflymesser\)/gi, ''],
    [/\s*\(Butterfly\)/gi, ''],
    [/\s*\(Waffenschein\)/gi, ''],
    [/\s*\(Waffenbesitzkarte\)/gi, ''],
    [/\s*\(Körperverletzung\)/gi, ''],
    [/\s*\(Diebstahl\)/gi, ''],
    [/\s*\(Hausfriedensbruch\)/gi, ''],
    [/\s*\(Sachbeschädigung\)/gi, ''],
    [/\s*\(Freiheitsberaubung\)/gi, ''],
    [/\s*\(Nötigung\)/gi, ''],
    [/\s*\(Beleidigung\)/gi, ''],
    [/\s*\(Unterschlagung\)/gi, ''],
    [/\s*\(Betrug\)/gi, ''],
    [/\s*\(Verleumdung\)/gi, ''],
    [/\s*\(Üble Nachrede\)/gi, ''],
    [/\s*\(Jedermann-Rechte\)/gi, ''],
    [/\s*\(Jedermannrechte\)/gi, ''],
    [/\s*\(Polizeirecht\)/gi, ''],
    [/\s*\(Ordnungsamt\)/gi, ''],
    [/\s*\(Gefahr im Verzug\)/gi, ''],
    [/\s*\(DGUV Vorschrift 23\)/gi, ''],
    [/\s*\(BewachV\)/gi, ''],
    [/\s*\(GewO\)/gi, ''],
    [/\s*\(StGB\)/gi, ''],
    [/\s*\(StPO\)/gi, ''],
    [/\s*\(BGB\)/gi, ''],
    [/\s*\(BDSG\)/gi, ''],
    [/\s*\(DSGVO\)/gi, ''],
    [/\s*\(WaffG\)/gi, '']
  ];

  for (const [pattern, repl] of replacements) {
    // Only remove if lang is foreign and it's redundant German annotation
    if (lang === 'ar' || lang === 'fa' || lang === 'ru') {
      cleaned = cleaned.replace(pattern, repl);
    }
  }

  // Clean up any double spaces caused by removal
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
  return cleaned;
}

function cleanQuestion(q) {
  // 1. Clean options translations
  if (q.options && Array.isArray(q.options)) {
    q.options = q.options.map(opt => {
      const translations = {
        ru: cleanForeignText(opt.translations?.ru || '', 'ru'),
        en: cleanForeignText(opt.translations?.en || '', 'en'),
        ar: cleanForeignText(opt.translations?.ar || '', 'ar'),
        fa: cleanForeignText(opt.translations?.fa || '', 'fa')
      };
      return {
        ...opt,
        translations
      };
    });
  }

  // 2. Clean question & explanation translations
  if (q.translations) {
    q.translations = {
      ru: {
        question: cleanForeignText(q.translations.ru?.question || '', 'ru'),
        explanation: cleanForeignText(q.translations.ru?.explanation || '', 'ru')
      },
      en: {
        question: cleanForeignText(q.translations.en?.question || '', 'en'),
        explanation: cleanForeignText(q.translations.en?.explanation || '', 'en')
      },
      ar: {
        question: cleanForeignText(q.translations.ar?.question || '', 'ar'),
        explanation: cleanForeignText(q.translations.ar?.explanation || '', 'ar')
      },
      fa: {
        question: cleanForeignText(q.translations.fa?.question || '', 'fa'),
        explanation: cleanForeignText(q.translations.fa?.explanation || '', 'fa')
      }
    };
  }

  return q;
}

// Clean all datasets
const cleanedInitial = initialWrittenQuestionsData.map(cleanQuestion);
const cleanedPart1 = ihkPart1Questions.map(cleanQuestion);
const cleanedPart2 = ihkPart2Questions.map(cleanQuestion);
const cleanedPart3 = ihkPart3Questions.map(cleanQuestion);
const cleanedPart4 = ihkPart4Questions.map(cleanQuestion);

// Re-export cleaned data back to JS files
function writeJsExport(filePath, varName, data) {
  const content = `export const ${varName} = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.resolve(filePath), content, 'utf-8');
}

writeJsExport('./scripts/data_initial_written.js', 'initialWrittenQuestionsData', cleanedInitial);
writeJsExport('./scripts/data_ihk_part1.js', 'ihkPart1Questions', cleanedPart1);
writeJsExport('./scripts/data_ihk_part2.js', 'ihkPart2Questions', cleanedPart2);
writeJsExport('./scripts/data_ihk_part3.js', 'ihkPart3Questions', cleanedPart3);
writeJsExport('./scripts/data_ihk_part4.js', 'ihkPart4Questions', cleanedPart4);

console.log('Cleaned and updated all intermediate question data files.');
