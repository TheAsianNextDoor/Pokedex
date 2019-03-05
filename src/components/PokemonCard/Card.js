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
    // try{
      fetch('https://intern-pokedex.myriadapps.com/api/v1/pokemon/'+this.props.match.params.id,{
        method: 'GET'
      })
        .then(response => response.json())
        .then(list => this.setState({
          info: list.data,
          })
        )
    // }
    // catch(e){
    //   //Do nothing when page isn't reacheable. Keeps pages in range
    //   // 1 < page < 37
    // }
  }

  render(){
    console.log(this.state.info)
    return(
      <Container>
        {/*Navigation*/}
        <CardHeader />

        {/*Body*/}
        <CardBody />

      </Container>
    )
  }
}
