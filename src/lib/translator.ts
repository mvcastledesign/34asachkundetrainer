import { QuestionTranslation } from '../types.ts';

export const LANGUAGE_OPTIONS = [
  { value: 'deaktiviert', label: 'Keine (Nur Deutsch)' },
  { value: 'farsi', label: 'Farsi (فارسی)' },
  { value: 'arabisch', label: 'Arabisch (العربية)' },
  { value: 'russisch', label: 'Russisch (Русский)' },
  { value: 'englisch', label: 'Englisch (English)' },
];

export const LANGUAGE_LABELS: Record<string, string> = {
  farsi: 'Farsi (فارسی)',
  arabisch: 'Arabisch (العربية)',
  russisch: 'Russisch (Русский)',
  englisch: 'Englisch (English)',
};

export const isRtlLanguage = (lang?: string): boolean => {
  return lang === 'farsi' || lang === 'arabisch';
};

/**
 * Purely static translation resolver.
 * Looks up pre-defined translations without making any network calls or API queries.
 */
export function getStaticTranslation(
  translations: Record<string, QuestionTranslation> | undefined,
  targetLanguage: string | undefined,
  field: 'frage' | 'text' | 'antwort' | 'erklaerung' | 'optionen',
  optionIndex?: number
): string | undefined {
  if (!translations || !targetLanguage || targetLanguage === 'deaktiviert') {
    return undefined;
  }

  const entry = translations[targetLanguage];
  if (!entry) {
    return undefined;
  }

  if (field === 'optionen' && typeof optionIndex === 'number') {
    return entry.optionen?.[optionIndex];
  }

  if (field === 'frage') {
    return entry.frage || entry.text;
  }

  if (field === 'text') {
    return entry.text || entry.frage;
  }

  if (field === 'antwort') {
    return entry.antwort;
  }

  if (field === 'erklaerung') {
    return entry.erklaerung;
  }

  return undefined;
}

export interface TranslationResult {
  success: boolean;
  translation: string;
}

/**
 * Static synchronous resolver (no network requests)
 */
export async function translateText(
  _text: string,
  _targetLanguage: string,
  _questionId: string = 'gen',
  _type: string = 'subline'
): Promise<TranslationResult> {
  return { success: true, translation: '' };
}
