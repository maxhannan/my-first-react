import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Clock from './myComponent'
import '../styles/App.scss'
class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      count: 0,
    }
    
    this.countUp = this.countUp.bind(this)
    
  }
  countUp(e) {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render () {
    return (
      <div className = 'container'>
        <Clock />
        <Button onClick = {this.countUp}>Click Me!</Button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default App;
