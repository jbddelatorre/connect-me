import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Image from '../../img/showcase.jpg';
import { Link } from 'react-router-dom';

const style = (theme) => ({
	landing: {
		backgroundImage: `url(${Image})`,
		minHeight: '100vh',
		backgroundPosition: 'center',
		backgroundRepeat: 'norepeat',
		backgroundSize: 'cover',
	},
	content: {
    	height: '100vh',
   		width: '100%',
    	backgroundColor: 'rgba(0, 0, 0, 0.5)',
    	color: 'white',
    	display:'flex',
    	justifyContent: 'center'
  	},
  	center: {
		paddingTop: theme.spacing.unit*20,
		display: 'flex',
		flexDirection:'column',
		textAlign: 'center'
  	},
  	button: {
  		marginLeft: theme.spacing.unit * 2,
  		marginRight: theme.spacing.unit * 2
  	}
})

const Landing = (props) => {
	const { classes } = props;
	return (
		<div className = {classes.landing}>
			<div className = {classes.content}>
				<div className = {classes.center}>
					<Typography style={{marginBottom: 20}}color="inherit" variant="h1">
           				Developer Connector
          			</Typography>
          			<Typography color="inherit" variant="h6" gutterBottom>
           				Create a developer profile/portfolio, share posts and get help from other developers.
          			</Typography>
          			<div>
          				<Button component={Link} 
	      						to={{
      								pathname: '/signup',
      							}} 
      							variant="extendedFab" size="large" color="primary" className={classes.button}>
        					Signup 
      					</Button>
	      					<Button 
	      						component={Link} 
	      						to={{
      								pathname: '/login',
      							}} 
      							variant="extendedFab" size="large" color="secondary"className={classes.button}>
	        					Login
	      				</Button>
          			</div>
				</div>
			</div>
		</div>
	)
};

export default withStyles(style)(Landing);
