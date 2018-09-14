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
    if (this.props.val === 'O') {
      return <Nought>O</Nought>
    } else if (this.props.val === 'X') {
      return <Cross>X</Cross>
    } else {
      return <Mark onClick={() => this.props.onClick(this.props.index)} />
    }
  }
}

export default Square
