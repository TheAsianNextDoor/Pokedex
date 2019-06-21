import React from 'react';
import './navigation.css';

type Props = {
  searchValue: string,
  handleNavChange: Function,
};

export const ForwardButton = ({ searchValue, handleNavChange }: Props) => {
  // Checks if searchbar is active in order to attach function
  // to button
  if (searchValue === '') {
    return (
      <i
        onClick={() => handleNavChange('forward')}
        className="fas fa-arrow-alt-circle-right fa-4x arrow"
        role="navigation"
      />
    );
  }
  // grey out nav buttons when searchbar is active
  return (
    <i
      className="fas fa-arrow-alt-circle-right fa-4x arrowDisabled"
    />
  );
};

export default ForwardButton;
