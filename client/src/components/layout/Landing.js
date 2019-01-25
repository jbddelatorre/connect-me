import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Image from '../../img/bgimage.png';
import { Link } from 'react-router-dom';

const style = (theme) => ({
	landing: {
		background: `linear-gradient(
      rgba(0, 0, 0, 0.8), 
      rgba(0, 0, 0, 0.8)
    ), url(${Image}) `,
    width:'100%',
		/*backgroundPosition: 'center',*/
		backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
	},
	button: {
		marginLeft: theme.spacing.unit * 2,
		marginRight: theme.spacing.unit * 2,
    minWidth: '240px',
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    }
	},
  text: {
    marginTop: '24px',
    color: theme.palette.secondary.dark,
    fontFamily: 'Open Sans',
    fontSize: '24px'
  }
})

const Landing = (props) => {
	const { classes } = props;
	return (
		<div className = {classes.landing}>
        <Typography color="inherit" variant="h6" gutterBottom className={classes.text}>
            A social network platform for developers to share their skills and expertise.
        </Typography>
        {props.auth.isAuthenticated ?
              <div>
                <Button component={Link} 
                  to={{
                    pathname: '/profile',
                  }} 
                  variant="extendedFab" size="large"className={classes.button}>
                My Profile 
                </Button>
              </div>
              :
            <div>
              <Button component={Link} 
                to={{
                  pathname: '/signup',
                }} 
                variant="contained" size="large" className={classes.button}>
              Signup 
              </Button>
              <Button 
                component={Link} 
                to={{
                  pathname: '/login',
                }} 
                variant="contained" size="large" className={classes.button}>
                Login
            </Button>
            </div>
          }
		</div>
	)
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(style)(Landing));
