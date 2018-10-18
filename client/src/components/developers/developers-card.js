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

const styles = (theme) => ({
	card: {
		width:'100%',
		paddingTop: theme.spacing.unit*4,
		paddingBottom: theme.spacing.unit*4,
		paddingRight: theme.spacing.unit*2,
		paddingLeft: theme.spacing.unit*2,
	},
	bigAvatar: {
		width:100,
		height:100
	},
	avatar: {
		margin:10
	}
})

const DeveloperCard = (props) => {
	const { classes } = props
	return (
		<Grid container justify="center">
			<Grid item xs={8}>
				<Card className={classes.card}>
					<Grid container>
						<Grid item xs={2}>
							<Avatar 
								className={classNames(classes.avatar, classes.bigAvatar)}
								src=""
								alt="">
								IMAGE
							</Avatar>
						</Grid>
						<Grid item xs={5}>
							<Typography align="left" color="inherit" variant="h5">
				           		Name
				          	</Typography>
				          	<Typography align="left" color="inherit" variant="body1">
				           		Work
				          	</Typography>
				          	<Typography align="left" color="inherit" variant="body1">
				           		Location
				          	</Typography>
						</Grid>
						<Grid item xs={5}>
							<Typography align="left" color="inherit" variant="h5">
				           		Skills
				          	</Typography>
				          	<List>
						        <ListItem>
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