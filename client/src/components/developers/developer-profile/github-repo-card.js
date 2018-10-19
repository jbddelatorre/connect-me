import React from 'react';

//Material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const style={
	righttext: {
		marginLeft:8,
		marginRight:8,
		borderRadius:8,
		paddingLeft:4,
		paddingRight:4,
		color:'white'
	},
	container: {
		marginTop:8,
		padding:16,
		paddingLeft:32,
		marginBottom:32
	}
}

const colors = {
	stars:{
		backgroundColor:'#17a2b8'
	},
	watchers:{
		backgroundColor:'#6c757d'
	},
	forks:{
		backgroundColor:'#28a745'
	},
}

export default (props) => {
	return (
		<Card style={style.container}>
			<Grid container spacing={8}>	
				<Grid item xs={6}>
					<Grid item xs={12}>
						<Typography align="flex-start" variant="h6">
						Repo 1
						</Typography>
					</Grid>
					<Grid item xs={12}>
							<Typography align="flex-start" variant="body1">
							Repo Description 
							</Typography>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container wrap="nowrap">
						<Typography style={{...style.righttext, ...colors.stars}} variant="body1">
						Stars:
						</Typography>
						<Typography style={{...style.righttext, ...colors.watchers}} variant="body1">
						Watchers:
						</Typography>
						<Typography style={{...style.righttext, ...colors.forks}} variant="body1">
						Forks:
						</Typography>
					</Grid>
				</Grid>
			</Grid>	
		</Card>
	)
};
