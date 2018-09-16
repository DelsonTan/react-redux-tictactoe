import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const renderSquare = (val, rowIndex, columnIndex, clickFunc) => {
  return (
    <Square
      key={parseInt('' + rowIndex + columnIndex, 10)}
      val={val}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
      onClick={clickFunc}
    />
  )
}

const renderRow = (squares, rowIndex, clickFunc) => {
  const squareRow = []
  for (let i = 0; i < 3; i++) {
    squareRow.push(renderSquare(squares[rowIndex][i], rowIndex, i, clickFunc))
  }
  return squareRow
}

const Board = ({squares, makeMove}) => (
  <div className="Board">
    <div>{renderRow(squares, 0, makeMove)}</div>
    <div>{renderRow(squares, 1, makeMove)}</div>
    <div>{renderRow(squares, 2, makeMove)}</div>
  </div>
)

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired
}

export default Board
