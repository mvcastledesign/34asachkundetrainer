import { IHK_120_EXAM_QUESTIONS, IHK_CATEGORIES_CONFIG } from '../src/data/ihk120ExamQuestions.ts';
import { INITIAL_WRITTEN_QUESTIONS } from '../src/initialWrittenQuestions.ts';
import { INITIAL_QUESTIONS } from '../src/initialQuestions.ts';
import { INITIAL_FALLBEISPIELE } from '../src/initialFallbeispiele.ts';

console.log('--- STARTING COMPREHENSIVE PROJECT DATASET AUDIT ---');

let totalErrors = 0;

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error('❌ ERROR:', msg);
    totalErrors++;
  }
}

// 1. Audit IHK_120_EXAM_QUESTIONS (82 questions)
console.log(`\nAuditing IHK_120_EXAM_QUESTIONS (${IHK_120_EXAM_QUESTIONS.length} items)...`);
assert(IHK_120_EXAM_QUESTIONS.length === 82, `Expected 82 IHK questions, found ${IHK_120_EXAM_QUESTIONS.length}`);

IHK_120_EXAM_QUESTIONS.forEach((q, idx) => {
  const qId = q.id || `[Index ${idx}]`;
  assert(!!q.id && q.id.trim() !== '', `${qId}: Missing id`);
  assert(!!q.kategorie && q.kategorie.trim() !== '', `${qId}: Missing kategorie`);
  assert(!!q.frage && q.frage.trim() !== '', `${qId}: Missing frage`);
  assert(Array.isArray(q.optionen) && q.optionen.length === 4, `${qId}: optionen length must be 4`);
  assert(Array.isArray(q.options) && q.options.length === 4, `${qId}: options array length must be 4`);
  assert(Array.isArray(q.korrekteAntworten) && q.korrekteAntworten.length >= 1, `${qId}: korrekteAntworten must have at least 1 index`);
  q.korrekteAntworten.forEach(ans => {
    assert(ans >= 0 && ans <= 3, `${qId}: korrekteAntwort index ${ans} out of bounds`);
  });
  assert(q.punkte === 1 || q.punkte === 2, `${qId}: punkte must be 1 or 2`);
  assert(!!q.erklaerung && q.erklaerung.trim() !== '', `${qId}: Missing erklaerung`);

  // Translations
  assert(!!q.translations, `${qId}: Missing translations object`);
  if (q.translations) {
    ['ru', 'en', 'ar', 'fa'].forEach(lang => {
      const t = (q.translations as any)[lang];
      assert(!!t, `${qId}: Missing translations.${lang}`);
      assert(!!t?.question && t.question.trim() !== '', `${qId}: translations.${lang}.question is empty`);
      assert(!!t?.explanation && t.explanation.trim() !== '', `${qId}: translations.${lang}.explanation is empty`);
    });
  }

  // Options translations
  q.options?.forEach((opt, optIdx) => {
    assert(!!opt.text && opt.text.trim() !== '', `${qId} Option ${optIdx}: Missing text`);
    assert(!!opt.translations, `${qId} Option ${optIdx}: Missing translations`);
    if (opt.translations) {
      ['ru', 'en', 'ar', 'fa'].forEach(lang => {
        const t = (opt.translations as any)[lang];
        assert(!!t && typeof t === 'string' && t.trim() !== '', `${qId} Option ${optIdx}: translations.${lang} is empty`);
      });
    }
  });
});

// 2. Audit INITIAL_WRITTEN_QUESTIONS (30 questions)
console.log(`\nAuditing INITIAL_WRITTEN_QUESTIONS (${INITIAL_WRITTEN_QUESTIONS.length} items)...`);
assert(INITIAL_WRITTEN_QUESTIONS.length === 30, `Expected 30 initial written questions, found ${INITIAL_WRITTEN_QUESTIONS.length}`);

