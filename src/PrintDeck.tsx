import { Slide } from './types';
import { SlideContent } from './SlideContent';

/** Hidden on screen; included when the user prints or saves as PDF (see index.css). */
export function PrintDeck({ slides }: { slides: Slide[] }) {
  return (
    <div className="print-deck">
      {slides.map((slide, i) => (
        <section key={slide.id} className="print-slide-sheet">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-2xl">
            <SlideContent slide={slide} slideNumber={i + 1} totalSlides={slides.length} variant="print" />
          </div>
        </section>
      ))}
    </div>
  );
}
