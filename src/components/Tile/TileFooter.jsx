import React from 'react';
import { capitalizeFirstLetter } from '../../Utils/stringUtils';
import colorSetter from '../../Utils/colorUtils';
import './tile.css';

type Props = {
    types: Array<Object>,
};

/**
 * Functional component for tile footer
 *
 * @param {Array<Object>} types Pokemon types
 */
export const TileFooter = ({ types }: Props) => (
    <div id='tileFooterDiv' className='text-right pr-4 pt-2'>
        {
            types.map((item) => (
                <div
                    id='tileFooterItemDiv'
                    className='d-inline px-1'
                    key={item}
                >
                    <p
                        id='tileFooterItemP'
                        className='tile-footer'
                        style={colorSetter(capitalizeFirstLetter(item))}
                    >
                        {capitalizeFirstLetter(item)}
                    </p>
                </div>
            ))
        }
    </div>
);

export default TileFooter;
