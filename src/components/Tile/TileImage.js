import React from 'react'
import './tile.css'

export default function TileImage(props){
  return(
    <div className="text-center pt-4">
      <img src={props.img} className='tile-img' alt=''/>
    </div>
  )
}
