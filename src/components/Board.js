import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const renderSquare = (val, rowIndex, columnIndex, clickFunc) => {
  return (
    <Square
      val={val}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
      onClick={clickFunc}
    />
  )
}

const Board = ({squares, makeMove}) => (
  <div className="Board">
    <div>
      {renderSquare(squares[0][0], 0, 0, makeMove)}
      {renderSquare(squares[0][1], 0, 1, makeMove)}
      {renderSquare(squares[0][2], 0, 2, makeMove)}
    </div>
    <div>
      {renderSquare(squares[1][0], 1, 0, makeMove)}
      {renderSquare(squares[1][1], 1, 1, makeMove)}
      {renderSquare(squares[1][2], 1, 2, makeMove)}
    </div>
    <div>
      {renderSquare(squares[2][0], 2, 0, makeMove)}
      {renderSquare(squares[2][1], 2, 1, makeMove)}
      {renderSquare(squares[2][2], 2, 2, makeMove)}
    </div>
  </div>
)

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired
}

export default Board
