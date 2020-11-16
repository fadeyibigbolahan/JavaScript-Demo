import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: 0
  },
}));

function Footer() {
  const classes = useStyles();

    return (
      <div>
      <Box className={classes.button} display="flex" >
        <Box flexGrow={2}>
          <h6>version: 1</h6>
        </Box>
        <Box>
          <h6>Under Development</h6>
        </Box>
      </Box>
      </div>
    );
  }
  
  export default Footer;
  