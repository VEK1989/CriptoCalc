import { currencyReducer } from './reducers/currencyReducer';
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { calculateReducer } from './reducers/calculateReducer';

const redusers = combineReducers({
	currency: currencyReducer,
	calculate: calculateReducer
})

export type RootState = ReturnType<typeof redusers>

const store = createStore(redusers, applyMiddleware(thunk))

export default store;