import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from '@material-ui/core/CircularProgress';

import SpinnerStyle from "../../assets/jss/material-dashboard-react/components/spinnerStyle.jsx";

const CircularIndeterminate = (props) => {
    const {classes , ...rest} = props;
  return (
    <div /*className={classes.Spinner}*/style={{textAlign:"center"}}>
      <CircularProgress style={{margin:"30%"}} color="primary" />
    </div>
  );
}

export default withStyles(SpinnerStyle)(CircularIndeterminate);