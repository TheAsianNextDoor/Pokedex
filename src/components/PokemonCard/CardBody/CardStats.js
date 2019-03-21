import React from 'react'
import {Container, Row, Col, Progress } from 'reactstrap'

export const CardStats = ({ info }) => {
  // too many nested objects
  const { hp, attack, defense, speed } = ((info || {}).stats || {})
  const spAtk = ((info || {}).stats || {})['special-attack']
  const spDef = ((info || {}).stats || {})['special-defense']

  const hpPercent = (hp/250) * 100
  const attackPercent = (attack/140) * 100
  const defensePercent = (hp/120) * 100
  const speedPercent = (hp/110) * 100
  const spAtkPercent = (hp/150) * 100
  const spDefPercent = (hp/150) * 100

  return (
    <Container className='pt-1'>
      <Row>
        <Col xs='12' sm='12' md='12' lg='5'>
          <img src={info.image} className='pokemonImage' alt=''/>
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
            <Progress color='sucess' value={hpPercent}>
              <span className='align-left pl-2'>{hp}</span>
            </Progress>
            <div className='statPadding'>
              <Progress color='sucess' value={attackPercent}>
                <span className='align-left pl-2'>{attack}</span>
              </Progress>
            </div>
            <div className='statPadding'>
              <Progress color='sucess' value={defensePercent}>
                <span className='align-left pl-2'>{defense}</span>
              </Progress>
            </div>
            <div className='statPadding'>
              <Progress color='sucess' value={speedPercent}>
                <span className='align-left pl-2'>{speed}</span>
              </Progress>
            </div>
            <div className='statPadding'>
              <Progress color='sucess' value={spAtkPercent}>
                <span className='align-left pl-2'>{spAtk}</span>
              </Progress>
            </div>
            <div className='statPadding'>
              <Progress color='sucess' value={spDefPercent}>
                <span className='align-left pl-2'>{spDef}</span>
              </Progress>
            </div>
          </Col>
        </Col>
      </Row>
      <h2 className="genusTitle align-left">{info.genus}</h2>
      <Row className='pt-2'>
        <Col lg={12}>
        <h2 className="description align-left">{info.description}</h2>
        </Col>
      </Row>
    </Container>
  )
}
