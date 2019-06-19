import React from 'react';
import PropTypes from 'prop-types';
import { TileHeader } from './TileHeader';
import { TileImage } from './TileImage';
import { TileFooter } from './TileFooter';
import './tile.css';

export const Tile = ({ name, img, type }) => (
  <div className="tile">
    <TileHeader name={name} />
    <TileImage img={img} />
    <TileFooter type={type} />
  </div>
);

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Tile;
