import {connect} from 'react-redux'
import {makeMove, undoMove, redoMove} from '../actions'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  squares: state.board.present
})

const mapDispatchToProps = (dispatch) => ({
  makeMove: (rowIndex, columnIndex) =>
    dispatch(makeMove(rowIndex, columnIndex)),
  undoMove: () => dispatch(undoMove()),
  redoMove: () => dispatch(redoMove())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
