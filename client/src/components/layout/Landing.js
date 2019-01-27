import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Image from '../../img/bgimage.png';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

const style = (theme) => ({
	landing: {
		background: `linear-gradient(
      rgba(0, 0, 0, 0.8), 
      rgba(0, 0, 0, 0.8)
    ), url(${Image}) `,
    width:'100%',
		/*backgroundPosition: 'center',*/
		backgroundSize: 'cover',
	},
	button: {
		marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
		marginTop: theme.spacing.unit * 2,
    minWidth: '240px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '150px',
    },
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    }
	},
  text: {
    marginTop: '24px',
    color: theme.palette.secondary.dark,
    fontFamily: 'Open Sans',
    fontSize: '24px',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  title: {
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    color: 'white',
    fontFamily: 'Open Sans',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  h3:{
    marginBottom:'-12px',
    color:'#ddd',
  },
  buttoncontainer: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'flex-start'
    },
  }
})

const Landing = (props) => {
	const { classes } = props;
	return (
		<Grid container justfiy="center" className = {classes.landing}>
        <Grid container item direction="column" justify="flex-end" xs={12}>
          <Typography classes={{root: classes.h3}} align="center" color="inherit" variant="h3" gutterBottom className={classes.title}>
            ConnectMe
          </Typography>
          <Typography align="center" color="inherit" variant="h6" gutterBottom className={classes.text}>
            A social network platform for developers to share their skills and expertise.
          </Typography>
        </Grid>

        <Grid item xs={12} container className = {classes.buttoncontainer}>
          {props.auth.isAuthenticated ?
                <Grid item xs={12}>
                  <Button component={Link} 
                    to={{
                      pathname: '/profile',
                    }} 
                    variant="extendedFab" size="large"className={classes.button}>
                  My Profile 
                  </Button>
                </Grid>
              :
            <Fragment>
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
            </Fragment>
          }
        </Grid>

		</Grid>
	)
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(style)(Landing));
