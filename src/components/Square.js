import React, {Component} from 'react'
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

class Square extends Component {
  render() {
    const rand = Math.random()
    if (rand <= 0.33) {
      return <Nought>O</Nought>
    } else if (rand > 0.33 && rand <= 0.66) {
      return <Cross>X</Cross>
    } else {
      return <Mark />
    }
  }
}

export default Square
