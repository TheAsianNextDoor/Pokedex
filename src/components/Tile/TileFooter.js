import React, { Component } from 'react'
import './tile.css'

class TileFooter extends Component {
  constructor(){
    super()
    this.state = {
      type: []
    }
  }

  componentDidMount() {
    fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=Bulbasaur")
      .then(response => response.json())
      .then(data => {
        this.setState({type: data.data[0].types})
      })
  }

  render() {
    let i = 0
    const list = this.state.type.map((item) =>
      <div className='d-inline px-1'>
        <p className='tile-footer'>{item} key={i++}</p>
      </div>)
    return(
      <div className='text-right pr-4'>
        {list}
      </div>
    )
  }
}

export default TileFooter
