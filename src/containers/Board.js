import {connect} from 'react-redux'
import {makeMove} from '../actions'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  squares: state.board.squares
})

const mapDispatchToProps = (dispatch) => ({
  makeMove: (rowIndex, columnIndex) => dispatch(makeMove(rowIndex, columnIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
