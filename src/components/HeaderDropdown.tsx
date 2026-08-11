'use client';

import { useState, useRef, useEffect } from 'react';
import { useNotes } from '../context/NotesContext';
import { Language } from '../types';

const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: 'roman_urdu', label: '🇵🇰 Roman Urdu' },
  { value: 'en', label: '🇬🇧 English' },
  { value: 'hi', label: '🇮🇳 Hindi' },
  { value: 'ar', label: '🇸🇦 Arabic' },
];

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, setActiveFilter } = useNotes();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToQuiz = () => {
    const el = document.getElementById('quiz-area');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <div className="header-dropdown-container" ref={menuRef}>
      <button
        className="action-btn header-dropdown-trigger"
        onClick={() => setIsOpen(v => !v)}
        title="More Controls & Options"
        aria-label="Toggle Controls Menu"
      >
        <i className="fa-solid fa-ellipsis-vertical" />
      </button>

      {isOpen && (
        <div className="header-dropdown-menu">
          <div className="dropdown-menu-header">Controls & Preferences</div>

          <div className="dropdown-item" onClick={toggleTheme}>
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
            <span>Theme: <strong>{theme === 'dark' ? 'Dark' : 'Light'} Mode</strong></span>
          </div>

          <div className="dropdown-item-group">
            <div className="dropdown-label">
              <i className="fa-solid fa-language" /> Language:
            </div>
            <select
              className="dropdown-lang-select"
              value={language}
              onChange={e => {
                setLanguage(e.target.value as Language);
              }}
            >
              {LANGUAGE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div
            className="dropdown-item"
            onClick={() => {
              setActiveFilter('saved');
              setIsOpen(false);
            }}
          >
            <i className="fa-solid fa-bookmark" />
            <span>Show Bookmarked Topics</span>
          </div>

          <div className="dropdown-item" onClick={scrollToQuiz}>
            <i className="fa-solid fa-graduation-cap" />
            <span>Jump to CSS Quiz</span>
          </div>
        </div>
      )}
    </div>
  );
}
