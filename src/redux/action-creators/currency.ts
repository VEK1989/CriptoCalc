import { Dispatch } from 'redux'
import { CurrencyAction, CurrencyActionTypes, CoinType } from '../../types/currency'
import axios from 'axios'


export const fetchCurrency = () => {
	return async (dispatch: Dispatch<CurrencyAction>) => {
		try {
			dispatch({ type: CurrencyActionTypes.SET_CURRENCY })
			const response = await axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD')
			const coins: CoinType[] = await response.data.Data.map((coin: any) => {
				const obj: CoinType = {
					name: coin.CoinInfo.Name,
					fullName: coin.CoinInfo.FullName,
					imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
					price: coin.RAW.USD.PRICE.toFixed(3),
					volume24Hour: coin.RAW.USD.VOLUME24HOUR.toFixed(2)
				}
				return obj
			})
			dispatch({ type: CurrencyActionTypes.SET_CURRENCY_SUCCESS, payload: coins })
		} catch (e) {
			dispatch({
				type: CurrencyActionTypes.SET_CURRENCY_ERROR,
				payload: 'Error while loading data'
			})
		}
	}
}