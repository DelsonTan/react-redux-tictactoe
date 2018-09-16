export const makeMove = (rowIndex, columnIndex) => ({
  type: 'MAKE_MOVE',
  payload: {
    rowIndex,
    columnIndex
  }
})

export const undoMove = () => ({
  type: 'UNDO_MOVE'
})

export const redoMove = () => ({
  type: 'REDO_MOVE'
})
