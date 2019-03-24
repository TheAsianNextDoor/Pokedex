import React, { Component } from 'react'
import {CardHeader} from './CardHeader/CardHeader.js'
import {CardBody} from './CardBody/CardBody.js'
import {Container} from 'reactstrap'

import './Card.css'

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  componentDidMount() {
    fetch('https://intern-pokedex.myriadapps.com/api/v1/pokemon/' + this.props.location.state.id, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(list => this.setState(() => {
        return {
          info: list.data
        }
      }))

    // let data = require('../../data/bulbasaur.json')
    // this.setState(() => {
    //   return{
    //     info: data.data,
    // }})

    this.props.getName(this.props.match.params.name)
  }

  render(){
    return(
      <Container className="cardContainer">
        {/*Navigation*/}
        <CardHeader name={this.state.info.name}/>

        {/*Body*/}
        <CardBody info={this.state.info}/>

      </Container>
    )
  }
}
