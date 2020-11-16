import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Proxies = [
  {
    value: '--NONE--',
  },
  {
    value: 'HTTP/HTTPS',
  },
  {
    value: 'SOCK',
  },
  {
    value: 'SOCK4',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      marginLeft: 55,
      width: '25ch',
    },
  },
}));

function Proxy() {
    const classes = useStyles();
    const [Proxy, setProxy] = React.useState();
    const handleChange = (event) => {
    setProxy(event.target.value);
  };

  
    return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-select-currency-native"
          select
          label="Proxies"
          value={Proxy}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select a Proxy"
          variant="outlined"
        >
          {Proxies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </form>
    );
    }

    export default Proxy;