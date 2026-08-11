'use client';

import { useState, useEffect, useRef } from 'react';
import { useNotes } from '../context/NotesContext';
import { Language, FontSize } from '../types';

const LANGUAGE_OPTIONS: { value: Language; label: string; flag: string }[] = [
  { value: 'roman_urdu', label: 'Roman Urdu', flag: '🇵🇰' },
  { value: 'en', label: 'English', flag: '🇬🇧' },
  { value: 'hi', label: 'Hindi', flag: '🇮🇳' },
  { value: 'ar', label: 'Arabic', flag: '🇸🇦' },
];

export default function Header() {
  const {
    theme,
    toggleTheme,
    language,
    setLanguage,
    fontSize,
    setFontSize,
    resetProgress,
    searchQuery,
    setSearchQuery,
    sidebarOpen,
    setSidebarOpen,
  } = useNotes();

  const [isShrunk, setIsShrunk] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Shrinking header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ctrl+K / Cmd+K shortcut listener to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && dropdownOpen) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dropdownOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setShowResetConfirm(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResetProgress = () => {
    if (!showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }
    resetProgress();
    setShowResetConfirm(false);
    setDropdownOpen(false);
  };

  return (
    <section id="title-section" className={isShrunk ? 'shrunk' : ''}>
      <header className={isShrunk ? 'compact' : ''}>
        <div className="header-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h1 className="main-title">
            <i className="fa-brands fa-css3-alt" />
            <span>CSS Notes</span>
          </h1>
        </div>

        <div className="header-actions">
          {/* Search Box with Ctrl+K shortcut key indicator */}
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              id="topic-search"
              placeholder="Search topics..."
              autoCorrect="off"
              autoComplete="off"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="action-buttons">
            {/* Open TOC Button */}
            <button
              className="action-btn toc-open-btn"
              title="Open Table of Contents"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Open Table of Contents"
            >
              <i className="fa-solid fa-bars-staggered" />
            </button>

            {/* Kebab Three-Dot Menu Button & Dropdown */}
            <div className="kebab-menu-container" ref={dropdownRef}>
              <button
                className={`action-btn kebab-trigger ${dropdownOpen ? 'active' : ''}`}
                title="More Settings & Options"
                aria-label="More Settings"
                onClick={() => setDropdownOpen(prev => !prev)}
              >
                <i className="fa-solid fa-ellipsis-vertical" />
              </button>

              {dropdownOpen && (
                <div className="kebab-dropdown-menu animate-fade-in" role="menu">
                  <div className="dropdown-section-title">Settings & Preferences</div>

                  {/* Dark / Light Theme Toggle */}
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      toggleTheme();
                    }}
                    role="menuitem"
                  >
                    <div className="dropdown-item-left">
                      <i className={theme === 'dark' ? 'fa-solid fa-sun icon-amber' : 'fa-solid fa-moon icon-indigo'} />
                      <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                    <span className="dropdown-badge">{theme === 'dark' ? 'Dark' : 'Light'}</span>
                  </div>

                  <div className="dropdown-divider" />

                  {/* Language Selector */}
                  <div className="dropdown-section-label">
                    <i className="fa-solid fa-globe icon-blue" />
                    <span>Language</span>
                  </div>
                  <div className="dropdown-lang-group">
                    {LANGUAGE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        className={`lang-chip ${language === opt.value ? 'active' : ''}`}
                        onClick={() => setLanguage(opt.value)}
                      >
                        <span className="flag-emoji">{opt.flag}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="dropdown-divider" />

                  {/* Font Size Selector */}
                  <div className="dropdown-section-label">
                    <i className="fa-solid fa-font icon-green" />
                    <span>Font Size</span>
                  </div>
                  <div className="dropdown-font-group">
                    {(['small', 'normal', 'large'] as FontSize[]).map(size => (
                      <button
                        key={size}
                        className={`font-chip ${fontSize === size ? 'active' : ''}`}
                        onClick={() => setFontSize(size)}
                      >
                        {size === 'small' ? 'Small A-' : size === 'normal' ? 'Normal A' : 'Large A+'}
                      </button>
                    ))}
                  </div>

                  <div className="dropdown-divider" />

                  {/* Reset Progress */}
                  <div
                    className={`dropdown-item ${showResetConfirm ? 'item-danger-active' : 'item-danger'}`}
                    onClick={handleResetProgress}
                    role="menuitem"
                  >
                    <div className="dropdown-item-left">
                      <i className="fa-solid fa-rotate-left" />
                      <span>{showResetConfirm ? 'Confirm Reset All?' : 'Reset Progress'}</span>
                    </div>
                  </div>

                  {/* Report Issue */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="dropdown-item-left">
                      <i className="fa-solid fa-flag icon-red" />
                      <span>Report Issue</span>
                    </div>
                    <i className="fa-solid fa-arrow-up-right-from-square external-icon" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
