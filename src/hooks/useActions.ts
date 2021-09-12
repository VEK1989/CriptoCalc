import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CurrencyActionCreators from '../redux/action-creators/currency'


export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(CurrencyActionCreators, dispatch)
}