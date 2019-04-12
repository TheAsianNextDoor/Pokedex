import React from 'react'

import './navigation.css'

export const SearchBar = ({ searchValue, handleSearchChange}) => {

  return(
      <form onSubmit={(ev) => ev.preventDefault()} className='px-0 mx-0'>
        <input
          type='text'
          id='searchBar'
          placeholder='Pokedex'
          defaultValue={searchValue || ''}
          onChange={(ev) => handleSearchChange(ev.target.value)}
          autoComplete='off'
          autoFocus
          />
    </form>
  )
}
