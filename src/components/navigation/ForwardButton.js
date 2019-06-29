import React from 'react';
import './navigation.css';

type Props = {
  handleNavChange: Function,
};

export const ForwardButton = ({ handleNavChange }: Props) => (
  <i
    onClick={() => handleNavChange('forward')}
    className='fas fa-arrow-alt-circle-right fa-4x arrow'
    role='navigation'
  />
);

export default ForwardButton;
