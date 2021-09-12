export type CoinType = {
	name: string,
	fullName: string,
	imageUrl: string,
	price: number,
	volume24Hour: number
}

export interface CurrencyState {
	currency: CoinType[];
	loading: boolean;
	error: null | string;
}

export enum CurrencyActionTypes {
	SET_CURRENCY = 'SET_CURRENCY',
	SET_CURRENCY_SUCCESS = 'SET_CURRENCY_SUCCESS',
	SET_CURRENCY_ERROR = 'SET_CURRENCY_ERROR'
}

interface SetCurrencyAction {
	type: CurrencyActionTypes.SET_CURRENCY
}

interface SetCurrencySuccessAction {
	type: CurrencyActionTypes.SET_CURRENCY_SUCCESS,
	payload: CoinType[]
}

interface SetCurrencyErrorAction {
	type: CurrencyActionTypes.SET_CURRENCY_ERROR,
	payload: string
}

export type CurrencyAction = SetCurrencyAction | SetCurrencySuccessAction | SetCurrencyErrorAction