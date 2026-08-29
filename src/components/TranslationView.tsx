import React, { useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { isRtlLanguage, LANGUAGE_LABELS } from '../lib/translator.ts';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { safeStorage } from '../lib/storage.ts';
import { QuestionTranslation } from '../types.ts';

interface TranslationViewProps {
  text?: string;
  translatedText?: string;
  translations?: Record<string, QuestionTranslation>;
  questionId?: string;
  targetLanguage?: string; // Optional override, otherwise inherits from context/storage
  type?: 'frage' | 'antwort' | 'erklaerung' | 'text';
  variant?: 'default' | 'compact' | 'collapsible';
  collapsible?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}

export { LANGUAGE_LABELS };

/**
 * Purely static translation view component.
 * Displays pre-defined translations from question.translations or explicit props.
 * Silent fallback: if no translation is found for the chosen language, renders null without error banners.
 */
export default function TranslationView({
  text: _text,
  translatedText,
  translations,
  questionId: _questionId,
  targetLanguage: propLanguage,
  type = 'frage',
  variant = 'default',
  collapsible = false,
  defaultExpanded = false,
  className = '',
}: TranslationViewProps) {
  const context = useLanguage();
  const activeLanguage = propLanguage || context?.selectedLanguage || safeStorage.getSelectedLanguage();
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

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
    } else if (type === 'text') {
      content = entry.text || entry.frage;
    } else if (type === 'antwort') {
      content = entry.antwort;
    } else if (type === 'erklaerung') {
      content = entry.erklaerung;
    }
  }

  // Silent fallback: if no translation is available, do NOT display any error box or empty placeholder
  if (!content || !content.trim()) {
    return null;
  }

  const isRtl = isRtlLanguage(activeLanguage);
  const isCollapsible = collapsible || variant === 'collapsible';

  if (isCollapsible) {
    return (
      <div className={`mt-3 pt-2.5 border-t border-white/5 transition-all ${className}`}>
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
          <div
            dir={isRtl ? 'rtl' : 'ltr'}
            className={`mt-2 p-3 rounded-lg bg-slate-900/80 border border-white/10 text-slate-200 text-xs sm:text-sm leading-relaxed ${
              isRtl ? 'font-sans text-right' : 'font-sans'
            }`}
          >
            {content}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className={`mt-1 text-xs text-amber-300/80 italic font-sans ${isRtl ? 'text-right' : ''} ${className}`}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`mt-2.5 p-3 rounded-xl bg-slate-900/70 border border-amber-400/20 text-xs sm:text-sm text-slate-200 leading-relaxed shadow-sm ${
        isRtl ? 'font-sans text-right' : 'font-sans'
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold text-[#dfb871]">
        <Globe className="w-3 h-3 text-[#dfb871]" />
        <span>{LANGUAGE_LABELS[activeLanguage] || activeLanguage}</span>
      </div>
      <div className="text-slate-100">{content}</div>
    </div>
  );
}
