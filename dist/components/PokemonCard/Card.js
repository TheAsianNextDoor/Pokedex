import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CardBody } from './CardBody/CardBody';
import './Card.css';

type Props = {
  location: string,
  match: string,
  getName: string,
};

type State = {
  info: Array<string>,
};

export default class Card extends Component<Props, State> {
    state = {
      info: [],
    };

    componentDidMount() {
      // eslint-disable-next-line react/prop-types
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
          {/* Body */}
          <CardBody info={info} />

        </Container>
      );
    }
}
