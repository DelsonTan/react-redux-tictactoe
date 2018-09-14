import React, {Component} from 'react'
import Square from './Square'

class Board extends Component {
  // '': empty square
  // 'O': Nought
  // 'X': Cross
  renderSquare(val, index) {
    return <Square val={val} index={index} onClick={this.props.onClick} />
  }

  render() {
    return (
      <div className="Board">
        Board!
        <div>
          {this.renderSquare(this.props.squares[0], 0)}
          {this.renderSquare(this.props.squares[1], 1)}
          {this.renderSquare(this.props.squares[2], 2)}
        </div>
        <div>
          {this.renderSquare(this.props.squares[3], 3)}
          {this.renderSquare(this.props.squares[4], 4)}
          {this.renderSquare(this.props.squares[5], 5)}
        </div>
        <div>
          {this.renderSquare(this.props.squares[6], 6)}
          {this.renderSquare(this.props.squares[7], 7)}
          {this.renderSquare(this.props.squares[8], 8)}
        </div>
      </div>
    )
  }
}

export default Board
