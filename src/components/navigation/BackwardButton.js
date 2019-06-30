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
  <button
    // Changes functionality depending on if CardView
    onClick={!cardView ? () => {
      handleNavChange('backward');
    } : () => {
      changeCardView();
      handleNavChange('cardView');
    }}
    className='arrow'
    type='button'
  >
    <i
      className='fas fa-arrow-alt-circle-left fa-4x inner-color'
      role='navigation'
    />
  </button>
);

export default BackwardButton;
