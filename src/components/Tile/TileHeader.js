import React from 'react';
import PropTypes from 'prop-types';
import './tile.css';

export const TileHeader = ({ name }) => (
  <>
    <h1 className="tile-header-name">{name}</h1>
    <hr className="py-0 my-1" />
  </>
);

TileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TileHeader;
