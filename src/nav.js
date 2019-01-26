import React, { Component } from 'react';
import './nav.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar">
            <a class="navbar-brand" href="/">Who Am I?</a>
            <a class="nav-item" href="/"> Reverse Lookup </a>
            {/* <a class="nav-item" href="/mbtogb"> MB to GB </a> */}
        </nav>
      </div>
    );
  }
}

export default App;
