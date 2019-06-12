import React from 'react';
import { CardStats } from './CardStats';
import { CardProfile } from './CardProfile';
import { CardTitle } from './CardTitle';

import './CardBody.css';

export const CardBody = ({ info }) => (
  <div className="cardStyle">
    {/* Navigation, Pokemon Name and Type */}
    <CardTitle info={info} />

    {/* Pokemon image, stats, description */}
    <CardStats info={info} />

    {/* Pokemon info */}
    <CardProfile info={info} />
  </div>
);

export default CardBody;
