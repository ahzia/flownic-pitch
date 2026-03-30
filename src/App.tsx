import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, Maximize2, Minimize2, Printer } from 'lucide-react';
import { PITCH_VERSIONS } from './constants';
import { SlideContent } from './SlideContent';
import { PrintDeck } from './PrintDeck';

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = PITCH_VERSIONS[0].slides;
  const currentSlide = slides[slideIndex];

  /** Deep link for export: `?slide=1` … `?slide=N` (1-based) opens that slide on load. */
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get('slide');
    if (raw === null || raw === '') return;
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 1 || n > slides.length) return;
    setSlideIndex(n - 1);
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    }
  }, [slideIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  }, [slideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'n') setShowNotes((prev) => !prev);
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const exportPdf = () => {
    window.print();
  };

  return (
    <>
      <div className="no-print h-screen min-h-0 bg-[#0F172A] text-[#F8FAFC] font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col">
        <header className="shrink-0 px-2 py-2 flex items-center justify-between border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md z-50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/flownic-logo.svg" alt="Flownic logo" className="w-8 h-8 rounded-lg bg-blue-600/10 p-1" />
              <span className="font-bold text-lg tracking-tight">Flownic.ai</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={exportPdf}
              className="flex items-center gap-2 rounded-lg bg-slate-800 px-2.5 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white sm:px-3"
              title="Save as PDF (uses your browser print dialog — choose Save as PDF)"
            >
              <Printer size={20} />
              <span className="hidden sm:inline">Export PDF</span>
            </button>

            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`p-2 rounded-lg transition-colors ${showNotes ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              title="Toggle Speaker Notes (N)"
            >
              <MessageSquare size={20} />
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 bg-slate-800 text-slate-400 hover:bg-slate-700 rounded-lg transition-colors"
              title="Toggle Fullscreen (F)"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        </header>

        <main className="relative flex-1 min-h-0 flex flex-col px-2 pb-2 pt-1 sm:px-3 sm:pb-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex-1 min-h-0 w-full max-w-[min(100%,1600px)] mx-auto bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
            >
              <SlideContent
                slide={currentSlide}
                slideNumber={slideIndex + 1}
                totalSlides={slides.length}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 w-10 sm:w-12 flex items-center justify-center pointer-events-none">
            <button
              onClick={prevSlide}
              disabled={slideIndex === 0}
              className="pointer-events-auto p-1 text-slate-600 hover:text-white disabled:opacity-0 transition-all"
            >
              <ChevronLeft size={32} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 w-10 sm:w-12 flex items-center justify-center pointer-events-none">
            <button
              onClick={nextSlide}
              disabled={slideIndex === slides.length - 1}
              className="pointer-events-auto p-1 text-slate-600 hover:text-white disabled:opacity-0 transition-all"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </main>

        <AnimatePresence>
          {showNotes && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 inset-x-0 h-1/3 bg-slate-900 border-t border-slate-800 z-[60] shadow-2xl p-8 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <MessageSquare size={24} />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Speaker Notes</h2>
                  </div>
                  <button onClick={() => setShowNotes(false)} className="text-slate-500 hover:text-white">
                    Close
                  </button>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed font-medium">{currentSlide.speakerNotes}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isFullscreen && (
          <div className="fixed bottom-4 right-4 flex gap-4 text-[10px] text-slate-600 font-mono uppercase tracking-tighter">
            <span>[Space/→] Next</span>
            <span>[←] Prev</span>
            <span>[N] Notes</span>
            <span>[F] Fullscreen</span>
          </div>
        )}
      </div>

      <PrintDeck slides={slides} />
    </>
  );
}
