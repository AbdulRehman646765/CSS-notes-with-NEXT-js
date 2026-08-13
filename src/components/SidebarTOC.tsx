'use client';

import { useEffect, useRef, useState } from 'react';
import { useNotes } from '../context/NotesContext';
import { topicsData } from '../data/topics';

export default function SidebarTOC() {
  const { sidebarOpen, setSidebarOpen, tocSearchQuery, setTocSearchQuery, completedTopics, savedTopics } = useNotes();
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeTopicId, setActiveTopicId] = useState<string>('');

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setSidebarOpen]);

  // Track active topic on scroll using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTopicId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Adjusts when a topic is considered "active"
      }
    );

    topicsData.forEach((topic) => {
      const el = document.getElementById(topic.id);
      if (el) observer.observe(el);
    });

    return () => {
      topicsData.forEach((topic) => {
        const el = document.getElementById(topic.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const filteredTopics = tocSearchQuery.trim()
    ? topicsData.filter(t =>
      t.title.toLowerCase().includes(tocSearchQuery.toLowerCase()) ||
      t.tag.toLowerCase().includes(tocSearchQuery.toLowerCase())
    )
    : topicsData;

  const scrollToTopic = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTopicId(id);
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="nav-overlay-active"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <nav id="side-nav" className={sidebarOpen ? 'open' : ''}>
        <div className="nav-header">
          <div className="nav-title-group">
            <h3>
              <i className="fa-solid fa-list-ol" /> Table of <span>Contents</span>
            </h3>
            <span className="toc-badge" id="toc-badge-count">
              {filteredTopics.length} Topics
            </span>
          </div>
          <button id="close-nav" title="Close Sidebar" onClick={() => setSidebarOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="toc-search-wrap">
          <i className="fa-solid fa-magnifying-glass toc-search-icon" />
          <input
            ref={inputRef}
            type="text"
            id="toc-filter-input"
            placeholder="Filter TOC topics..."
            autoCorrect="off"
            autoComplete="off"
            value={tocSearchQuery}
            onChange={e => setTocSearchQuery(e.target.value)}
          />
        </div>

        <ul id="toc-list">
          {filteredTopics.map(topic => {
            const isCompleted = completedTopics.includes(topic.id);
            const isSaved = savedTopics.includes(topic.id);
            const isActive = activeTopicId === topic.id;

            return (
              <li
                key={topic.id}
                className={`${isCompleted ? 'toc-completed' : ''} ${isActive ? 'active-topic' : ''}`}
              >
                <a
                  href={`#${topic.id}`}
                  onClick={e => { e.preventDefault(); scrollToTopic(topic.id); }}
                >
                  <span className="toc-tag">{topic.tag}</span>
                  <span className="toc-title">{topic.title}</span>
                  <span className="toc-icons">
                    {isSaved && <i className="fa-solid fa-bookmark toc-saved-icon" title="Saved" />}
                    {isCompleted && <i className="fa-solid fa-circle-check toc-done-icon" title="Completed" />}
                  </span>
                </a>
              </li>
            );
          })}
          {/* Practice Quiz */}
          <div className="toc-practice-section">
            <a
              href="/quiz"
              className="toc-practice-btn"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="toc-practice-icon">
                <i className="fa-solid fa-graduation-cap" />
              </span>

              <span className="toc-practice-content">
                <strong>Practice Quiz</strong>
                <small>Test your CSS knowledge</small>
              </span>

              <i className="fa-solid fa-arrow-right toc-practice-arrow" />
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}