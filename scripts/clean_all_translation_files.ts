import fs from 'fs';
import path from 'path';

// Clean German parenthetical artifacts from foreign language strings
function cleanForeignString(str: string): string {
  if (!str || typeof str !== 'string') return str;

  let cleaned = str;

  // Patterns to strip:
  // e.g., "(Besitzdiener)", "(Eigentümer)", "(Notwehr)", "(Jedermann)", "(§ 34a GewO)", "(BGB)", "(StGB)", "(StPO)", "(Hausrecht)"
  // German words or phrases in parentheses
  cleaned = cleaned.replace(/\s*\([A-ZÄÖÜa-zäöüß\s\/\.,;:\-–—§0-9]+\)/g, (match) => {
    // Keep clean
    return '';
  });

  // Clean double spaces and trim
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
  return cleaned;
}

const filesToClean = [
  'src/data/translationsPart1.ts',
  'src/data/translationsPart2.ts',
  'src/data/translationsPart3.ts',
  'src/data/translationsPart4.ts',
  'src/data/translationsPart5.ts',
  'src/data/translationsPart6.ts',
  'src/data/translationsPart7.ts',
  'src/data/translationsPart8.ts',
  'src/data/translationsPart9.ts',
  'src/data/translationsPart10.ts',
  'src/data/translationsSpecialA.ts',
  'src/data/translationsSpecialB.ts'
];

for (const relPath of filesToClean) {
  const fullPath = path.join(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf-8');

  // Match lines with fa:, ar:, ru:, en:, farsi:, arabisch:, russisch:, englisch:
  const lineRegex = /^(\s*(?:fa|ar|ru|en|farsi|arabisch|russisch|englisch)\s*:\s*)(['"`])(.*?)(['"`],?\s*)$/gm;

  let replacements = 0;
  content = content.replace(lineRegex, (match, prefix, quote, text, suffix) => {
    const cleaned = cleanForeignString(text);
    if (cleaned !== text) {
      replacements++;
      return `${prefix}${quote}${cleaned}${suffix}`;
    }
    return match;
  });

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Cleaned ${relPath}: ${replacements} lines modified`);
}

console.log('All translation files cleaned successfully!');
