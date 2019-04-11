import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='App-title'>Dreaming of my next Travels 💭😍</h1>
          </header>
          <Travel 
          photo = "https://www.carigami.fr/magazine/wp-content/uploads/2014/09/sydney-australie.jpg"
          destination = " Syndey"
          country = "Australia"
          distance = "16 084 km "
          />
          <Travel 
          photo = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG"
          destination = " Singapore"
          country = "Singapore"
          distance = "9 900 km "
          />
      </div>
    );
  }
}

export default App;
