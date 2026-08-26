/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

let currentUtterance: SpeechSynthesisUtterance | null = null;
let speakTimeout: any = null;

/**
 * Clean text to make the audio speaker read it more naturally
 */
function cleanTextForSpeech(text: string): string {
  if (!text) return '';
  return text
    .replace(/[*#_`~]/g, '') // Remove simple markdown syntax
    .replace(/[-+*] /g, ', ') // Replace bullet points with soft pauses
    .replace(/\(\)/g, ''); // Empty parens remover
}

/**
 * Searches for a suitable German voice and speaks the text
 */
export function speakText(
  text: string,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: any) => void
) {
  if (speakTimeout) {
    clearTimeout(speakTimeout);
    speakTimeout = null;
  }

  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onError) onError('Speech Synthesis not supported in this browser.');
    return;
  }

  // Workaround for Chrome/Safari hanging bug: resume first if paused before canceling
  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();
  } catch (err) {
    console.warn("Speech Synthesis cancel warning:", err);
  }

  const cleaned = cleanTextForSpeech(text);
  if (!cleaned) return;

  const utterance = new SpeechSynthesisUtterance(cleaned);
  currentUtterance = utterance;

  // Find the most realistic/natural German voice
  const voices = window.speechSynthesis.getVoices();
  const germanVoices = voices.filter(v => v.lang.startsWith('de') || v.lang.includes('DE'));
  
  if (germanVoices.length > 0) {
    // Rank German voices to prioritize natural-sounding TTS engines
    const scoredVoices = germanVoices.map(voice => {
      const name = voice.name.toLowerCase();
      let score = 0;

      // Microsoft edge and modern browsers offer incredible "natural" online voices
      if (name.includes('natural') || name.includes('online') || name.includes('neural')) {
        score += 100;
      }
      // Google high-quality/standard voices
      if (name.includes('google')) {
        score += 80;
      }
      // Siri or Apple Premium / Enhanced voices
      if (name.includes('premium') || name.includes('enhanced') || name.includes('siri')) {
        score += 70;
      }
      // Specific high-quality voices known to sound good in German
      if (name.includes('katja') || name.includes('stefan')) {
        score += 50;
      }
      if (name.includes('hedda') || name.includes('yannick') || name.includes('anna')) {
        score += 40;
      }
      // Browser-provided local high-quality engines
      if (voice.localService) {
        score += 15;
      }
      return { voice, score };
    });

    // Sort by descending score
    scoredVoices.sort((a, b) => b.score - a.score);
    utterance.voice = scoredVoices[0].voice;
  }
  utterance.lang = 'de-DE';
  utterance.pitch = 1.0;
  utterance.rate = 1.05; // Slightly faster natural speed for pleasant, punchy reading

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
    }
    if (onEnd) onEnd();
  };

  utterance.onerror = (event) => {
    // Treat 'interrupted' as end event without treating as big error
    if (currentUtterance === utterance) {
      currentUtterance = null;
    }
    if (onEnd) {
      onEnd();
    }
    if (onError && event.error !== 'interrupted') {
      onError(event);
    }
  };

  // 50ms safety transition timeout after cancel before uttering new sounds 
  // prevents browsers from eating the speech event during quick taps.
  speakTimeout = setTimeout(() => {
    try {
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      if (onError) onError(err);
    } finally {
      speakTimeout = null;
    }
  }, 40);
}

/**
 * Stops any active speech synthesis
 */
export function stopSpeech() {
  if (speakTimeout) {
    clearTimeout(speakTimeout);
    speakTimeout = null;
  }
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
    currentUtterance = null;
  }
}

/**
 * Checks if speech synthesis is currently active
 */
export function isCurrentlySpeaking(): boolean {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    return window.speechSynthesis.speaking;
  }
  return false;
}
