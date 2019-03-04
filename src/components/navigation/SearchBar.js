import React from 'react'
import './navigation.css'

export default function SearchBar(){
  return(
    <div className="px-0 mx-0">
      <input
        type="text"
        id="search-bar"
        placeholder="Pokedex"
        title="Type in a name"/>
    </div>
  )
}
