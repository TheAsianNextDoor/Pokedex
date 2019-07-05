// @flow
import React from 'react';
import { capitalizeFirstLetter } from '../../../Utils/stringUtils';
import colorSetter from '../../../Utils/colorUtils';
import './CardBody.css';

type props = {
    info: Object,
};

/**
 * The functional component for the card title
 *
 * @param {Object} info The object containing the pokemon card data
 */
export const CardTitle = ({ info }: props) => {
    const { name, id, types = [] } = info;
    return (
        <div id='cardTitleDiv' className='cardTitlePadding'>

            <span id='cardTitleNameSpan' className='cardTitleName smallScreenRemove'>
                {name}
            </span>

            <span id='cardTitleIDSpan' className='cardTitleID smallScreenRemove'>
                {`#${id}`}
            </span>

            <span id='cardTitleTypesSpan' className='cardTitleAbilities'>
                { types.map((item) => (
                    <div
                        id='cardTitleTypeItemDiv'
                        className='d-inline px-1'
                        key={item}
                    >
                        <p
                            id='cardTitleTypeItemP'
                            className='titleType'
                            style={colorSetter(capitalizeFirstLetter(item))}
                        >
                            {capitalizeFirstLetter(item)}
                        </p>
                    </div>
                ))
                }
            </span>
            <hr className='cardTitleBreak' />
        </div>
    );
};

export default CardTitle;
