import React, {Component} from 'react'

import Board from './containers/Board'
import Score from './components/Score'
import Notification from './components/Notification'

class App extends Component {
  render() {
    return (
      <center className="App">
        <Board />
        <Notification />
        <Score />
      </center>
    )
  }
}

export default App
