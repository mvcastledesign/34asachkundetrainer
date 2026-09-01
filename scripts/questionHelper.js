import fs from 'fs';
import path from 'path';

// Helper to build a question with all translations
export function makeQuestion({
  id,
  kategorie,
  frage,
  optionsData, // array of 4: { text, ru, en, ar, fa }
  korrekteAntworten,
  punkte,
  erklaerung,
  translations // { ru: { question, explanation }, en: ..., ar: ..., fa: ... }
}) {
  const optionLetters = ['a', 'b', 'c', 'd'];
  const optionen = optionsData.map((opt, idx) => {
    const prefix = `${optionLetters[idx].toUpperCase()}) `;
    if (opt.text.startsWith('A) ') || opt.text.startsWith('B) ') || opt.text.startsWith('C) ') || opt.text.startsWith('D) ')) {
      return opt.text;
    }
    return `${prefix}${opt.text}`;
  });

  const options = optionsData.map((opt, idx) => {
    let cleanText = opt.text;
    return {
      id: optionLetters[idx],
      text: cleanText,
      translations: {
        ru: opt.ru,
        en: opt.en,
        ar: opt.ar,
        fa: opt.fa
      }
    };
  });

  return {
    id,
    kategorie,
    frage,
    optionen,
    options,
    korrekteAntworten,
    punkte,
    erklaerung,
    translations
  };
}
