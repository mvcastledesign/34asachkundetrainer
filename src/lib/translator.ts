import { safeStorage } from './storage.ts';

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

const inMemoryTranslationCache = new Map<string, string>();

/**
 * Fetch with timeout using AbortController
 */
async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 12000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

export interface TranslationResult {
  success: boolean;
  translation: string;
  error?: string;
  isRetryable?: boolean;
}

/**
 * Robust async translate service with 10s+ timeout, automatic 1x retry, and dual endpoint fallbacks.
 */
export async function translateText(
  text: string,
  targetLanguage: string,
  questionId: string = 'gen',
  type: string = 'subline'
): Promise<TranslationResult> {
  if (!targetLanguage || targetLanguage === 'deaktiviert' || !text || !text.trim()) {
    return { success: true, translation: '' };
  }

  const cleanText = text.trim();
  const cleanId = String(questionId || 'gen').replace(/[^a-zA-Z0-9_-]/g, '_');
  const cleanType = String(type || 'subline').replace(/[^a-zA-Z0-9_-]/g, '_');
  const cacheKey = `sachkunde_34a_trans_${cleanId}_${targetLanguage}_${cleanType}`;

  // 1. Check in-memory fast cache
  if (inMemoryTranslationCache.has(cacheKey)) {
    return { success: true, translation: inMemoryTranslationCache.get(cacheKey)! };
  }

  // 2. Check safeStorage cache
  const cached = safeStorage.getItem(cacheKey);
  if (cached) {
    inMemoryTranslationCache.set(cacheKey, cached);
    return { success: true, translation: cached };
  }

  const langLabel = LANGUAGE_LABELS[targetLanguage] || targetLanguage;

  // 3. Attempt primary endpoint with 1 automatic retry
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await fetchWithTimeout(
        '/api/translate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: cleanText, targetLanguage: langLabel }),
        },
        12000
      );

      if (response.ok) {
        const data = await response.json();
        if (data?.translation && typeof data.translation === 'string' && data.translation.trim()) {
          const result = data.translation.trim();
          safeStorage.setItem(cacheKey, result);
          inMemoryTranslationCache.set(cacheKey, result);
          return { success: true, translation: result };
        }
      }
    } catch (err: any) {
      if (attempt === 1) {
        // Small backoff before auto retry
        await new Promise((res) => setTimeout(res, 600));
        continue;
      }
    }
  }

  // 4. Client-side GTX Fallback with 1 automatic retry
  const langCodes: Record<string, string> = {
    farsi: 'fa',
    arabisch: 'ar',
    russisch: 'ru',
    englisch: 'en',
  };
  const code = langCodes[targetLanguage] || 'en';
  const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${code}&dt=t&q=${encodeURIComponent(
    cleanText
  )}`;

  for (let gtxAttempt = 1; gtxAttempt <= 2; gtxAttempt++) {
    try {
      const gtxRes = await fetchWithTimeout(gtxUrl, { method: 'GET' }, 10000);
      if (gtxRes.ok) {
        const gtxData = await gtxRes.json();
        if (Array.isArray(gtxData) && Array.isArray(gtxData[0])) {
          const resText = gtxData[0]
            .filter((seg: any) => Array.isArray(seg) && typeof seg[0] === 'string')
            .map((seg: any) => seg[0])
            .join('')
            .trim();

          if (resText) {
            safeStorage.setItem(cacheKey, resText);
            inMemoryTranslationCache.set(cacheKey, resText);
            return { success: true, translation: resText };
          }
        }
      }
    } catch (err) {
      if (gtxAttempt === 1) {
        await new Promise((res) => setTimeout(res, 500));
        continue;
      }
    }
  }

  // If all attempts failed, report error state so UI can show a retry button
  return {
    success: false,
    translation: '',
    error: 'Verbindungsfehler bei der Übersetzung.',
    isRetryable: true,
  };
}
