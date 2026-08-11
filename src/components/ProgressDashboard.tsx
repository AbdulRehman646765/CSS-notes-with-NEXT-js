'use client';

import { useNotes } from '../context/NotesContext';
import { topicsData } from '../data/topics';

const TOTAL = topicsData.length; // 58

export default function ProgressDashboard() {
  const { completedTopics, savedTopics, activeFilter, setActiveFilter, t } = useNotes();

  const completedCount = completedTopics.length;
  const percent = Math.min(100, Math.round((completedCount / TOTAL) * 100));

  return (
    <div className="progress-dashboard" id="progress-dashboard">
      <div className="progress-info">
        <div className="progress-circle-wrap" id="progress-percent">
          {percent}%
        </div>
        <div className="progress-text-group">
          <h4>{t('ui_progress')}</h4>
          <div className="progress-subtext" id="progress-stats">
            {completedCount} / {TOTAL} Topics Completed
          </div>
          <div className="progress-bar-inline-bg" style={{ marginTop: '6px' }}>
            <div
              className="progress-bar-inline-fill"
              id="progress-inline-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
      <div className="dashboard-actions">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          id="filter-all-btn"
          onClick={() => setActiveFilter('all')}
        >
          <i className="fa-solid fa-list-ul" /> <span>All Topics</span>
        </button>
        <button
          className={`filter-btn ${activeFilter === 'saved' ? 'active' : ''}`}
          id="filter-saved-btn"
          onClick={() => setActiveFilter('saved')}
        >
          <i className="fa-solid fa-bookmark" />
          <span id="saved-count-label">Saved ({savedTopics.length})</span>
        </button>
      </div>
    </div>
  );
}
