import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentContainerStyle}>
        <div style={sectionStyle}>
          <h3 style={sectionHeadingStyle}>About Us</h3>
          <p style={textStyle}> Welcome to QuizzLandia, your go-to destination for 
          knowledge-enhancing quizzes! At QuizzLandia, 
          we believe in the power of curiosity and continuous learning. 
          Immerse yourself in a world of diverse quizzes covering various topics, 
          from science and history to general knowledge. 
          Challenge your intellect, learn something new every day, and have fun while doing it!</p>
        </div>
        <div style={columnContainerStyle}>
          <div style={sectionStyle}>
            <h3 style={sectionHeadingStyle}>Contact Us</h3>
            <p style={textStyle}>
              Email: <a href="mailto:quizzlandia@gmail.com" style={linkStyle}>quizzlandia@gmail.com</a> <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div style={sectionStyle}>
            <h3 style={sectionHeadingStyle}>Follow Us</h3>
            <div style={socialIconsContainerStyle}>
              <FontAwesomeIcon icon={faFacebook} style={socialIconStyle} />
              <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
              <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
            </div>
          </div>
        </div>
      </div>
      <div style={copyrightContainerStyle}>
        <p style={textStyle}>
          Made with <FontAwesomeIcon icon={faHeart} style={heartIconStyle} /> by Kookiez
        </p>
      </div>
    </footer>
  );
};

const columnContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

const footerStyle = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '2rem 0',
  marginTop:'2em',
};

const contentContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const sectionStyle = {
  flex: '1',
  maxWidth: '1000px',
  margin: '0 1rem',
};

const sectionHeadingStyle = {
  color: '#f06292', 
  fontSize: '1.5rem',
  borderBottom: '2px solid #f06292',
  paddingBottom: '0.5rem',
  marginBottom: '0.5rem',
};

const textStyle = {
  color: '#ccc', 
  fontSize: '1rem',
  lineHeight: '1.5',
};

const linkStyle = {
  color: '#64b5f6',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const socialIconsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
};

const socialIconStyle = {
  color: '#64b5f6',
  fontSize: '1.5rem',
  margin: '0 0.5rem',
};

const heartIconStyle = {
  color: '#e57373', 
  margin: '0 0.3rem',
};

const copyrightContainerStyle = {
  textAlign: 'center',
  marginTop: '1rem',
};

export default Footer;
