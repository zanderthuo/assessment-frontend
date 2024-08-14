import React from 'react';
import { Link } from 'react-router-dom';
import {
  errorPageStyle,
  errorContentStyle,
  errorCodeStyle,
  errorMessageStyle,
  errorDescriptionStyle,
  errorLinkStyle,
} from '../styles/AllStyles.js';

const ErrorPage = () => {
  return (
    <div style={errorPageStyle}>
      <div style={errorContentStyle}>
        <h1 style={errorCodeStyle}>404</h1>
        <h2 style={errorMessageStyle}>Page Not Found</h2>
        <p style={errorDescriptionStyle}>
          Sorry, the page you're looking for doesn't exist. 
          You might have mistyped the URL or the page may have moved.
        </p>
        <Link 
          to="/" 
          style={errorLinkStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#d93b3b'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#ff4a4a'}
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
