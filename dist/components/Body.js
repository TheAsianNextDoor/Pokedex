import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { Tile } from './Tile/Tile';
import Card from './PokemonCard/Card';
import './Body.css';

type Props = {
  cardView: boolean,
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
      } = this.props;

      // all tiles fetched
      const finalOutput = [];
      // output of tiles to be wrapped in Row
      let rowOutput = [];
      // keeps track of current index
      let arrayIndex = 0;
      // tiles per rows
      const tileCount = 4;
      // i = numbers of rows
      for (let i = 0; i < (size / tileCount); i += 1) {
      // captures indexCount for beginning of each row
        const initialRowIndex = arrayIndex;
        // j = number of items per row
        for (
          let j = 0;
          (size - initialRowIndex) < tileCount ? j < (size % tileCount) : j < tileCount;
          j += 1) {
          rowOutput.push(
          // create reactstrap column and react router link
            <Col key={ids[arrayIndex]} className='tilePadding' xs='6' sm='6' md='3' lg='3'>
              <Link
                key={ids[arrayIndex]}
                to={{
                  pathname: `/Pokedex/Pokemon/${names[arrayIndex]}`,
                  state: {
                    id: ids[arrayIndex],
                  },
                }}
                onClick={this.updateCardView}
              >
                <Tile
                  key={ids[arrayIndex]}
                  name={names[arrayIndex]}
                  img={imgs[arrayIndex]}
                  types={types[arrayIndex]}
                />
              </Link>
            </Col>,
          );
          arrayIndex += 1;
        }
        // wraps row around tileCount number of Columns
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
          <div className='bodySize'>
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
