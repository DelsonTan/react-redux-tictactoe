export default function reducer(
  state = {
    turn: 1,
    squares: [null, null, null, null, null, null, null, null, null]
  },
  action
) {
  if (action.type == 'MARK_NOUGHT') {
    return {...state, turn: state.turn + 1}
  }
}
