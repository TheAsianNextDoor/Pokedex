import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'
import BackwardButton from './Navigation/BackwardButton.js'
import ForwardButton from './Navigation/ForwardButton.js'
import SearchBar from './Navigation/SearchBar.js'

export default class Header extends Component {
  render() {
    return(
      <Container>
        <Row className="">
          <Col xs={2} md={2}>
            <BackwardButton {...this.props}/>
          </Col>
          <Col xs={8} md={8} className="px-0 mx-0 py-4">
            <SearchBar />
          </Col>
          <Col xs={2} md={2}>
            <ForwardButton {...this.props}/>
          </Col>
        </Row>
      </Container>
    )

  }
}
