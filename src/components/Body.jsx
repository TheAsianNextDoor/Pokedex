import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { Tile } from './Tile/Tile';
import Card from './PokemonCard/Card';
import './Body.css';

type Props = {
    cardView: boolean,
    navChanging: boolean,
    pokemonData: Object,
    setName: Function,
    changeCardView: Function,
};

type State = {
    ids: Array<string>,
    names: Array<string>,
    imgs: Array<string>,
    types: Array<Object>,
    size: number,
};

/**
 * Class component that holds either cards or tiles depending on user interaction
 *
 * @param {boolean} cardView Boolean that keeps track of tile and card visibility
 * @param {boolean} navChanging Boolean that keeps track of navigation
 * @param {Object} pokemonData Object containing pokemon data
 * @param {Function} setName Function that sets the pokemon name in header
 * @param {Function} changeCardView Function that changes tile and card visibility
 */
export default class Body extends Component<Props, State> {
    state = {
        ids: [],
        names: [],
        imgs: [],
        types: [],
        size: 0,
    };

    componentWillReceiveProps(nextProps: Object) {
        const list = nextProps.pokemonData.data;
        this.setState(() => ({
            ids: list.map((item) => item.id),
            names: list.map((item) => item.name),
            imgs: list.map((item) => item.image),
            types: list.map((item) => item.types),
            size: list.length,
        }));
    }

    /**
     * Function that changes the card and tile visibility on tile click
     */
    updateCardView = () => {
        const { changeCardView } = this.props;
        changeCardView();
    }

    render() {
        const {
            size,
            ids,
            names,
            imgs,
            types,
        } = this.state;

        const {
            setName,
            cardView,
            navChanging,
        } = this.props;

        // all rows combined
        const finalOutput = [];
        // output of row
        let rowOutput = [];
        // keeps track of current index
        let index = 0;
        // tiles per rows
        const tileCount = 4;
        // number of rows
        const numberOfRows = Math.round(size / tileCount);

        for (let i = 0; i < numberOfRows; i += 1) {
            const elementCount = i * tileCount;
            const elementsRemaining = size - elementCount;
            const tilesInRow = elementsRemaining >= tileCount
                ? tileCount
                : elementsRemaining % tileCount;

            for (let j = 0; j < tilesInRow; j += 1) {
                rowOutput.push(
                    // create reactstrap column and react router link
                    <Col key={ids[index]} className='tilePadding' xs='6' sm='6' md='3' lg='3'>
                        <Link
                            id={`link${names[index]}`}
                            key={ids[index]}
                            to={{
                                pathname: `/Pokedex/Pokemon/${names[index]}`,
                                state: {
                                    id: ids[index],
                                },
                            }}
                            onClick={this.updateCardView}
                        >
                            <Tile
                                id={`tile${names[index]}`}
                                key={ids[index]}
                                name={names[index]}
                                img={imgs[index]}
                                types={types[index]}
                            />
                        </Link>
                    </Col>,
                );
                index += 1;
            }
            // Adds row to final output array
            finalOutput.push(
                <Row key={i}>
                    {' '}
                    {rowOutput}
                    {' '}
                </Row>,
            );
            // clear the row
            rowOutput = [];
        }

        if (!cardView) {
            return (
                <div id='bodyDiv' className='bodySize'>

                    {finalOutput}
                </div>
            );
        }

        return (
            <Route
                path='/Pokedex/Pokemon/:name'
                // component={Card}
                render={(props) => <Card {...props} setName={setName} />}
            />
        );
    }
}
