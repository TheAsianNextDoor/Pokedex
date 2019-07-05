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
    <div className='cardTitlePadding'>
      <span className='cardTitleName smallScreenRemove'>{name}</span>
      <span className='cardTitleID smallScreenRemove'>
        #
        {id}
      </span>
      <span className='cardTitleAbilities'>
        { types.map((item) => (
          <div
            className='d-inline px-1'
            key={item}
          >
            <p
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
