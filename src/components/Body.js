import React, { Component } from 'react'
import Tile from './Tile/Tile.js'
import {Row, Col } from 'reactstrap'


class Body extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        {/* First Row */}
        <Row className="">
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
        </Row>
        {/* Second Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
        </Row>
        {/* Third Row */}
        <Row>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
          <Col className="px-2 py-2" xs={6} md={4} lg={3}>
            <Tile />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Body
