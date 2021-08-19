import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'

const redusers = combineReducers({
})

const store = createStore(redusers, applyMiddleware(thunk))

export default store;