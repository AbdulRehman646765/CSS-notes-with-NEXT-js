'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="simple-footer">
      <div className="footer-container">
        {/* Top CTA */}
        <div className="footer-top-cta">
          <div className="cta-content">
            <h2>Ready to master Modern Web Development?</h2>
            <p>Explore full CSS Notes, interactive live code practices, and multi-language tutorials.</p>
          </div>
          <a
            href="#top"
            className="simple-cta-btn"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </a>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Left Group */}
          <div className="footer-left-group">
            <div className="footer-left-top">
              <div className="footer-col">
                <h3><i className="fa-brands fa-css3-alt" /> CSS Notes</h3>
                <p>
                  Comprehensive interactive learning portal designed for mastering Cascading Style Sheets with real-world practices and multi-language support.
                </p>
              </div>
              <div className="footer-col contact-card">
                <h4>Stay Updated</h4>
                <form className="footer-feedback" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" title="Subscribe">
                    <i className={subscribed ? 'fa-solid fa-check' : 'fa-solid fa-paper-plane'} />
                  </button>
                </form>
                {subscribed && (
                  <p style={{ color: '#2ecc71', fontSize: '0.85rem', margin: '-15px 0 15px 0' }}>
                    ✓ Thank you for subscribing!
                  </p>
                )}
                <a href="mailto:contact@cssnotes.dev" className="footer-mail">
                  <i className="fa-solid fa-envelope" /> contact@cssnotes.dev
                </a>
              </div>
            </div>

            {/* Author Section Card */}
            <div className="author-horizontal-section">
              <div className="ahs-content">
                <div className="ahs-avatar">
                  <i className="fa-solid fa-code" />
                </div>
                <div className="ahs-info">
                  <span className="ahs-label">Author & Creator</span>
                  <div className="ahs-name">
                    Ch Abdul Rehman <i className="fa-solid fa-circle-check" title="Verified Creator" />
                  </div>
                </div>
              </div>
              <div className="ahs-signature">
                <span>CSS Notes Lead</span>
              </div>
            </div>
          </div>

          {/* Socials & Links */}
          <div className="footer-col">
            <h4>Connect with Us</h4>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fa-brands fa-x-twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <span>CSS Notes</span>. Built with Next.js & TypeScript. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
