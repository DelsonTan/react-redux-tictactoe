import React, {Component} from 'react'
import logo from './logo.svg'
import Board from './containers/Board'
import Score from './containers/Score'
import Notification from './components/Notification'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
`

const Logo = styled.img`
  height: 80px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic-Tac-Toe</h1>
        </Header>
        <Board />
        <Notification />
        <Score />
      </div>
    )
  }
}

export default App
