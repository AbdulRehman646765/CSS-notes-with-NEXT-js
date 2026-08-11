'use client';

import { useState, useEffect, useRef } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Magnetic hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const btn = btnRef.current;
    if (!wrap || !btn) return;
    const rect = wrap.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = '';
  };

  return (
    <div
      id="back-to-top-magnetic"
      ref={wrapRef}
      className={visible ? 'visible' : ''}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="back-to-top"
        ref={btnRef}
        title="Back to Top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        {/* <i className="fa-solid fa-arrow-up" /> */}
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
}
