import {connect} from 'react-redux'
import Score from '../components/Score'

const mapStateToProps = (state) => ({
  X: state.score.X,
  O: state.score.O
})

export default connect(mapStateToProps)(Score)
