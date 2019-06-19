import React from 'react';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { BackwardButton } from './Navigation/BackwardButton';
import { ForwardButton } from './Navigation/ForwardButton';
import { SearchBar } from './Navigation/SearchBar';
import './Header.css';

export const Header = ({
  searchValue,
  name,
  page,
  handleSearchChange,
  handleNavChange,
  changeCardView,
  cardView,
}) => {
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

Header.propTypes = {
  searchValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleNavChange: PropTypes.func.isRequired,
  changeCardView: PropTypes.func.isRequired,
  cardView: PropTypes.bool.isRequired,
};

export default Header;
