import React from 'react';
import Hastag from './Hastag';
import Genai from './Genai';

const GenhashContainer = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'left',
      gap: '0rem',
      padding: '10px',
      maxWidth: '100%',
      margin: '0 auto',
      // borderRadius: '20px',
    }}>
      <Hastag />
      <Genai />
    </div>
  );
};

export default GenhashContainer;