// QuizDetail.js
import React, { useState } from 'react';
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
    } else {
      setShowScore(true);
    }
  };

  const handleBackQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
      setChosenAnswer(null); 
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setChosenAnswer(null);
  };

  const cardStyle = {
    backgroundImage: `url(${bg})`,
    };
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
              style={styles.backButton}
              onClick={handleBackQuestion}
              disabled={currentQuestion === 0}
            >
              Back
            </button>
            <button
              style={{ ...styles.nextButton }}
              onClick={handleNextQuestion}
              disabled={!chosenAnswer}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuizDetail;
