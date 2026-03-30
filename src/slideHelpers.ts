import { Slide } from './types';

export function getBorderAccentClass(color: Slide['accentColor']) {
  switch (color) {
    case 'blue':
      return 'border-blue-500';
    case 'emerald':
      return 'border-emerald-500';
    case 'red':
      return 'border-red-500';
    case 'orange':
      return 'border-orange-500';
    default:
      return 'border-blue-500';
  }
}

export function getBgAccentClass(color: Slide['accentColor']) {
  switch (color) {
    case 'blue':
      return 'bg-blue-500';
    case 'emerald':
      return 'bg-emerald-500';
    case 'red':
      return 'bg-red-500';
    case 'orange':
      return 'bg-orange-500';
    default:
      return 'bg-blue-500';
  }
}

export function maxWidthClassForSlide(layout: Slide['layout'] | undefined) {
  const l = layout ?? 'default';
  return l === 'two-column' || l === 'demo' || l === 'monetization' || l === 'useCases' || l === 'architecture'
    ? 'max-w-6xl'
    : 'max-w-4xl';
}
