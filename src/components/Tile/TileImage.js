import React from 'react';
import './tile.css';

type Props = {
  img: string,
};

export const TileImage = ({ img }: Props) => (
  <div className="text-center pt-4">
    <img src={img} className="tile-img" alt="" />
  </div>
);

export default TileImage;
