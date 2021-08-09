import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

type CoinType = {
	name: string,
	fullName: string,
	imageUrl: string,
	price: number,
	volume24Hour: number
}

export const CryptoTable = () => {
	const classes = useStyles();

	const [allCoins, setAllCoins] = useState<CoinType[]>([])

	useEffect(() => {
		axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD')
			.then(({ data }) => {
				const coins: CoinType[] = data.Data.map((coin: any) => {
					const obj: CoinType = {
						name: coin.CoinInfo.Name,
						fullName: coin.CoinInfo.FullName,
						imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
						price: coin.RAW.USD.PRICE.toFixed(3),
						volume24Hour: coin.RAW.USD.VOLUME24HOUR.toFixed(2)
					}
					return obj
				})
				setAllCoins(coins)
			})
	}, [])
	return (
		<div>
			<TableContainer >
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Full Name</TableCell>
							<TableCell align="left">Price</TableCell>
							<TableCell align="left">Volume 24 hour</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allCoins.map((coin) => (
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