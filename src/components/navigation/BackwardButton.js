import React from 'react'
import './navigation.css'

export const BackwardButton = ({ handleNavChange, page , cardView, changeCardView, history }) => {
  return(
    <i
      onClick={!cardView ? () => {handleNavChange('backward'); document.getElementById('searchBar').value = '';} : () => {changeCardView(); history.push('/Pokedex/Page/'+page);}}
      className='fas fa-arrow-alt-circle-left fa-4x arrow'>
    </i>
  )
}

