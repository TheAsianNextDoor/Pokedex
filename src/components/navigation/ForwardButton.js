import React from 'react'
import './navigation.css'

export const ForwardButton = ({ handleNavChange }) => {
  return(
    <i
      onClick={() => handleNavChange('forward')}
      className='fas fa-arrow-alt-circle-right fa-4x arrow'>
    </i>
  )
}
