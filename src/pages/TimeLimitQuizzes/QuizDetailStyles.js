
const styles = {
  quizContainer: {
    maxWidth: '800px',
    margin: '2em auto',
    padding: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    position: 'relative',
  },

  questionContainer: {
    backgroundColor: '#ffffff', 
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  questionHeader: {
    marginBottom: '20px',
    color: '#ff6600', 
    fontSize: '36px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: '28px',
    margin: '1em auto',
  },
  optionList: {
    listStyleType: 'none',
    padding: '0',
  },
  optionItem: {
    marginBottom: '10px',
    padding: '15px',
    boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '8px',
    backgroundColor: '#ffffff', 
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333', 
  },
  scoreContainer: {
    backgroundColor: '#ffffff', 
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  restartButton: {
    backgroundColor: '#ff4081', 
    color: '#ffffff',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  },
  buttonContainer:{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    
  },
  nextButton: {
    backgroundColor: '#2ecc71', 
    color: '#ffffff',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    outline: 'none',
  },
  timerContainer: {
    position: 'relative',
    marginTop:'1em',
  },

  timerRibbon: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '40px',
    background: 'linear-gradient(45deg, #ff6600, #ffbf00)',
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },

  ribbonTriangle: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderBottom: '20px solid #ffbf00',
  },

  timerText: {
    fontSize: '24px',
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    marginTop: '8px',
  },
};

export default styles;
