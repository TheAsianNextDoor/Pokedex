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
  page: string,
  handleSearchChange: Function,
  handleNavChange: Function,
  changeCardView: Function,
  cardView: boolean,
};

export const Header = ({
  searchValue,
  name,
  page,
  handleSearchChange,
  handleNavChange,
  changeCardView,
  cardView,
}: Props) => {
  if (!cardView) {
    return (
      <div className="headerHeight">
        <Row>
          <Col xs={2} md={2}>
            <BackwardButton page={page} handleNavChange={handleNavChange} />
          </Col>
          <Col xs={8} md={8} className="px-0 mx-0 py-4">
            <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange} />
          </Col>
          <Col xs={2} md={2}>
            <ForwardButton searchValue={searchValue} handleNavChange={handleNavChange} />
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
    <div className="headerHeight">
      <Row>
        <Col xs={2} md={2}>
          <BackwardButtonRouter page={page} changeCardView={changeCardView} cardView={cardView} />
        </Col>
        <Col xs={8} md={8} className="px-0 mx-0 py-4">
          <span className="pokemonName">
            {name}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
