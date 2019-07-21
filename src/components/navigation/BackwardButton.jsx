import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './navigation.css';

type Props = {
    handleNavChange: Function,
    changeCardView: Function,
    cardView: boolean,
};

/**
 * The functional component for the back button
 *
 * @param {Function} handleNavChange Function used to determine type of navigation
 * @param {Function} changeCardView Function used to change whether or card or tiles are displayed
 * @param {Boolean} cardView Boolean that represents card view state
 */
export const BackwardButton = ({
    handleNavChange,
    changeCardView,
    cardView,
}: Props) => {
    const [flag, setFlag] = useState(false);
    return (
        <>
            <CSSTransition
                in={flag}
                timeout={1000}
                classNames='fade'
            >
                <button
                    id='backwardButtonButton'
                    className='arrow-button'
                    type='button'
                    // Changes functionality depending on if CardView
                    onClick={!cardView ? () => {
                        handleNavChange('backward');
                        flag ? setFlag(false) : setFlag(true);
                    } : () => {
                        changeCardView();
                        handleNavChange('cardView');
                    }}
                >
                    <div className='arrow-icon-left'>
                &#8249;
                    </div>
                </button>
            </CSSTransition>
        </>
    );
};
export default BackwardButton;
