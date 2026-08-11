export type Language = 'en' | 'roman_urdu' | 'hi' | 'ar';

export type Theme = 'dark' | 'light';

export type FontSize = 'small' | 'normal' | 'large';

export type FilterMode = 'all' | 'saved';

export interface PracticeExercise {
  question: string;
  solution: string;
}

export interface Topic {
  id: string; // e.g. "topic-01"
  tag: string; // e.g. "#01"
  title: string;
  iconClass: string; // e.g. "fa-solid fa-house"
  definition: string;
  syntax?: string;
  exampleCode?: string;
  livePreviewHtml?: string;
  proTip?: string;
  practice?: PracticeExercise;
  extraInfoLink?: string;
  extraInfoLabel?: string;
  prevTarget?: string;
  nextTarget?: string;
}

export interface NotesContextType {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  completedTopics: string[];
  toggleCompleteTopic: (id: string) => void;
  resetProgress: () => void;
  savedTopics: string[];
  toggleSaveTopic: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  tocSearchQuery: string;
  setTocSearchQuery: (query: string) => void;
  activeFilter: FilterMode;
  setActiveFilter: (filter: FilterMode) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  t: (key: string) => string;
}
