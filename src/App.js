import React, { Component } from 'react';
import {Container} from 'reactstrap'
import './App.css';
import Body from './components/Body.js'
import Header from './components/Header.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      data: [null],
      page: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async retrieveData(url){
    try{
    await fetch(url,{
      method: 'GET'
    })
      .then(response => response.json())
      .then(list => this.setState({
        data: list,
        page: list.meta.current_page
        })
      )
    }
    catch(e){
      //Do nothing when page isn't reacheable. Keeps pages in range
      // 1 < page < 37
      }
  }

  componentDidMount(){
    this.retrieveData("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1")
  }

  handleChange(data){
    if(data === "forward")
    {
      this.setState(prevState =>
        {
          this.retrieveData(this.state.data.links.next)
        })
    }

    if(data === "backward")
    {
      this.setState(prevState =>
        {
          this.retrieveData(this.state.data.links.prev)
        })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Container className="container-fluid inner-container">
          <span>Page Number: {this.state.page}</span>

          {/*Backward button, search bar, forward button*/}
          <Header action={this.handleChange} />

          {/* Pokemon */}
          <Body
            data={this.state.data}
          />

        </Container>
      </div>
    )
  }
}

export default App;
