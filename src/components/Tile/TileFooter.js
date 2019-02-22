import React, { Component } from 'react'
import './tile.css'

class TileFooter extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: props.type,
    }
  }

  render() {
    let list = []
    //makes sure array isn't empty
    if(Array.isArray(this.state.type))
    {
      list = this.state.type.map((item) =>
        <div className='d-inline px-1'>
          <p className='tile-footer'>{item}</p>
        </div>
        )
    }
    return(
      <div className='text-right pr-4 pt-2'>
        {list}
      </div>
    )
  }
}

export default TileFooter
