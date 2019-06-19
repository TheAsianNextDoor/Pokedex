import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { CardHeader } from './CardHeader/CardHeader';
import { CardBody } from './CardBody/CardBody';
import './Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    const { location, match, getName } = this.props;
    fetch(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${location.state.id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(list => this.setState(() => ({
        info: list.data,
      })));

    // let data = require('../../data/bulbasaur.json')
    // this.setState(() => {
    //   return{
    //     info: data.data,
    // }})

    getName(match.params.name);
  }

  render() {
    const { info } = this.state;
    return (
      <Container className="cardContainer">
        {/* Navigation */}
        <CardHeader name={info.name} />

        {/* Body */}
        <CardBody info={info} />

      </Container>
    );
  }
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  getName: PropTypes.func.isRequired,
};
