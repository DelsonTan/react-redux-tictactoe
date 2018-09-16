import {connect} from 'react-redux'
import {makeMove} from '../actions'
import Board from '../components/Board'

const mapStateToProps = (state) => ({
  squares: state.board.squares
})

const mapDispatchToProps = (dispatch) => ({
  makeMove: (index) => dispatch(makeMove(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
