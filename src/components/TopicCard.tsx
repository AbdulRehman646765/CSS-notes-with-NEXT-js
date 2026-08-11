'use client';

import { useState, useRef, useEffect } from 'react';
import { Topic } from '../types';
import { useNotes } from '../context/NotesContext';
import CodeBlock from './CodeBlock';
import LivePreviewBox from './LivePreviewBox';
import { Button } from './ui/Button';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  const { completedTopics, savedTopics, toggleCompleteTopic, toggleSaveTopic, t } = useNotes();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const isSaved = savedTopics.includes(topic.id);
  const isCompleted = completedTopics.includes(topic.id);

  // Intersection observer for reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) el.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToTopic = (id: string) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id={topic.id} className={`reveal ${isCompleted ? 'topic-completed' : ''}`} ref={sectionRef}>
      <div className="topic-tag">{topic.tag}</div>

      <h1>
        <span className="title-left">
          <i className={topic.iconClass} /> {topic.title}
        </span>
        <div className="topic-header-actions">
          <button
            className={`action-chip bookmark-btn ${isSaved ? 'bookmarked' : ''}`}
            data-topic={topic.id}
            title={isSaved ? t('ui_saved') : t('ui_save')}
            onClick={() => toggleSaveTopic(topic.id)}
            aria-label="Bookmark Topic"
          >
            <i className={isSaved ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} />
          </button>
          <button
            className={`action-chip complete-btn ${isCompleted ? 'completed' : ''}`}
            data-topic={topic.id}
            title={isCompleted ? t('ui_completed') : t('ui_mark_complete')}
            onClick={() => toggleCompleteTopic(topic.id)}
            aria-label="Mark Topic Complete"
          >
            <i className={isCompleted ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check'} />
          </button>
        </div>
      </h1>

      <p>
        <strong>Definition:</strong> {topic.definition}
      </p>

      {topic.syntax && (
        <>
          <p><strong>Syntax:</strong></p>
          <CodeBlock code={topic.syntax} />
        </>
      )}

      {topic.exampleCode && (
        <>
          <p><strong>Example:</strong></p>
          <CodeBlock code={topic.exampleCode} />
        </>
      )}

      {/* Dynamic Topic-Specific Live Interactive Canvas */}
      {detailsOpen && (
        <LivePreviewBox topic={topic} />
      )}

      <Button
        variant="primary"
        size="sm"
        icon={detailsOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
        iconPosition="right"
        onClick={() => setDetailsOpen(v => !v)}
        className="more-details-btn"
      >
        {detailsOpen ? t('ui_hide_details') : t('ui_more_details')}
      </Button>

      <div className="more-details-content" id={`details-${topic.id}`} hidden={!detailsOpen}>
        {topic.proTip && (
          <div className="more-card pro-tip">
            <div className="more-card-title">
              <i className="fa-solid fa-lightbulb" /> <span>{t('ui_pro_tip')}</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{topic.proTip}</p>
          </div>
        )}

        {topic.practice && (
          <div className="more-card practice">
            <div className="more-card-title">
              <i className="fa-solid fa-bullseye" /> <span>{t('ui_practice')}</span>
            </div>
            <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem' }}>{topic.practice.question}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSolution(v => !v)}
              className="show-answer-btn"
            >
              {showSolution ? t('ui_hide_answer') : t('ui_show_answer')}
            </Button>
            {showSolution && (
              <div className="practice-solution">
                <CodeBlock code={topic.practice.solution} />
              </div>
            )}
          </div>
        )}

        {topic.extraInfoLink && (
          <div className="extra-info">
            <p><strong>Link of extra information for this topic:</strong></p>
            <a href={topic.extraInfoLink} target="_blank" rel="noopener noreferrer">
              {topic.extraInfoLabel || topic.title}
            </a>
          </div>
        )}
      </div>

      <div className="topic-nav">
        <button
          className="topic-nav-btn prev-btn"
          disabled={!topic.prevTarget}
          onClick={() => topic.prevTarget && scrollToTopic(topic.prevTarget)}
        >
          <i className="fa-solid fa-arrow-left" /> <span>{t('ui_prev')}</span>
        </button>
        <button
          className="topic-nav-btn next-btn"
          disabled={!topic.nextTarget}
          onClick={() => topic.nextTarget && scrollToTopic(topic.nextTarget)}
        >
          <span>{t('ui_next')}</span> <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}
