import React from 'react';
import PropTypes from 'prop-types';
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

ForwardButton.propTypes = {
  handleNavChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default ForwardButton;
