import React from 'react';
import './navigation.css';

type Props = {
  handleNavChange: Function,
  changeCardView: Function,
  cardView: boolean,
};

export const BackwardButton = ({
  handleNavChange,
  changeCardView,
  cardView,
}: Props) => (
  <i
    // Changes Cardview functionality
    onClick={!cardView ? () => {
      handleNavChange('backward');
    } : () => {
      changeCardView();
      handleNavChange('cardView');
      // history.push(`/Pokedex/Page/${page}`);
    }}
    className='fas fa-arrow-alt-circle-left fa-4x arrow'
    role='navigation'
  />
);

export default BackwardButton;
