import React, { Component } from 'react'
import './CardBody.css'

export default class CardTitle extends Component {

  render() {
    let i = 0
    let abilityList = []
    //makes sure array isn't empty
    if(Array.isArray(this.props.info.types))
    {
      abilityList = this.props.info.types.map((item) =>
        <div key={i++} className='d-inline px-1'>
          <p className='titleType'>  {item}  </p>
        </div>
        )
    }

    return (
      <div className="cardTitlePadding">
        <span className="cardTitleName smallScreenRemove">{this.props.info.name}</span>
        <span className="cardTitleID smallScreenRemove">#{this.props.info.id}</span>
        <span className="cardTitleAbilities">{abilityList}</span>
        <hr className="cardTitleBreak"/>
      </div>
    )
  }

}
