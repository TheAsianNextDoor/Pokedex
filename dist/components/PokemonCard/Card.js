import React, { Component } from 'react';
import axios from 'axios';
import { CardBody } from './CardBody/CardBody';
import './Card.css';

type Props = {
  location: Object,
  match: Object,
  setName: Function,
};

type State = {
  info: Array<string>,
};

/**
 * The functional class for the Card
 *
 * @param {string} location The object containing the card data
 * @param {string} match The object containing the card data
 * @param {Function} setName Function used to update pokemon name state
 */
export default class Card extends Component<Props, State> {
    state = {
      info: [],
    };

    componentDidMount() {
      // eslint-disable-next-line react/prop-types
      const { location, match, setName } = this.props;
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

      setName(match.params.name);
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
