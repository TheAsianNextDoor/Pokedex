import React from 'react';
import PropTypes from 'prop-types';
import './CardBody.css';

export const CardTitle = ({ info }) => {
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

CardTitle.propTypes = {
  info: PropTypes.instanceOf(Array).isRequired,
};

export default CardTitle;
