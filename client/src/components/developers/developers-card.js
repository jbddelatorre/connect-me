import React from 'react';
import { Link } from 'react-router-dom';

//Component
import ListItemSkills from './developer-skills-list-item';

//Material UI
import ExpansionPanel from './expansion-panel'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import Avatar from '@material-ui/core/Avatar';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = (theme) => {
	return {
		card: {
			paddingTop: theme.spacing.unit*4,
			paddingBottom: theme.spacing.unit*4,
			paddingRight: theme.spacing.unit*2,
			paddingLeft: theme.spacing.unit*2,
			backgroundColor:'#f8f9fa',
			marginTop: theme.spacing.unit*4,
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
			},
			maxWidth:'250px'
		},
		list: {
			backgroundColor:'white',
			borderRadius:8,
			padding:0,
			borderWidth:1,
			borderStyle:'solid',
			borderColor:'rgba(0,0,0,0.1)',
			width:'100%'
		},
		listitem: {
			padding:7,
			borderWidth:1,
			borderStyle:'solid',
			borderColor:'rgba(0,0,0,0.08)'
		},
		subhead: {
			marginBottom: theme.spacing.unit*2
		},
		textcontainer:{
			display:'flex',
			[theme.breakpoints.down('sm')]:{
				justifyContent:'center',
			},
			[theme.breakpoints.up('sm')]:{
				justifyContent:'flex-start',
			}
		}
	}
}

const DeveloperCard = (props) => {
	const { classes, data } = props

	return (
		<Grid container justify="center">
			<Grid item xs={12} md={10} lg={8}>
				<Card className={classes.card}>
					<Grid container spacing={24}>
						<Grid item xs={12} sm={2}>
							<Grid container justify="center">
								<Avatar 
									className={classNames(classes.avatar, classes.bigAvatar)}
									src=""
									alt="Profile Picture">
									IMAGE
								</Avatar>
							</Grid>
						</Grid>
						<Grid container item xs={12} sm={5} alignContent="flex-start">
							<Grid item xs={12} className={classes.textcontainer}>
								<Typography align="left" color="inherit" variant="body1">
				           		{data.user.name}
				          		</Typography>
							</Grid>
							<Grid item xs={12} className={classes.textcontainer}>
								<Typography align="left" color="inherit" variant="body1">
				           		{`${data.status} at ${data.company}`}
				          		</Typography>
							</Grid>
							<Grid item xs={12} className={classes.textcontainer}>
								<Typography align="left" color="inherit" variant="body1">
				           		{data.location}
				          		</Typography>
							</Grid>
							<Grid item xs={12} className={classes.textcontainer}>
								<Button
			          				component = {Link}
			          				to={{
										pathname:'/developers/' + data.user._id
									}}
			          				className={classes.button}
									fullWidth
					        		size="small"
					        		variant="contained" 
					        		color="secondary">
			        				View Profile
			      				</Button>
							</Grid>
						</Grid>
						<Grid item xs={12} style={{paddingRight: '12px'}} sm={5}>
							
				          	<ExpansionPanel title={'View developer skill'}>
				          		<List classes={{root: classes.list}}>
						        {data.skills.map(s => <ListItemSkills key={s+Math.random()} skill = {s}/>)}
						    	</List>
				          	</ExpansionPanel>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(DeveloperCard);