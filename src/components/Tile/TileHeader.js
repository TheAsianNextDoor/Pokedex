import React from 'react'
import './tile.css'

export default function TileHeader(props){
  return(
    <div>
      <h1 className="tile-header-name">{props.name}</h1>
      <hr className="py-0 my-1"/>
    </div>
  )
}
