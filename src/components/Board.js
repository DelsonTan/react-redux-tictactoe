import React, {Component} from 'react'
import Square from './Square'

class Board extends Component {
  renderSquare() {
    return <Square />
  }

  render() {
    return (
      <div className="Board">
        Board!
        <div>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
        <div>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </div>
      </div>
    )
  }
}

export default Board
