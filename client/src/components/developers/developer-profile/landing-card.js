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
	}
})

const LandingCard = (props) => {
	const {classes, img, name, job, company, social} = props;
	return (
		<Grid container className={classes.mB}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<Grid container justify="center">
						<Grid item xs={12}>
							<Grid container justify="center">
								<Avatar
								className={classNames(classes.avatar, classes.bigAvatar)}
								src=""
								alt="">
								IMAGE
								</Avatar>
							</Grid>	
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="h2">
				           		Name
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="body1">
				           		Job Desc
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="body1">
				           		Company
				        	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container justify="center">
								<div className={classes.icon}>
									<i className="fas fa-globe"></i>
								</div>
								<div className={classes.icon}>
									<i className="fab fa-twitter"></i>
								</div>
								<div className={classes.icon}>
									<i className="fab fa-facebook-f"></i>
								</div>
								<div className={classes.icon}>
									<i className="fab fa-linkedin-in"></i>
								</div>
								<div className={classes.icon}>
									<i className="fab fa-instagram"></i>
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
