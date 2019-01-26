import React, { Component } from 'react';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor () {
    super()
    this.state = {
      ip: '',
      city: '',
      country: '',
      isp: '',
      lat: '',
      lon: '',
      regionName: '',
      timezone: '',
    }
    axios.get('https://api.ipify.org/?format=json')
      .then(response => this.setState({ip: response.data.ip}))
    axios.get('http://ip-api.com/json/'+this.state.ip)
      .then(response => this.setState({
        city: response.data.city, 
        country: response.data.country,
        isp: response.data.isp, 
        regionName: response.data.regionName,
        timezone: response.data.timezone,
      }))
  }

  render() {
    return (
      <div className='App'>
        <div class="data"> 
          <h1>Your IP is: {this.state.ip}</h1>
          <h1>Your ISP is: {this.state.isp}</h1>
          <h1>Your Country is: {this.state.country}</h1>
          <h1>Your Province/State is: {this.state.regionName}</h1>
          <h1>Your City is: {this.state.city}</h1>
          <h1>Your timezone is: {this.state.timezone}</h1>
        </div>
      </div>
    );
  }
}

export default App;
