import React from 'react';
import { capitalizeFirstLetter } from '../../../Utils/stringUtils';
import colorSetter from '../../../Utils/colorUtils';
import './CardBody.css';

type Props = {
  info: Array<string>,
};

export const CardTitle = ({ info }: Props) => {
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
          <div className='d-inline px-1'>
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
