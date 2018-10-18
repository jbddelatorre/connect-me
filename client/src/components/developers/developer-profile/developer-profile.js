import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import LandingCard from './landing-card';

//Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const style = {
	mB: {
		marginBottom: 10
	}
}

class DeveloperProfile extends Component {
	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={10}>
					<Grid container justify="left">
						<Grid item xs={3}>
							<Button
								component={Link}
								to={{
									pathname:'/developers'
								}}
								fullWidth
				        		size="small"
				        		variant="raised" 
				        		color="secondary">
		        				Return to Developers
		      				</Button>
						</Grid>
					</Grid>
					<LandingCard 
						style={style.mB}
						img=""
						name=""
						job=""
						company=""
						social=""
					/>
					{/*landing, bio*/}
					<Grid container>
						<Grid item xs={6}>
							
						</Grid>
						<Grid item xs={6}>
							
						</Grid>
					</Grid>
				{/*github repo*/}
				</Grid>
			</Grid>
		);
	}
}

export default DeveloperProfile;