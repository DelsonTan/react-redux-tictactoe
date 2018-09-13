import React, {Component} from 'react'
import Square from './Square'

class Board extends Component {
  renderSquare(val) {
    return <Square val={val} />
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
