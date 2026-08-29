import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface TranslatedSublineProps {
  text: string;
  questionId: string;
  targetLanguage?: string; // 'farsi' | 'arabisch' | 'russisch' | 'englisch' | 'deaktiviert'
  type?: string; // e.g. 'frage', 'opt_0', 'opt_1', 'subline'
  className?: string;
  showLoader?: boolean;
}

const LANGUAGE_LABELS: Record<string, string> = {
  farsi: 'Farsi (فارسی)',
  arabisch: 'Arabisch (العربية)',
  russisch: 'Russisch (Русский)',
  englisch: 'Englisch (English)',
};

export const isRtlLanguage = (lang?: string): boolean => {
  return lang === 'farsi' || lang === 'arabisch';
};

/**
 * Dezente Unterzeilen-Komponente für übersetzte Texte (z. B. Multiple-Choice-Optionen A-D, Untertitel).
 */
export default function TranslatedSubline({
  text,
  questionId,
  targetLanguage = 'deaktiviert',
  type = 'subline',
  className = 'text-xs text-slate-400 mt-0.5',
  showLoader = false,
}: TranslatedSublineProps) {
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isRtl = isRtlLanguage(targetLanguage);

  useEffect(() => {
    if (!targetLanguage || targetLanguage === 'deaktiviert' || !text || !text.trim()) {
      setTranslatedText('');
      setLoading(false);
      return;
    }

    const cleanId = String(questionId || 'gen').replace(/[^a-zA-Z0-9_-]/g, '_');
    const cleanType = String(type || 'subline').replace(/[^a-zA-Z0-9_-]/g, '_');
    const cacheKey = `sachkunde_34a_trans_${cleanId}_${targetLanguage}_${cleanType}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      setTranslatedText(cached);
      return;
    }

    let isMounted = true;

    const fetchTranslation = async () => {
      setLoading(true);
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

        if (response.ok) {
          const data = await response.json();
          if (data?.translation && isMounted) {
            localStorage.setItem(cacheKey, data.translation);
            setTranslatedText(data.translation);
            return;
          }
        }
        throw new Error('API translation failed');
      } catch {
        // Client-side fallback via Google Translate free endpoint
        try {
          const langCodes: Record<string, string> = {
            farsi: 'fa',
            arabisch: 'ar',
            russisch: 'ru',
            englisch: 'en',
          };
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
          // Graceful fallback
        }

        if (isMounted) {
          setTranslatedText('');
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

  if (loading) {
    if (!showLoader) return null;
    return (
      <div className="flex items-center gap-1.5 text-slate-500 text-[10px] mt-0.5 animate-pulse">
        <Loader2 className="w-2.5 h-2.5 animate-spin text-[#dfb871]" />
        <span>Übersetze...</span>
      </div>
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
