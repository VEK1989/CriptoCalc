import { CalculateState, CalculateAction, CalculateActionTypes } from './../../types/calculate';


const initialState: CalculateState = {
	coinFirst: {
		name: 'BTC',
		fullName: 'bitcoin',
		imageUrl: '',
		price: 0,
		volume24Hour: 0
	},
	coinSecond: {
		name: 'USD',
		fullName: 'dollar',
		imageUrl: '',
		price: 1,
		volume24Hour: 0
	},
	valueFirst: 0,
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