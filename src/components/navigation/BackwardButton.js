import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

export const BackwardButton = ({
  page,
  history,
  handleNavChange,
  changeCardView,
  cardView,
}) => (
  <i
    onClick={!cardView ? () => {
      handleNavChange('backward');
      document.getElementById('searchBar').value = '';
    } : () => {
      changeCardView();
      history.push(`/Pokedex/Page/${page}`);
    }}
    className="fas fa-arrow-alt-circle-left fa-4x arrow"
    role="navigation"
  />
);

BackwardButton.propTypes = {
  page: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
  handleNavChange: PropTypes.func.isRequired,
  changeCardView: PropTypes.func.isRequired,
  cardView: PropTypes.bool.isRequired,
};

export default BackwardButton;
