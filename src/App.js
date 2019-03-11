import React, { Component } from 'react'
import './App.css';
import Body from './components/Body.js'
import Header from './components/Header.js'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonData: [null],
      page: 1,
      cardView: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeCardViewState = this.changeCardViewState.bind(this)
  }

  retrieveData(url){
    try{
      fetch(url,{
        method: 'GET'
      })
        .then(response => response.json())
        .then(list => this.setState({
          pokemonData: list,
          page: list.meta.current_page
          })
        )
    }
    catch(e){
      //Do nothing when page isn't reacheable. Keeps pages in range
      // 1 < page < 37
      }
  }

  changeCardViewState(){
    this.setState(prevState => ({cardView: !prevState.cardView}))
  }

  componentDidMount(){
    this.retrieveData("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1")
  }

  handleChange(ev){
    if(ev === "forward")
    {
      this.setState(prevState =>
        {
          this.retrieveData(this.state.pokemonData.links.next)
        })
    }

    if(ev === "backward")
    {
      this.setState(prevState =>
        {
          this.retrieveData(this.state.pokemonData.links.prev)
        })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="inner-container">
          <span>Page Number: {this.state.page}</span>

          {/*Backward button, search bar, forward button*/}
          <Header action={this.handleChange} />

          {/* Pokemon */}
          <Body
            pokemonData={this.state.pokemonData}
            changeCardView={this.changeCardViewState}
            cardView={this.state.cardView}
          />

        </div>
      </div>
    )
  }
}
