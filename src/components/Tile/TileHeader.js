import React from 'react'
import './tile.css'

export const TileHeader = ({ name }) => {
  return(
    <>
      <h1 className='tile-header-name'>{name}</h1>
      <hr className='py-0 my-1'/>
    </>
  )
}
