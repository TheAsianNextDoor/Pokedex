import React from 'react';
import './navigation.css';

export const BackwardButton = ({
  handleNavChange,
  page,
  cardView,
  changeCardView,
  history,
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

export default BackwardButton;
