import React, { Component } from 'react'
import './navigation.css'

class SearchBar extends Component {
  render() {
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
}

export default SearchBar
