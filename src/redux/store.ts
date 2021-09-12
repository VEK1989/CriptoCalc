import { currencyReducer } from './reducers/currencyReducer';
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'

const redusers = combineReducers({
	currency: currencyReducer,
})

export type RootState = ReturnType<typeof redusers>

const store = createStore(redusers, applyMiddleware(thunk))

export default store;