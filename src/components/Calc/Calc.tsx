import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { useTypedSelector } from '../../hooks/useTypedSelector'

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
	const { currency, error, loading } = useTypedSelector(state => state.currency)
	const { coinFirst, coinSecond, valueFirst, valueSecond } = useTypedSelector(state => state.calculate)

	const classes = useStyles()

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
					<TextField label="Value" />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select value={coinFirst.name}>
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
					<TextField label="Value" />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select value={coinSecond.name}>
						<MenuItem value={coinSecond.name}>
							<em>{coinSecond.name}</em>
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