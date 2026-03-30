import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  MessageSquare,
  Maximize2,
  Minimize2,
  TrendingUp,
  Users,
  Zap,
  FileText,
  UserSearch,
  Target,
  Headphones,
  ShoppingCart,
  LineChart,
  Globe,
  Receipt,
  GraduationCap,
  Plane,
  ClipboardList,
  Sparkles,
  type LucideIcon
} from 'lucide-react';
import { PITCH_VERSIONS } from './constants';
import { Slide } from './types';

const USE_CASE_ICONS: Record<string, LucideIcon> = {
  FileText,
  UserSearch,
  Target,
  Headphones,
  ShoppingCart,
  LineChart,
  Globe,
  Receipt,
  GraduationCap,
  Plane,
  ClipboardList,
  Sparkles
};

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = PITCH_VERSIONS[0].slides;
  const currentSlide = slides[slideIndex];

  const nextSlide = useCallback(() => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(prev => prev + 1);
    }
  }, [slideIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  }, [slideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'n') setShowNotes(prev => !prev);
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

  const getBorderAccentClass = (color: Slide['accentColor']) => {
    switch (color) {
      case 'blue': return 'border-blue-500';
      case 'emerald': return 'border-emerald-500';
      case 'red': return 'border-red-500';
      case 'orange': return 'border-orange-500';
      default: return 'border-blue-500';
    }
  };

  const getBgAccentClass = (color: Slide['accentColor']) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'emerald': return 'bg-emerald-500';
      case 'red': return 'bg-red-500';
      case 'orange': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  const contentAlign = currentSlide.contentAlign ?? 'center';
  const layout = currentSlide.layout ?? 'default';
  const maxWidthClass =
    layout === 'two-column' || layout === 'demo' || layout === 'monetization' || layout === 'useCases'
      ? 'max-w-6xl'
      : layout === 'architecture'
        ? 'max-w-6xl'
        : 'max-w-4xl';

  return (
    <div className="h-screen min-h-0 bg-[#0F172A] text-[#F8FAFC] font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col">
      {/* Header / Controls */}
      <header className="shrink-0 px-2 py-2 flex items-center justify-between border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="/flownic-logo.svg" alt="Flownic logo" className="w-8 h-8 rounded-lg bg-blue-600/10 p-1" />
            <span className="font-bold text-lg tracking-tight">Flownic.ai</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          
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
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} /> }
          </button>
        </div>
      </header>

      {/* Main — moderate padding; slide card fills height */}
      <main className="relative flex-1 min-h-0 flex flex-col px-2 pb-2 pt-1 sm:px-3 sm:pb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 min-h-0 w-full max-w-[min(100%,1600px)] mx-auto bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
          >
            {/* Slide Content — vertically centered block + readable type */}
            <div
              className={`flex-1 min-h-0 flex flex-col px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 overflow-y-auto ${
                contentAlign === 'center' ? 'justify-center' : 'justify-start'
              }`}
            >
              <div className={`mx-auto w-full ${maxWidthClass} flex flex-col gap-4 sm:gap-5`}>
                {currentSlide.section && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
                      {currentSlide.section}
                    </span>
                  </motion.div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className={`text-center text-balance text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white pb-4 border-b-4 ${getBorderAccentClass(currentSlide.accentColor)}`}
                >
                  {currentSlide.title}
                </motion.h1>

                {currentSlide.subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                  >
                    {currentSlide.subtitle}
                  </motion.p>
                )}

                {currentSlide.showLogoBadge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.22 }}
                    className="flex justify-center"
                  >
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5">
                      <img src="/flownic-logo.svg" alt="Flownic logo" className="h-9 w-9 sm:h-10 sm:w-10" />
                      <span className="text-base font-semibold tracking-tight text-blue-300 sm:text-lg">
                        Flownic.ai
                      </span>
                    </div>
                  </motion.div>
                )}

                {layout === 'useCases' ? (
                  <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
                    {(currentSlide.useCases || []).map((uc, i) => {
                      const Icon = USE_CASE_ICONS[uc.icon];
                      return (
                        <motion.div
                          key={uc.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.04 }}
                          className="flex gap-3 rounded-xl border border-slate-700/70 bg-slate-800/35 p-3 text-left sm:p-3.5"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                            {Icon ? <Icon className="h-5 w-5" strokeWidth={1.75} /> : null}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{uc.title}</h3>
                            <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">{uc.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : layout === 'architecture' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 pt-1">
                    {(currentSlide.architectureSteps || []).map((step, i) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.05 }}
                        className="rounded-xl border border-slate-700/80 bg-slate-800/40 px-4 py-3 text-center sm:text-left"
                      >
                        <div className="text-xs font-bold uppercase tracking-wide text-blue-400/95">
                          {step.label}
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed">{step.text}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : layout === 'two-column' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pt-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3 sm:space-y-4 text-left"
                    >
                      {currentSlide.leftContent?.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 ${i === 0 ? 'text-lg sm:text-xl font-bold text-white' : 'text-base sm:text-lg text-slate-200'}`}
                        >
                          {i > 0 && <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-slate-500" />}
                          <span>{item}</span>
                        </div>
                      ))}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3 sm:space-y-4 text-left"
                    >
                      {currentSlide.rightContent?.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 ${i === 0 ? 'text-lg sm:text-xl font-bold text-white' : 'text-base sm:text-lg text-slate-200'}`}
                        >
                          {i > 0 && <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />}
                          <span>{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ) : layout === 'demo' ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center pt-2">
                    <div className="space-y-3 sm:space-y-4">
                      {currentSlide.demoSteps?.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-3 sm:p-4"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                            {i + 1}
                          </div>
                          <span className="text-base sm:text-lg font-medium text-slate-100">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/80 lg:aspect-video lg:min-h-0"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform group-hover:scale-110">
                        <Play size={32} fill="currentColor" />
                      </div>
                      <span className="text-sm font-medium text-slate-400">Demo placeholder</span>
                    </motion.div>
                  </div>
                ) : layout === 'monetization' ? (
                  <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 md:gap-5">
                    {currentSlide.bullets.map((bullet, i) => {
                      const [title, desc] = bullet.split(': ');
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex flex-col gap-3 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 sm:p-6"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                            {i === 0 ? <Users size={28} /> : i === 1 ? <TrendingUp size={28} /> : <Zap size={28} />}
                          </div>
                          <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
                          <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : layout === 'impact' ? (
                  <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 md:gap-6">
                    {(currentSlide.impactStats || []).map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.08 }}
                        className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 text-center md:text-left"
                      >
                        <div className="text-sm uppercase tracking-wider text-slate-400">{item.label}</div>
                        <div className="mt-2 text-xl font-semibold text-white sm:text-2xl">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 pt-1 sm:space-y-5">
                    {currentSlide.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${getBgAccentClass(currentSlide.accentColor)}`} />
                        <p className="text-left text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
                          {bullet}
                        </p>
                      </motion.div>
                    ))}

                    {currentSlide.tagline && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-center text-base font-semibold italic text-emerald-300 sm:p-5 sm:text-lg"
                      >
                        &ldquo;{currentSlide.tagline}&rdquo;
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Slide Footer */}
            <div className="shrink-0 px-3 py-2 border-t border-slate-800 flex justify-between items-center bg-slate-900/80">
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-mono text-sm">
                  {String(slideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
                <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((slideIndex + 1) / slides.length) * 100}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                Flownic.ai
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
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

      {/* Speaker Notes Drawer */}
      <AnimatePresence>
        {showNotes && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 inset-x-0 h-1/3 bg-slate-900 border-t border-slate-800 z-[60] shadow-2xl p-8 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <MessageSquare size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Speaker Notes</h2>
                </div>
                <button 
                  onClick={() => setShowNotes(false)}
                  className="text-slate-500 hover:text-white"
                >
                  Close
                </button>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                {currentSlide.speakerNotes}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Hint */}
      {!isFullscreen && (
        <div className="fixed bottom-4 right-4 flex gap-4 text-[10px] text-slate-600 font-mono uppercase tracking-tighter">
          <span>[Space/→] Next</span>
          <span>[←] Prev</span>
          <span>[N] Notes</span>
          <span>[F] Fullscreen</span>
        </div>
      )}
    </div>
  );
}
