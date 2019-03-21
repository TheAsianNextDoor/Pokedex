import React from 'react'
import {Row, Col } from 'reactstrap'

import {BackwardButton} from './Navigation/BackwardButton.js'
import {ForwardButton} from './Navigation/ForwardButton.js'
import {SearchBar} from './Navigation/SearchBar.js'
import './Header.css'

export const Header = ({ action, cardView, name }) => {
  if(!cardView)
  {
    return(
      <>
        <Row>
          <Col xs={2} md={2}>
            <BackwardButton action={action}/>
          </Col>
          <Col xs={8} md={8} className='px-0 mx-0 py-4'>
            <SearchBar />
          </Col>
          <Col xs={2} md={2}>
            <ForwardButton action={action}/>
          </Col>
        </Row>
      </>
    )
  }
  else{
    return(
      <>
        <Row>
          <Col xs={2} md={2}>
            <BackwardButton action={action}/>
          </Col>
          <Col xs={8} md={8} className='px-0 mx-0 py-4'>
            <span className='pokemonName'>
              {name}
            </span>
          </Col>
        </Row>
      </>
    )
  }
}
