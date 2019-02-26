import React, { Component } from 'react'
import './navigation.css'

class ForwardButton extends Component {
  render() {
    return(
      <div className="text-center green-background">
          <i
            onClick={() => this.props.action("forward")}
            className="fas fa-arrow-alt-circle-right fa-4x arrow">
          </i>
      </div>
    )
  }
}

export default ForwardButton
