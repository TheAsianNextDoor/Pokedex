import React from 'react';
import './navigation.css';

type Props = {
  handleNavChange: Function,
};

export const ForwardButton = ({ handleNavChange }: Props) => (
  <button
    onClick={() => handleNavChange('forward')}
    className='arrow'
    type='button'
  >
    <i
      className='fas fa-arrow-alt-circle-right fa-4x inner-color'
      role='navigation'
    />
  </button>
);

export default ForwardButton;
