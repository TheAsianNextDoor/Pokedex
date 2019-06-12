import React from 'react';
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

export default Tile;
