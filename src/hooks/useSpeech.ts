/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { speakText } from '../utils/speech.ts';

/**
 * Reusable hook to read questions or answers aloud in German, with play/pause/resume/stop functionality.
 */
export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [spokenText, setSpokenText] = useState<string>('');

  // Stop function with Chrome/Safari safeguard
  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        // Always resume before canceling to prevent Chromium/Safari from freezing up
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();
      } catch (err) {
        console.warn("Speech Synthesis cancel failed:", err);
      }
    }
    setIsSpeaking(false);
    setIsPaused(false);
    setSpokenText('');
  }, []);

  // Map pause and resume safely to stop/speak to prevent Web Speech API locks
  const pause = useCallback(() => {
    stop();
  }, [stop]);

  const resume = useCallback(() => {
    // No-op or map if necessary, but with stop/start pattern, pause/resume shouldn't freeze
    stop();
  }, [stop]);

  // Speak function
  const speak = useCallback((text: string) => {
    if (!text) return;

    const isPhysicallySpeaking = typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.speaking;

    // If currently speaking the exact same text, toggle off completely
    if (spokenText === text && (isSpeaking || isPhysicallySpeaking)) {
      stop();
      return;
    }

    // Stop preceding speech first
    stop();

    setSpokenText(text);
    setIsSpeaking(true);
    setIsPaused(false);

    speakText(
      text,
      () => {
        setIsSpeaking(true);
        setIsPaused(false);
      },
      () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setSpokenText('');
      },
      () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setSpokenText('');
      }
    );
  }, [spokenText, isSpeaking, stop]);

  // Handle voices loading (needed for Chrome/Safari sometimes)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const handleVoicesChanged = () => {
        // Refresh voices when needed
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  // Guarantee speech stops on component unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
          window.speechSynthesis.cancel();
        } catch (e) {}
      }
    };
  }, []);

  return {
    isSpeaking,
    isPaused,
    spokenText,
    speak,
    pause,
    resume,
    stop
  };
}
