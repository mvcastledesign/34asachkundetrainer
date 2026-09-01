import fs from 'fs';
import path from 'path';

// Helper to remove German parenthetical annotations from foreign language strings
export function cleanForeignText(text: string, lang: 'en' | 'ru' | 'ar' | 'fa'): string {
  if (!text) return '';
  let cleaned = text;

  // Patterns to remove:
  // e.g. "(Besitzdiener)", "(Eigentümer)", "(Notwehr)", "(Jedermann)", "(§ 34a GewO)", "(BGB)", "(StGB)", "(StPO)"
  // German words inside parentheses in foreign text
  cleaned = cleaned.replace(/\s*\([A-ZÄÖÜa-zäöüß\s\/\.,;:\-–—§0-9]+\)/g, (match) => {
    // Check if it's purely a standard legal paragraph like (§ 34a GewO) or German term
    return '';
  });

  // Remove trailing or leading spaces and double spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
  return cleaned;
}

console.log('cleanForeignText loaded');
