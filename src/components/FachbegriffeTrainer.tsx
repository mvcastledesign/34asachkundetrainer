import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Target, 
  Search, 
  Globe, 
  Scale, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  BookmarkCheck, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  ArrowRight,
  RotateCcw,
  Check,
  Info
} from 'lucide-react';
import { 
  GLOSSARY_TERMS, 
  GLOSSARY_CATEGORIES, 
  EXAM_TRAPS, 
  GlossaryTerm, 
  ExamTrap 
} from '../data/glossaryData.ts';
import CustomDropdown from './CustomDropdown.tsx';
import { logQuestionAttempt, InteractionTracker, generateSessionId } from '../lib/analytics.ts';

interface FachbegriffeTrainerProps {
  translationLang?: string;
  onRecordHistory?: (item: { typ: 'Lernen' | 'Prüfung' | 'Karteikarte'; anzahl: number; richtig: number; falsch: number }) => void;
}

const SUPPORTED_LANGUAGES: { key: keyof GlossaryTerm['translations']; label: string; flag: string }[] = [
  { key: 'farsi', label: 'Farsi (فارسی)', flag: '🇮🇷' },
  { key: 'arabisch', label: 'Arabisch (العربية)', flag: '🇸🇦' },
  { key: 'russisch', label: 'Russisch (Русский)', flag: '🌐' },
  { key: 'englisch', label: 'Englisch (English)', flag: '🇬🇧' }
];

const languageDropdownOptions = SUPPORTED_LANGUAGES.map(lang => ({
  value: lang.key,
  label: lang.label,
  icon: <span className="text-sm">{lang.flag}</span>
}));

