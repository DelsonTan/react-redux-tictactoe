import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin-top: 1rem;
  font-size: 24px;
  width: 6em;
  background-color: #222;
  color: #d5c5c8;
  border: 0.1em #505c5f solid;
`

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

const Board = ({squares, makeMove, undoMove, redoMove}) => (
  <div className="Board">
    <div>{renderRow(squares, 0, makeMove)}</div>
    <div>{renderRow(squares, 1, makeMove)}</div>
    <div>{renderRow(squares, 2, makeMove)}</div>
    <StyledButton onClick={undoMove}>Undo</StyledButton>
    <StyledButton onClick={redoMove}>Redo</StyledButton>
  </div>
)

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  makeMove: PropTypes.func.isRequired
}

export default Board
