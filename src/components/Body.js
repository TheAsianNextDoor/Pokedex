import React, { Component } from 'react'
import {Row, Col } from 'reactstrap'
import { Route, Link } from 'react-router-dom'

import Card from './PokemonCard/Card.js'
import {Tile} from './Tile/Tile.js'
import './Body.css'

export default class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ids: [],
      names: [],
      imgs: [],
      types: [],
      size: 0,
    }
    this.renderCard = this.renderCard.bind(this)
    this.updateCardView = this.updateCardView.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const list = nextProps.pokemonData.data
    this.setState({
      ids: list.map(item => item.id),
      names: list.map(item => item.name),
      imgs: list.map(item => item.image),
      types: list.map(item => item.types),
      size: list.length,
    })
  }

  renderCard(){
    return(
      <Route
        path='/Pokemon/:id'
        component= {Card}
      />
    )
  }

  updateCardView(){
    this.props.changeCardView()
  }

  render() {
    const {size, ids, names, imgs, types} = this.state

    // all tiles fetched
    let finalOutput = []
    // output of tiles to be wrapped in Row
    let rowOutput = []
    // keeps track of current index
    let arrayIndex = 0
    // tiles per rows
    let tileCount = 4
    // i = numbers of rows
    for(let i = 0; i < (size/tileCount); i++)
    {
      // captures indexCount for begining of each row
      let initialRowIndex = arrayIndex
      // j = number of items per row
      for(let j = 0; (size-initialRowIndex) < tileCount ? j < (size%tileCount): j < tileCount; j++)
      {
        rowOutput.push(
          // create reactstrap column and react router link
          <Col key={ids[arrayIndex]} className="tilePadding" xs='6' sm='6' md='3' lg='3'>
            <Link
              key={ids[arrayIndex]}
              to={{
                pathname: `/Pokedex/Pokemon/`+names[arrayIndex],
                state: {
                  id: ids[arrayIndex]
                }
              }}
              onClick={this.updateCardView}
            >
              <Tile
                key={ids[arrayIndex]}
                name={names[arrayIndex]}
                img={imgs[arrayIndex]}
                type={types[arrayIndex]}
              />
            </Link>
          </Col>
        )
        arrayIndex++
      }
      // wraps row around tileCount number of Columns
      finalOutput.push(<Row key={i}> {rowOutput} </Row>)
      // clear the row
      rowOutput = []
    }

    if(!this.props.cardView)
    {
      return(
        <div className="bodySize">
          {finalOutput}
        </div>
      )
    }
    else{
      return(
        <Route
          path='/Pokedex/Pokemon/:name'
          // component={Card}
          render={(props) => <Card {...props} getName={this.props.getName}/>}
        />
      )
    }
  }
}
