import React, { Component } from 'react'
import Tile from './Tile/Tile.js'
import {Row, Col } from 'reactstrap'


class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      ids: [],
      names: [],
      imgs: [],
      types: [],
    }
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

  render() {
    return(
      <div>
        {/* First Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[0]}
              name={this.state.names[0]}
              img={this.state.imgs[0]}
              type={this.state.types[0]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[1]}
              name={this.state.names[1]}
              img={this.state.imgs[1]}
              type={this.state.types[1]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[2]}
              name={this.state.names[2]}
              img={this.state.imgs[2]}
              type={this.state.types[2]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[3]}
              name={this.state.names[3]}
              img={this.state.imgs[3]}
              type={this.state.types[3]}
            />
          </Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[4]}
              name={this.state.names[4]}
              img={this.state.imgs[4]}
              type={this.state.types[4]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[5]}
              name={this.state.names[5]}
              img={this.state.imgs[5]}
              type={this.state.types[5]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[6]}
              name={this.state.names[6]}
              img={this.state.imgs[6]}
              type={this.state.types[6]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[7]}
              name={this.state.names[7]}
              img={this.state.imgs[7]}
              type={this.state.types[7]}
            />
          </Col>
        </Row>
        {/* Third Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[8]}
              name={this.state.names[8]}
              img={this.state.imgs[8]}
              type={this.state.types[8]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[9]}
              name={this.state.names[9]}
              img={this.state.imgs[9]}
              type={this.state.types[9]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[10]}
              name={this.state.names[10]}
              img={this.state.imgs[10]}
              type={this.state.types[10]}
            />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile
              key={this.state.ids[11]}
              name={this.state.names[11]}
              img={this.state.imgs[11]}
              type={this.state.types[11]}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Body
