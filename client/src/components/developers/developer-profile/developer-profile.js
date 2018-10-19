import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import LandingCard from './landing-card';
import BioSkillsCard from './bio-skills-card';
import WEcard from './educ-experience.js'
//Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
	
}

class DeveloperProfile extends Component {
	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={10}>
					<Grid container justify="flex-start">
						<Grid item xs={3}>
							<Button
								component={Link}
								to={{
									pathname:'/developers'
								}}
								fullWidth
				        		size="small"
				        		variant="contained" 
				        		color="secondary">
		        				Return to Developers
		      				</Button>
						</Grid>
					</Grid>
					<LandingCard 
						img=""
						name=""
						job=""
						company=""
						social=""
					/>
					<BioSkillsCard />
					<Grid container>
						<Grid item xs={6}>
							<Grid container justify="center">
								<Typography align="center" variant="h6" color="primary">
									Experience
								</Typography>
							</Grid>
							<WEcard work />
						</Grid>
						<Grid item xs={6}>
							<Grid container justify="center">
								<Typography align="center" variant="h6" color="primary">
									Education
								</Typography>
							</Grid>
							<WEcard />
						</Grid>
					</Grid>
				{/*github repo*/}
				</Grid>
			</Grid>
		);
	}
}

export default DeveloperProfile;