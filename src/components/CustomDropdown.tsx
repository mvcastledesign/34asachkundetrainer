import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  menuClassName?: string;
  align?: 'left' | 'right';
  maxWidth?: string;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  className = '',
  menuClassName = '',
  align = 'left',
  maxWidth = 'w-64'
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-block text-left ${className}`}
      style={{ zIndex: isOpen ? 999 : undefined }}
    >
      {/* Target trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-[#090b11]/80 hover:bg-[#12151e] border rounded-xl text-xs sm:text-sm font-semibold text-slate-200 transition-all duration-300 focus:outline-none select-none shadow-lg cursor-pointer ${
          isOpen
            ? 'border-[#dfb871] ring-1 ring-[#dfb871]/40 shadow-[0_0_15px_rgba(223,184,113,0.2)] bg-[#0d101a]'
            : 'border-[#dfb871]/25 hover:border-[#dfb871]/50'
        }`}
      >
        <span className="flex items-center gap-2 truncate">
          {selectedOption?.icon}
          <span className="truncate">{selectedOption?.label}</span>
        </span>
        <ChevronDown 
          className={`w-3.5 h-3.5 text-[#dfb871] transition-transform duration-305 shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {/* Floating Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute mt-2 ${maxWidth} rounded-xl border border-[#dfb871]/25 bg-[#0a0c14] shadow-[0_10px_30px_rgba(0,0,0,0.85)] z-[100] p-1.5 overflow-hidden ${
              align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
            } ${menuClassName}`}
          >
            {/* Ambient Background Glow Inside Panel */}
            <div className="absolute inset-0 bg-[#dfb871]/[0.015] pointer-events-none rounded-xl" />

            <div 
              className="relative max-h-[60vh] sm:max-h-[70vh] md:max-h-[450px] overflow-y-auto space-y-1.5 pr-1.5"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(223, 184, 113, 0.45) rgba(10, 12, 20, 0.85)'
              }}
            >
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full flex items-start justify-between gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all duration-200 cursor-pointer select-none ${
                      isSelected
                        ? 'bg-[#dfb871] text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <span className="flex items-start gap-2">
                      {option.icon && (
                        <span className={`shrink-0 mt-0.5 ${isSelected ? 'text-slate-950' : 'text-[#dfb871]'}`}>
                          {option.icon}
                        </span>
                      )}
                      <span className="whitespace-normal leading-normal break-words">{option.label}</span>
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-slate-950 shrink-0 font-bold mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
