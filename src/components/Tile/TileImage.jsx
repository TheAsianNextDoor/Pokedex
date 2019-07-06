import React from 'react';
import './tile.css';

type Props = {
    img: string,
};

/**
 * Functional component for pokemon image
 *
 * @param {string} img Pokemon picture
 */
export const TileImage = ({ img }: Props) => (
    <div id='tileImageDiv' className='text-center pt-4'>
        <img
            id='tileImageImg'
            src={img}
            className='tile-img'
            alt=''
        />
    </div>
);

export default TileImage;
