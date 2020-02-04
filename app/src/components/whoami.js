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
    
      axios.get('https://api.ipify.org?format=json')
        .then(response => axios.get('https://geo.ipify.org/api/v1?apiKey=at_s1f3sJbK08zLSduTzfn43MvJQ64Yq&ipAddress='+response.data.ip)
        .then(response => this.setState({
          ip: response.data.ip,
          city: response.data.location.city, 
          country: response.data.location.country,
          isp: response.data.isp, 
          regionName: response.data.location.region,
          timezone: response.data.location.timezone,
        })))
    
    
    
  }

  render() {
    return (
      <div className='App'>
        <h1>WHO AM I?</h1>
        <div className="data"> 
          <p>Your IP is: {this.state.ip}</p>
          <p>Your Country is: {this.state.country}</p>
          <p>Your Province/State is: {this.state.regionName}</p>
          <p>Your City is: {this.state.city}</p>
          <p>Your Timezone is: {this.state.timezone}</p>
          <p>Your ISP is: {this.state.isp}</p>
        </div>
      </div>
    );
  }
}

export default App;
