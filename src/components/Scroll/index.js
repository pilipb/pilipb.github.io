// components/Scroll.js
import React from 'react';

const ScrollableWrapper = ({ children }) => {
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      {children}
    </div>
  );
};

export default ScrollableWrapper;