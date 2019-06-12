import React from 'react';
import './tile.css';

export const TileHeader = ({ name }) => (
  <>
    <h1 className="tile-header-name">{name}</h1>
    <hr className="py-0 my-1" />
  </>
);

export default TileHeader;
