import { CalculateAction, CalculateActionTypes } from './../../types/calculate'

export const setCoinFirst = (coin: string): CalculateAction => ({ type: CalculateActionTypes.SET_COIN_FIRST, payload: coin })
export const setCoinSecond = (coin: string): CalculateAction => ({ type: CalculateActionTypes.SET_COIN_SECOND, payload: coin })
export const setValueFirst = (value: number): CalculateAction => ({ type: CalculateActionTypes.SET_VALUE_FIRST, payload: value })
export const setValueSecond = (value: number): CalculateAction => ({ type: CalculateActionTypes.SET_VALUE_SECOND, payload: value })