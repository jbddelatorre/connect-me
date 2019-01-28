import React from 'react';

//Material UI
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';


const styles = {
	card:{
		marginTop:40,
		paddingTop:16,
		paddingBottom:16,
		minHeight: 120
		}
	}

export default (props) => {
	const { avatar, text, name } = props;
	return (
		<Grid container justify="center" style={{paddingLeft: '16px', paddingRight:'16px'}}>
			<Grid item xs={12} md={10} lg={8}>
				<Card style={styles.card}>
					<Grid container>
						<Grid container item xs={12} sm={3} md={2} direction="column" alignItems="center">
							<Avatar
							style={{height:100, width:100, marginLeft:16, marginRight:16}} 
							src={ avatar }
							alt="Profile Image"
							/>
							<Typography align="center" color="inherit" variant="subtitle1">
					           	{ name }
					        </Typography>
						</Grid>
						<Grid item xs={12} sm={9} md={10}>
							<CardContent>
								<Typography align="left" color="inherit" variant="body1">
					           		{ text }
					          	</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	)
};