import React from 'react';
import './navigation.css';

export const ForwardButton = ({ handleNavChange, searchValue }) => {
  if (searchValue === '') {
    return (
      <i
        onClick={() => handleNavChange('forward')}
        className="fas fa-arrow-alt-circle-right fa-4x arrow"
        role="navigation"
      />
    );
  }

  return (
    <i
      className="fas fa-arrow-alt-circle-right fa-4x arrowDisabled"
    />
  );
};

export default ForwardButton;
