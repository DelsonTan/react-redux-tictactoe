import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Board from './components/Board.js'
import Score from './components/Score.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      turn: 1,
      squares: [null, null, null, null, null, null, null, null, null]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    if (this.state.turn % 2 !== 0) {
      squares[i] = 'X'
    } else {
      squares[i] = 'O'
    }
    this.setState({
      turn: this.state.turn + 1,
      squares: squares
    })
  }

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
        <Board squares={this.state.squares} onClick={this.handleClick} />
        <Score />
      </div>
    )
  }
}

export default App
