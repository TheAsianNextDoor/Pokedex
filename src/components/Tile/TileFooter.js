import React from 'react'
import './tile.css'

export const TileFooter = ({ type }) => {    
    return(
      <div className='text-right pr-4 pt-2'>
        { type.map((item, i) => {
          return (
            <div key={i++} className='d-inline px-1'>
            <p className='tile-footer'>{item}</p>
            </div>
          )})
        }
      </div>
    )
}
