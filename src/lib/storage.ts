/**
 * Safari & Mobile-Safe LocalStorage wrapper.
 * Provides fallback in-memory storage if localStorage is restricted (e.g. Safari Private Mode, QuotaExceeded).
 */

const memoryStore: Record<string, string> = {};

export const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(key);
        if (item !== null) return item;
      }
    } catch (e) {
      console.warn(`[safeStorage] localStorage.getItem failed for "${key}", using memory fallback`, e);
    }
    return memoryStore[key] ?? null;
  },

  setItem: (key: string, value: string): boolean => {
    memoryStore[key] = value;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
        return true;
      }
    } catch (e) {
      console.warn(`[safeStorage] localStorage.setItem failed for "${key}", stored in memory only`, e);
    }
    return false;
  },

  removeItem: (key: string): void => {
    delete memoryStore[key];
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn(`[safeStorage] localStorage.removeItem failed for "${key}"`, e);
    }
  },

  /**
   * Helper to retrieve currently selected language across standard keys
   */
  getSelectedLanguage: (): string => {
    const lang = safeStorage.getItem('selected_language') || safeStorage.getItem('sachkunde_34a_translation_lang');
    return lang || 'deaktiviert';
  },

  /**
   * Helper to save currently selected language to all standard keys
   */
  setSelectedLanguage: (lang: string): void => {
    safeStorage.setItem('selected_language', lang);
    safeStorage.setItem('sachkunde_34a_translation_lang', lang);
  }
};
