import React, { Component } from 'react';
import {Container} from 'reactstrap'
import './App.css';
import Body from './components/Body.js'
import Header from './components/Header.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(data){
    if(data === "forward")
    {
      console.log(data)
      this.setState(prevState =>
        {
          return{
            page: prevState.page + 1
          }
      })
    }

    if(data === "backward" && this.state.page !== 1)
    {
      console.log(data)
      this.setState(prevState =>
        {
          return{
            page: prevState.page - 1
          }
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
          <Body page={this.state.page} update={this.update}/>

        </Container>
      </div>
    )
  }
}

export default App;
