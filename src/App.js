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
    this.changeCardView = this.changeCardView.bind(this)
    this.getName = this.getName.bind(this)
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

  changeCardView() {
    this.setState(prevState => ({
      cardView: !prevState.cardView
    }))
  }

  componentDidMount() {
    this.retrieveData("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1")

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

  handleChange(ev) {
    if (ev === "forward" && this.state.page !== this.state.pokemonData.meta.last_page) {
      this.setState(prevState => {
        this.retrieveData(this.state.pokemonData.links.next)
      })
    this.props.history.push("/Pokedex/Page/"+(this.state.page+1));


      // let data = require('./data/page2.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }

    if (ev === "backward" && this.state.page !== this.state.pokemonData.meta.from) {
      this.setState(prevState => {
        this.retrieveData(this.state.pokemonData.links.prev)
      })
    this.props.history.push("/Pokedex/Page/"+(this.state.page-1));

      // let data = require('./data/page1.json')
      // this.setState({
      //   pokemonData: data,
      //   page: data.meta.current_page
      // })
    }
  }

  render() {
    const {cardView, pokemonData, page, name} = this.state
    return (
      <div className="container-fluid">
        <div className="inner-container">
          <span>Page Number: {page}</span>

          {/*Backward button, search bar, forward button*/}
          <Header
            action={this.handleChange}
            changeCardView={this.changeCardView}
            cardView={cardView}
            name={name}
            page={page}
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
