import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CalculateAction } from '../../types/calculate'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { setCoinFirst, setCoinSecond, setValueFirst, setValueSecond } from '../../redux/action-creators/calculate'
import React, { useEffect } from 'react'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		calcBox: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: 20,
			marginBottom: 20
		},
		currencyInput: {
			minWidth: 'calc(70% - 10px)',
			margin: 10
		},
		currencyType: {
			minWidth: '30%'
		}
	}),
);

export const Calc: React.FC = () => {
	const classes = useStyles()

	const dispatch: Dispatch<CalculateAction> = useDispatch()

	const { currency, error, loading } = useTypedSelector(state => state.currency)
	const { coinFirst, coinSecond, valueFirst, valueSecond } = useTypedSelector(state => state.calculate)

	const selectSecondCoin = (coin: any) => {
		dispatch(setCoinSecond(coin))
	}

	const selectFirstCoin = (coin: any) => {
		dispatch(setCoinFirst(coin))
	}

	const convertCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setValueFirst(Number(e.target.value)))
	}

	useEffect(() => {
		const firstPrice = currency.filter(item => item.name === coinFirst)
		const secondPrice = currency.filter(item => item.name === coinSecond)
		const convertValue = valueFirst * ((!firstPrice[0] ? 1 : firstPrice[0].price) / (!secondPrice[0] ? 1 : secondPrice[0].price))
		dispatch(setValueSecond(convertValue))
	}, [valueFirst, coinSecond, valueSecond, coinFirst])


	if (loading) {
		return <h2>Loading...</h2>
	}

	if (error) {
		return <h2>{error}</h2>
	}

	return (
		<div>
			<div className={classes.calcBox}>
				<FormControl className={classes.currencyInput}>
					<TextField value={valueFirst} label="Value" onChange={convertCoin} />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select value={coinFirst} onChange={(e) => selectFirstCoin(e.target.value)}>
						{
							currency.map((coin) => {
								return <MenuItem key={coin.name} value={coin.name} >{coin.name}</MenuItem>
							})
						}
					</Select>
				</FormControl>
			</div>
			<div className={classes.calcBox}>
				<FormControl className={classes.currencyInput}>
					<TextField disabled label="Value" value={valueSecond} />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select onChange={(e) => selectSecondCoin(e.target.value)} value={coinSecond}>
						<MenuItem value='USD'>
							USD
						</MenuItem>
						{
							currency.map((coin) => {
								return <MenuItem key={coin.name} value={coin.name}>{coin.name}</MenuItem>
							})
						}
					</Select>
				</FormControl>
			</div>
		</div>
	);
};