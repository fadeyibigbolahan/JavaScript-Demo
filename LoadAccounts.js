import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: '5px 37px'
  },
}));

function LoadAccounts() {

  const classes = useStyles();

  return (
    <form>
      <Button
        startIcon={<CloudUploadIcon/>}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Load Accounts
      </Button>
    </form>
  );
}

export default LoadAccounts