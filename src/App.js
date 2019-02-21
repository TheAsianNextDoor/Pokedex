import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap'
import './App.css';
import Body from './components/Body.js'
import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Container className="container-fluid">
          {/*Backward button, search bar, forward button*/}
          <Header />

          {/* First Row of Pokemon */}
          <Body />

        </Container>
      </div>
    )
  }
}

export default App;
