import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SyncIcon from '@material-ui/icons/Sync';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: '5px 77px'
  },
}));

function LoadAccounts() {
  const classes = useStyles();

  return (
    <div>
      <Button
        startIcon={<SyncIcon/>}
        variant="contained"
        color="primary"
        className={classes.button}
        
      >
        Start
      </Button>
    </div>
  );
}

export default LoadAccounts