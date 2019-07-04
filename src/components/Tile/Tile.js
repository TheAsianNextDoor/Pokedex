import React from 'react';
import { TileHeader } from './TileHeader';
import { TileImage } from './TileImage';
import { TileFooter } from './TileFooter';
import './tile.css';

type Props = {
  name: string,
  img: string,
  types: Array<Object>,
};

/**
 * Functional component that represents the tiles
 *
 * @param {string} name Pokemon name
 * @param {string} img  Pokemon image
 * @param {Array<Object>} types Pokemon types
 */
export const Tile = ({ name, img, types }: Props) => (
  <div className='tile'>
    <TileHeader name={name} />
    <TileImage img={img} />
    <TileFooter types={types} />
  </div>
);

export default Tile;
