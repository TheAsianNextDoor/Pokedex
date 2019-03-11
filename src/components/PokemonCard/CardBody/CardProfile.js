import React, { Component } from 'react'
import {Container, Row, Col } from 'reactstrap'

export default class CardProfile extends Component {

  addCommas(property)
  {
    if(Array.isArray(property))
    {
      return(
        <h4 className="profileKey align-left text-capitalize">
          {property.map((item, i, arr) =>
            arr.length === i+1 ? item : item + ", ")}
        </h4>
      )
    }
  }

  render() {
    return (
      <div className="align-center">
        <div className="profileTitleColor">
          <h4 className="profileTitle">Profile</h4>
        </div>
        <Container className="pt-4">
          <Row className=''>
            <Col className='margin' xs="5" sm='5' md='5' lg={{size:2, offset: 1}}>
              <h4 className="profileKey align-left">Height: </h4>
            </Col>
            <Col xs="5" sm='5' md='5' lg='2'>
              <h4 className="profileKey align-left">{this.props.info.height} m</h4>
            </Col>
            <Col className='margin' xs="5" sm='5' md='5' lg={{size:2, offset:1}}>
              <h4 className="profileKey align-left">Weight: </h4>
            </Col>
            <Col xs="5" sm='5' md='5' lg='2'>
              <h4 className="profileKey align-left">{this.props.info.weight} kg</h4>
            </Col>
          </Row>
          <Row className="">
          <Col className='margin pr-0' xs="5" sm='5' md='5' lg={{size:2, offset:1}}>
              <h4 className="profileKey align-left pl-0">Egg Group: </h4>
            </Col>
            <Col xs="5" sm='5' md='5' lg='2'>
              {this.addCommas(this.props.info.egg_groups)}
            </Col>
            <Col className='margin' xs="5" sm='5' md='5' lg={{size:2, offset:1}}>
              <h4 className="profileKey align-left">Abilities: </h4>
            </Col>
            <Col className="" xs="5" sm='5' md='5' lg='2'>
              {this.addCommas(this.props.info.abilities)}
            </Col>
          </Row>
        </Container>


      </div>
    )
  }

}
