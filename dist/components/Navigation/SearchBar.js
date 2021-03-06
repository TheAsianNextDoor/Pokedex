import React from 'react';
import './navigation.css';

type Props = {
  searchValue: string,
  handleSearchChange: Function,
}

/**
 * The functional component for the search bar
 *
 * @param {string} searchValue Value of the search bar
 * @param {Function} handleNavChange Function used to determine type of navigation
 */
export const SearchBar = ({ searchValue, handleSearchChange }: Props) => (
  <form
    onSubmit={(ev) => ev.preventDefault()}
    className='px-0 mx-0 searchBar'
  >
    <input
      type='text'
      id='searchBar'
      placeholder='Pokedex'
      defaultValue={searchValue || ''}
      onChange={(ev) => handleSearchChange(ev.target.value)}
      autoComplete='off'
    />
  </form>
);
export default SearchBar;
