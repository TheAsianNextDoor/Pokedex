import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './navigation.css';

type Props = {
  handleNavChange: Function,
};

/**
 * The functional component for the forward button
 *
 * @param {String} handelNavChange Function used to determine type of navigation
 */
export const ForwardButton = ({ handleNavChange }: Props) => (
  <CSSTransition
    in
    appear
    timeout={2000}
    classNames='my-node-entering'
  >
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
  </CSSTransition>
);

export default ForwardButton;
