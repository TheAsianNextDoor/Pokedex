import React, { Component } from 'react';
import { Header } from './components/Header';
import './App.css';
import Body from './components/Body';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
      page: 1,
      name: '',
      cardView: false,
      searchValue: '',
    };
    this.handleNavChange = this.handleNavChange.bind(this);
    this.changeCardView = this.changeCardView.bind(this);
    this.getName = this.getName.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    this.retrieveData('https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1');

    // uncomment for when no internet

    // this.props.history.push('/Pokedex/Page/1');

    // let data = require('./data/page1.json')
    // this.setState({
    //   pokemonData: data,
    //   page: data.meta.current_page
    // })
  }

  getName(pokemonName) {
    this.setState({
      name: pokemonName,
    });
  }

  retrieveData(url) {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(list => this.setState({
        pokemonData: list,
        page: list.meta.current_page,
      }));
  }

  handleSearchChange(input) {
    this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${input}`);
    this.setState({
      searchValue: input,
    });
  }

  handleNavChange(ev) {
    const { page, pokemonData } = this.state;
    const { history } = this.props;

    if (ev === 'forward' && page !== pokemonData.meta.last_page) {
      history.push(`/Pokedex/Page/${page + 1}`);
      this.retrieveData(pokemonData.links.next);

      // uncomment for when no internet

      // let data = require('./data/page2.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }

    if (ev === 'backward' && page !== pokemonData.meta.from) {
      history.push(`/Pokedex/Page/${page - 1}`);
      this.retrieveData(pokemonData.links.prev);

      // uncomment for when no internet

      // let data = require('./data/page1.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }
  }

  changeCardView() {
    this.setState(prevState => ({
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
      <div className="container-fluid">
        <div className="inner-container">
          {/* Backward button, search bar, forward button */}
          <Header
            handleNavChange={this.handleNavChange}
            changeCardView={this.changeCardView}
            cardView={cardView}
            searchValue={searchValue}
            name={name}
            page={page}
            handleSearchChange={this.handleSearchChange}
          />

          {/* Pokemon */}
          <Body
            pokemonData={pokemonData}
            changeCardView={this.changeCardView}
            cardView={cardView}
            getName={this.getName}
          />

        </div>
      </div>
    );
  }
}
