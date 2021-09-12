import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
const useStyles = makeStyles({
	table: {
		minWidth: 500,
	},
	currencyImg: {
		width: 20,
		height: 20,
		borderRadius: 40
	}
});

export const CryptoTable: React.FC = () => {
	const classes = useStyles();

	const { currency, error, loading } = useTypedSelector(state => state.currency)

	const { fetchCurrency } = useActions()

	useEffect(() => {
		fetchCurrency()
	}, [])

	if (loading) {
		return <h2>Loading...</h2>
	}

	if (error) {
		return <h2>{error}</h2>
	}

	return (
		<div>
			<TableContainer >
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell align="left">Ticker</TableCell>
							<TableCell align="left">Full Name</TableCell>
							<TableCell align="left">Price USD</TableCell>
							<TableCell align="left">Volume 24 hour</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{currency.map((coin) => (
							<TableRow key={coin.name}>
								<TableCell component="th" scope="row">
									<img src={coin.imageUrl} alt="icon" height='20px' width='20px' className={classes.currencyImg} />
								</TableCell>
								<TableCell align="left">{coin.name}</TableCell>
								<TableCell align="left">{coin.fullName}</TableCell>
								<TableCell align="left">${coin.price}</TableCell>
								<TableCell align="left">${coin.volume24Hour}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};