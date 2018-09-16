export const makeMove = (rowIndex, columnIndex) => ({
  type: 'MAKE_MOVE',
  payload: {
    rowIndex,
    columnIndex
  }
})
