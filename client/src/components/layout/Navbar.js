import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Avatar from '@material-ui/core/Avatar';

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
import MediaQuery from 'react-responsive';
import MenuButton from './MenuButton'

const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  title:{
    display:'inline-block',
    [theme.breakpoints.down('sm')]: {
      display:'none !important'
    },
  },
  type: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.down('lg')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  header: {
    fontFamily:'Montserrat',
  },
});

const style = {
  avatar: {
    marginRight:12,
    width:25,
    height:25
  }
}

class NavBar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    window.location.href = '/'
  }

  render() {
    const { classes } = this.props;
    const logout =  
                <Fragment>
                <MediaQuery query="(min-device-width:1000px)">
                  <Button
                component={Link}
                to={{
                  pathname:'/posts'
                }}
                size="large" 
                variant="contained"
                color="primary"
                className={classes.button}>
                Post Feed
                </Button>
                <Button
                component={Link}
                to={{
                  pathname:'/profile'
                }}
                size="large" 
                variant="contained"
                color="primary"
                className={classes.button}>
                My Profile
                </Button>
                <Button
                onClick={ this.onLogoutClick }
                size="large" 
                variant="contained"
                color="primary"
                className={classes.button}>
                <Avatar 
                  alt="Avatar" 
                  src={this.props.auth.user.avatar}
                  style={style.avatar}/>
                Log Out
                </Button>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1001px)">
                  <MenuButton signedIn={true} handleLogout={this.onLogoutClick}/>  
                </MediaQuery>
                </Fragment>
    const login = 
              <Fragment>
                <MediaQuery query="(min-device-width:1000px)">
                <Button
                component={Link}
                to={{
                  pathname:'/signup'
                }} 
                size="large" 
                variant="contained"
                color="primary"
                className={classes.button}>
                Sign up
                </Button>
                <Button
                component={Link}
                to={{
                  pathname:'/login'
                }} 
                size="large" 
                variant="contained"
                color="primary"
                className={classes.button}>
                Log In
                </Button>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1001px)">
                  <MenuButton signedIn={false}/>  
                </MediaQuery>           
              </Fragment>
    return(
      <AppBar position="absolute">
        <Toolbar variant="dense">
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
          <Typography color="inherit" variant="h3" classes={{root:classes.title}}>
            ConnectMe
          </Typography>

          <div className={classes.grow} />
          <div style={{display:'flex', flexWrap:'nowrap'}}>
          <Button
          component={Link}
          to={{
            pathname:'/developers'
          }}
          className={classes.button}
          size="large" 
          color="secondary">
          Find Developers
          </Button>
          {this.props.auth.isAuthenticated ? logout:login}
          </div>
        </Toolbar>
      </AppBar>
      );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withStyles(styles)(NavBar));