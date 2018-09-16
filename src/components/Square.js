import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Mark = styled.button`
  font-size: 5em;
  height: 2em;
  width: 2em;
  padding: 0.5em;
  border: 0.1em #505c5f solid;
  text-align: center;
  background-color: black;
`

const Nought = styled(Mark)`
  color: #79ac5f;
`

const Cross = styled(Mark)`
  color: #e04c57;
`
const Square = ({onClick, val, index}) => {
  if (val === 'O') {
    return <Nought>O</Nought>
  } else if (val === 'X') {
    return <Cross>X</Cross>
  } else {
    return <Mark onClick={() => onClick(index)} />
  }
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default Square
