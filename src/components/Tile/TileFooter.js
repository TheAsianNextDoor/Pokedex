import React, { Component } from 'react'
import './tile.css'

export default class TileFooter extends Component {
  render() {
    let i = 0
    let list = []
    //makes sure array isn't empty
    if(Array.isArray(this.props.type))
    {
      list = this.props.type.map((item) =>
        <div key={i++} className='d-inline px-1'>
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
