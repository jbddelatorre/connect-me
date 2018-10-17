import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  type: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2
  }
});


const NavBar = (props) => {
  const { classes } = props;
  return (
    
      <AppBar>
        <Toolbar>
            <Typography style={{textDecoration: 'none'}}component={Link} to='/' className={classes.type} color="inherit" variant="h5" gutterBottom>
              DevConnector
            </Typography>
          <Typography variant="h6" color="inherit" gutterBottom>
            Developers
          </Typography>
        </Toolbar>
      </AppBar>
    
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);