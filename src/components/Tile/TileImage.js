import React, { Component } from 'react'
import './tile.css'

class TileImage extends Component {
  constructor(){
    super()
    this.state = {
      imgUrl: ''
    }
  }

  componentDidMount() {
    fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=Bulbasaur")
      .then(response => response.json())
      .then(data => {
        this.setState({imgUrl: data.data[0].image})
      })
  }

  render() {
    return(
      <div className="text-center pt-4">
        <img src={this.state.imgUrl} className='tile-img'/>
      </div>
    )
  }
}

export default TileImage
