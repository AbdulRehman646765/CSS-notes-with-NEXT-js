'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { NotesContextType, Theme, Language, FilterMode } from '../types';
import { translations } from '../data/translations';

const NotesContext = createContext<NotesContextType | null>(null);

export const useNotes = () => {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error('useNotes must be used within NotesProvider');
  return ctx;
};

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<Language>('roman_urdu');
  const [fontSize, setFontSizeState] = useState<'small' | 'normal' | 'large'>('normal');
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [savedTopics, setSavedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tocSearchQuery, setTocSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterMode>('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('css_notes_theme') as Theme | null;
    const savedLang = localStorage.getItem('css_notes_language') as Language | null;
    const savedFont = localStorage.getItem('css_notes_font_size') as 'small' | 'normal' | 'large' | null;
    const savedCompleted = JSON.parse(localStorage.getItem('css_notes_completed') || '[]');
    const savedSaved = JSON.parse(localStorage.getItem('css_notes_saved') || '[]');

    if (savedTheme) setThemeState(savedTheme);
    if (savedLang) setLanguage(savedLang);
    if (savedFont) setFontSizeState(savedFont);
    setCompletedTopics(savedCompleted);
    setSavedTopics(savedSaved);
    setMounted(true);
  }, []);

  // System theme detection & resolution
  useEffect(() => {
    if (!mounted) return;

    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setResolvedTheme(isDark ? 'dark' : 'light');
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => {
        setResolvedTheme(e.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme, mounted]);

  // Apply theme attribute to document
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    localStorage.setItem('css_notes_theme', theme);
  }, [theme, resolvedTheme, mounted]);

  // Apply font size to document
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('css_notes_font_size', fontSize);
  }, [fontSize, mounted]);

  // Persist language
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('css_notes_language', language);
  }, [language, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => (prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark'));
  }, []);

  const setFontSize = useCallback((size: 'small' | 'normal' | 'large') => {
    setFontSizeState(size);
  }, []);

  const toggleCompleteTopic = useCallback((id: string) => {
    setCompletedTopics(prev => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      localStorage.setItem('css_notes_completed', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setCompletedTopics([]);
    localStorage.removeItem('css_notes_completed');
  }, []);

  const toggleSaveTopic = useCallback((id: string) => {
    setSavedTopics(prev => {
      const updated = prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id];
      localStorage.setItem('css_notes_saved', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const t = useCallback((key: string): string => {
    return translations[language]?.[key] ?? translations['en']?.[key] ?? key;
  }, [language]);

  const value: NotesContextType = {
    theme,
    setTheme,
    toggleTheme,
    language,
    setLanguage,
    fontSize,
    setFontSize,
    completedTopics,
    toggleCompleteTopic,
    resetProgress,
    savedTopics,
    toggleSaveTopic,
    searchQuery,
    setSearchQuery,
    tocSearchQuery,
    setTocSearchQuery,
    activeFilter,
    setActiveFilter,
    sidebarOpen,
    setSidebarOpen,
    t,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
