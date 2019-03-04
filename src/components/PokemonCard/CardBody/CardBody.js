import React, { Component } from 'react'
import './CardBody.css'
import PokemonBody from './CardStats.js'
import PokemonProfile from './CardProfile.js'
import PokemonTitle from './CardTitle.js'


export default class CardBody extends Component {
  render() {
    return (
      <div>
        {/*Navigation, Pokemon Name and Type*/}
        <PokemonTitle />

        {/*Pokemon image, stats, description*/}
        <PokemonBody />

        {/*Pokemon info*/}
        <PokemonProfile />
      </div>
    )
  }

}
