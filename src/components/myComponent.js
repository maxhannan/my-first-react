import React, { Component } from 'react'
import Greeting from './Greeting'
class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date ()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    const  {date} = this.state
    const {names, greeting} = this.props
    return (
      <div>
        <Greeting greeting = {greeting} names = {names} />
        <FormattedDate date = { date }/>
      </div>
    )
  }
}

function FormattedDate(props) {
  return <h3>It is {props.date.toLocaleTimeString()}.</h3>;
}
Clock.defaultProps = {
  greeting: 'Hello',
  names: ['Ram', 'Shyam', 'Raghav']
}
export default Clock