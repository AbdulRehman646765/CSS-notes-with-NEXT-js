'use client';

import { useState } from 'react';
import { quizQuestions } from '../data/quiz';
import { Button } from './ui/Button';

export default function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const total = quizQuestions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowReview(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / total) * 100);

  return (
    <section id="quiz-area" className="reveal active">
      <div className="topic-tag">QUIZ</div>

      <h1>
        <span className="title-left">
          <i className="fa-solid fa-graduation-cap" /> CSS Master Quiz
        </span>
        <span className="quiz-header-badge">
          {submitted ? 'Completed' : `Question ${currentIndex + 1} of ${total}`}
        </span>
      </h1>

      {!submitted ? (
        <div className="quiz-container">
          <div className="quiz-progress-bar-container">
            <div
              className="quiz-progress-bar-fill"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>

          <h3 className="quiz-question-title">
            {currentQ.id}. {currentQ.question}
          </h3>

          <div className="quiz-options-grid">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              return (
                <button
                  key={optIdx}
                  className={`option-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(optIdx)}
                >
                  <span className="option-prefix">{String.fromCharCode(65 + optIdx)}.</span>
                  <span className="option-text">{opt}</span>
                </button>
              );
            })}
          </div>

          <div className="quiz-nav-actions" style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outline"
              size="sm"
              icon="fa-solid fa-arrow-left"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={currentIndex === total - 1 ? 'fa-solid fa-check' : 'fa-solid fa-arrow-right'}
              iconPosition="right"
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
            >
              {currentIndex === total - 1 ? 'Submit Quiz' : 'Next Question'}
            </Button>
          </div>
        </div>
      ) : (
        <div className="quiz-score-card">
          <div className="quiz-score-circle">{percentage}%</div>
          <h3>Quiz Completed!</h3>
          <p className="quiz-score-summary">
            You scored <strong>{score}</strong> out of <strong>{total}</strong> questions correctly.
          </p>

          <div style={{ margin: '20px 0', display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Button variant="secondary" icon="fa-solid fa-rotate-right" onClick={handleRestart}>
              Try Again
            </Button>
            <Button variant="outline" icon="fa-solid fa-list-check" onClick={() => setShowReview(v => !v)}>
              {showReview ? 'Hide Answers' : 'Review Answers'}
            </Button>
          </div>

          {showReview && (
            <div className="review-answers-container">
              {quizQuestions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id} className={`review-item ${isCorrect ? 'correct' : 'wrong'}`}>
                    <p style={{ margin: '0 0 6px 0', fontWeight: 600 }}>
                      {q.id}. {q.question}
                    </p>
                    <p style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>
                      Your Answer: <span style={{ color: isCorrect ? '#2ecc71' : '#e74c3c', fontWeight: 600 }}>{userAns !== undefined ? q.options[userAns] : 'Not Answered'}</span>
                    </p>
                    {!isCorrect && (
                      <p style={{ margin: '0 0 4px 0', fontSize: '0.9rem', color: '#27ae60' }}>
                        Correct Answer: <strong>{q.options[q.correctAnswer]}</strong>
                      </p>
                    )}
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', opacity: 0.8 }}>
                      💡 <em>{q.explanation}</em>
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
