import React from 'react';

//Material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const styles = {
	root:{
		padding: 32,
		marginBottom: 10,
		marginLeft:4,
		marginRight:4
	},
	sub: {
		marginBottom:16,
		marginTop:16
	}
}

const WEcard = (props) => {
	const {head, date, work} = props;
	const arrayInfo = work ? ['Position: ', 'Description: '] : ['Degree: ', 'Field Of Study: ', 'Description: ']; 

	return (
		<Grid item xs={12}>
			<Card style={styles.root}>
				<Grid item xs={12}>
					<Typography align="flex-start" variant="h6">
						HEAD
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="flex-start" variant="body1">
						date
					</Typography>
				</Grid>
				
				{arrayInfo.map(d => (
					<Grid key={d+Math.random()}item xs={12} style={styles.sub}>
						<Typography align="flex-start" variant="h6">
						{d}
						</Typography>
						<Typography align="flex-start" variant="body1">
						123
						</Typography>
					</Grid>
					)
				)}
			</Card>
		</Grid>
	)
};


export default WEcard;