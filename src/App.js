import React, {Component} from 'react'

import './App.css';
import Body from './components/Body.js'
import {Header} from './components/Header.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonData: [],
      page: 1,
      name: '',
      cardView: false,
      searchValue: ''
    }
    this.handleNavChange = this.handleNavChange.bind(this)
    this.changeCardView = this.changeCardView.bind(this)
    this.getName = this.getName.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  retrieveData(url) {
  fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(list => this.setState({
        pokemonData: list,
        page: list.meta.current_page
      }))
  }

  handleSearchChange(input){
    this.retrieveData('https://intern-pokedex.myriadapps.com/api/v1/pokemon?name='+input)
    this.setState({
      searchValue: input
    })
  }

  changeCardView() {
    this.setState(prevState => ({
      cardView: !prevState.cardView
    })
    )
  }

  componentDidMount() {
    this.retrieveData('https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1')
    // this.props.history.push('/Pokedex/Page/1');

    // let data = require('./data/page1.json')
    // this.setState({
    //   pokemonData: data,
    //   page: data.meta.current_page
    // })
  }

  getName(pokemonName){
    this.setState({
      name: pokemonName
    })
  }

  handleNavChange(ev) {
    if (ev === 'forward' && this.state.page !== this.state.pokemonData.meta.last_page) {
      this.props.history.push('/Pokedex/Page/'+(this.state.page+1));
      this.setState(prevState => {
        return{
        }
      })
      this.retrieveData(this.state.pokemonData.links.next)


      // let data = require('./data/page2.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }

    if (ev === 'backward' && this.state.page !== this.state.pokemonData.meta.from) {
      this.props.history.push('/Pokedex/Page/'+(this.state.page-1));
      this.setState(prevState => {
        return{
        }
      })
      this.retrieveData(this.state.pokemonData.links.prev)

      // let data = require('./data/page1.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }
  }

  render() {
    const { searchValue, cardView, pokemonData, page, name } = this.state
    return (
      <div className='container-fluid'>
        <div className='inner-container'>
          {/*Backward button, search bar, forward button*/}
          <Header
            handleNavChange={this.handleNavChange}
            changeCardView={this.changeCardView}
            cardView={cardView}
            searchValue = {searchValue}
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
    )
  }
}
