export interface Slide {
  id: string;
  section?: string;
  title: string;
  subtitle?: string;
  showLogoBadge?: boolean;
  bullets: string[];
  tagline?: string;
  speakerNotes: string;
  accentColor: 'blue' | 'emerald' | 'red' | 'orange';
  layout?: 'default' | 'two-column' | 'demo' | 'monetization' | 'impact' | 'architecture';
  leftContent?: string[];
  rightContent?: string[];
  demoSteps?: string[];
  impactStats?: Array<{ label: string; value: string }>;
  /** Compact pipeline for architecture slide */
  architectureSteps?: Array<{ label: string; text: string }>;
  /**
   * Vertical placement of content in the slide frame.
   * `center` (default): pitch-style, balanced use of space.
   * `start`: top-aligned when content is long and should scroll.
   */
  contentAlign?: 'center' | 'start';
}

export interface PitchVersion {
  id: string;
  name: string;
  duration: string;
  slides: Slide[];
}
