import React, { Component } from 'react'
import TileHeader from "./TileHeader"
import TileImage from "./TileImage"
import TileFooter from "./TileFooter"
import './tile.css'

class Tile extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div className="tile">
        <TileHeader />
        <TileImage />
        <TileFooter />
      </div>
    )
  }
}

export default Tile
