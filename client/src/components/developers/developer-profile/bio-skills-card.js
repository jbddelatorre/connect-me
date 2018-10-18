import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import LandingCard from './landing-card';
import ListItemSkills from '../developer-skills-list-item';
import IndividualSkill from './individual-skill';
//Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import Build from '@material-ui/icons/Build';

const styles = (theme) => ({
	subCategory: {

	}, 
	card: {
		backgroundColor:'#f8f9fa',
		padding: theme.spacing.unit * 2,
		borderWidth:1,
		borderStyle:'solid',
		borderColor:'rgba(0,0,0,0.08)'
	},
	mB: {
		marginBottom: 30
	},
	labels: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	body: {
		marginTop:4,
		marginBottom:4
	},

})



const BioSkillsCard = (props) => {
	const {classes} = props
	return (
		<Grid className={classes.mB}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<Grid container>
						
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="h5">
						       Bio
						    </Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.body} align="center" color="inherit" variant="body1">
						       Lorem Ipsum
						    </Typography>
						</Grid>
						<Grid item xs={12}>
							<hr 
							style={{
								// color: 'rgba(0,0,0,0.05)',
								backgroundColor:'rgba(0,0,0,0.05)',
								height:1,
								opacity:0.4
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography className={classes.labels} align="center" color="inherit" variant="h5">
						       Skill Set
						    </Typography>
						</Grid>
						<IndividualSkill skill="1"/>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};

export default withStyles(styles)(BioSkillsCard)
