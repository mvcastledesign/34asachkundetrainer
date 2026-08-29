import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { translateText, isRtlLanguage } from '../lib/translator.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';

interface TranslatedSublineProps {
  text: string;
  questionId: string;
  targetLanguage?: string; // Optional override, otherwise inherits from LanguageContext/safeStorage
  type?: string; // e.g. 'frage', 'opt_0', 'opt_1', 'subline'
  className?: string;
  showLoader?: boolean;
}

/**
 * Dezente Unterzeilen-Komponente für übersetzte Texte (z. B. Multiple-Choice-Optionen A-D, Fragenunterzeilen).
 * Beinhaltet Shimmer-Ladezustand, automatisches Retry-Handling und manuelle Wiederholungsoption bei Verbindungsfehlern.
 */
export default function TranslatedSubline({
  text,
  questionId,
  targetLanguage: propLanguage,
  type = 'subline',
  className = 'text-xs text-slate-400 mt-0.5',
  showLoader = true,
}: TranslatedSublineProps) {
  const context = useLanguage();
  // Determine effective language: explicit prop if provided, else context, else safeStorage
  const activeLanguage = propLanguage || context.selectedLanguage || safeStorage.getSelectedLanguage();

  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  const isRtl = isRtlLanguage(activeLanguage);

  const performTranslation = useCallback(async () => {
    if (!activeLanguage || activeLanguage === 'deaktiviert' || !text || !text.trim()) {
      setTranslatedText('');
      setLoading(false);
      setHasError(false);
      return;
    }

    setLoading(true);
    setHasError(false);

    try {
      const result = await translateText(text, activeLanguage, questionId, type);
      if (result.success && result.translation) {
        setTranslatedText(result.translation);
        setHasError(false);
      } else if (!result.success) {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, [text, activeLanguage, questionId, type]);

  useEffect(() => {
    performTranslation();
  }, [performTranslation, retryCount]);

  if (!activeLanguage || activeLanguage === 'deaktiviert' || !text) {
    return null;
  }

  // Loading state with smooth shimmer bar
  if (loading) {
    if (!showLoader) return null;
    return (
      <div className="mt-1 flex items-center gap-1.5 animate-pulse select-none">
        <div className="h-2.5 w-24 bg-amber-400/20 rounded-md"></div>
        <div className="h-2.5 w-16 bg-amber-400/10 rounded-md"></div>
      </div>
    );
  }

  // Error state: Show a subtle reload chip so mobile users can retry without silent failure
  if (hasError && !translatedText) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setRetryCount((prev) => prev + 1);
        }}
        className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-amber-400/75 hover:text-amber-300 transition-colors py-0.5 px-1 rounded bg-amber-500/10 border border-amber-500/20"
        title="Übersetzung konnte nicht geladen werden. Klicken zum Wiederholen."
      >
        <RefreshCw className="w-2.5 h-2.5 shrink-0" />
        <span>Übersetzung neu laden</span>
      </button>
    );
  }

  if (!translatedText || translatedText.trim() === text.trim()) {
    return null;
  }

  return (
    <div
      className={`${className} font-sans leading-normal break-words whitespace-normal ${
        isRtl ? 'text-right' : 'text-left'
      }`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {translatedText}
    </div>
  );
}
