import React from 'react';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';
import { BackwardButton } from './Navigation/BackwardButton';
import { ForwardButton } from './Navigation/ForwardButton';
import { SearchBar } from './Navigation/SearchBar';
import './Header.css';

type Props = {
    searchValue: string,
    name: string,
    handleSearchChange: Function,
    handleNavChange: Function,
    changeCardView: Function,
    cardView: boolean,
};

/**
 * Functional component that holds logic for navigation
 *
 * @param {string} searchValue String of the search bar
 * @param {string} name String of pokemon name
 * @param {Function} handleNavChange Function used to determine type of navigation
 * @param {Function} handleSearchChange Function used to raise search value up to parent
 * @param {Function} changeCardView Function that changes tile and card visibility
 * @param {boolean} cardView Boolean that keeps track of tile and card visibility

 */
export const Header = ({
    searchValue,
    name,
    handleSearchChange,
    handleNavChange,
    changeCardView,
    cardView,
}: Props) => {
    if (!cardView) {
        return (
            <div id='headerDiv' className='headerHeight'>
                <Row>
                    <Col xs={2} md={2}>
                        <BackwardButton
                            changeCardView={changeCardView}
                            cardView={cardView}
                            handleNavChange={handleNavChange}
                        />
                    </Col>
                    <Col xs={8} md={8} className='px-0 mx-0 py-4'>
                        <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange} />
                    </Col>
                    <Col xs={2} md={2}>
                        <ForwardButton handleNavChange={handleNavChange} />
                    </Col>
                </Row>
            </div>
        );
    }

    // Conditional render for when in CardView
    // Replace Searchbar with Pokemon name
    // and alter back button functionality
    const BackwardButtonRouter = withRouter(BackwardButton);
    return (
        <div className='headerHeight'>
            <Row>
                <Col xs={2} md={2}>
                    <BackwardButtonRouter
                        changeCardView={changeCardView}
                        cardView={cardView}
                        handleNavChange={handleNavChange}
                    />
                </Col>
                <Col xs={8} md={8} className='px-0 mx-0 py-4'>
                    <span id='headerSpanName' className='pokemonName'>
                        {name}
                    </span>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
