import React, {Component} from 'react'
import './App.css';
import Body from './components/Body.js'
import {Header} from './components/Header.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonData: [null],
      page: 1,
      name: '',
      cardView: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeCardViewState = this.changeCardViewState.bind(this)
    this.getName = this.getName.bind(this)
  }

  retrieveData(url) {
    try {
      fetch(url, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(list => this.setState({
          pokemonData: list,
          page: list.meta.current_page
        }))
    } catch (e) {
      //Do nothing when page isn't reacheable. Keeps pages in range
      // 1 < page < 37
    }
  }

  changeCardViewState() {
    this.setState(prevState => ({
      cardView: !prevState.cardView
    }))
  }

  componentDidMount() {
    // this.retrieveData("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1")
    let data = require('./data/page1.json')
    this.setState({
      pokemonData: data,
      page: data.meta.current_page
    })
  }

  getName(pokemonName){
    this.setState({
      name: pokemonName
    })
  }

  handleChange(ev) {
    if (ev === "forward") {
      // this.setState(prevState => {
      //   this.retrieveData(this.state.pokemonData.links.next)
      // })
      let data = require('./data/page2.json')
      this.setState({
        pokemonData: data,
        page: data.meta.current_page
      })
    }

    if (ev === "backward") {
      // this.setState(prevState => {
      //   this.retrieveData(this.state.pokemonData.links.prev)
      // })
      let data = require('./data/page1.json')
      this.setState({
        pokemonData: data,
        page: data.meta.current_page
      })
    }
  }

  render() {
    const {cardView, pokemonData, page} = this.state
    return (
      <div className="container-fluid">
        <div className="inner-container">
          <span>Page Number: {page}</span>

          {/*Backward button, search bar, forward button*/}
          <Header
            action={this.handleChange}
            cardView={cardView}
            name={this.state.name}
          />

          {/* Pokemon */}
          <Body
            pokemonData={pokemonData}
            changeCardView={this.changeCardViewState}
            cardView={cardView}
            getName={this.getName}
          />

        </div>
      </div>
    )
  }
}
