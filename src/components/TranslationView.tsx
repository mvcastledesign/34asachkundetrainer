import React, { useState, useEffect } from 'react';
import { Globe, AlertCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

interface TranslationViewProps {
  text: string;
  questionId: string;
  targetLanguage: string; // 'farsi' | 'arabisch' | 'russisch' | 'englisch' | 'deaktiviert'
  type: 'frage' | 'antwort' | 'erklaerung';
  variant?: 'default' | 'compact' | 'collapsible';
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

// Map key to display names
export const LANGUAGE_LABELS: Record<string, string> = {
  farsi: 'Farsi (فارسی)',
  arabisch: 'Arabisch (العربية)',
  russisch: 'Russisch (Русский)',
  englisch: 'Englisch (English)',
};

export default function TranslationView({
  text,
  questionId,
  targetLanguage,
  type,
  variant = 'default',
  collapsible = false,
  defaultExpanded = false,
}: TranslationViewProps) {
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  const isRtl = targetLanguage === 'farsi' || targetLanguage === 'arabisch';
  const isCollapsible = collapsible || variant === 'collapsible';

  useEffect(() => {
    if (!targetLanguage || targetLanguage === 'deaktiviert' || !text || !text.trim()) {
      setTranslatedText('');
      return;
    }

    const cleanId = String(questionId || 'gen').replace(/[^a-zA-Z0-9_-]/g, '_');
    const cacheKey = `sachkunde_34a_trans_${cleanId}_${targetLanguage}_${type}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      setTranslatedText(cached);
      setError('');
      return;
    }

    let isMounted = true;

    // Trigger on-the-fly translation via Gemini API
    const fetchTranslation = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text.trim(),
            targetLanguage: LANGUAGE_LABELS[targetLanguage] || targetLanguage,
          }),
        });

        if (!response.ok) {
          throw new Error('Translation request failed.');
        }

        const data = await response.json();
        if (data?.translation && isMounted) {
          localStorage.setItem(cacheKey, data.translation);
          setTranslatedText(data.translation);
        } else {
          throw new Error('No translation text returned.');
        }
      } catch (err: any) {
        // Client-side fallback via Google Translate free GTX endpoint
        try {
          const langCodes: Record<string, string> = { farsi: 'fa', arabisch: 'ar', russisch: 'ru', englisch: 'en' };
          const code = langCodes[targetLanguage] || 'en';
          const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=${code}&dt=t&q=${encodeURIComponent(text.trim())}`;
          const gtxRes = await fetch(gtxUrl);
          if (gtxRes.ok) {
            const gtxData = await gtxRes.json();
            if (Array.isArray(gtxData) && Array.isArray(gtxData[0])) {
              const resText = gtxData[0]
                .filter((seg: any) => Array.isArray(seg) && typeof seg[0] === 'string')
                .map((seg: any) => seg[0])
                .join('');
              if (resText && isMounted) {
                localStorage.setItem(cacheKey, resText);
                setTranslatedText(resText);
                return;
              }
            }
          }
        } catch {
          // Ignore fallback error
        }

        if (isMounted) {
          setTranslatedText(text);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTranslation();

    return () => {
      isMounted = false;
    };
  }, [text, questionId, targetLanguage, type]);

  if (!targetLanguage || targetLanguage === 'deaktiviert' || !text) {
    return null;
  }

  // Compact variant: Subtle 1-2 line subtitle directly underneath without extra borders or padding
  if (variant === 'compact') {
    if (loading) {
      return (
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] sm:text-xs mt-1 animate-pulse">
          <Loader2 className="w-2.5 h-2.5 animate-spin text-[#dfb871]" />
          <span>Übersetze...</span>
        </div>
      );
    }
    if (error || !translatedText || translatedText.trim() === text.trim()) return null;

    return (
      <div 
        className={`text-xs text-amber-300/90 font-medium italic mt-1 leading-snug break-words whitespace-normal ${isRtl ? 'text-right' : 'text-left'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {translatedText}
      </div>
    );
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
          className="flex items-center justify-between w-full px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 text-xs text-slate-300 hover:text-white transition-all group"
        >
          <div className="flex items-center gap-2 text-[11px] font-medium text-[#dfb871]">
            <Globe className="w-3.5 h-3.5 text-[#dfb871]/80" />
            <span>
              {LANGUAGE_LABELS[targetLanguage] || targetLanguage} Übersetzung {isExpanded ? 'ausblenden' : 'anzeigen'}
            </span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-2 p-3 rounded-xl bg-slate-950/70 border border-[#dfb871]/20 text-xs md:text-sm text-slate-200 leading-relaxed animate-fadeIn">
            {loading && (
              <div className="flex items-center gap-2 text-slate-400 py-1 text-xs animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#dfb871]" />
                <span>Lade Übersetzung...</span>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-1.5 text-rose-400 py-1 text-xs">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!loading && !error && translatedText && (
              <div 
                className={`font-sans ${isRtl ? 'text-right leading-loose' : 'text-left leading-relaxed'} text-amber-100/90`}
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

  // Default block variant
  return (
    <div className="mt-2.5 pt-2 border-t border-white/[0.04] text-[12.5px] leading-relaxed transition-all duration-200">
      {/* Small badge */}
      <div className="flex items-center gap-1.5 text-[9.5px] text-[#dfb871]/70 font-mono tracking-wider uppercase mb-1">
        <Globe className="w-2.5 h-2.5" />
        <span>{LANGUAGE_LABELS[targetLanguage] || targetLanguage} Übersetzung:</span>
      </div>

      {loading && (
        <div className="flex items-center gap-2 text-slate-500 py-1 font-mono text-xs animate-pulse">
          <Loader2 className="w-3 h-3 animate-spin text-[#dfb871]" />
          <span>Lade Übersetzung...</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-1.5 text-rose-400 font-medium py-1 text-xs">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && translatedText && (
        <div 
          className={`text-[#c8a97e] font-sans antialiased ${isRtl ? 'text-right font-normal text-md leading-loose bg-[#dfb871]/[0.02] p-2.5 rounded-lg border border-white/[0.02]' : 'text-slate-300'}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {translatedText}
        </div>
      )}
    </div>
  );
}
