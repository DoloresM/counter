import React, {Component} from "react";
import "./App.css"

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      double: false
    }
  }

  increment= ()=> {
    if(this.state.counter < 20 && !this.state.double){
      this.setState({
        counter: this.state.counter + 1
      })
    }else if(this.state.counter < 19 && this.state.double){
      this.setState({
        counter: this.state.counter + 2
      })
    }
  }
  decrement= ()=> {
    if(this.state.counter < 20 && !this.state.double){
      this.setState({
        counter: this.state.counter - 1
      })
    }else if(this.state.double && this.state.counter < 19 ){
      this.setState({
        counter: this.state.counter - 2
      })
    }
  }



  double = () => {
    this.setState({
      counter: 0,
    })
    if(this.state.double) {
      this.setState({
        double: false,
      })
    } else {
      this.setState({
        double: true
      })
    }
  }

  render(){
    console.log(this.state.counter);
    return(
      <div className ="container">
        <div className = "navbar">Counter.js</div>
        <div className ="counter">
          <h1>{this.state.counter} </h1>
          <button onClick={this.increment} type="button">Increment</button>
          <button onClick={this.decrement} type="button">Decrement</button>
          <button type="button" onClick={this.double}>{this.state.double ? 'Double Count' : "Single Count"}</button>
        </div>
      </div>
    )
  }
}

export default Counter;
