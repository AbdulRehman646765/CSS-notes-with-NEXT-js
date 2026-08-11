'use client';

import { useNotes } from '../context/NotesContext';

export default function FloatingMenuBtn() {
  const { sidebarOpen, setSidebarOpen } = useNotes();

  return (
    <button
      id="menu-toggle"
      className="floating-btn"
      title="Topic Selection"
      onClick={() => setSidebarOpen(!sidebarOpen)}
      aria-label="Toggle Table of Contents Sidebar"
    >
      <i className="fa-solid fa-bars-staggered" />
    </button>
  );
}
