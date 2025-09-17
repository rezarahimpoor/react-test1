import React, { Component } from 'react';


import './App.css';
class Hello extends Component {
  render() {
    return <h1>سلام دوستان من</h1>;
  }
}


class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2 className="timer">{this.state.time}</h2>;
  }
}


class App extends Component {
  render() {
    return (
      <div className='main'>
        <Hello />
        <Timer />
      </div>
    );
  }
}

export default App;
