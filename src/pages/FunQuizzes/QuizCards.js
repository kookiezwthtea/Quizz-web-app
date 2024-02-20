
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuizCard.module.css';
import placeholderImage from './images/placeholder.webp';

function QuizCard({ quiz }) {
  const [imagePath, setImagePath] = useState(null);

  useEffect(() => {
    import(`./images/${quiz.image}`)
      .then((image) => setImagePath(image.default))
      .catch((error) => {
        console.error('Error loading image:', error);
        setImagePath(placeholderImage);
      });
  }, [quiz.image]);
  
  const cardStyle = {
  backgroundImage: `url(${imagePath})`,
  };
  return (
    <div className={styles['quiz-card']} style={cardStyle}>
      <Link to={`/quiz3/${quiz.id}`} className={styles['quiz-link']}>
        <div className={styles['container']}>
        <h3 className={styles['quiz-title']}>{quiz.name}</h3>
        <p className={styles['quiz-description']}>{quiz.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default QuizCard;
