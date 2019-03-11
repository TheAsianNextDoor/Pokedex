import React, { Component } from 'react'
import './CardBody.css'
import PokemonStats from './CardStats.js'
import PokemonProfile from './CardProfile.js'
import PokemonTitle from './CardTitle.js'


export default class CardBody extends Component {
  render() {
    return (
      <div className="cardStyle">
        {/*Navigation, Pokemon Name and Type*/}
        <PokemonTitle {...this.props}/>

        {/*Pokemon image, stats, description*/}
        <PokemonStats {...this.props}/>

        {/*Pokemon info*/}
        <PokemonProfile {...this.props}/>
      </div>
    )
  }

}
