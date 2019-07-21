import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './navigation.css';

type Props = {
    handleNavChange: Function,
};

/**
 * The functional component for the forward button
 *
 * @param {Function} handleNavChange Function used to determine type of navigation
 */
export const ForwardButton = ({ handleNavChange }: Props) => {
    const [flag, setFlag] = useState(false);
    return (
        <>
            <CSSTransition
                in={flag}
                timeout={1000}
                classNames='fade'
            >
                <button
                    id='forwardButtonButton'
                    onClick={() => { handleNavChange('forward'); flag ? setFlag(false) : setFlag(true); }}
                    className='arrow-button'
                    type='button'
                >
                    <div className='arrow-icon-right'>
                        &#8250;
                    </div>
                </button>
            </CSSTransition>
            {/* <button onClick={() => (flag ? setFlag(false) : setFlag(true))} type='button'> Hello </button> */}
        </>
    );
};

export default ForwardButton;
