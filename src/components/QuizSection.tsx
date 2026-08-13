'use client';

import { useState } from 'react';
import { quizQuestions } from '../data/quiz';

export default function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const total = quizQuestions.length;

  const selectedAnswer = selectedAnswers[currentIndex];
  const hasAnswered = selectedAnswer !== undefined;

  const isCurrentAnswerCorrect =
    hasAnswered && selectedAnswer === currentQ.correctAnswer;

  /* =========================================================
     SELECT ANSWER
  ========================================================= */

  const handleSelectOption = (optionIndex: number) => {
    // Once an answer is selected, lock the question
    if (hasAnswered || submitted) return;

    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  /* =========================================================
     NEXT / SUBMIT
  ========================================================= */

  const handleNext = () => {
    if (!hasAnswered) return;

    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setSubmitted(true);
      setShowReview(false);
    }
  };

  /* =========================================================
     PREVIOUS
  ========================================================= */

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  /* =========================================================
     SCORE
  ========================================================= */

  const calculateScore = () => {
    let score = 0;

    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    return score;
  };

  /* =========================================================
     RESTART
  ========================================================= */

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowReview(false);
  };

  const score = calculateScore();
  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  /* =========================================================
     SCORE MESSAGE
  ========================================================= */

  const getScoreMessage = () => {
    if (percentage >= 90) {
      return {
        title: 'Excellent Work!',
        text: 'You have a very strong understanding of CSS.',
        icon: 'fa-solid fa-trophy',
      };
    }

    if (percentage >= 70) {
      return {
        title: 'Great Job!',
        text: 'You have a good understanding of CSS. Keep practicing!',
        icon: 'fa-solid fa-medal',
      };
    }

    if (percentage >= 50) {
      return {
        title: 'Good Effort!',
        text: 'You are getting there. Review the topics and try again.',
        icon: 'fa-solid fa-thumbs-up',
      };
    }

    return {
      title: 'Keep Practicing!',
      text: 'Review your CSS notes and give the quiz another try.',
      icon: 'fa-solid fa-book-open',
    };
  };

  const scoreMessage = getScoreMessage();

  return (
    <section id="quiz-area" className="reveal active">
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="topic-tag">
        <i className="fa-solid fa-brain" />
        QUIZ
      </div>

      <h1>
        <span className="title-left">
          <i className="fa-solid fa-graduation-cap" />
          CSS Master Quiz
        </span>

        <span className="quiz-header-badge">
          {submitted
            ? 'Completed'
            : `Question ${currentIndex + 1} of ${total}`}
        </span>
      </h1>

      {/* =====================================================
          ACTIVE QUIZ
      ===================================================== */}

      {!submitted ? (
        <div className="quiz-container">

          {/* Progress Header */}

          <div className="quiz-progress-header">
            <div className="quiz-progress-label">
              <span>
                <i className="fa-solid fa-list-check" />
                Quiz Progress
              </span>

              <strong>
                {currentIndex + 1} / {total}
              </strong>
            </div>

            <div className="quiz-progress-bar-container">
              <div
                className="quiz-progress-bar-fill"
                style={{
                  width: `${((currentIndex + 1) / total) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Card */}

          <div className="quiz-question-card">

            <div className="quiz-question-meta">
              <span className="quiz-question-number">
                Question {currentIndex + 1}
              </span>

              {hasAnswered && (
                <span
                  className={`quiz-answer-status ${isCurrentAnswerCorrect ? 'correct' : 'wrong'
                    }`}
                >
                  <i
                    className={
                      isCurrentAnswerCorrect
                        ? 'fa-solid fa-circle-check'
                        : 'fa-solid fa-circle-xmark'
                    }
                  />

                  {isCurrentAnswerCorrect
                    ? 'Correct Answer'
                    : 'Incorrect Answer'}
                </span>
              )}
            </div>

            <h3 className="quiz-question-title">
              {currentQ.id}. {currentQ.question}
            </h3>

            {/* Options */}

            <div className="quiz-options-grid">
              {currentQ.options.map((option, optionIndex) => {
                const isSelected = selectedAnswer === optionIndex;
                const isCorrect =
                  currentQ.correctAnswer === optionIndex;

                let optionState = '';

                if (hasAnswered) {
                  if (isCorrect) {
                    optionState = 'correct';
                  } else if (isSelected) {
                    optionState = 'wrong';
                  }
                }

                const letter = String.fromCharCode(
                  65 + optionIndex
                );

                return (
                  <button
                    key={optionIndex}
                    type="button"
                    className={`quiz-option ${optionState}`}
                    onClick={() =>
                      handleSelectOption(optionIndex)
                    }
                    disabled={hasAnswered}
                    aria-pressed={isSelected}
                  >
                    <span className="quiz-option-prefix">
                      {optionState === 'correct' ? (
                        <i className="fa-solid fa-check" />
                      ) : optionState === 'wrong' ? (
                        <i className="fa-solid fa-xmark" />
                      ) : (
                        letter
                      )}
                    </span>

                    <span className="quiz-option-text">
                      {option}
                    </span>

                    <span className="quiz-option-indicator">
                      {optionState === 'correct' ? (
                        <i className="fa-solid fa-circle-check" />
                      ) : optionState === 'wrong' ? (
                        <i className="fa-solid fa-circle-xmark" />
                      ) : (
                        <i className="fa-solid fa-arrow-right" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}

            {hasAnswered && (
              <div
                className={`quiz-feedback ${isCurrentAnswerCorrect ? 'feedback-correct' : 'feedback-wrong'
                  }`}
              >
                <div className="quiz-feedback-icon">
                  <i
                    className={
                      isCurrentAnswerCorrect
                        ? 'fa-solid fa-check'
                        : 'fa-solid fa-lightbulb'
                    }
                  />
                </div>

                <div className="quiz-feedback-content">
                  <strong>
                    {isCurrentAnswerCorrect
                      ? 'Correct!'
                      : `Not quite — the correct answer is "${currentQ.options[currentQ.correctAnswer]}"`}
                  </strong>

                  {currentQ.explanation && (
                    <p>{currentQ.explanation}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}

          <div className="quiz-navigation">

            {/* Previous */}

            <button
              type="button"
              className="quiz-nav-btn quiz-prev-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <span className="quiz-nav-icon">
                <i className="fa-solid fa-arrow-left" />
              </span>

              <span className="quiz-nav-content">
                <small>Previous</small>
                <strong>Question</strong>
              </span>
            </button>

            {/* Center Status */}

            <div className="quiz-navigation-info">
              {hasAnswered ? (
                <>
                  <i className="fa-solid fa-circle-check" />
                  Answer selected
                </>
              ) : (
                <>
                  <i className="fa-solid fa-hand-pointer" />
                  Choose an answer
                </>
              )}
            </div>

            {/* Next / Submit */}

            <button
              type="button"
              className="quiz-nav-btn quiz-next-btn"
              onClick={handleNext}
              disabled={!hasAnswered}
            >
              <span className="quiz-nav-content">
                <small>
                  {currentIndex === total - 1
                    ? 'Finish'
                    : 'Next'}
                </small>

                <strong>
                  {currentIndex === total - 1
                    ? 'Submit Quiz'
                    : 'Question'}
                </strong>
              </span>

              <span className="quiz-nav-icon">
                <i
                  className={
                    currentIndex === total - 1
                      ? 'fa-solid fa-check'
                      : 'fa-solid fa-arrow-right'
                  }
                />
              </span>
            </button>

          </div>
        </div>
      ) : (
        /* =====================================================
           QUIZ RESULT
        ===================================================== */

        <div className="quiz-score-card">

          <div className="quiz-result-icon">
            <i className={scoreMessage.icon} />
          </div>

          <div className="quiz-score-circle">
            <span>{percentage}</span>
            <small>%</small>
          </div>

          <span className="quiz-result-label">
            Quiz Completed
          </span>

          <h3>{scoreMessage.title}</h3>

          <p className="quiz-score-summary">
            You scored{' '}
            <strong>{score}</strong> out of{' '}
            <strong>{total}</strong> questions correctly.
          </p>

          <p className="quiz-result-description">
            {scoreMessage.text}
          </p>

          {/* Score Stats */}

          <div className="quiz-result-stats">

            <div className="quiz-result-stat">
              <span className="stat-icon correct">
                <i className="fa-solid fa-check" />
              </span>

              <div>
                <strong>{score}</strong>
                <small>Correct</small>
              </div>
            </div>

            <div className="quiz-result-stat">
              <span className="stat-icon wrong">
                <i className="fa-solid fa-xmark" />
              </span>

              <div>
                <strong>{total - score}</strong>
                <small>Incorrect</small>
              </div>
            </div>

            <div className="quiz-result-stat">
              <span className="stat-icon total">
                <i className="fa-solid fa-list-check" />
              </span>

              <div>
                <strong>{total}</strong>
                <small>Total</small>
              </div>
            </div>

          </div>

          {/* Result Actions */}

          <div className="quiz-result-actions">

            <button
              type="button"
              className="quiz-result-btn secondary"
              onClick={handleRestart}
            >
              <i className="fa-solid fa-rotate-right" />
              Try Again
            </button>

            <button
              type="button"
              className="quiz-result-btn primary"
              onClick={() => setShowReview(prev => !prev)}
            >
              <i
                className={
                  showReview
                    ? 'fa-solid fa-eye-slash'
                    : 'fa-solid fa-list-check'
                }
              />

              {showReview
                ? 'Hide Answers'
                : 'Review Answers'}
            </button>

          </div>

          {/* Review Answers */}

          {showReview && (
            <div className="review-answers-container">

              <div className="review-header">
                <div>
                  <span className="review-label">
                    <i className="fa-solid fa-clipboard-check" />
                    Quiz Review
                  </span>

                  <h3>
                    Review Your Answers
                  </h3>
                </div>

                <span className="review-score">
                  {score}/{total}
                </span>
              </div>

              {quizQuestions.map((question, index) => {
                const userAnswer =
                  selectedAnswers[index];

                const isCorrect =
                  userAnswer === question.correctAnswer;

                return (
                  <div
                    key={question.id}
                    className={`review-item ${isCorrect ? 'correct' : 'wrong'
                      }`}
                  >
                    <div className="review-item-top">

                      <span className="review-question-number">
                        Q{question.id}
                      </span>

                      <span
                        className={`review-result ${isCorrect
                            ? 'correct'
                            : 'wrong'
                          }`}
                      >
                        <i
                          className={
                            isCorrect
                              ? 'fa-solid fa-check'
                              : 'fa-solid fa-xmark'
                          }
                        />

                        {isCorrect
                          ? 'Correct'
                          : 'Incorrect'}
                      </span>

                    </div>

                    <p className="review-question">
                      {question.question}
                    </p>

                    <div className="review-answer-row">
                      <span>
                        Your Answer
                      </span>

                      <strong
                        className={
                          isCorrect
                            ? 'answer-correct'
                            : 'answer-wrong'
                        }
                      >
                        {userAnswer !== undefined
                          ? question.options[userAnswer]
                          : 'Not Answered'}
                      </strong>
                    </div>

                    {!isCorrect && (
                      <div className="review-answer-row correct-answer">
                        <span>
                          Correct Answer
                        </span>

                        <strong>
                          {
                            question.options[
                            question.correctAnswer
                            ]
                          }
                        </strong>
                      </div>
                    )}

                    {question.explanation && (
                      <div className="review-explanation">
                        <i className="fa-solid fa-lightbulb" />

                        <p>
                          {question.explanation}
                        </p>
                      </div>
                    )}
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