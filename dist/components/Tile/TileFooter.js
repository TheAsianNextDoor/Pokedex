import React from 'react';
import './tile.css';

type Props = {
  type: string,
};

export const TileFooter = ({ type }: Props) => (
  <div className="text-right pr-4 pt-2">
    { type.map(item => (
      <div className="d-inline px-1">
        <p className="tile-footer">{item}</p>
      </div>
    ))
        }
  </div>
);

export default TileFooter;
