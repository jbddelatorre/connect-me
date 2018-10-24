import React from 'react';
import { Link } from 'react-router-dom';
//Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = {
	card:{
		marginTop:40,
		paddingTop:16,
		paddingBottom:16,
		minHeight: 120
	}
}

export default (props) => {
	return (
		<Grid container justify="center">
			<Grid item xs={8}>
				<Card style={styles.card}>
					<Grid container>
						<Grid item xs={2}>
							<Grid container justify="center">
								<Avatar
								style={{height:100, width:100}} 
								src=""
								alt="Profile Image"
								/>
							</Grid>
							<Typography align="center" color="inherit" variant="subtitle1">
					           		Name
					        </Typography>
						</Grid>
						<Grid item xs={5}>
							<CardContent>
								<Typography align="left" color="inherit" variant="body1">
					           		Say Something!
					          	</Typography>
							</CardContent>
							<CardActions>
								<Button
				        		size="small"
				        		variant="contained" 
				        		color="default"
				       			>
		        				Like
		      					</Button>
		      					<Button
				        		size="small"
				        		variant="contained" 
				        		color="primary"
				        		component = {Link}
				        		to = {{
				        			pathname:'/comments'
				        		}}
				       			>
		        				Comments
		      					</Button>
							</CardActions>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};
