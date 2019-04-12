import React from 'react'
import { Row, Col } from 'reactstrap'
import { withRouter } from 'react-router'

import { BackwardButton } from './Navigation/BackwardButton.js'
import { ForwardButton } from './Navigation/ForwardButton.js'
import { SearchBar }  from './Navigation/SearchBar.js'
import './Header.css'

export const Header = ({ searchValue, handleSearchChange, handleNavChange, cardView, changeCardView, name, page }) => {
  if(!cardView)
  {
    return(
      <div className='headerHeight'>
        <Row>
          <Col xs={2} md={2}>
            <BackwardButton page={page} handleNavChange={handleNavChange}/>
          </Col>
          <Col xs={8} md={8} className='px-0 mx-0 py-4'>
            <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange}/>
          </Col>
          <Col xs={2} md={2}>
            <ForwardButton searchValue={searchValue} handleNavChange={handleNavChange}/>
          </Col>
        </Row>
      </div>
    )
  }
  else{
    const BackwardButtonRouter = withRouter(BackwardButton)
    return(
      <div className='headerHeight'>
        <Row>
          <Col xs={2} md={2}>
            <BackwardButtonRouter page={page} changeCardView={changeCardView} cardView={cardView}/>
          </Col>
          <Col xs={8} md={8} className='px-0 mx-0 py-4'>
            <span className='pokemonName'>
              {name}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
