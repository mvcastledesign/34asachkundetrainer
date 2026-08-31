import React, { useMemo } from 'react';
import { Globe } from 'lucide-react';
import { getTranslation } from '../data/translationsData.ts';

interface TranslationViewProps {
  text: string;
  questionId?: string;
  targetLanguage: string; // 'farsi' | 'arabisch' | 'russisch' | 'englisch' | 'fa' | 'ar' | 'ru' | 'en' | 'deaktiviert'
  type?: 'frage' | 'antwort' | 'loesung' | 'option';
  optionKey?: string;
  variant?: 'default' | 'compact';
}

// Display labels for language badges
const LANGUAGE_LABELS: Record<string, string> = {
  farsi: 'Farsi (فارسی)',
  fa: 'Farsi (فارسی)',
  arabisch: 'Arabisch (العربية)',
  ar: 'Arabisch (العربية)',
  russisch: 'Russisch (Русский)',
  ru: 'Russisch (Русский)',
  englisch: 'Englisch (English)',
  en: 'Englisch (English)',
};

export default function TranslationView({ 
  text, 
  questionId, 
  targetLanguage, 
  type = 'frage', 
  optionKey,
  variant = 'default' 
}: TranslationViewProps) {
  const isRtl = 
    targetLanguage === 'farsi' || 
    targetLanguage === 'fa' || 
    targetLanguage === 'arabisch' || 
    targetLanguage === 'ar';

  // Instant static translation in 0 ms without any network calls
  const translatedText = useMemo(() => {
    if (!targetLanguage || targetLanguage === 'deaktiviert' || (!text && !questionId)) {
      return undefined;
    }

    const queryType = type === 'antwort' ? (optionKey || (questionId && (questionId.includes('-opt-') || questionId.includes('_opt_'))) ? 'option' : 'loesung') : type;

    // 1. First attempt: Direct ID lookup
    if (questionId) {
      const hit = getTranslation(questionId, queryType, optionKey, targetLanguage);
      if (hit) return hit;

      // Fallback with type option or loesung
      if (queryType === 'option') {
        const altHit = getTranslation(questionId, 'loesung', optionKey, targetLanguage);
        if (altHit) return altHit;
      }
    }

    // 2. Second attempt: Text query
    if (text) {
      const hit = getTranslation(text, queryType, optionKey, targetLanguage);
      if (hit) return hit;
    }

    return undefined;
  }, [text, questionId, targetLanguage, type, optionKey]);

  if (!targetLanguage || targetLanguage === 'deaktiviert' || !translatedText) {
    return null;
  }

  // Compact variant: Subtle 1-2 line subtitle directly underneath options/answers
  if (variant === 'compact') {
    return (
      <div 
        className={`text-xs text-amber-300/90 font-medium italic mt-1 leading-snug break-words whitespace-normal pointer-events-none select-none ${isRtl ? 'text-right font-sans' : 'text-left'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {translatedText}
      </div>
    );
  }

  // Default variant: Detailed translation card with globe badge
  return (
    <div className="mt-2.5 pt-2 border-t border-white/[0.04] text-[12.5px] leading-relaxed transition-all duration-200 pointer-events-none select-none">
      {/* Small badge */}
      <div className="flex items-center gap-1.5 text-[9.5px] text-[#dfb871]/70 font-mono tracking-wider uppercase mb-1">
        <Globe className="w-2.5 h-2.5" />
        <span>{LANGUAGE_LABELS[targetLanguage] || targetLanguage} Übersetzung:</span>
      </div>

      {/* Translation Text */}
      <div 
        className={`text-[#c8a97e] font-sans antialiased ${
          isRtl 
            ? 'text-right font-normal text-sm leading-relaxed bg-[#dfb871]/[0.02] p-2.5 rounded-lg border border-white/[0.02]' 
            : 'text-slate-300'
        }`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {translatedText}
      </div>
    </div>
  );
}
