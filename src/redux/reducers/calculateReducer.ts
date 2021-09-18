import { CalculateState, CalculateAction, CalculateActionTypes } from './../../types/calculate';


const initialState: CalculateState = {
	coinFirst: 'BTC',
	coinSecond: 'USD',
	valueFirst: 1,
	valueSecond: 0
}

export const calculateReducer = (state = initialState, action: CalculateAction): CalculateState => {
	switch (action.type) {
		case CalculateActionTypes.SET_COIN_FIRST:
			return {
				...state,
				coinFirst: action.payload
			}

		case CalculateActionTypes.SET_COIN_SECOND:
			return {
				...state,
				coinSecond: action.payload
			}

		case CalculateActionTypes.SET_VALUE_FIRST:
			return {
				...state,
				valueFirst: action.payload
			}

		case CalculateActionTypes.SET_VALUE_SECOND:
			return {
				...state,
				valueSecond: action.payload
			}

		default:
			return state
	}
}