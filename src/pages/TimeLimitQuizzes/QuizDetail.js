// QuizDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizzes from './quizzes';
import styles from './QuizDetailStyles';
import bg from './images/bg.jpg';

const QuizDetail = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id, 10));
  const questions = quiz?.questions;

  if (!questions) {
    return <div>Quiz not found</div>;
  }

  const handleAnswerClick = (selectedAnswer) => {
    setChosenAnswer((prevAnswer) => (prevAnswer === selectedAnswer ? null : selectedAnswer));

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setChosenAnswer(null);
      resetTimer();
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setChosenAnswer(null);
    resetTimer();
  };

  const cardStyle = {
    backgroundImage: `url(${bg})`,
  };

  const resetTimer = () => {
    setTimeLeft(30);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let timer;

    if (!showScore && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [showScore, timeLeft, currentQuestion]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (timeLeft === 0 && !showScore) {
      handleNextQuestion();
    }

  }, [timeLeft, showScore]);

  return (
    <div style={cardStyle}>
      <div style={{ ...styles.quizContainer }}>
        {showScore ? (
          <div style={styles.scoreContainer}>
            <h2>Your Score: {score} out of {questions.length}</h2>
            <button style={styles.restartButton} onClick={handleRestartQuiz}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <div style={styles.questionContainer}>
            <h2 style={styles.questionHeader}>{quiz.name}</h2>
            <h3 style={styles.questionText}>{questions[currentQuestion].question}</h3>
            <ul style={styles.optionList}>
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  style={{
                    ...styles.optionItem,
                    backgroundColor: chosenAnswer === option ? '#7fff7f' : 'inherit',
                  }}
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div style={styles.buttonContainer}>
              <button
                style={{ ...styles.nextButton }}
                onClick={handleNextQuestion}
                disabled={!chosenAnswer}
              >
                Next
              </button>
            </div>
            <div style={styles.timerContainer}>
            <div style={styles.timerRibbon}>
              <div style={styles.ribbonTriangle}></div>
            </div>
            <p style={styles.timerText}>Time left: {timeLeft} seconds</p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetail;