export default function FachbegriffeTrainer({ translationLang = 'deaktiviert', onRecordHistory }: FachbegriffeTrainerProps) {
  // Active Tab: 'glossar' | 'pruefungsdeutsch'
  const [activeTab, setActiveTab] = useState<'glossar' | 'pruefungsdeutsch'>('glossar');

  // TAB 1: GLOSSAR STATES
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [activeLanguage, setActiveLanguage] = useState<keyof GlossaryTerm['translations']>(() => {
    if (translationLang && translationLang !== 'deaktiviert') {
      const match = SUPPORTED_LANGUAGES.find(l => l.key === translationLang);
      if (match) return match.key;
    }
    return 'englisch';
  });
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('sachkunde_34a_glossary_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [expandedTranslationIds, setExpandedTranslationIds] = useState<string[]>([]);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // TAB 2: PRÜFUNGSDEUTSCH & FRAGESTELLUNGS-KNACKER STATES
  const [selectedTrapId, setSelectedTrapId] = useState<string>(EXAM_TRAPS[0].id);
  const [highlightSignals, setHighlightSignals] = useState<boolean>(false);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number[]>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<Record<string, boolean>>({});

  // Diagnostic Tracking Refs
  const sessionIdRef = useRef<string>(generateSessionId('fachbegriffe'));
  const trackerRef = useRef<InteractionTracker>(new InteractionTracker());

  // Reset timer on trap change
  useEffect(() => {
    trackerRef.current.reset();
  }, [selectedTrapId]);

  // Toggle bookmark
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      localStorage.setItem('sachkunde_34a_glossary_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  // Toggle translation collapse
  const toggleTranslation = (id: string) => {
    setExpandedTranslationIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Text-To-Speech for German pronunciation
  const handleSpeak = (id: string, textToSpeak: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Filtered glossary terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(item => {
      // Category check
      if (selectedCategory !== 'Alle' && item.kategorie !== selectedCategory) {
        return false;
      }
      // Bookmark filter check
      if (onlyBookmarks && !bookmarkedIds.includes(item.id)) {
        return false;
      }
      // Search query check
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.term.toLowerCase().includes(query) ||
        item.paragraph.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        item.merksatz.toLowerCase().includes(query) ||
        item.kategorie.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, onlyBookmarks, bookmarkedIds, searchQuery]);

  // Active Trap Item
  const activeTrap = useMemo(() => {
    return EXAM_TRAPS.find(t => t.id === selectedTrapId) || EXAM_TRAPS[0];
  }, [selectedTrapId]);

  // Handle Trap exercise selection
  const handleOptionSelect = (trapId: string, optionIndex: number, isMulti: boolean) => {
    if (isAnswerSubmitted[trapId]) return; // locked if submitted

    trackerRef.current.recordInteraction(optionIndex);

    setUserSelectedAnswers(prev => {
      const current = prev[trapId] || [];
      if (isMulti) {
        // Toggle selection
        if (current.includes(optionIndex)) {
          return { ...prev, [trapId]: current.filter(i => i !== optionIndex) };
        } else {
          return { ...prev, [trapId]: [...current, optionIndex] };
        }
      } else {
        // Single selection
        return { ...prev, [trapId]: [optionIndex] };
      }
    });
  };

  const handleExerciseSubmit = (trap: ExamTrap) => {
    const selected = userSelectedAnswers[trap.id] || [];
    if (selected.length === 0) return;

    const metrics = trackerRef.current.getMetrics();
    setIsAnswerSubmitted(prev => ({ ...prev, [trap.id]: true }));

    const correctList = trap.practiceExercise.correctIndices;
    const isPerfect = selected.length === correctList.length && selected.every(i => correctList.includes(i));

    // Fire telemetry to Supabase question_attempts
    logQuestionAttempt({
      session_id: sessionIdRef.current,
      mode: 'glossary',
      question_id: String(`trap_${trap.id}`),
      topic: String(trap.category || 'Prüfungsdeutsch & Signalwörter'),
      is_correct: Boolean(isPerfect),
      time_spent_ms: Number(metrics.time_spent_ms || 1500),
      switched_answers: Boolean(metrics.switched_answers || false)
    });

    // Record stats if provided
    if (onRecordHistory) {
      onRecordHistory({
        typ: 'Lernen',
        anzahl: 1,
        richtig: isPerfect ? 1 : 0,
        falsch: isPerfect ? 0 : 1
      });
    }
  };

  const handleExerciseReset = (trapId: string) => {
    trackerRef.current.reset();
    setIsAnswerSubmitted(prev => ({ ...prev, [trapId]: false }));
    setUserSelectedAnswers(prev => ({ ...prev, [trapId]: [] }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-3 sm:p-6 bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl space-y-6">
      
      {/* Header & Main Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#dfb871]/15 text-[#dfb871] border border-[#dfb871]/30 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#dfb871]" /> § 34A SPRACH- & PRÜFUNGS-TRAINER
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-white mt-1.5 tracking-tight flex items-center gap-2">
            Fachbegriffe-Glossar & Prüfungsdeutsch-Trainer
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5 max-w-2xl">
            Meistere juristisches Deutsch, verstehe Signalwörter und lerne die wichtigsten § 34a Schlüsselbegriffe mit glasklaren Praxis-Merksätzen.
          </p>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-white/10 shrink-0 self-start md:self-auto">
          <button
            id="tab-glossar-btn"
            onClick={() => setActiveTab('glossar')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'glossar'
                ? 'bg-gradient-to-r from-[#dfb871] to-[#cba358] text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>📖 Fachbegriffe-Glossar</span>
          </button>
          <button
            id="tab-pruefungsdeutsch-btn"
            onClick={() => setActiveTab('pruefungsdeutsch')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'pruefungsdeutsch'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>🎯 Prüfungsdeutsch & Fallen</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: INTERAKTIVES FACHBEGRIFFE-GLOSSAR                                   */}
      {/* ========================================================================= */}
      {activeTab === 'glossar' && (
        <div className="space-y-5">
          
          {/* Controls: Search, Language Picker, Category Filters */}
          <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
              {/* Search Field */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Begriff, Paragraph (§ 858 BGB...) oder Stichwort suchen..."
                  className="w-full pl-9.5 pr-4 py-2.5 bg-slate-950 text-slate-100 text-xs sm:text-sm rounded-xl border border-white/10 focus:border-[#dfb871] focus:ring-1 focus:ring-[#dfb871] focus:outline-none placeholder:text-slate-500 transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs font-mono px-1.5 py-0.5 rounded hover:bg-white/10"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Translation Language Selector matching site dropdown design */}
              <div className="flex items-center gap-2 shrink-0">
                <Globe className="w-3.5 h-3.5 text-[#dfb871] shrink-0" />
                <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">Übersetzung:</span>
                <CustomDropdown
                  options={languageDropdownOptions}
                  value={activeLanguage}
                  onChange={(val) => setActiveLanguage(val as keyof GlossaryTerm['translations'])}
                  maxWidth="w-56"
                  align="right"
                  className="min-w-[170px]"
                />
              </div>

              {/* Bookmark Filter Toggle */}
              <button
                onClick={() => setOnlyBookmarks(!onlyBookmarks)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shrink-0 ${
                  onlyBookmarks 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm' 
                    : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                }`}
                title="Nur gemerkte Begriffe anzeigen"
              >
                <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>Merkliste ({bookmarkedIds.length})</span>
              </button>
            </div>

            {/* Category Badges Grid */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3 text-slate-400" /> Filter:
              </span>
              {GLOSSARY_CATEGORIES.map(cat => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#dfb871]/20 text-[#dfb871] border-[#dfb871]/50 shadow-sm font-bold'
                        : 'bg-slate-950/60 text-slate-400 border-white/5 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
            <span>
              Gefunden: <strong className="text-white">{filteredTerms.length}</strong> Begriffe
            </span>
            <span className="text-[11px] text-slate-500">
              Tipp: Klicke auf 🔊 für Audio-Aussprache
            </span>
          </div>

          {/* Term Cards Grid */}
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-950/50 rounded-2xl border border-white/5">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-200">Keine Fachbegriffe gefunden</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Passe deinen Suchbegriff oder die Kategorie-Filter an, um die gewünschten Rechtsbegriffe zu sehen.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Alle'); setOnlyBookmarks(false); }}
                className="mt-3.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-700 transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredTerms.map(item => {
                const isBookmarked = bookmarkedIds.includes(item.id);
                const isExpanded = expandedTranslationIds.includes(item.id) || (translationLang !== 'deaktiviert' && translationLang !== '');
                const translationText = item.translations[activeLanguage] || item.translations.englisch;

                return (
                  <div
                    key={item.id}
                    className="bg-slate-950/80 border border-white/10 hover:border-[#dfb871]/40 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-[#dfb871]/5 group relative"
                  >
                    {/* Top row: Category, Paragraph & Actions */}
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-white/10 text-[10px] font-mono font-bold tracking-tight">
                            {item.kategorie}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25 text-[10px] font-mono font-bold flex items-center gap-1">
                            <Scale className="w-2.5 h-2.5" /> {item.paragraph}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          {/* Audio pronunciation button */}
                          <button
                            onClick={(e) => handleSpeak(item.id, `${item.term}. ${item.definition}. ${item.merksatz}`, e)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              speakingId === item.id 
                                ? 'bg-emerald-500 text-slate-950' 
                                : 'text-slate-400 hover:text-white hover:bg-white/10'
                            }`}
                            title="Begriff und Erklärung vorlesen"
                          >
                            {speakingId === item.id ? (
                              <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                            ) : (
                              <Volume2 className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {/* Bookmark button */}
                          <button
                            onClick={(e) => toggleBookmark(item.id, e)}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              isBookmarked 
                                ? 'text-amber-400 bg-amber-500/10' 
                                : 'text-slate-500 hover:text-amber-300 hover:bg-white/5'
                            }`}
                            title={isBookmarked ? 'Aus Merkliste entfernen' : 'Zur Merkliste hinzufügen'}
                          >
                            {isBookmarked ? (
                              <BookmarkCheck className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ) : (
                              <Bookmark className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Term Title */}
                      <h3 className="text-sm sm:text-base font-bold font-display text-white tracking-tight break-words group-hover:text-[#dfb871] transition-colors leading-snug">
                        {item.term}
                      </h3>

                      {/* Einfach-Deutsch Erklärung */}
                      <div className="bg-slate-900/90 border border-white/5 rounded-lg p-2.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-display mb-1">
                          Glasklare Definition:
                        </span>
                        <p className="text-xs text-slate-200 font-sans leading-relaxed break-words whitespace-normal">
                          {item.definition}
                        </p>
                      </div>

                      {/* Translation Block (Toggleable or Auto-Shown) */}
                      <div className="border border-white/5 bg-slate-950 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleTranslation(item.id)}
                          className="w-full flex items-center justify-between px-2.5 py-1.5 text-[11px] font-bold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer font-sans bg-white/[0.02]"
                        >
                          <span className="flex items-center gap-1.5">
                            <Globe className="w-3 h-3 text-[#dfb871]" />
                            <span>Übersetzung ({SUPPORTED_LANGUAGES.find(l => l.key === activeLanguage)?.label})</span>
                          </span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>

                        {isExpanded && (
                          <div 
                            className={`p-2.5 border-t border-white/5 text-xs text-[#c6dbef] leading-relaxed break-words whitespace-normal bg-cyan-950/20 ${
                              activeLanguage === 'farsi' || activeLanguage === 'arabisch' ? 'text-right font-sans' : 'text-left font-sans'
                            }`}
                            dir={activeLanguage === 'farsi' || activeLanguage === 'arabisch' ? 'rtl' : 'ltr'}
                          >
                            {translationText}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Praxis-Merksatz Box at bottom */}
                    <div className="mt-3 pt-2.5 border-t border-white/5">
                      <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-2.5 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-wider font-display">
                          <Lightbulb className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>Praxis-Merksatz (Wachdienst):</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans leading-relaxed italic break-words whitespace-normal">
                          {item.merksatz}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PRÜFUNGSDEUTSCH & FRAGESTELLUNGS-KNACKER                            */}
      {/* ========================================================================= */}
      {activeTab === 'pruefungsdeutsch' && (
        <div className="space-y-6">
          
          {/* Top Quick-Navigation Pills for the Traps */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-display">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Wähle eine typische Prüfungsfalle:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {EXAM_TRAPS.map(trap => {
                const isSelected = selectedTrapId === trap.id;
                return (
                  <button
                    key={trap.id}
                    onClick={() => {
                      setSelectedTrapId(trap.id);
                      setHighlightSignals(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                        : 'bg-slate-950/70 border-white/10 hover:border-white/20 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">
                        {trap.badge}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                    <span className={`text-xs font-bold font-display line-clamp-2 leading-snug ${isSelected ? 'text-cyan-200' : 'text-slate-200'}`}>
                      {trap.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Trap Detail View */}
          <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-4 sm:p-6 space-y-6">
            
            {/* Header & Core Rule */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                  {activeTrap.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">• {activeTrap.badge}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                {activeTrap.title}
              </h2>
              
              {/* Golden Rule Banner */}
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3.5 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block font-display">
                    Die goldene Lösungs-Regel:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-semibold mt-0.5 leading-snug">
                    {activeTrap.ruleHeadline}
                  </p>
                </div>
              </div>
            </div>

            {/* Explanation & 3-Step Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-display flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400" /> Warum fallen so viele Prüflinge darauf rein?
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                  {activeTrap.explanation}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-display flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Schritt-für-Schritt Strategie:
                </h3>
                <div className="space-y-1.5 bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  {activeTrap.keyRuleList.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 font-bold font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Practice Question */}
            <div className="bg-slate-900 border border-white/10 rounded-xl p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dfb871] animate-pulse" />
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">
                    Interaktive Mini-Übung: Knacke die Frage!
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Signal Word Reveal Button */}
                  <button
                    onClick={() => setHighlightSignals(!highlightSignals)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      highlightSignals 
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm' 
                        : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{highlightSignals ? 'Signalwörter verbergen' : 'Signalwörter aufdecken 🔍'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text with dynamic highlight */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-white/5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-display mb-1">
                  Prüfungsfrage:
                </span>
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  {highlightSignals ? (
                    <span>
                      {/* Highlight signal words inside the question */}
                      {activeTrap.practiceExercise.question.split(new RegExp(`(${activeTrap.practiceExercise.signalWords.join('|')})`, 'gi')).map((part, index) => {
                        const isMatch = activeTrap.practiceExercise.signalWords.some(w => w.toLowerCase() === part.toLowerCase());
                        return isMatch ? (
                          <mark key={index} className="bg-amber-500/30 text-amber-200 px-1 py-0.5 rounded font-bold border border-amber-500/40">
                            {part}
                          </mark>
                        ) : (
                          <span key={index}>{part}</span>
                        );
                      })}
                    </span>
                  ) : (
                    activeTrap.practiceExercise.question
                  )}
                </p>
              </div>

              {/* Answer Options */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-display">
                  {activeTrap.practiceExercise.correctIndices.length > 1 
                    ? 'Wähle ZWEI Antworten aus:' 
                    : 'Wähle EINE Antwort aus:'}
                </span>

                <div className="grid grid-cols-1 gap-2">
                  {activeTrap.practiceExercise.options.map((option, optIdx) => {
                    const isSubmitted = !!isAnswerSubmitted[activeTrap.id];
                    const userSelected = (userSelectedAnswers[activeTrap.id] || []).includes(optIdx);
                    const isCorrect = activeTrap.practiceExercise.correctIndices.includes(optIdx);

                    let cardStyle = 'bg-slate-950/70 border-white/10 hover:border-white/20 text-slate-200';

                    if (isSubmitted) {
                      if (isCorrect) {
                        cardStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold';
                      } else if (userSelected && !isCorrect) {
                        cardStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                      } else {
                        cardStyle = 'bg-slate-950/40 border-white/5 text-slate-500 opacity-60';
                      }
                    } else if (userSelected) {
                      cardStyle = 'bg-cyan-950/40 border-cyan-400 text-white font-semibold ring-1 ring-cyan-400/30';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(
                          activeTrap.id, 
                          optIdx, 
                          activeTrap.practiceExercise.correctIndices.length > 1
                        )}
                        disabled={isSubmitted}
                        className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${cardStyle}`}
                      >
                        <span className="leading-relaxed break-words whitespace-normal">{option}</span>
                        {isSubmitted ? (
                          isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          ) : userSelected ? (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          ) : null
                        ) : (
                          <div className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center ${
                            userSelected ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'
                          }`}>
                            {userSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit / Reset Actions */}
              <div className="flex items-center justify-between pt-2">
                {!isAnswerSubmitted[activeTrap.id] ? (
                  <button
                    onClick={() => handleExerciseSubmit(activeTrap)}
                    disabled={(userSelectedAnswers[activeTrap.id] || []).length === 0}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                  >
                    <span>Antwort prüfen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleExerciseReset(activeTrap.id)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Nochmal versuchen</span>
                  </button>
                )}
              </div>

              {/* Trick Solution Box if submitted */}
              {isAnswerSubmitted[activeTrap.id] && (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-2 mt-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider font-display">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Lösungstrick & Paragraphen-Analyse:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {activeTrap.practiceExercise.trickExplanation}
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
