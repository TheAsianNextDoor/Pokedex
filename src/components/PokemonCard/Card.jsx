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
 * @param {Object} location The object containing the card data
 * @param {Object} match The object containing the card data
 * @param {Function} setName Function used to raise pokemon name up to parent
 */
export default class Card extends Component<Props, State> {
    state = {
        info: [],
    };

    componentDidMount() {
        const { location, match, setName } = this.props;
        const apiCall = `https://intern-pokedex.myriadapps.com/api/v1/pokemon/${location.state.id}`;

        // attempts to get url from local storage
        const cacheResponse = localStorage.getItem(apiCall);

        // if api response hasn't been cached yet, make axios call
        if (cacheResponse === null) {
            axios.get(apiCall)
                .then((response) => {
                    const list = response.data;
                    // set api call to state
                    this.setState(() => ({
                        info: list.data,
                    }));

                    // save api call to local storage
                    localStorage.setItem(apiCall, JSON.stringify(list));
                });
        } else {
            // retrieve cached response from local storage and convert to json
            const retrievedObject = JSON.parse(localStorage.getItem(apiCall));

            // set state from local storage
            this.setState(() => ({
                info: retrievedObject.data,
            }));
        }

        // // uncomment for when offline
        // const data = require('../../data/bulbasaur.json');
        // this.setState(() => ({
        //   info: data.data,
        // }));

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
