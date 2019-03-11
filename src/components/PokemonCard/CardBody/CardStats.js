import React, { Component } from 'react'
import {Container, Row, Col, Progress } from 'reactstrap'



export default class CardStats extends Component {
  constructor(props){
    super(props)
    this.state = {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      spAtk: 0,
      spDef: 0,

      hpPercent: 0,
      attackPercent: 0,
      defensePercent: 0,
      speedPercent: 0,
      spAtkPercent: 0,
      spDefPercent: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hp: nextProps.info.stats.hp,
      attack: nextProps.info.stats.attack,
      defense: nextProps.info.stats.defense,
      speed: nextProps.info.stats.speed,
      spAtk: nextProps.info.stats['special-attack'],
      spDef: nextProps.info.stats['special-defense'],

      hpPercent: (nextProps.info.stats.hp/250) * 100,
      attackPercent: (nextProps.info.stats.attack/100) * 100,
      defensePercent: (nextProps.info.stats.defense/100) * 100,
      speedPercent: (nextProps.info.stats.speed/105) * 100,
      spAtkPercent: (nextProps.info.stats['special-attack']/150) * 100,
      spDefPercent: (nextProps.info.stats['special-defense']/150) * 100,
    })
  }
  render() {
    console.log(this.state.spDef)
    return (
      <Container className='pt-1'>
        <Row>
          <Col xs='12' sm='12' md='12' lg='5'>
            <img src={this.props.info.image} className='pokemonImage' alt=''/>
          </Col>
          <Col className='display-block' xs='12' sm='12' md='12' lg='6'>
            <Col className='align-left display-block' xs='3' sm='3' md='3' lg='4'>
              <h4 className='statsSectionTitle align-left'>HP </h4>
              <h4 className='statsSectionTitle align-left'>Attack </h4>
              <h4 className='statsSectionTitle align-left'>Deffense </h4>
              <h4 className='statsSectionTitle align-left'>Speed </h4>
              <h4 className='statsSectionTitle align-left'>SP Atk </h4>
              <h4 className='statsSectionTitle align-left'>Sp Def </h4>
            </Col>
            <Col className='display-block' xs='7' sm='7' md='7' lg='8'>
              <Progress color='sucess' value={this.state.hpPercent}>
                <span className='align-left pl-2'>{this.state.hp}</span>
              </Progress>
              <div className='statPadding'>
                <Progress color='sucess' value={this.state.attackPercent}>
                  <span className='align-left pl-2'>{this.state.attack}</span>
                </Progress>
              </div>
              <div className='statPadding'>
                <Progress color='sucess' value={this.state.defensePercent}>
                  <span className='align-left pl-2'>{this.state.defense}</span>
                </Progress>
              </div>
              <div className='statPadding'>
                <Progress color='sucess' value={this.state.speedPercent}>
                  <span className='align-left pl-2'>{this.state.speed}</span>
                </Progress>
              </div>
              <div className='statPadding'>
                <Progress color='sucess' value={this.state.spAtkPercent}>
                  <span className='align-left pl-2'>{this.state.spAtk}</span>
                </Progress>
              </div>
              <div className='statPadding'>
                <Progress color='sucess' value={this.state.spDefPercent}>
                  <span className='align-left pl-2'>{this.state.spDef}</span>
                </Progress>
              </div>
            </Col>
          </Col>
        </Row>
        <h2 className="genusTitle align-left">{this.props.info.genus}</h2>
        <Row className='pt-2'>
          <Col lg={12}>
          <h2 className="description align-left">{this.props.info.description}</h2>
          </Col>
        </Row>
      </Container>
    )
  }

}
