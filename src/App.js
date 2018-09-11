import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './Components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic-Tac-Toe</h1>
        </header>
        <p className="App-intro">
          Top-down 2D rogue-like game, not for the faint of heart. <span role="img" aria-label="Smirk">😏</span><br/>
          Single player version.
        </p>
        <Game/>
      </div>
    );
  }
}

export default App;
