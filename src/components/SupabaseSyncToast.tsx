import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Database } from 'lucide-react';

interface ToastData {
  id: number;
  message: string;
}

export default function SupabaseSyncToast() {
  const [toast, setToast] = useState<ToastData | null>(null);

  useEffect(() => {
    const handleSyncEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ message?: string }>;
      const message = customEvent.detail?.message || 'Gespeichert';

      setToast({
        id: Date.now(),
        message
      });
    };

    window.addEventListener('supabase-sync-success', handleSyncEvent);

    return () => {
      window.removeEventListener('supabase-sync-success', handleSyncEvent);
    };
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <aside aria-label="Benachrichtigungen" className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[99999] pointer-events-none px-4 w-full max-w-sm flex justify-center">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            id="supabase-sync-toast"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0a1b12]/95 border border-emerald-500/40 text-emerald-300 shadow-[0_8px_32px_rgba(16,185,129,0.25)] backdrop-blur-xl"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping" />
              <CheckCircle2 className="w-4 h-4 text-emerald-400 relative z-10" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wide">
              <span>{toast.message}</span>
              <Database className="w-3.5 h-3.5 text-emerald-400/70" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
