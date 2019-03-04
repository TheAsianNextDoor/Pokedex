import React, { Component } from 'react'
import Tile from './Tile/Tile.js'
import {Row, Col } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Card from './PokemonCard/Card.js'

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
  }

  componentWillReceiveProps(nextProps) {
    const list = nextProps.data.data
    this.setState({
      ids: list.map(item => item.id),
      names: list.map(item => item.name),
      imgs: list.map(item => item.image),
      types: list.map(item => item.types)
    })
  }

  renderTile(num){
    if(!this.props.cardView)
    {
      return(
        <Link
          to= {'/Pokemon/'+this.state.ids[num]}
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
  }

  render() {
    console.log(this.props.cardView)
    return(
      <Router>
      <div>
        {/* First Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(0)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(1)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(2)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(3)}
          </Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(4)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(5)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(6)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(7)}
          </Col>
        </Row>
        {/* Third Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(8)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(9)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(10)}
          </Col>
          <Col className="px-2 py-2" xs={6} md={3} lg={3}>
            {this.renderTile(11)}
          </Col>
        </Row>
          {/* Fourth Row */}
          <Row>
            <Col className="px-2 py-2" xs={6} md={3} lg={3}>
              {this.renderTile(12)}
            </Col>
            <Col className="px-2 py-2" xs={6} md={3} lg={3}>
              {this.renderTile(13)}
            </Col>
            <Col className="px-2 py-2" xs={6} md={3} lg={3}>
              {this.renderTile(14)}
            </Col>
          </Row>
        <Route
          path={'/Pokemon/'+this.state.ids[0]}
          render={props => <Card id={this.state.ids[0]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[1]}
          render={props => <Card id={this.state.ids[1]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[2]}
          render={props => <Card id={this.state.ids[2]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[3]}
          render={props => <Card id={this.state.ids[3]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[4]}
          render={props => <Card id={this.state.ids[4]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[5]}
          render={props => <Card id={this.state.ids[5]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[6]}
          render={props => <Card id={this.state.ids[6]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[7]}
          render={props => <Card id={this.state.ids[7]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[8]}
          render={props => <Card id={this.state.ids[8]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[9]}
          render={props => <Card id={this.state.ids[9]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[10]}
          render={props => <Card id={this.state.ids[10]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[11]}
          render={props => <Card id={this.state.ids[11]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[12]}
          render={props => <Card id={this.state.ids[12]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[13]}
          render={props => <Card id={this.state.ids[13]} />}
        />
        <Route
          path={'/Pokemon/'+this.state.ids[14]}
          render={props => <Card id={this.state.ids[14]} />}
        />
      </div>
      </Router>
    )
  }
}
