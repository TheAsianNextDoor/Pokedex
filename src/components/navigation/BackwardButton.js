import React from 'react'
import './navigation.css'

export const BackwardButton = ({ action }) => {
  return(
    <div className="text-center">
      <i
        onClick={() => action("backward")}
        className="fas fa-arrow-alt-circle-left fa-4x arrow">
      </i>
    </div>
  )
}
