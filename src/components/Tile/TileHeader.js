import React, { Component } from 'react'
import './tile.css'

class TileHeader extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=Bulbasaur")
      .then(response => response.json())
      .then(data => {
        this.setState({name: data.data[0].name})
      })
  }

  render() {
    return(
      <div>
        <h1 className="tile-header-name">{this.state.name}</h1>
        <hr className="py-0 my-1"/>
      </div>
    )
  }
}

export default TileHeader
