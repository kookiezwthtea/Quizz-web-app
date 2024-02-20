// QuizzesList.js
import React from 'react';
import QuizCard from './QuizCards'; 
import quizzes from './quizzes';
import styles from './QuizCard.module.css'; 

function QuizzesList() {
  return (
    <div>
      <h1>All Time Limit Quizzes</h1>
      <div className={styles['quiz-cards-container']}> 
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

export default QuizzesList;
