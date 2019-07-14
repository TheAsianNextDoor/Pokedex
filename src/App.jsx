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
    searchValue: string,
    cardView: boolean,
    navChanging: boolean,
};

/**
 * Functional class that is the parent to all components
 *
 * @param {Object} history Object from react router v4
 */
export default class App extends Component<Props, State> {
    state = {
        pokemonData: { data: {} },
        page: 1,
        name: '',
        searchValue: '',
        cardView: false,
        navChanging: false,
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

    /**
   * Function that updates the state for pokemon name
   *
   * @param {string} pokemonName A string representing the pokemon name
   */
    setName = (pokemonName: string) => {
        this.setState(() => ({
            name: pokemonName,
        }));
    }

    /**
   * Function that makes api calls or retrieves object from local storage
   *
   * @param {string} apiCall The string used to make an axios GET request
   */
    retrieveData = (apiCall: ?string) => {
        // attempts to get url from local storage
        const cacheResponse = localStorage.getItem(apiCall);

        // if api response hasn't been cached yet, make axios call
        if (cacheResponse === null) {
            axios.get(apiCall)
                .then((response) => {
                    const list = response.data;
                    // set api call to state
                    this.setState(() => ({
                        pokemonData: list,
                        page: list.meta.current_page,
                    }));

                    // save api call to local storage
                    localStorage.setItem(apiCall, JSON.stringify(list));
                });
        } else {
            // retrieve cached response from local storage and convert to json
            const retrievedObject = JSON.parse(localStorage.getItem(apiCall));

            // set state from local storage
            this.setState(() => ({
                pokemonData: retrievedObject,
                page: retrievedObject.meta.current_page,
            }));
        }
    }

    /**
   * Function that handles logic associated with search bar inputs
   *
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

    /**
   * Function that handles nav forward logic with input or no input
   * Also updates url with new page info
   */
    navForward = () => {
        const {
            page,
            searchValue,
            pokemonData,
        } = this.state;
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

    /**
   * Function that handles nav backward logic with input or no input
   * Also updates url with new page info
   */
    navBackward = () => {
        const {
            page,
            searchValue,
            pokemonData,
        } = this.state;
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

    /**
   * Function that determines when navForward and navBackward functions are called,
   * as well as, how to update url when card view is changed
   */
    handleNavChange = (ev: string) => {
        const {
            page,
            searchValue,
            pokemonData,
            // eslint-disable-next-line no-unused-vars
            navChanging,
        } = this.state;
        const { history } = this.props;

        // conditional for when forward button is pressed from tile view
        if (ev === 'forward' && page !== pokemonData.meta.last_page) {
            this.navForward();
            this.setState((prevState) => ({
                navChanging: !prevState.navChanging,
            }));

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
            this.setState((prevState) => ({
                navChanging: !prevState.navChanging,
            }));

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

    /**
   * Function that changes visibility of cards and tiles
   */
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
            name,
            navChanging,
        } = this.state;
        return (
            <div id='appTopDiv' className='container-fluid'>
                <div id='appSecondDiv' className='inner-container'>
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
                        navChanging={navChanging}
                    />

                </div>
            </div>
        );
    }
}
