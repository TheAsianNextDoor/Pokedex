import React from 'react'
import './navigation.css'

export const SearchBar = ({ handleSearchChange }) => {
  return(
    <form className='px-0 mx-0'>
      <input
        type='text'
        id='search-bar'
        placeholder='Pokedex'
        onChange={(ev) => handleSearchChange(ev.target.value)}
        autoComplete='off'
        />
    </form>
  )
}
