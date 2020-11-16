import React from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';


  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(0),
      marginRight: 20,
    },
  }));
  

function Thread() {
    const classes = useStyles();
  
    return (
        <form className={classes.root} noValidate>
        <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Thead"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
      </form>
    );
    }

    export default Thread;