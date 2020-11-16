import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Parameters from './Parameters'

const useStyles = makeStyles({
  root: {
    background: 'white',
    border: 0,
    color: 'black',
    padding: 0,
    margin: 0, 
  },
  listitem: {
    padding: '0 16px',
    margin: 0,
  } 
});

function Main() {
  return (
    <div>
      <Parameters />
    </div>
  )
}


export default Main;




