import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';


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

export const Calc = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.calcBox}>
				<FormControl className={classes.currencyInput}>
					<TextField label="Value" />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={10}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className={classes.calcBox}>
				<FormControl className={classes.currencyInput}>
					<TextField label="Value" />
				</FormControl>
				<FormControl className={classes.currencyType}>
					<InputLabel id="demo-simple-select-helper-label">Сurrency</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={10}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>
			<Typography variant="h4" component="h2" gutterBottom>
				Result
			</Typography>
		</div>
	);
};