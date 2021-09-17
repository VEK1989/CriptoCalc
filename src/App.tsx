import { Calc } from './components/Calc/Calc';
import { CryptoTable } from './components/Table/CryptoTable';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
      backgroundColor: '#a9a9a9'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <CryptoTable />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Calc />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
