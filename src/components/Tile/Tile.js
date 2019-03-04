import React from 'react'
import TileHeader from "./TileHeader"
import TileImage from "./TileImage"
import TileFooter from "./TileFooter"
import './tile.css'

export default function Tile(props)
{
  return(
    <div className="tile">
      <TileHeader name={props.name}/>
      <TileImage img={props.img}/>
      <TileFooter type={props.type}/>
    </div>
  )

}
