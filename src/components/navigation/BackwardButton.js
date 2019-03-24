import React from 'react'
import './navigation.css'

export const BackwardButton = ({ action, page , cardView, changeCardView, history }) => {
  return(
    <i
      onClick={!cardView ? () => action("backward") : () => {changeCardView(); history.push("/Pokedex/Page/"+page);}}
      className="fas fa-arrow-alt-circle-left fa-4x arrow">
    </i>
  )
}

