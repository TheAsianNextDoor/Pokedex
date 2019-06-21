import React from 'react';
import './CardBody.css';

type Props = {
  info: Array<string>,
};

export const CardTitle = ({ info }: Props) => {
  const { name, id, types = [] } = info;
  return (
    <div className="cardTitlePadding">
      <span className="cardTitleName smallScreenRemove">{name}</span>
      <span className="cardTitleID smallScreenRemove">
        #
        {id}
      </span>
      <span className="cardTitleAbilities">
        { types.map(item => (
          <div className="d-inline px-1">
            <p className="titleType">{item}</p>
          </div>
        ))
      }
      </span>
      <hr className="cardTitleBreak" />
    </div>
  );
};

export default CardTitle;
