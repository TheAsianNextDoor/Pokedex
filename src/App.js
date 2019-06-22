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
          .then((response) => response.json())
          .then((list) => this.setState({
            pokemonData: list,
            page: list.meta.current_page,
          }));
      }

      handleSearchChange(search) {
        this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${search}`);
        this.setState({
          searchValue: search,
        });
      }

      handleNavChangeWithSearch(nav) {
        const { page, searchValue } = this.state;
        const temp = page;
        if (nav === 'forward') {
          this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${temp + 1}`);
          this.setState({
            page: temp + 1,
          });
        }
        if (nav === 'backward') {
          this.retrieveData(`https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${temp - 1}`);
          this.setState({
            page: temp - 1,
          });
        }
      }

      handleNavChange(ev) {
        const { page, searchValue, pokemonData } = this.state;
        const { history } = this.props;

        if (ev === 'forward' && page !== pokemonData.meta.last_page) {
          if (searchValue === '') {
            history.push(`/Pokedex/Pokemon?Page=${page + 1}`);
            this.retrieveData(pokemonData.links.next);
          } else {
            history.push(`/Pokedex/Pokemon?Name=${searchValue}/Page=${page + 1}`);
            this.handleNavChangeWithSearch(ev);
          }
          // uncomment for when no internet

          // let data = require('./data/page2.json')
          // this.setState({
          //   pokemonData: data,
          //   page: data.meta.current_page
          // })
        }

        if (ev === 'backward' && page !== pokemonData.meta.from) {
          if (searchValue === '') {
            history.push(`/Pokedex/Pokemon?Page=${page - 1}`);
            this.retrieveData(pokemonData.links.prev);
          } else {
            history.push(`/Pokedex/Pokemon?Name=${searchValue}/Page=${page - 1}`);
            this.handleNavChangeWithSearch(ev);
          }

          // uncomment for when no internet

          // let data = require('./data/page1.json')
          // this.setState({
          //   pokemonData: data,
          //   page: data.meta.current_page
          // })
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
