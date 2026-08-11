'use client';

import { useNotes } from '../context/NotesContext';
import { topicsData } from '../data/topics';
import TopicCard from './TopicCard';

export default function TopicList() {
  const { searchQuery, activeFilter, savedTopics } = useNotes();

  const filtered = topicsData.filter(topic => {
    // Filter by saved
    if (activeFilter === 'saved' && !savedTopics.includes(topic.id)) return false;
    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.definition.toLowerCase().includes(q) ||
        topic.tag.toLowerCase().includes(q)
      );
    }
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div id="no-results">
        <i className="fa-solid fa-face-frown" />
        <p>
          {activeFilter === 'saved'
            ? 'Koi saved topic nahi hai! Save a topic first.'
            : 'Nahi mila! Try searching something else.'}
        </p>
      </div>
    );
  }

  return (
    <>
      {filtered.map(topic => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </>
  );
}
