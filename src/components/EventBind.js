import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message : 'hello'
        }
        this.clicking = this.clicking.bind(this)
    } 
    
    clicking(){
        this.setState({
            message : "welcome"
    })
}

  render() {
    return (
      <div>
            <p>{this.state.message}</p>
            <button onClick={this.clicking}>Clicking</button>
      </div>
    )
  }
}

export default EventBind
