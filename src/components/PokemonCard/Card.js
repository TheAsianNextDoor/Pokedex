import React, { Component } from 'react';
import axios from 'axios';
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
      axios.get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${location.state.id}`)
        .then((response) => {
          const list = response.data;
          this.setState(() => ({
            info: list.data,
          }));
        });

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
        <>
          {/* Body */}
          <CardBody info={info} />
        </>
      );
    }
}
