import React from 'react'
import styled from 'styled-components'

const Scoreboard = styled.div`
  color: #222;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 16rem;
  background-color: #505c5f;
  border: 1px solid #222;
  font-size: 24px;
`
const Cross = styled.span`
  color: #e04c57;
`

const Nought = styled.span`
  color: #79ac5f;
`
const Score = ({X, O}) => {
  return (
    <Scoreboard>
      <span>Score</span>
      <br />
      <Cross>X: {X}</Cross> | <Nought>O: {O} </Nought>
    </Scoreboard>
  )
}

export default Score
