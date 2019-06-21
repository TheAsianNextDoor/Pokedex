import React from 'react';
import { CardStats } from './CardStats';
import { CardProfile } from './CardProfile';
import { CardTitle } from './CardTitle';
import './CardBody.css';

type Props = {
  info: Array<string>,
};

export const CardBody = ({ info }: Props) => (
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
