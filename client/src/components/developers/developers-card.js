import React from 'react';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = (theme) => {
	console.log()
	return {
		card: {
			width:'100%',
			paddingTop: theme.spacing.unit*4,
			paddingBottom: theme.spacing.unit*4,
			paddingRight: theme.spacing.unit*2,
			paddingLeft: theme.spacing.unit*2,
			backgroundColor:'#f8f9fa'
		},
		bigAvatar: {
			width:'80px',
			height:'80px'
		},
		avatar: {
			margin:10
		},
		button: {
			marginTop: theme.spacing.unit * 2,
			backgroundColor: theme.palette.secondary.light,
			'&:hover': {
				backgroundColor:theme.palette.secondary.main
			}
		},
		list: {
			backgroundColor:'white',
			borderRadius:8,
			padding:0,
			borderWidth:1,
			borderStyle:'solid',
			borderColor:'rgba(0,0,0,0.1)'
		},
		listitem: {
			padding:7,
			borderWidth:1,
			borderStyle:'solid',
			borderColor:'rgba(0,0,0,0.08)'
		},
		subhead: {
			marginBottom: theme.spacing.unit*2
		}
	}
}

const DeveloperCard = (props) => {
	const { classes } = props

	return (
		<Grid container justify="center">
			<Grid item xs={8}>
				<Card className={classes.card}>
					<Grid container spacing={24}>
						<Grid item xs={2}>
							<Grid container justify="center">
								<Avatar 
									className={classNames(classes.avatar, classes.bigAvatar)}
									src=""
									alt="">
									IMAGE
								</Avatar>
							</Grid>
						</Grid>
						<Grid item xs={5}>
							<Typography className={classes.subhead} align="left" color="inherit" variant="h5">
				           		Name
				          	</Typography>
				          	<Typography align="left" color="inherit" variant="body1">
				           		Work
				          	</Typography>
				          	<Typography align="left" color="inherit" variant="body1">
				           		Location
				          	</Typography>
				          	<Grid container justify="flex-start">
				          		<Grid item xs={5}>
				          			<Button
				          				className={classes.button}
										fullWidth
						        		size="small"
						        		variant="contained" 
						        		color="secondary">
				        				View Profile
				      				</Button>
				          		</Grid>
				          	</Grid>
						</Grid>
						<Grid item xs={5}>
							<Typography className={classes.subhead} align="left" color="inherit" variant="h5">
				           		Skills
				          	</Typography>
				          	<List className={classes.list}>
						        <ListItem className={classes.listitem}>
						          <Avatar>
						            <Build />
						          </Avatar>
						          <ListItemText primary="Specific Skill" />
						        </ListItem>
						        <ListItem className={classes.listitem}>
						          <Avatar>
						            <Build />
						          </Avatar>
						          <ListItemText primary="Specific Skill" />
						        </ListItem>
						    </List>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(DeveloperCard);