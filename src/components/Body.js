import React, { Component } from 'react'
import {Row, Col } from 'reactstrap'
import { Route, Link } from 'react-router-dom'

import Card from './PokemonCard/Card.js'
import Tile from './Tile/Tile.js'
import './Body.css'

export default class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      ids: [],
      names: [],
      imgs: [],
      types: [],
    }
    this.renderTile = this.renderTile.bind(this)
    this.renderCard = this.renderCard.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const list = nextProps.pokemonData.data
    this.setState({
      ids: list.map(item => item.id),
      names: list.map(item => item.name),
      imgs: list.map(item => item.image),
      types: list.map(item => item.types),
    })
  }

  renderTile(num){
    return(
      <Link to={`/Pokemon/`+this.state.ids[num]}
        onClick={() => this.props.changeCardView()}
      >
        <Tile
          key={this.state.ids[num]}
          name={this.state.names[num]}
          img={this.state.imgs[num]}
          type={this.state.types[num]}
        />
      </Link>
    )
  }

  renderCard(){
    return(
      <Route
        path='/Pokemon/:id'
        component= {Card}
      />
    )
  }

  render() {
    if(!this.props.cardView)
    {
      return(
        <div className="bodySize">
          {/* First Row */}
          <Row>
            <Col className="tilePadding" xs={6} sm={6} md={3} lg={3}>
              {this.renderTile(0)}
            </Col>
            <Col className="tilePadding" xs={6} sm={6} md={3} lg={3}>
              {this.renderTile(1)}
            </Col>
            <Col className="tilePadding" xs={6} sm={6} md={3} lg={3}>
              {this.renderTile(2)}
            </Col>
            <Col className="tilePadding" xs={6} sm={6} md={3} lg={3}>
              {this.renderTile(3)}
            </Col>
          </Row>
          {/* Second Row */}
          <Row>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(4)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(5)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(6)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(7)}
            </Col>
          </Row>
          {/* Third Row */}
          <Row>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(8)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(9)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(10)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(11)}
            </Col>
          </Row>
          {/* Fourth Row */}
          <Row>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(12)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(13)}
            </Col>
            <Col className="tilePadding" xs={6} md={3} lg={3}>
              {this.renderTile(14)}
            </Col>
          </Row>
        </div>
      )
    }
    else{
      return(
        <div>{this.renderCard()}</div>
      )
    }
  }
}
