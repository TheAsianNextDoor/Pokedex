import React, { Component } from 'react'
import CardHeader from './CardHeader/CardHeader.js'
import CardBody from './CardBody/CardBody.js'
import {Container} from 'reactstrap'

import './Card.css'

export default class Card extends Component{
  constructor(){
    super()
    this.state = {
      info: [null]
    }
  }

  componentDidMount() {
    fetch('https://intern-pokedex.myriadapps.com/api/v1/pokemon/'+this.props.match.params.id,{
      method: 'GET'
    })
      .then(response => response.json())
      .then(list => this.setState({
        info: list.data,
        })
      )
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
