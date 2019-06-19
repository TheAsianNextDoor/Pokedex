import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

export const ForwardButton = ({ handleNavChange, searchValue }) => {
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

ForwardButton.propTypes = {
  handleNavChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default ForwardButton;
