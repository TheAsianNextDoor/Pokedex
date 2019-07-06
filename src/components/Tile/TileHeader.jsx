import React from 'react';
import './tile.css';

type Props = {
    name: string,
};

/**
 * Functional component for tile header
 *
 * @param {string} name Pokemon name
 */
export const TileHeader = ({ name }: Props) => (
    <>
        <h1 id='tileHeaderHeader' className='tile-header-name'>
            {name}
        </h1>
        <hr className='py-0 my-1' />
    </>
);

export default TileHeader;
