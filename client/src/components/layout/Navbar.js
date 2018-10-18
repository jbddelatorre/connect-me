import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import People from '@material-ui/icons/People';

import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  type: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});


const NavBar = (props) => {
  const { classes } = props;
  return (
    
      <AppBar position="absolute">
        <Toolbar variant="regular">
          <IconButton 
              component={Link}
              to={{
                pathname:'/'
              }}
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Menu">
            <People />
          </IconButton>
          <Typography color="inherit" variant="h4">
                  DevConn
          </Typography>
          <Button
            component={Link}
            to={{
              pathname:'/developers'
            }}
            className={classes.button}
            size="large"
            variant="outlined" 
            color="inherit">
                Find Developers
          </Button>
          <div className={classes.grow} />
          <div>
            <Button 
              variant="contained" 
              size="large" 
              color="primary"
              className={classes.button}>
              Sign Up
            </Button>
            <Button 
              size="large" 
              variant="contained"
              color="primary"
              className={classes.button}>
              Log In
              </Button>
          </div>
        </Toolbar>
      </AppBar>
    
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);