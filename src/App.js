import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Board from './components/Board.js'
import Score from './components/Score.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic-Tac-Toe</h1>
        </header>
        <p className="App-intro">
          The unwinnable game{' '}
          <span role="img" aria-label="Smirk">
            😏
          </span>
        </p>
        <Board />
        <Score />
      </div>
    )
  }
}

export default App
