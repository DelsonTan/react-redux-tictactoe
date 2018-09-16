const board = (
  state = {
    turn: 0,
    squares: ['', '', '', '', '', '', '', '', '']
  },
  action
) => {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const squares = state.squares.slice()
      if (state.turn % 2 !== 0) {
        squares[action.payload.index] = 'X'
      } else {
        squares[action.payload.index] = 'O'
      }
      const turn = state.turn + 1
      return {
        turn,
        squares
      }
    }
    default:
      return state
  }
}

export default board
