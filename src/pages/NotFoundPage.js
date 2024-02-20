import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={notFoundContainer}>
      <div style={notFoundContent}>
        <h1 style={headingStyle}>404</h1>
        <p style={messageStyle}>Oops! The page you're looking for cannot be found.</p>
      </div>
    </div>
  );
};

const notFoundContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
};

const notFoundContent = {
  textAlign: 'center',
  color: '#343a40',
};

const headingStyle = {
  fontSize: '6rem',
  margin: '0',
  color: '#dc3545', // Red color
};

const messageStyle = {
  fontSize: '1.5rem',
  margin: '1rem 0',
};

export default NotFoundPage;
