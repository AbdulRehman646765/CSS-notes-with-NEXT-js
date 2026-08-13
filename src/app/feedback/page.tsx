'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Feedback.module.css';

type FeedbackType = 'suggestion' | 'bug' | 'content' | 'appreciation';

const feedbackTypes: {
  id: FeedbackType;
  label: string;
  icon: string;
  description: string;
}[] = [
  {
    id: 'suggestion',
    label: 'Suggestion',
    icon: 'fa-lightbulb',
    description: 'Share an idea or feature',
  },
  {
    id: 'bug',
    label: 'Bug Report',
    icon: 'fa-bug',
    description: 'Something is not working',
  },
  {
    id: 'content',
    label: 'Content',
    icon: 'fa-book-open',
    description: 'Improve a note or topic',
  },
  {
    id: 'appreciation',
    label: 'Appreciation',
    icon: 'fa-heart',
    description: 'Tell us what you love',
  },
];

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] =
    useState<FeedbackType>('suggestion');

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const maxCharacters = 1000;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
      setName('');
      setEmail('');
      setRating(0);
      setFeedbackType('suggestion');
    }, 3500);
  };

  return (
    <main className={styles.page}>
      {/* Decorative Background */}
      <div className={styles.backgroundGlowOne} />
      <div className={styles.backgroundGlowTwo} />
      <div className={styles.gridPattern} />

      <div className={styles.pageContainer}>
        {/* Top Navigation */}
        <nav className={styles.topNav}>
          <Link href="/" className={styles.backButton}>
            <span className={styles.backIcon}>
              <i className="fa-solid fa-arrow-left" />
            </span>

            <span>Back to Notes</span>
          </Link>

          <div className={styles.brand}>
            <span className={styles.brandIcon}>
              <i className="fa-brands fa-css3-alt" />
            </span>

            <span>CSS Notes</span>
          </div>
        </nav>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroIcon}>
            <i className="fa-solid fa-comments" />
          </div>

          <div className={styles.eyebrow}>
            <span />
            YOUR VOICE MATTERS
            <span />
          </div>

          <h1>
            Help us build a
            <span> better learning experience.</span>
          </h1>

          <p>
            Whether you found a bug, have an amazing idea, or simply want
            to tell us what you think every piece of feedback helps
            CSS Notes get better.
          </p>
        </header>

        {/* Main Feedback Area */}
        <section className={styles.feedbackShell}>
          {/* Left Information Panel */}
          <aside className={styles.infoPanel}>
            <div className={styles.infoTop}>
              <span className={styles.infoBadge}>
                <i className="fa-solid fa-sparkles" />
                FEEDBACK CENTER
              </span>

              <h2>
                We&apos;re
                <br />
                listening.
              </h2>

              <p>
                Your feedback directly helps shape new features,
                improve tutorials, and make learning web development
                easier.
              </p>
            </div>

            <div className={styles.infoStats}>
              <div className={styles.stat}>
                <strong>
                  <i className="fa-solid fa-bolt" />
                </strong>

                <div>
                  <span>Fast</span>
                  <small>Simple feedback process</small>
                </div>
              </div>

              <div className={styles.stat}>
                <strong>
                  <i className="fa-solid fa-users" />
                </strong>

                <div>
                  <span>Community</span>
                  <small>Built around learners</small>
                </div>
              </div>

              <div className={styles.stat}>
                <strong>
                  <i className="fa-solid fa-code" />
                </strong>

                <div>
                  <span>Improvement</span>
                  <small>Constantly getting better</small>
                </div>
              </div>
            </div>

            <div className={styles.quote}>
              <i className="fa-solid fa-quote-left" />

              <p>
                Great learning resources are built by listening to
                the people who use them.
              </p>

              <span>— ABDUL REHMAN</span>
            </div>
          </aside>

          {/* Feedback Form */}
          <div className={styles.formPanel}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <i className="fa-solid fa-check" />
                </div>

                <span className={styles.successBadge}>
                  FEEDBACK RECEIVED
                </span>

                <h2>Thank you!</h2>

                <p>
                  Your feedback has been received. We really
                  appreciate you taking the time to help improve
                  CSS Notes.
                </p>

                <div className={styles.successDetails}>
                  <span>
                    <i className="fa-solid fa-circle-check" />
                    Feedback type: {feedbackTypes.find(
                      type => type.id === feedbackType
                    )?.label}
                  </span>

                  {rating > 0 && (
                    <span>
                      <i className="fa-solid fa-star" />
                      Your rating: {rating}/5
                    </span>
                  )}
                </div>

                <Link href="/" className={styles.successButton}>
                  <i className="fa-solid fa-arrow-left" />
                  Return to Notes
                </Link>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <div>
                    <span>STEP 01</span>
                    <h2>What would you like to tell us?</h2>
                  </div>

                  <div className={styles.formHeaderIcon}>
                    <i className="fa-solid fa-pen" />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Feedback Type */}
                  <div className={styles.field}>
                    <label>Choose a feedback type</label>

                    <div className={styles.typeGrid}>
                      {feedbackTypes.map(type => (
                        <button
                          key={type.id}
                          type="button"
                          className={`${styles.typeCard} ${
                            feedbackType === type.id
                              ? styles.typeCardActive
                              : ''
                          }`}
                          onClick={() =>
                            setFeedbackType(type.id)
                          }
                        >
                          <span className={styles.typeIcon}>
                            <i
                              className={`fa-solid ${type.icon}`}
                            />
                          </span>

                          <span className={styles.typeContent}>
                            <strong>{type.label}</strong>
                            <small>{type.description}</small>
                          </span>

                          <span className={styles.radio}>
                            {feedbackType === type.id && (
                              <i className="fa-solid fa-check" />
                            )}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={styles.ratingSection}>
                    <div>
                      <label>How would you rate CSS Notes?</label>

                      <small>
                        Optional — only if you want to rate your
                        experience.
                      </small>
                    </div>

                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className={
                            star <= rating
                              ? styles.starActive
                              : styles.star
                          }
                          onClick={() => setRating(star)}
                          aria-label={`Rate ${star} out of 5`}
                        >
                          <i className="fa-solid fa-star" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.field}>
                    <div className={styles.labelRow}>
                      <label htmlFor="message">
                        Your feedback
                      </label>

                      <span>
                        {message.length}/{maxCharacters}
                      </span>
                    </div>

                    <div className={styles.textareaWrapper}>
                      <textarea
                        id="message"
                        value={message}
                        maxLength={maxCharacters}
                        onChange={e =>
                          setMessage(e.target.value)
                        }
                        placeholder="Tell us what you think, what we can improve, or what you'd like to see next..."
                        required
                      />

                      <i className="fa-solid fa-message" />
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className={styles.twoColumns}>
                    <div className={styles.field}>
                      <label htmlFor="name">
                        Name
                        <span>Optional</span>
                      </label>

                      <div className={styles.inputWrapper}>
                        <i className="fa-solid fa-user" />

                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={e =>
                            setName(e.target.value)
                          }
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email">
                        Email
                        <span>Optional</span>
                      </label>

                      <div className={styles.inputWrapper}>
                        <i className="fa-solid fa-envelope" />

                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={e =>
                            setEmail(e.target.value)
                          }
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className={styles.submitArea}>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={!message.trim()}
                    >
                      <span>
                        <i className="fa-solid fa-paper-plane" />
                        Send Feedback
                      </span>

                      <i className="fa-solid fa-arrow-right" />
                    </button>

                    <p>
                      <i className="fa-solid fa-lock" />
                      Your feedback is only used to improve
                      CSS Notes.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>

        {/* Bottom Help */}
        <section className={styles.bottomSection}>
          <div className={styles.bottomTitle}>
            <span>NOT SURE WHAT TO SEND?</span>
            <h2>Anything helps.</h2>
          </div>

          <div className={styles.helpItems}>
            <div>
              <i className="fa-solid fa-bug" />
              <span>
                Found a bug?
              </span>
            </div>

            <div>
              <i className="fa-solid fa-lightbulb" />
              <span>
                Have a feature idea?
              </span>
            </div>

            <div>
              <i className="fa-solid fa-book-open" />
              <span>
                Need better content?
              </span>
            </div>

            <div>
              <i className="fa-solid fa-heart" />
              <span>
                Want to say thanks?
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div>
            <i className="fa-brands fa-css3-alt" />
            CSS Notes
          </div>

          <span>
            Built for learners • Built with care
          </span>

          <Link href="/">
            Back to Notes
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </footer>
      </div>
    </main>
  );
}