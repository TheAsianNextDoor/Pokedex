import React from 'react';
import './navigation.css';

type Props = {
  page: string,
  history: string,
  handleNavChange: Function,
  changeCardView: Function,
  cardView: boolean,
};

export const BackwardButton = ({
  page,
  history,
  handleNavChange,
  changeCardView,
  cardView,
}: Props) => (
  <i
    // Changes Cardview functionality and attempts to clean
    // searchbar input if is not CardView
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
