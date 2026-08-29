import React, { useState, useEffect, useCallback } from 'react';
import { Globe, AlertCircle, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { translateText, isRtlLanguage, LANGUAGE_LABELS } from '../lib/translator.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';

interface TranslationViewProps {
  text: string;
  questionId: string;
  targetLanguage?: string; // Optional override, otherwise inherits from context/storage
  type?: 'frage' | 'antwort' | 'erklaerung';
  variant?: 'default' | 'compact' | 'collapsible';
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

export { LANGUAGE_LABELS };

export default function TranslationView({
  text,
  questionId,
  targetLanguage: propLanguage,
  type = 'frage',
  variant = 'default',
  collapsible = false,
  defaultExpanded = false,
}: TranslationViewProps) {
  const context = useLanguage();
  const activeLanguage = propLanguage || context.selectedLanguage || safeStorage.getSelectedLanguage();

  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [retryCount, setRetryCount] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  const isRtl = isRtlLanguage(activeLanguage);
  const isCollapsible = collapsible || variant === 'collapsible';

  const performTranslation = useCallback(async () => {
    if (!activeLanguage || activeLanguage === 'deaktiviert' || !text || !text.trim()) {
      setTranslatedText('');
      setLoading(false);
      setHasError(false);
      return;
    }

    setLoading(true);
    setHasError(false);
    setErrorMessage('');

    try {
      const result = await translateText(text, activeLanguage, questionId, type);
      if (result.success && result.translation) {
        setTranslatedText(result.translation);
        setHasError(false);
      } else {
        setHasError(true);
        setErrorMessage(result.error || 'Verbindung fehlgeschlagen');
      }
    } catch (err: any) {
      setHasError(true);
      setErrorMessage('Übersetzung fehlgeschlagen');
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

  // Collapsible mode (for long answers, model solutions, flashcard back)
  if (isCollapsible) {
    return (
      <div className="mt-3 pt-2.5 border-t border-white/5 transition-all">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 text-xs text-slate-300 hover:text-white transition-all group"
        >
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#dfb871]">
            <Globe className="w-3.5 h-3.5 text-[#dfb871]/80 shrink-0" />
            <span>
              {LANGUAGE_LABELS[activeLanguage] || activeLanguage} Übersetzung {isExpanded ? 'ausblenden' : 'anzeigen'}
            </span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white shrink-0" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-2 p-3.5 rounded-xl bg-slate-950/80 border border-[#dfb871]/20 text-xs md:text-sm text-slate-200 leading-relaxed animate-fadeIn">
            {loading && (
              <div className="space-y-2 py-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#dfb871] border-t-transparent animate-spin shrink-0" />
                  <span>Lade Übersetzung...</span>
                </div>
                <div className="h-3 w-full bg-amber-400/10 rounded animate-pulse" />
                <div className="h-3 w-4/5 bg-amber-400/10 rounded animate-pulse" />
              </div>
            )}

            {hasError && !loading && (
              <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                <div className="flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage || 'Verbindungsfehler bei der Übersetzung.'}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRetryCount((c) => c + 1);
                  }}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-white font-medium text-[11px] transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Erneut versuchen</span>
                </button>
              </div>
            )}

            {!loading && !hasError && translatedText && (
              <div
                className={`font-sans ${isRtl ? 'text-right leading-loose' : 'text-left leading-relaxed'} text-amber-100/90 whitespace-pre-wrap`}
                dir={isRtl ? 'rtl' : 'ltr'}
              >
                {translatedText}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Compact inline badge variant
  if (variant === 'compact') {
    if (loading) {
      return (
        <div className="mt-1 flex items-center gap-1.5 animate-pulse">
          <div className="h-2 w-16 bg-amber-400/20 rounded"></div>
        </div>
      );
    }
    if (hasError) {
      return (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setRetryCount((c) => c + 1);
          }}
          className="mt-1 inline-flex items-center gap-1 text-[10px] text-amber-400/80 hover:text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          <span>Übersetzung wiederholen</span>
        </button>
      );
    }
    if (!translatedText || translatedText.trim() === text.trim()) return null;

    return (
      <div
        className={`mt-1 text-xs text-amber-300/85 font-medium leading-snug ${isRtl ? 'text-right' : 'text-left'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {translatedText}
      </div>
    );
  }

  // Default block variant
  return (
    <div className="mt-2.5 pt-2 border-t border-white/[0.04] text-[12.5px] leading-relaxed transition-all duration-200">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#dfb871]/10 text-[#dfb871] text-[10.5px] font-bold border border-[#dfb871]/20">
          <Globe className="w-2.5 h-2.5 shrink-0" />
          <span>{LANGUAGE_LABELS[activeLanguage] || activeLanguage} Übersetzung</span>
        </div>

        {hasError && !loading && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setRetryCount((c) => c + 1);
            }}
            className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Neu laden</span>
          </button>
        )}
      </div>

      {loading && (
        <div className="space-y-1.5 py-1">
          <div className="h-3 w-full bg-amber-400/15 rounded animate-pulse" />
          <div className="h-3 w-3/4 bg-amber-400/10 rounded animate-pulse" />
        </div>
      )}

      {hasError && !loading && (
        <div className="flex items-center gap-1.5 text-amber-400/90 text-xs py-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Übersetzung konnte nicht geladen werden. Bitte Internetverbindung prüfen oder erneut laden.</span>
        </div>
      )}

      {!loading && !hasError && translatedText && (
        <div
          className={`text-amber-200/90 font-sans tracking-wide ${isRtl ? 'text-right leading-loose' : 'text-left'} whitespace-pre-wrap`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {translatedText}
        </div>
      )}
    </div>
  );
}
