import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'

const middleware = applyMiddleware()

export default createStore(reducer, middleware)
