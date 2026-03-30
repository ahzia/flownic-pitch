export interface Slide {
  id: string;
  title: string;
  bullets: string[];
  tagline?: string;
  speakerNotes: string;
  accentColor: 'blue' | 'emerald' | 'red' | 'orange';
  layout?: 'default' | 'two-column' | 'demo' | 'monetization';
  leftContent?: string[];
  rightContent?: string[];
  demoSteps?: string[];
}

export interface PitchVersion {
  id: string;
  name: string;
  duration: string;
  slides: Slide[];
}
