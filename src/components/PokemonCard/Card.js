import React, { Component } from 'react'
import './Card.css'
import CardHeader from './CardNavigation/CardHeader.js'
import CardBody from './CardBody/CardBody.js'
import {Container} from 'reactstrap'


export default class Card extends Component{
  render(){
    return(
      <div className="container-fluid">
        <Container className="container-fluid inner-container">
          <h1>{this.props.id} </h1>
          {/*Navigation*/}
          <CardHeader />

          {/*Body*/}
          <CardBody />

        </Container>
      </div>
    )
  }
}
