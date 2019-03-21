import React from 'react'
import './navigation.css'

export const ForwardButton = ({ action }) => {
  return(
    <div className="text-center green-background">
      <i
        onClick={() => action("forward")}
        className="fas fa-arrow-alt-circle-right fa-4x arrow">
      </i>
    </div>
  )
}
