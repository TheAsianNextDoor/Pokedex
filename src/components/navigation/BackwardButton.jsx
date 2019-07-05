import React from 'react';
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
