import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { safeStorage } from '../lib/storage.ts';
import { LANGUAGE_OPTIONS, LANGUAGE_LABELS, isRtlLanguage } from '../lib/translator.ts';

interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  languageOptions: typeof LANGUAGE_OPTIONS;
  languageLabels: typeof LANGUAGE_LABELS;
  isRtl: boolean;
  activeLanguageLabel: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_CHANGE_EVENT = 'sachkunde_language_changed';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setLanguageState] = useState<string>(() => {
    return safeStorage.getSelectedLanguage();
  });

  const setSelectedLanguage = useCallback((newLang: string) => {
    const validLang = newLang || 'deaktiviert';
    setLanguageState(validLang);
    safeStorage.setSelectedLanguage(validLang);

    // Dispatch global event for instant sync across tabs / non-context consumers
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: { language: validLang } })
      );
    }
  }, []);

  // Listen for storage events (e.g. changes in another tab/iframe) & custom sync events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selected_language' || e.key === 'sachkunde_34a_translation_lang') {
        const updated = safeStorage.getSelectedLanguage();
        setLanguageState(updated);
      }
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ language: string }>;
      if (customEvent.detail?.language) {
        setLanguageState(customEvent.detail.language);
      } else {
        setLanguageState(safeStorage.getSelectedLanguage());
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener(LANGUAGE_CHANGE_EVENT, handleCustomChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleCustomChange);
      }
    };
  }, []);

  const isRtl = isRtlLanguage(selectedLanguage);
  const activeLanguageLabel = LANGUAGE_LABELS[selectedLanguage] || selectedLanguage;

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        languageOptions: LANGUAGE_OPTIONS,
        languageLabels: LANGUAGE_LABELS,
        isRtl,
        activeLanguageLabel,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback if used outside Provider
    const current = safeStorage.getSelectedLanguage();
    return {
      selectedLanguage: current,
      setSelectedLanguage: (lang: string) => safeStorage.setSelectedLanguage(lang),
      languageOptions: LANGUAGE_OPTIONS,
      languageLabels: LANGUAGE_LABELS,
      isRtl: isRtlLanguage(current),
      activeLanguageLabel: LANGUAGE_LABELS[current] || current,
    };
  }
  return context;
}
