// App is the entry component

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Dreaming of my next Travels <span role="img" aria-label="emoji">💭😍</span></h1>
          </header>
          <Travels/>
      </div>
    );
  }
}

export default App;
