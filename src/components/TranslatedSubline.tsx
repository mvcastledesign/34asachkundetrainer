import React from 'react';
import { isRtlLanguage } from '../lib/translator.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';
import { QuestionTranslation } from '../types.ts';

interface TranslatedSublineProps {
  text?: string;
  translatedText?: string;
  translations?: Record<string, QuestionTranslation>;
  questionId?: string;
  targetLanguage?: string; // Optional override, otherwise inherits from LanguageContext/safeStorage
  type?: string; // e.g. 'frage', 'text', 'subline', 'opt_0', 'opt_1', 'opt_2', 'opt_3'
  className?: string;
  showLoader?: boolean; // legacy compatibility prop
}

/**
 * Purely static subline component for translations.
 * Displays pre-loaded translations from question.translations or explicit props.
 * Silent fallback: if no translation is configured for the active language, returns null without any error messages.
 */
export default function TranslatedSubline({
  text: _text,
  translatedText,
  translations,
  questionId: _questionId,
  targetLanguage: propLanguage,
  type = 'subline',
  className = 'text-xs text-slate-400 mt-0.5',
}: TranslatedSublineProps) {
  const context = useLanguage();
  const activeLanguage = propLanguage || context?.selectedLanguage || safeStorage.getSelectedLanguage();

  if (!activeLanguage || activeLanguage === 'deaktiviert') {
    return null;
  }

  // 1. Check explicit translation text
  let content = translatedText;

  // 2. Check static translations mapping
  if (!content && translations && translations[activeLanguage]) {
    const entry = translations[activeLanguage];
    if (type === 'frage') {
      content = entry.frage || entry.text;
    } else if (type === 'text' || type === 'subline') {
      content = entry.text || entry.frage;
    } else if (type === 'antwort') {
      content = entry.antwort;
    } else if (type === 'erklaerung') {
      content = entry.erklaerung;
    } else if (type.startsWith('opt_')) {
      const idx = parseInt(type.replace('opt_', ''), 10);
      if (!isNaN(idx) && entry.optionen && entry.optionen[idx]) {
        content = entry.optionen[idx];
      }
    }
  }

  // Silent fallback: if no static translation is present, render nothing
  if (!content || !content.trim()) {
    return null;
  }

  const isRtl = isRtlLanguage(activeLanguage);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${className} ${isRtl ? 'font-sans text-right tracking-normal' : ''}`}
    >
      {content}
    </div>
  );
}
