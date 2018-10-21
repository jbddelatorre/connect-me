import React from 'react';

//Components
import DeveloperCard from './developers-card.js'

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Developers = (props) => {
	return (
		<Grid>
			<Grid container justify="center">
				<Grid item xs={8}>
					<Typography align="center" color="primary" variant="h4">
	           				Developer Profiles
	          		</Typography>
	          		<Typography align="center" color="primary" variant="h6">
	           				Browse and connect with our developers
	          		</Typography>
				</Grid>
				<DeveloperCard />
			</Grid>
		</Grid>
	)
};

export default Developers;