INITIAL_WRITTEN_QUESTIONS.forEach((q, idx) => {
  const qId = q.id || `[Index ${idx}]`;
  assert(!!q.id && q.id.trim() !== '', `${qId}: Missing id`);
  assert(!!q.kategorie && q.kategorie.trim() !== '', `${qId}: Missing kategorie`);
  assert(!!q.frage && q.frage.trim() !== '', `${qId}: Missing frage`);
  assert(Array.isArray(q.optionen) && q.optionen.length === 4, `${qId}: optionen length must be 4`);
  assert(Array.isArray(q.options) && q.options.length === 4, `${qId}: options array length must be 4`);
  assert(Array.isArray(q.korrekteAntworten) && q.korrekteAntworten.length >= 1, `${qId}: korrekteAntworten must have at least 1 index`);
  q.korrekteAntworten.forEach(ans => {
    assert(ans >= 0 && ans <= 3, `${qId}: korrekteAntwort index ${ans} out of bounds`);
  });
  assert(q.punkte === 1 || q.punkte === 2, `${qId}: punkte must be 1 or 2`);
  assert(!!q.erklaerung && q.erklaerung.trim() !== '', `${qId}: Missing erklaerung`);

  // Translations
  assert(!!q.translations, `${qId}: Missing translations object`);
  if (q.translations) {
    ['ru', 'en', 'ar', 'fa'].forEach(lang => {
      const t = (q.translations as any)[lang];
      assert(!!t, `${qId}: Missing translations.${lang}`);
      assert(!!t?.question && t.question.trim() !== '', `${qId}: translations.${lang}.question is empty`);
      assert(!!t?.explanation && t.explanation.trim() !== '', `${qId}: translations.${lang}.explanation is empty`);
    });
  }

  // Options translations
  q.options?.forEach((opt, optIdx) => {
    assert(!!opt.text && opt.text.trim() !== '', `${qId} Option ${optIdx}: Missing text`);
    assert(!!opt.translations, `${qId} Option ${optIdx}: Missing translations`);
    if (opt.translations) {
      ['ru', 'en', 'ar', 'fa'].forEach(lang => {
        const t = (opt.translations as any)[lang];
        assert(!!t && typeof t === 'string' && t.trim() !== '', `${qId} Option ${optIdx}: translations.${lang} is empty`);
      });
    }
  });
});

// 3. Audit INITIAL_QUESTIONS (Oral exam flashcards)
console.log(`\nAuditing INITIAL_QUESTIONS (${INITIAL_QUESTIONS.length} items)...`);
INITIAL_QUESTIONS.forEach((q, idx) => {
  const qId = q.id || `[Index ${idx}]`;
  assert(!!q.id && q.id.trim() !== '', `${qId}: Missing id`);
  assert(!!q.kategorie && q.kategorie.trim() !== '', `${qId}: Missing kategorie`);
  assert(!!q.frage && q.frage.trim() !== '', `${qId}: Missing frage`);
  assert(!!q.antwort && q.antwort.trim() !== '', `${qId}: Missing antwort`);
});

// 4. Audit INITIAL_FALLBEISPIELE (Case studies)
console.log(`\nAuditing INITIAL_FALLBEISPIELE (${INITIAL_FALLBEISPIELE.length} items)...`);
INITIAL_FALLBEISPIELE.forEach((fb, idx) => {
  const fbId = fb.id || `[Index ${idx}]`;
  assert(!!fb.title && fb.title.trim() !== '', `${fbId}: Missing title`);
  assert(!!fb.question && fb.question.trim() !== '', `${fbId}: Missing question`);
  assert(Array.isArray(fb.options) && fb.options.length === 4, `${fbId}: options length must be 4`);
  assert(typeof fb.correct === 'number' && fb.correct >= 0 && fb.correct <= 3, `${fbId}: correct index invalid`);
  assert(!!fb.explanation && fb.explanation.trim() !== '', `${fbId}: Missing explanation`);
});

console.log('\n======================================================');
if (totalErrors === 0) {
  console.log('✅ ALL AUDITS PASSED WITH ZERO ERRORS (100% COMPLETE)!');
} else {
  console.error(`❌ AUDIT COMPLETED WITH ${totalErrors} ERRORS.`);
  process.exit(1);
}
console.log('======================================================');
