import {
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
import { Slide } from './types';
import { getBgAccentClass, getBorderAccentClass, maxWidthClassForSlide } from './slideHelpers';

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

export type SlideContentProps = {
  slide: Slide;
  /** 1-based */
  slideNumber: number;
  totalSlides: number;
  variant?: 'screen' | 'print';
};

export function SlideContent({ slide, slideNumber, totalSlides, variant = 'screen' }: SlideContentProps) {
  const isPrint = variant === 'print';
  const contentAlign = slide.contentAlign ?? 'center';
  const layout = slide.layout ?? 'default';
  const maxWidthClass = maxWidthClassForSlide(slide.layout);
  const effectiveAlign = isPrint ? 'start' : contentAlign;
  const isDemoVideoFocus =
    layout === 'demo' &&
    Boolean(slide.demoVideoSrc) &&
    (!slide.demoSteps || slide.demoSteps.length === 0);

  return (
    <>
      <div
        className={`flex-1 min-h-0 flex flex-col px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 overflow-y-auto ${
          effectiveAlign === 'center' ? 'justify-center' : 'justify-start'
        } ${isPrint ? 'overflow-hidden px-5 py-4 sm:px-5 sm:py-4' : ''}`}
      >
        <div
          className={`mx-auto w-full ${isDemoVideoFocus ? 'max-w-7xl' : maxWidthClass} flex flex-col gap-4 sm:gap-5 ${
            isPrint ? 'gap-3' : ''
          } ${isDemoVideoFocus ? 'min-h-0 flex-1 justify-center' : ''}`}
        >
          {!isDemoVideoFocus && slide.section && (
            <div className="text-center">
              <span
                className={`inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 ${
                  isPrint ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
                } font-semibold uppercase tracking-widest text-slate-300`}
              >
                {slide.section}
              </span>
            </div>
          )}

          {!isDemoVideoFocus && (
            <h1
              className={`text-center text-balance font-bold text-white pb-4 border-b-4 ${
                isPrint ? 'text-2xl pb-3 border-b-3' : 'text-2xl sm:text-3xl lg:text-4xl'
              } ${getBorderAccentClass(slide.accentColor)}`}
            >
              {slide.title}
            </h1>
          )}

          {!isDemoVideoFocus && slide.subtitle && (
            <p
              className={`text-center text-slate-300 max-w-3xl mx-auto leading-relaxed ${
                isPrint ? 'text-sm' : 'text-base sm:text-lg lg:text-xl'
              }`}
            >
              {slide.subtitle}
            </p>
          )}

          {!isDemoVideoFocus && slide.showLogoBadge && (
            <div className="flex justify-center">
              <div
                className={`inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 ${
                  isPrint ? 'px-4 py-2' : 'px-5 py-2.5'
                }`}
              >
                <img src="/flownic-logo.svg" alt="" className={`${isPrint ? 'h-8 w-8' : 'h-9 w-9 sm:h-10 sm:w-10'}`} />
                <span
                  className={`font-semibold tracking-tight text-blue-300 ${
                    isPrint ? 'text-sm' : 'text-base sm:text-lg'
                  }`}
                >
                  Flownic.ai
                </span>
              </div>
            </div>
          )}

          {layout === 'useCases' ? (
            <div
              className={`grid grid-cols-1 pt-1 sm:grid-cols-2 lg:grid-cols-3 ${
                isPrint ? 'gap-2 lg:gap-2.5' : 'gap-3 lg:gap-3.5'
              }`}
            >
              {(slide.useCases || []).map((uc) => {
                const Icon = USE_CASE_ICONS[uc.icon];
                return (
                  <div
                    key={uc.title}
                    className={`flex gap-3 ${
                      isPrint ? 'rounded-lg p-2' : 'rounded-xl p-3 sm:p-3.5'
                    } border border-slate-700/70 bg-slate-800/35 text-left`}
                  >
                    <div
                      className={`flex shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 ${
                        isPrint ? 'h-9 w-9' : 'h-10 w-10'
                      }`}
                    >
                      {Icon ? (
                        <Icon className={`${isPrint ? 'h-4 w-4' : 'h-5 w-5'}`} strokeWidth={1.75} />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-bold leading-snug text-white ${
                          isPrint ? 'text-xs' : 'text-sm sm:text-base'
                        }`}
                      >
                        {uc.title}
                      </h3>
                      <p
                        className={`mt-1 leading-relaxed text-slate-400 ${
                          isPrint ? 'text-[10px]' : 'text-xs sm:text-sm'
                        }`}
                      >
                        {uc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : layout === 'architecture' ? (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pt-1 ${
                isPrint ? 'gap-2 sm:gap-2.5' : 'gap-3 sm:gap-4'
              }`}
            >
              {(slide.architectureSteps || []).map((step) => (
                <div
                  key={step.label}
                  className={`rounded-xl border border-slate-700/80 bg-slate-800/40 ${
                    isPrint ? 'px-3 py-2' : 'px-4 py-3'
                  } text-center sm:text-left`}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wide text-blue-400/95">
                    {step.label}
                  </div>
                  <p
                    className={`mt-2 leading-relaxed text-slate-200 ${
                      isPrint ? 'text-xs' : 'text-sm sm:text-base'
                    }`}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          ) : layout === 'two-column' ? (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 pt-2 ${
                isPrint ? 'gap-4 sm:gap-5' : 'gap-6 sm:gap-8 lg:gap-10'
              }`}
            >
              <div className={`text-left ${isPrint ? 'space-y-2.5 sm:space-y-3' : 'space-y-3 sm:space-y-4'}`}>
                {slide.leftContent?.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${
                      i === 0
                        ? `font-bold text-white ${isPrint ? 'text-base' : 'text-lg sm:text-xl'}`
                        : `text-slate-200 ${isPrint ? 'text-sm' : 'text-base sm:text-lg'}`
                    }`}
                  >
                    {i > 0 && <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-slate-500" />}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={`text-left ${isPrint ? 'space-y-2.5 sm:space-y-3' : 'space-y-3 sm:space-y-4'}`}>
                {slide.rightContent?.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 ${
                      i === 0
                        ? `font-bold text-white ${isPrint ? 'text-base' : 'text-lg sm:text-xl'}`
                        : `text-slate-200 ${isPrint ? 'text-sm' : 'text-base sm:text-lg'}`
                    }`}
                  >
                    {i > 0 && <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : layout === 'demo' ? (
            isDemoVideoFocus ? (
              <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-1 sm:px-2">
                {isPrint ? (
                  <p className="rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-6 text-center text-sm text-slate-400">
                    Demo video — play in presentation mode
                  </p>
                ) : (
                  <div className="mx-auto flex w-full max-w-6xl items-center justify-center overflow-hidden rounded-xl border border-slate-700/80 bg-black shadow-[0_0_80px_-24px_rgba(59,130,246,0.4)] max-h-[min(70vh,920px)]">
                    <video
                      src={slide.demoVideoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      className="max-h-[min(70vh,920px)] w-full max-w-full object-contain"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center pt-2 ${
                  isPrint ? 'gap-4 lg:gap-5' : 'gap-6 lg:gap-8'
                }`}
              >
                <div className={`${isPrint ? 'space-y-2.5 sm:space-y-3' : 'space-y-3 sm:space-y-4'}`}>
                  {slide.demoSteps?.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded-2xl border border-slate-700/50 bg-slate-800/50 ${
                        isPrint ? 'p-2.5' : 'p-3 sm:p-4'
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 ${
                          isPrint ? 'text-xs' : 'text-sm'
                        } font-bold text-white`}
                      >
                        {i + 1}
                      </div>
                      <span
                        className={`font-medium text-slate-100 ${
                          isPrint ? 'text-sm' : 'text-base sm:text-lg'
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className={`overflow-hidden rounded-2xl border border-slate-700 bg-black/90 ${
                    isPrint ? 'min-h-[130px]' : 'min-h-[180px] lg:aspect-video lg:min-h-0'
                  }`}
                >
                  {slide.demoVideoSrc ? (
                    isPrint ? (
                      <div className="flex h-full min-h-[120px] items-center justify-center text-xs text-slate-500">
                        Video
                      </div>
                    ) : (
                      <video
                        src={slide.demoVideoSrc}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-contain"
                      />
                    )
                  ) : (
                    <div
                      className={`flex h-full min-h-[140px] flex-col items-center justify-center gap-2 bg-slate-800/80 ${
                        isPrint ? 'min-h-[130px]' : 'min-h-[180px] lg:aspect-video lg:min-h-0'
                      }`}
                    >
                      <span className={`font-medium text-slate-500 ${isPrint ? 'text-xs' : 'text-sm'}`}>
                        Demo video
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          ) : layout === 'monetization' ? (
            <div
              className={`grid grid-cols-1 pt-2 ${
                isPrint ? 'gap-3 md:gap-4' : 'gap-4 md:gap-5'
              } ${isPrint ? 'grid-cols-3' : 'md:grid-cols-3'}`}
            >
              {slide.bullets.map((bullet, i) => {
                const [title, desc] = bullet.split(': ');
                return (
                  <div
                    key={i}
                    className={`flex flex-col gap-3 rounded-2xl border border-slate-700/50 bg-slate-800/40 ${
                      isPrint ? 'p-4' : 'p-5 sm:p-6'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 ${
                        isPrint ? 'h-10 w-10' : 'h-12 w-12'
                      }`}
                    >
                      {i === 0 ? (
                        <Users size={isPrint ? 24 : 28} />
                      ) : i === 1 ? (
                        <TrendingUp size={isPrint ? 24 : 28} />
                      ) : (
                        <Zap size={isPrint ? 24 : 28} />
                      )}
                    </div>
                    <h3 className={`font-bold text-white ${isPrint ? 'text-base' : 'text-lg sm:text-xl'}`}>{title}</h3>
                    <p
                      className={`leading-relaxed text-slate-400 ${
                        isPrint ? 'text-sm' : 'text-sm sm:text-base'
                      }`}
                    >
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : layout === 'impact' ? (
            <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3 md:gap-6">
              {(slide.impactStats || []).map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 text-center md:text-left"
                >
                  <div className="text-sm uppercase tracking-wider text-slate-400">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold text-white sm:text-2xl">{item.value}</div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`space-y-4 pt-1 sm:space-y-5 ${
                isPrint ? 'space-y-3' : ''
              }`}
            >
              {slide.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${getBgAccentClass(slide.accentColor)}`} />
                  <p
                    className={`text-left font-medium leading-relaxed text-slate-200 ${
                      isPrint ? 'text-base' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {bullet}
                  </p>
                </div>
              ))}

              {slide.tagline && (
                <div
                  className={`rounded-2xl border border-emerald-500/25 bg-emerald-500/10 text-center font-semibold italic text-emerald-300 ${
                    isPrint ? 'p-3 text-sm' : 'p-4 text-base sm:p-5 sm:text-lg'
                  }`}
                >
                  &ldquo;{slide.tagline}&rdquo;
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="shrink-0 px-3 py-2 border-t border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center gap-4">
          <span className="text-slate-500 font-mono text-sm">
            {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600"
              style={{ width: `${(slideNumber / totalSlides) * 100}%` }}
            />
          </div>
        </div>
        <div className="text-slate-500 text-sm font-medium uppercase tracking-widest">Flownic.ai</div>
      </div>
    </>
  );
}
