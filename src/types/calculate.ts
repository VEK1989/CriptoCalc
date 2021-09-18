export interface CalculateState {
	coinFirst: string,
	coinSecond: string,
	valueFirst: number,
	valueSecond: number
}

export interface ChangeCoinValueType {
	selectValue: string
}

export enum CalculateActionTypes {
	SET_COIN_FIRST = 'SET_COIN_FIRST',
	SET_COIN_SECOND = 'SET_COIN_SECOND',
	SET_VALUE_FIRST = 'SET_VALUE_FIRST',
	SET_VALUE_SECOND = 'SET_VALUE_SECOND'
}

interface SetCoinFirstAction {
	type: CalculateActionTypes.SET_COIN_FIRST,
	payload: string
}

interface SetCoinSecondAction {
	type: CalculateActionTypes.SET_COIN_SECOND,
	payload: string
}

interface SetValueFirstAction {
	type: CalculateActionTypes.SET_VALUE_FIRST,
	payload: number
}

interface SetValueSecondAction {
	type: CalculateActionTypes.SET_VALUE_SECOND,
	payload: number
}

export type CalculateAction = SetCoinFirstAction | SetCoinSecondAction | SetValueFirstAction | SetValueSecondAction