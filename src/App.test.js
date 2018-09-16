import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as actions from './actions'

describe('actions', () => {
  it('should create an action to undo', () => {
    const expectedAction = {
      type: 'UNDO_MOVE'
    }
    expect(actions.undoMove()).toEqual(expectedAction)
  })
  it('should create an action to redo', () => {
    const expectedAction = {
      type: 'REDO_MOVE'
    }
    expect(actions.redoMove()).toEqual(expectedAction)
  })
  it('should create an action to make a move on row 1 column 1', () => {
    const expectedAction = {
      type: 'MAKE_MOVE',
      payload: {
        rowIndex: 0,
        columnIndex: 0
      }
    }
    expect(actions.makeMove(0, 0)).toEqual(expectedAction)
  })
})
