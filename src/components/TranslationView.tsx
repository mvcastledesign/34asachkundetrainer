import React, { useMemo } from 'react';
import { Globe } from 'lucide-react';
import { getStaticTranslation } from '../data/translationsData.ts';

interface TranslationViewProps {
  text: string;
  questionId?: string;
  targetLanguage: string; // 'farsi' | 'arabisch' | 'russisch' | 'englisch' | 'deaktiviert'
  type?: 'frage' | 'antwort';
  variant?: 'default' | 'compact';
}

// Display labels for language badges
const LANGUAGE_LABELS: Record<string, string> = {
  farsi: 'Farsi (فارسی)',
  arabisch: 'Arabisch (العربية)',
  russisch: 'Russisch (Русский)',
  englisch: 'Englisch (English)',
};

export default function TranslationView({ 
  text, 
  questionId, 
  targetLanguage, 
  type = 'frage', 
  variant = 'default' 
}: TranslationViewProps) {
  const isRtl = targetLanguage === 'farsi' || targetLanguage === 'arabisch';

  // Instant static translation in 0 ms without any network calls
  const translatedText = useMemo(() => {
    if (!targetLanguage || targetLanguage === 'deaktiviert' || !text) {
      return '';
    }
    return getStaticTranslation(text, questionId, targetLanguage, type);
  }, [text, questionId, targetLanguage, type]);

  if (!targetLanguage || targetLanguage === 'deaktiviert' || !translatedText) {
    return null;
  }

  // Compact variant: Subtle 1-2 line subtitle directly underneath options/answers
  if (variant === 'compact') {
    return (
      <div 
        className={`text-xs text-amber-300/90 font-medium italic mt-1 leading-snug break-words whitespace-normal pointer-events-none select-none ${isRtl ? 'text-right' : 'text-left'}`}
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
