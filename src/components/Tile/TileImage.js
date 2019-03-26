import React from 'react'
import './tile.css'

export const TileImage = ({ img }) => {
  return(
    <div className='text-center pt-4'>
      <img src={img} className='tile-img' alt=''/>
    </div>
  )
}
