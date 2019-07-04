import React, { Component } from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import Body from './components/Body';
import './App.css';


type Props = {
  history: any,
};

type State = {
  pokemonData: any,
  page: number,
  name: string,
  cardView: boolean,
  searchValue: string
};

/**
 * Functional class that is the parent to all components
 *
 * @param {Object} history Object from react router v4
 */
export default class App extends Component<Props, State> {
  state = {
    pokemonData: {},
    page: 1,
    name: '',
    cardView: false,
    searchValue: '',
  };

  componentDidMount() {
    this.retrieveData('https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1');

    // // uncomment for when no internet
    // this.props.history.push('/Pokedex/Page/1');
    // const data = require('./data/page1.json');
    // this.setState(() => ({
    //   pokemonData: data,
    //   page: data.meta.current_page,
    // }));
  }

  setName = (pokemonName: string) => {
    this.setState(() => ({
      name: pokemonName,
    }));
  }

  retrieveData = (url: string) => {
    axios.get(url)
      .then((response) => {
        const list = response.data;
        this.setState(() => ({
          pokemonData: list,
          page: list.meta.current_page,
        }));
      });
  }

  /**
   * Handles logic associated with search bar inputs
   * @param {String} search The text in the the search bar
   */
  handleSearchChange = (search: string) => {
    const { page } = this.state;
    const { history } = this.props;
    if (search !== '') {
      history.push(`/Pokedex/Pokemon/Name=${search}`);
      this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${search}`);
    } else {
      history.push(`/Pokedex/Pokemon/Page=${page}`);
      this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1`);
    }
    this.setState(() => ({
      searchValue: search,
    }));
  }

  navForward = () => {
    const { page, searchValue, pokemonData } = this.state;
    const { history } = this.props;
    const updatedPage = page + 1;

    // Conditional for when search bar is not empty
    if (searchValue !== '') {
      // update url
      history.push(`/Pokedex/Pokemon/Name=${searchValue}/Page=${updatedPage}`);

      // api call for new pokemon
      this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${updatedPage}`);
    } else {
      history.push(`/Pokedex/Pokemon/Page=${updatedPage}`);
      this.retrieveData(pokemonData.links.next);
    }

    // update page state
    this.setState(() => ({
      page: updatedPage,
    }));
  }

  navBackward = () => {
    const { page, searchValue, pokemonData } = this.state;
    const { history } = this.props;
    const updatedPage = page - 1;

    // Conditional for when search bar is not empty
    if (searchValue !== '') {
      // update url
      history.push(`/Pokedex/Pokemon/Name=${searchValue}/Page=${updatedPage}`);

      // api call for new pokemon
      this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${updatedPage}`);
    } else {
      history.push(`/Pokedex/Pokemon/Page=${updatedPage}`);
      this.retrieveData(pokemonData.links.prev);
    }

    // update page state
    this.setState(() => ({
      page: updatedPage,
    }));
  }

  handleNavChange = (ev: string) => {
    const { page, searchValue, pokemonData } = this.state;
    const { history } = this.props;

    // conditional for when forward button is pressed from tile view
    if (ev === 'forward' && page !== pokemonData.meta.last_page) {
      this.navForward();

      // // uncomment for when no internet
      // const data = require('./data/page2.json');
      // this.setState(() => ({
      //   pokemonData: data,
      //   page: data.meta.current_page,
      // }));
    }

    // conditional for when back button is pressed from tile view
    if (ev === 'backward' && page !== pokemonData.meta.from) {
      this.navBackward();

      // // uncomment for when no internet
      // const data = require('./data/page1.json');
      // this.setState(() => ({
      //   pokemonData: data,
      //   page: data.meta.current_page,
      // }));
    }

    // Conditional for when back button is pressed from card view page
    if (ev === 'cardView' && searchValue !== '') {
      history.push(`/Pokedex/Pokemon/Name=${searchValue}/Page=${page}`);
    }

    if (ev === 'cardView' && searchValue === '') {
      history.push(`/Pokedex/Pokemon/Page=${page}`);
    }
  }

  changeCardView = () => {
    this.setState((prevState) => ({
      cardView: !prevState.cardView,
    }));
  }

  render() {
    const {
      searchValue,
      cardView,
      pokemonData,
      page,
      name,
    } = this.state;
    return (
      <div className='container-fluid'>
        <div className='inner-container'>
          {/* Backward button, Search Bar, Forward button */}
          <Header
            handleNavChange={this.handleNavChange}
            changeCardView={this.changeCardView}
            cardView={cardView}
            searchValue={searchValue}
            name={name}
            handleSearchChange={this.handleSearchChange}
          />

          {/* Pokemon  Tiles */}
          <Body
            pokemonData={pokemonData}
            changeCardView={this.changeCardView}
            cardView={cardView}
            setName={this.setName}
          />

        </div>
      </div>
    );
  }
}
