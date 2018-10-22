import React from 'react';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = (theme) => ({
	bigAvatar: {
			width:'150px',
			height:'150px'
		},
	avatar: {
		margin:10
	},
	card: {
		marginTop: theme.spacing.unit * 4,
		paddingTop: theme.spacing.unit*4,
		paddingBottom: theme.spacing.unit*4,
		backgroundColor: theme.palette.primary.dark,
		color: 'white'
	},
	labels: {
		marginBottom: theme.spacing.unit*2
	},
	icon: {
		marginLeft:10,
		marginRight:10,
		fontSize:25
	},
	mB: {
		marginBottom: 30
	},
	link: {
		color:'white',
	}
})

const LandingCard = (props) => {
	const {classes, img, name, job, company, social, website} = props;
	return (
		<Grid container className={classes.mB}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<Grid container justify="center">
						<Grid item xs={12}>
							<Grid container justify="center">
								<Avatar
								className={classNames(classes.avatar, classes.bigAvatar)}
								src={img}
								alt="Profile Image">
								
								</Avatar>
							</Grid>	
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="h2">
				           		{name}
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="body1">
				           		{job}
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="body1">
				           		{company}
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container justify="center">
								<div className={classes.icon}>
									<a className={ classes.link }href={'https://'+website} target="_blank" ><i className="fas fa-globe"></i></a>
								</div>
								<div className={classes.icon}>
									<a className={ classes.link }href={'https://'+social.twitter} target="_blank" ><i className="fab fa-twitter"></i></a>
								</div>
								<div className={classes.icon}>
									<a className={ classes.link }href={'https://'+social.facebook} target="_blank" ><i className="fab fa-facebook-f"></i></a>
								</div>
								<div className={classes.icon}>
									<a className={ classes.link }href={'https://'+social.linkedin} target="_blank" ><i className="fab fa-linkedin-in"></i></a>
								</div>
								<div className={classes.icon}>
									<a className={ classes.link }href={'https://'+social.instagram} target="_blank" ><i className="fab fa-instagram"></i></a>
								</div>
							</Grid>
						</Grid>        
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(LandingCard);
