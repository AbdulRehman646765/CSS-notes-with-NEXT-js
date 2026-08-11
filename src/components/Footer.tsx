'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNotes } from '../context/NotesContext';
import { Theme } from '../types';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const pathname = usePathname() || '/';

  const {
    theme,
    setTheme,
    setSidebarOpen,
    setActiveFilter,
    setSearchQuery,
  } = useNotes();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigateToTopic = (topicId: string) => {
    setActiveFilter('all');
    setSearchQuery('');
    setTimeout(() => {
      const el = document.getElementById(topicId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleResourceClick = (action: 'toc' | 'progress' | 'bookmarks' | 'practice' | 'all') => {
    if (action === 'toc') {
      setSidebarOpen(true);
    } else if (action === 'progress') {
      const el = document.getElementById('progress-dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'bookmarks') {
      setActiveFilter('saved');
      const el = document.getElementById('progress-dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'practice') {
      const el = document.getElementById('quiz-area');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'all') {
      setActiveFilter('all');
      setSearchQuery('');
      const el = document.getElementById('title-section') || document.body;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Determine active course chip based on pathname
  const isHtmlActive = pathname.includes('html');
  const isJsActive = pathname.includes('javascript') || pathname.includes('js');
  const isReactActive = pathname.includes('react');
  const isCssActive = !isHtmlActive && !isJsActive && !isReactActive;

  return (
    <footer className="notes-footer">
      <div className="notes-footer-container">

        {/* ───────────────── TOP CTA ───────────────── */}
        <div className="footer-hero">
          <div className="footer-hero-content">
            <div className="footer-hero-badge">
              <i className="fa-solid fa-graduation-cap" />
              <span>Keep Learning</span>
            </div>

            <h2>Master CSS, one topic at a time.</h2>

            <p>
              Keep exploring CSS concepts, practical examples, and interactive learning resources.
            </p>
          </div>

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Scroll to top of page"
          >
            <span>Back to Top</span>
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>

        {/* ───────────────── MAIN FOOTER GRID ───────────────── */}
        <div className="footer-main-grid">

          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <i className="fa-brands fa-css3-alt" />
              </div>

              <div>
                <h3>CSS Notes</h3>
                <span>Modern CSS Learning</span>
              </div>
            </div>

            <p className="footer-description">
              A structured learning platform for understanding CSS through clear explanations, practical examples, and real-world concepts.
            </p>

            <div className="footer-author-mini">
              <div className="footer-author-icon">
                <i className="fa-solid fa-code" />
              </div>

              <div>
                <span>Created by</span>
                <strong>
                  Ch Abdul Rehman
                  <i className="fa-solid fa-circle-check" title="Verified Creator" />
                </strong>
              </div>
            </div>
          </div>

          {/* Learn Column */}
          <div className="footer-links-column">
            <h4>
              <i className="fa-solid fa-book-open" />
              Learn
            </h4>

            <button type="button" className="footer-link-btn" onClick={() => navigateToTopic('topic-02')}>
              <i className="fa-solid fa-chevron-right" />
              Introduction
            </button>

            <button type="button" className="footer-link-btn" onClick={() => navigateToTopic('topic-04')}>
              <i className="fa-solid fa-chevron-right" />
              Selectors
            </button>

            <button type="button" className="footer-link-btn" onClick={() => navigateToTopic('topic-11')}>
              <i className="fa-solid fa-chevron-right" />
              Box Model
            </button>

            <button type="button" className="footer-link-btn" onClick={() => navigateToTopic('topic-19')}>
              <i className="fa-solid fa-chevron-right" />
              Flexbox
            </button>

            <button type="button" className="footer-link-btn" onClick={() => navigateToTopic('topic-38')}>
              <i className="fa-solid fa-chevron-right" />
              CSS Grid
            </button>
          </div>

          {/* Resources Column */}
          <div className="footer-links-column">
            <h4>
              <i className="fa-solid fa-layer-group" />
              Resources
            </h4>

            <button type="button" className="footer-link-btn" onClick={() => handleResourceClick('toc')}>
              <i className="fa-solid fa-chevron-right" />
              Table of Contents
            </button>

            <button type="button" className="footer-link-btn" onClick={() => handleResourceClick('progress')}>
              <i className="fa-solid fa-chevron-right" />
              My Progress
            </button>

            <button type="button" className="footer-link-btn" onClick={() => handleResourceClick('bookmarks')}>
              <i className="fa-solid fa-chevron-right" />
              Bookmarks
            </button>

            <button type="button" className="footer-link-btn" onClick={() => handleResourceClick('practice')}>
              <i className="fa-solid fa-chevron-right" />
              Practice
            </button>

            <button type="button" className="footer-link-btn" onClick={() => handleResourceClick('all')}>
              <i className="fa-solid fa-chevron-right" />
              All Topics
            </button>
          </div>

          {/* Connect / Newsletter Column */}
          <div className="footer-connect-column">
            <h4>
              <i className="fa-solid fa-paper-plane" />
              Stay Updated
            </h4>

            <p>Get updates about new notes and learning resources.</p>

            <form className="footer-subscribe" onSubmit={handleSubscribe}>
              <div className="footer-email-wrapper">
                <i className="fa-solid fa-envelope" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
              </div>

              <button type="submit" aria-label="Subscribe" title="Subscribe">
                <i className={subscribed ? 'fa-solid fa-check' : 'fa-solid fa-arrow-right'} />
              </button>
            </form>

            {subscribed && (
              <div className="footer-success-message">
                <i className="fa-solid fa-circle-check" />
                Successfully subscribed!
              </div>
            )}

            <div className="footer-social-wrapper">
              <span>Connect</span>
              <div className="footer-socials-modern">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X"
                  aria-label="X"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────── BOTTOM BAR ───────────────── */}
        <div className="footer-bottom-modern">
          {/* Copyright & Vercel-Style Theme Switcher */}
          <div className="footer-bottom-left">
            <div className="footer-copyright">
              <span>© {new Date().getFullYear()} CSS Notes</span>
              <span className="footer-dot">•</span>
              <span>All rights reserved.</span>
            </div>

            {/* Vercel-Style Theme Switcher */}
            <div className="vercel-theme-switcher" role="radiogroup" aria-label="Theme switcher">
              {(['system', 'light', 'dark'] as Theme[]).map(t => (
                <button
                  key={t}
                  type="button"
                  className={`theme-pill ${theme === t ? 'active' : ''}`}
                  onClick={() => setTheme(t)}
                  title={`${t.charAt(0).toUpperCase() + t.slice(1)} Theme`}
                  aria-label={`${t} theme`}
                  role="radio"
                  aria-checked={theme === t}
                >
                  <i
                    className={
                      t === 'system'
                        ? 'fa-solid fa-desktop'
                        : t === 'light'
                        ? 'fa-solid fa-sun'
                        : 'fa-solid fa-moon'
                    }
                  />
                  <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Other Notes Courses Navigation */}
          <div className="footer-other-notes">
            <span className="other-notes-label">Other Notes:</span>
            <div className="other-notes-chips">
              <a
                href="/"
                className={`course-chip ${isHtmlActive ? 'active' : ''}`}
                title="HTML Notes"
              >
                <i className="fa-brands fa-html5 icon-html" />
                <span>HTML</span>
              </a>

              <a
                href="/"
                className={`course-chip ${isCssActive ? 'active' : ''}`}
                title="CSS Notes"
              >
                <i className="fa-brands fa-css3-alt icon-css" />
                <span>CSS</span>
              </a>

              <a
                href="/"
                className={`course-chip ${isJsActive ? 'active' : ''}`}
                title="JavaScript Notes"
              >
                <i className="fa-brands fa-js icon-js" />
                <span>JavaScript</span>
              </a>

              <a
                href="/"
                className={`course-chip ${isReactActive ? 'active' : ''}`}
                title="React Notes"
              >
                <i className="fa-brands fa-react icon-react" />
                <span>React</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}