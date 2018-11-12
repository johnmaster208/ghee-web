import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import ISA from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk, ISA(), logger]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store