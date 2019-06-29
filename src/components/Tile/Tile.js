import React from 'react';
import { TileHeader } from './TileHeader';
import { TileImage } from './TileImage';
import { TileFooter } from './TileFooter';
import './tile.css';

type Props = {
  name: string,
  img: string,
  type: string,
};

export const Tile = ({ name, img, type }: Props) => (
  <div className='tile'>
    <TileHeader name={name} />
    <TileImage img={img} />
    <TileFooter type={type} />
  </div>
);

export default Tile;
