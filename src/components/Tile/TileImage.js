import React from 'react';
import PropTypes from 'prop-types';
import './tile.css';

export const TileImage = ({ img }) => (
  <div className="text-center pt-4">
    <img src={img} className="tile-img" alt="" />
  </div>
);

TileImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TileImage;
