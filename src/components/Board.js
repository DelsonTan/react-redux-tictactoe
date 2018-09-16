import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const renderSquare = (val, index, clickFunc) => {
  return <Square val={val} index={index} onClick={clickFunc} />
}

const Board = ({squares, makeMove}) => (
  <div className="Board">
    <div>
      {renderSquare(squares[0], 0, makeMove)}
      {renderSquare(squares[1], 1, makeMove)}
      {renderSquare(squares[2], 2, makeMove)}
    </div>
    <div>
      {renderSquare(squares[3], 3, makeMove)}
      {renderSquare(squares[4], 4, makeMove)}
      {renderSquare(squares[5], 5, makeMove)}
    </div>
    <div>
      {renderSquare(squares[6], 6, makeMove)}
      {renderSquare(squares[7], 7, makeMove)}
      {renderSquare(squares[8], 8, makeMove)}
    </div>
  </div>
)

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired
}

export default Board
