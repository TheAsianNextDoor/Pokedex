import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'
import BackwardButton from '../components/navigation/BackwardButton.js'
import ForwardButton from '../components/navigation/ForwardButton.js'
import SearchBar from '../components/navigation/SearchBar.js'

class Header extends Component {
  render() {
    return(
      <Container>
        <Row className="">
          <Col xs={2} md={2}>
            <BackwardButton />
          </Col>
          <Col xs={8} md={8} className="px-0 mx-0 py-4">
            <SearchBar />
          </Col>
          <Col xs={2} md={2}>
            <ForwardButton />
          </Col>
        </Row>
      </Container>
    )

  }
}

export default Header
