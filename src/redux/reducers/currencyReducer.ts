import { CurrencyAction, CurrencyActionTypes, CurrencyState } from '../../types/currency'

const initialState: CurrencyState = {
	currency: [],
	loading: false,
	error: null
}

export const currencyReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
	switch (action.type) {
		case CurrencyActionTypes.SET_CURRENCY:
			return {
				...state,
				loading: true,
				error: null,
				currency: []
			}
		case CurrencyActionTypes.SET_CURRENCY_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				currency: action.payload
			}
		case CurrencyActionTypes.SET_CURRENCY_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				currency: []
			}

		default:
			return state
	}
}