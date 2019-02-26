import React, { Component } from 'react'
import './navigation.css'

class BackwardButton extends Component {
  render() {
    return(
      <div className="text-center">
        <i
          onClick={() => this.props.action("backward")}
          className="fas fa-arrow-alt-circle-left fa-4x arrow">
        </i>
      </div>
    )
  }
}

export default BackwardButton
