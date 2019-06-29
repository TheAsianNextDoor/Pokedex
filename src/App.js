import React, { Component } from 'react';
import { Header } from './components/Header';
import Body from './components/Body';
import './App.css';

type Props = {
  history: string,
};

type State = {
  pokemonData: Array<string>,
  page: number,
  name: string,
  cardView: boolean,
  searchValue: string
};

export default class App extends Component<Props, State> {
    state = {
      pokemonData: [],
      page: 1,
      name: '',
      cardView: false,
      searchValue: '',
    };

      handleNavChange = this.handleNavChange.bind(this);

      changeCardView = this.changeCardView.bind(this);

      getName = this.getName.bind(this);

      handleSearchChange = this.handleSearchChange.bind(this);


      componentDidMount() {
        this.retrieveData('https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1');

        // // uncomment for when no internet
        // this.props.history.push('/Pokedex/Page/1');
        // const data = require('./data/page1.json');
        // this.setState({
        //   pokemonData: data,
        //   page: data.meta.current_page,
        // });
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
          .then((response) => response.json())
          .then((list) => this.setState({
            pokemonData: list,
            page: list.meta.current_page,
          }));
      }

      handleSearchChange(search) {
        const { page } = this.state;
        const { history } = this.props;
        if (search !== '') {
          history.push(`/Pokedex/Pokemon/Name=${search}`);
          this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${search}`);
        } else {
          history.push(`/Pokedex/Pokemon/Page=${page}`);
          this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1`);
        }
        this.setState({
          searchValue: search,
        });
      }

      navForward() {
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
        this.setState({
          page: updatedPage,
        });
      }

      navBackward() {
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
        this.setState({
          page: updatedPage,
        });
      }

      handleNavChange(ev) {
        const { page, searchValue, pokemonData } = this.state;
        const { history } = this.props;

        // conditional for when forward button is pressed from tile view
        if (ev === 'forward' && page !== pokemonData.meta.last_page) {
          this.navForward();

          // // uncomment for when no internet
          // const data = require('./data/page2.json');
          // this.setState({
          //   pokemonData: data,
          //   page: data.meta.current_page,
          // });
        }

        // conditional for when back button is pressed from tile view
        if (ev === 'backward' && page !== pokemonData.meta.from) {
          this.navBackward();

          // // uncomment for when no internet
          // const data = require('./data/page1.json');
          // this.setState({
          //   pokemonData: data,
          //   page: data.meta.current_page,
          // });
        }

        // Conditional for when back button is pressed from card view page
        if (ev === 'cardView' && searchValue !== '') {
          history.push(`/Pokedex/Pokemon/Name=${searchValue}/Page=${page}`);
        }
      }

      changeCardView() {
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
                page={page}
                handleSearchChange={this.handleSearchChange}
              />

              {/* Pokemon  Tiles */}
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
