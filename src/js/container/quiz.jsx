import * as stateActions from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QuizComponent from '../components/quiz/quiz'

const makeMapStateToProps = () => {
      const mapStateToProps = (state, props) => {
        return {
            errorMessage:state.mainReducer.errorMessage,
            isFetching:state.mainReducer.isFetching,
            quiz: state.mainReducer.quiz,
            isModalOpen: state.mainReducer.isModalOpen
        }
  }
 return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(stateActions, dispatch),
    }
}
const QuizContainer =connect(makeMapStateToProps, mapDispatchToProps)(QuizComponent)
export default QuizContainer
