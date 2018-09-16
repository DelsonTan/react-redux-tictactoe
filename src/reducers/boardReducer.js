const initialState = {
  past: [],
  present: [['', '', ''], ['', '', ''], ['', '', '']],
  future: []
}

const board = (state = initialState, action) => {
  const {past, present, future} = state
  // TODO: undo and redo feature as prescribed in https://redux.js.org/recipes/implementingundohistory
  switch (action.type) {
    case 'UNDO_MOVE': {
      // no past moves
      if (past.length === 0) {
        return state
      }
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      }
    }
    case 'REDO_MOVE': {
      // no future moves
      if (future.length === 0) {
        return state
      }
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture
      }
    }
    case 'MAKE_MOVE': {
      console.log('past:', past)
      // shallow copy of array of arrays one level deep
      const newPresent = present.map((arr) => {
        return arr.slice()
      })
      if (state.past.length % 2 !== 0) {
        newPresent[action.payload.rowIndex][action.payload.columnIndex] = 'X'
      } else {
        newPresent[action.payload.rowIndex][action.payload.columnIndex] = 'O'
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: []
      }
    }
    case 'RESTART_GAME': {
      return initialState
    }
    default:
      return state
  }
}

export default board
