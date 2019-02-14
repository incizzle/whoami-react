import React, { Component } from "react";
import axios from 'axios'
import '../css/reverselookup.css'


class Posts extends Component {
  // render() {
  //   return (
  //     <React.Fragment>
  //       <h1>Reverse Lookup</h1>
        
  //     </React.Fragment>
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      ip: '',
      city: '',
      country: '',
      isp: '',
      lat: '',
      lon: '',
      regionName: '',
      timezone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) { // eslint-disable-next-line
    var re = new RegExp("^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$");
    if (re.test(this.state.value)) {
    //   axios.get('https://ip-api.com/json/'+this.state.value)
    //   .then(
    //     response => this.setState({
    //     ip: response.data.query,
    //     city: response.data.city, 
    //     country: response.data.country,
    //     isp: response.data.isp, 
    //     regionName: response.data.regionName,
    //     timezone: response.data.timezone,
    // }))
    axios.get('https://geo.ipify.org/api/v1?apiKey=at_s1f3sJbK08zLSduTzfn43MvJQ64Yq&ipAddress='+this.state.value)
        .then(response => this.setState({
          ip: response.data.ip,
          city: response.data.location.city, 
          country: response.data.location.country,
          // isp: response.data.isp, 
          regionName: response.data.location.region,
          timezone: response.data.location.timezone,
    }))
    } else {
      console.log("Invalid");
      alert("Please enter a valid IP ex. 1.1.1.1")
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <h1>Reverse Lookup</h1>
        <div>
          
          <form onSubmit={this.handleSubmit}>
            <h2>Enter IP: </h2>
            <label>
              <input className="text" type="text" value={this.state.value} onChange={this.handleChange} />
            </label> 
            {/* <input type="submit" value="Submit" /> */}
            <button className="submit">Submit</button>
          </form>
        </div>
        <div className="data">
          <p>IP: {this.state.ip}</p>
          {/* <p>ISP: {this.state.isp}</p> */}
          <p>Country: {this.state.country}</p>
          <p>Province/State: {this.state.regionName}</p>
          <p>City: {this.state.city}</p>
          <p>Timezone: {this.state.timezone}</p>
        </div>
      </div>
    );
  }
}

export default Posts;
