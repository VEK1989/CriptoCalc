import { CoinType } from "./currency";

export interface CalculateState {
	coinFirst: CoinType,
	coinSecond: CoinType,
	valueFirst: number,
	valueSecond: number
}

export enum CalculateActionTypes {
	SET_COIN_FIRST = 'SET_COIN_FIRST',
	SET_COIN_SECOND = 'SET_COIN_SECOND',
	SET_VALUE_FIRST = 'SET_VALUE_FIRST',
	SET_VALUE_SECOND = 'SET_VALUE_SECOND'
}

interface SetCoinFirstAction {
	type: CalculateActionTypes.SET_COIN_FIRST,
	payload: CoinType
}

interface SetCoinSecondAction {
	type: CalculateActionTypes.SET_COIN_SECOND,
	payload: CoinType
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