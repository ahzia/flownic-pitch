import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Clock, 
  Layout, 
  MessageSquare, 
  Maximize2, 
  Minimize2,
  ExternalLink,
  Target,
  Zap,
  TrendingUp,
  Users,
  ShieldCheck,
  Settings
} from 'lucide-react';
import { PITCH_VERSIONS } from './constants';
import { Slide } from './types';

export default function App() {
  const [versionIndex, setVersionIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentVersion = PITCH_VERSIONS[versionIndex];
  const currentSlide = currentVersion.slides[slideIndex];

  const nextSlide = useCallback(() => {
    if (slideIndex < currentVersion.slides.length - 1) {
      setSlideIndex(prev => prev + 1);
    }
  }, [slideIndex, currentVersion.slides.length]);

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

  const getAccentClass = (color: Slide['accentColor']) => {
    switch (color) {
      case 'blue': return 'text-blue-500 border-blue-500';
      case 'emerald': return 'text-emerald-500 border-emerald-500';
      case 'red': return 'text-red-500 border-red-500';
      case 'orange': return 'text-orange-500 border-orange-500';
      default: return 'text-blue-500 border-blue-500';
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

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col">
      {/* Header / Controls */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">F</div>
            <span className="font-bold text-xl tracking-tight">Flownic</span>
          </div>
          
          <div className="h-6 w-px bg-slate-700 mx-2" />
          
          <div className="flex bg-slate-800/50 p-1 rounded-lg">
            {PITCH_VERSIONS.map((v, idx) => (
              <button
                key={v.id}
                onClick={() => {
                  setVersionIndex(idx);
                  setSlideIndex(0);
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  versionIndex === idx 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium bg-slate-800/30 px-3 py-1.5 rounded-full">
            <Clock size={14} />
            <span>{currentVersion.duration}</span>
          </div>
          
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

      {/* Main Presentation Area */}
      <main className="relative flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-6xl aspect-video bg-slate-900/50 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
          >
            {/* Slide Content */}
            <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-4xl lg:text-6xl font-bold leading-tight mb-12 border-l-8 pl-8 ${getAccentClass(currentSlide.accentColor)}`}
              >
                {currentSlide.title}
              </motion.h1>

              {currentSlide.layout === 'two-column' ? (
                <div className="grid grid-cols-2 gap-12">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                  >
                    {currentSlide.leftContent?.map((item, i) => (
                      <div key={i} className={`flex items-start gap-4 ${i === 0 ? 'text-2xl font-bold text-white mb-4' : 'text-xl text-slate-300'}`}>
                        {i > 0 && <div className="mt-2 w-2 h-2 rounded-full bg-slate-500 shrink-0" />}
                        <span>{item}</span>
                      </div>
                    ))}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                  >
                    {currentSlide.rightContent?.map((item, i) => (
                      <div key={i} className={`flex items-start gap-4 ${i === 0 ? 'text-2xl font-bold text-white mb-4' : 'text-xl text-slate-300'}`}>
                        {i > 0 && <div className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />}
                        <span>{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ) : currentSlide.layout === 'demo' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    {currentSlide.demoSteps?.map((step, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center gap-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50"
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-xl font-medium text-slate-200">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-slate-700 transition-colors"
                  >
                    <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl">
                      <Play size={40} fill="currentColor" />
                    </div>
                    <span className="text-slate-400 font-medium">Click to Play Demo Video</span>
                  </motion.div>
                </div>
              ) : currentSlide.layout === 'monetization' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentSlide.bullets.map((bullet, i) => {
                    const [title, desc] = bullet.split(': ');
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 flex flex-col gap-4"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                          {i === 0 ? <Users size={24} /> : i === 1 ? <TrendingUp size={24} /> : <Zap size={24} />}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{title}</h3>
                        <p className="text-slate-400 leading-relaxed">{desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-8">
                  {currentSlide.bullets.map((bullet, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-start gap-6"
                    >
                      <div className={`mt-3 w-3 h-3 rounded-full shrink-0 ${getBgAccentClass(currentSlide.accentColor)}`} />
                      <p className="text-2xl lg:text-3xl text-slate-300 font-medium leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                  
                  {currentSlide.tagline && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="mt-12 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-2xl font-bold italic"
                    >
                      "{currentSlide.tagline}"
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="p-8 border-t border-slate-800 flex justify-between items-center bg-slate-900/80">
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-mono text-sm">
                  {String(slideIndex + 1).padStart(2, '0')} / {String(currentVersion.slides.length).padStart(2, '0')}
                </span>
                <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((slideIndex + 1) / currentVersion.slides.length) * 100}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">
                Flownic Pitch • {currentVersion.name}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-center">
          <button 
            onClick={prevSlide}
            disabled={slideIndex === 0}
            className="p-4 text-slate-600 hover:text-white disabled:opacity-0 transition-all"
          >
            <ChevronLeft size={48} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-center">
          <button 
            onClick={nextSlide}
            disabled={slideIndex === currentVersion.slides.length - 1}
            className="p-4 text-slate-600 hover:text-white disabled:opacity-0 transition-all"
          >
            <ChevronRight size={48} />
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
