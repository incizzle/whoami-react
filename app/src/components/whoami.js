import React, { Component } from "react";
import axios from 'axios'
import '../css/whoami.css'

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
    axios.get('https://ip-api.com/json/')
      .then(response => this.setState({
        ip: response.data.query,
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
        <h1>WHO AM I?</h1>
        <div className="data"> 
          <p>Your IP is: {this.state.ip}</p>
          <p>Your ISP is: {this.state.isp}</p>
          <p>Your Country is: {this.state.country}</p>
          <p>Your Province/State is: {this.state.regionName}</p>
          <p>Your City is: {this.state.city}</p>
          <p>Your Timezone is: {this.state.timezone}</p>
        </div>
      </div>
    );
  }
}

export default App;
