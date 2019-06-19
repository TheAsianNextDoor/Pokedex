import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

export const SearchBar = ({ searchValue, handleSearchChange }) => (
  <form onSubmit={ev => ev.preventDefault()} className="px-0 mx-0">
    <input
      type="text"
      id="searchBar"
      placeholder="Pokedex"
      defaultValue={searchValue || ''}
      onChange={ev => handleSearchChange(ev.target.value)}
      autoComplete="off"
    />
  </form>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
