import React from 'react'
import './navigation.css'

export const ForwardButton = ({ action, page }) => {
  return(
    <i
      onClick={() => action("forward")}
      className="fas fa-arrow-alt-circle-right fa-4x arrow">
    </i>
  )
}
