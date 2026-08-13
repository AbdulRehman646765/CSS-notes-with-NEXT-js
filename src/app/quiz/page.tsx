'use client';

import { useState } from 'react';
import { quizQuestions } from '../../data/quiz';
import './quiz.css';

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const total = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIndex];

  const selectedAnswer = selectedAnswers[currentIndex];

  const progress = ((currentIndex + 1) / total) * 100;

  const calculateScore = () => {
    return quizQuestions.reduce((score, question, index) => {
      return score + (
        selectedAnswers[index] === question.correctAnswer ? 1 : 0
      );
    }, 0);
  };

  const score = calculateScore();
  const percentage = Math.round((score / total) * 100);

  const handleSelect = (optionIndex: number) => {
    if (submitted) return;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (selectedAnswer === undefined) return;

    if (currentIndex === total - 1) {
      setSubmitted(true);
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setShowExplanation(false);
  };

  const handlePrevious = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(prev => prev - 1);

    const previousAnswer = selectedAnswers[currentIndex - 1];

    setShowExplanation(previousAnswer !== undefined);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowExplanation(false);
  };

  const getOptionClass = (optionIndex: number) => {
    if (selectedAnswer === undefined) {
      return '';
    }

    if (optionIndex === currentQuestion.correctAnswer) {
      return 'correct';
    }

    if (
      optionIndex === selectedAnswer &&
      selectedAnswer !== currentQuestion.correctAnswer
    ) {
      return 'wrong';
    }

    return 'disabled-option';
  };

  /*
   * RESULT SCREEN
   */
  if (submitted) {
    return (
      <main className="quiz-page">

        <div className="quiz-result-wrapper">

          <div className="result-top-brand">
            <div className="result-brand-icon">
              <i className="fa-brands fa-css3-alt" />
            </div>

            <span>CSS MASTER QUIZ</span>
          </div>

          <section className="quiz-result-card">

            <div className="result-trophy">
              <i className="fa-solid fa-trophy" />
            </div>

            <span className="result-eyebrow">
              QUIZ COMPLETED
            </span>

            <h1>
              {percentage >= 80
                ? 'Excellent Work!'
                : percentage >= 50
                  ? 'Good Job!'
                  : 'Keep Practicing!'}
            </h1>

            <p className="result-description">
              You have completed the CSS Master Quiz.
              Here is your final performance.
            </p>

            <div className="result-score-ring">

              <div className="result-score-inner">
                <strong>{percentage}%</strong>
                <span>Score</span>
              </div>

            </div>

            <div className="result-stats">

              <div className="result-stat">
                <i className="fa-solid fa-circle-check" />
                <strong>{score}</strong>
                <span>Correct</span>
              </div>

              <div className="result-stat">
                <i className="fa-solid fa-circle-xmark" />
                <strong>{total - score}</strong>
                <span>Wrong</span>
              </div>

              <div className="result-stat">
                <i className="fa-solid fa-list-check" />
                <strong>{total}</strong>
                <span>Total</span>
              </div>

            </div>

            <div className="result-actions">

              <button
                className="result-btn primary"
                onClick={handleRestart}
              >
                <i className="fa-solid fa-rotate-right" />
                Try Again
              </button>

              <a
                href="/"
                className="result-btn secondary"
              >
                <i className="fa-solid fa-book-open" />
                Back to Notes
              </a>

            </div>

          </section>

          <p className="result-footer">
            <i className="fa-solid fa-code" />
            Keep learning. Keep building.
          </p>

        </div>

      </main>
    );
  }

  /*
   * QUIZ SCREEN
   */
  return (
    <main className="quiz-page">

      <div className="quiz-wrapper">

        {/* =========================================
            TOP BAR
        ========================================= */}

        <header className="quiz-header">

          <a href="/" className="quiz-back-btn">
            <i className="fa-solid fa-arrow-left" />
            <span>Back to Notes</span>
          </a>

          <div className="quiz-brand">

            <div className="quiz-brand-icon">
              <i className="fa-brands fa-css3-alt" />
            </div>

            <div>
              <strong>CSS Master Quiz</strong>
              <span>Test your CSS knowledge</span>
            </div>

          </div>

          <div className="quiz-header-status">

            <i className="fa-solid fa-bolt" />

            <span>
              Question {currentIndex + 1}
              <small> / {total}</small>
            </span>

          </div>

        </header>

        {/* =========================================
            HERO / DASHBOARD
        ========================================= */}

        <section className="quiz-dashboard">

          <div className="dashboard-left">

            <span className="dashboard-label">
              <i className="fa-solid fa-graduation-cap" />
              CSS ASSESSMENT
            </span>

            <h1>
              Challenge your
              <span> CSS skills.</span>
            </h1>

            <p>
              Choose the best answer for each question.
              Instant feedback will help you learn as you go.
            </p>

          </div>

          <div className="dashboard-progress">

            <div className="progress-circle">

              <div>
                <strong>{Math.round(progress)}%</strong>
                <span>Progress</span>
              </div>

            </div>

            <div className="dashboard-progress-text">

              <strong>
                {currentIndex + 1} of {total}
              </strong>

              <span>Questions</span>

            </div>

          </div>

        </section>

        {/* =========================================
            PROGRESS BAR
        ========================================= */}

        <div className="quiz-progress-wrapper">

          <div className="quiz-progress-info">

            <span>Quiz Progress</span>

            <strong>
              {currentIndex + 1}/{total}
            </strong>

          </div>

          <div className="quiz-progress-track">

            <div
              className="quiz-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* =========================================
            QUESTION
        ========================================= */}

        <section className="question-card">

          <div className="question-card-top">

            <div className="question-number">
              <span>Q</span>
              <strong>
                {String(currentQuestion.id).padStart(2, '0')}
              </strong>
            </div>

            <div className="question-topic">
              <i className="fa-solid fa-code" />
              CSS Knowledge
            </div>

          </div>

          <h2 className="question-title">
            {currentQuestion.question}
          </h2>

          <p className="question-instruction">
            Select one option below
          </p>

          {/* =========================================
              OPTIONS
          ========================================= */}

          <div className="quiz-options">

            {currentQuestion.options.map((option, index) => {

              const state = getOptionClass(index);

              return (
                <button
                  key={index}
                  type="button"
                  className={`quiz-option ${state}`}
                  onClick={() => handleSelect(index)}
                  disabled={selectedAnswer !== undefined}
                >

                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-content">
                    {option}
                  </span>

                  <span className="option-icon">

                    {state === 'correct' && (
                      <i className="fa-solid fa-circle-check" />
                    )}

                    {state === 'wrong' && (
                      <i className="fa-solid fa-circle-xmark" />
                    )}

                    {!state && (
                      <i className="fa-solid fa-arrow-right" />
                    )}

                  </span>

                </button>
              );
            })}

          </div>

          {/* =========================================
              EXPLANATION
          ========================================= */}

          {showExplanation && selectedAnswer !== undefined && (

            <div
              className={`answer-feedback ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'feedback-correct'
                  : 'feedback-wrong'
              }`}
            >

              <div className="feedback-icon">

                <i
                  className={
                    selectedAnswer === currentQuestion.correctAnswer
                      ? 'fa-solid fa-check'
                      : 'fa-solid fa-xmark'
                  }
                />

              </div>

              <div className="feedback-content">

                <strong>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? 'Correct Answer!'
                    : 'Not quite!'}
                </strong>

                <p>
                  {currentQuestion.explanation}
                </p>

              </div>

            </div>

          )}

          {/* =========================================
              NAVIGATION
          ========================================= */}

          <div className="quiz-navigation">

            <button
              type="button"
              className="quiz-nav-btn previous"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <i className="fa-solid fa-arrow-left" />

              <span>Previous</span>
            </button>

            <div className="nav-dots">

              {quizQuestions.map((_, index) => (

                <span
                  key={index}
                  className={`
                    ${index === currentIndex ? 'active' : ''}
                    ${selectedAnswers[index] !== undefined ? 'answered' : ''}
                  `}
                />

              ))}

            </div>

            <button
              type="button"
              className="quiz-nav-btn next"
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
            >

              <span>
                {currentIndex === total - 1
                  ? 'Finish Quiz'
                  : 'Next Question'}
              </span>

              <i
                className={
                  currentIndex === total - 1
                    ? 'fa-solid fa-check'
                    : 'fa-solid fa-arrow-right'
                }
              />

            </button>

          </div>

        </section>

        {/* =========================================
            BOTTOM TIPS
        ========================================= */}

        <div className="quiz-tips">

          <div>
            <i className="fa-solid fa-lightbulb" />
            <span>
              <strong>Tip</strong>
              Read every option carefully before choosing.
            </span>
          </div>

          <div>
            <i className="fa-solid fa-bolt" />
            <span>
              Instant feedback after every answer.
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}