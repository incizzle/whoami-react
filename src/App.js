import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor () {
    super()
    this.state = {
      ip: ''
    }
    axios.get('https://api.ipify.org/?format=json')
      .then(response => this.setState({ip: response.data.ip}))
  }

  render() {
    return (
      <div className="App">
        <p>Your IP is {this.state.ip}</p>
      </div>
    );
  }
}

export default App;
