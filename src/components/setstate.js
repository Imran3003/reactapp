import React, { Component } from 'react'

class Setstate extends Component {
    constructor() {
        super()
        this.state = {
            count:0
        }            
        
    }
    incre(){
        // this.setState({
        //    count : this.state.count +1
        // },()=> console.log('current value',this.state.count))
        // console.log(this.state.count)
        this.setState(prevState => ({
            count : prevState.count +1
        }))
        console.log(this.state.count)
    }
    increFive() {
        this.incre()
        this.incre()
        this.incre()
        this.incre()
        this.incre()
    }


  render() {
    
    return (
      <div>
            <p>Count - {this.state.count}</p>
            <button onClick={()=>this.increFive()}>Increment</button>
      </div>
    )
  }
}

export default Setstate
