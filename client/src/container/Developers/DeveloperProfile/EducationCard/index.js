import React from 'react';

import Moment from 'react-moment'

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

const EducationCardList = (props) => {
	const {data} = props;
	return (
		<Grid item xs={12}>
			{data.map(d => (data.length > 0 ? 
			<Card key={d._id} style={styles.root}>
				<Grid item xs={12}>
					<Typography align="left" variant="h6">
						{d.school}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography align="left" variant="body1">
						<Moment format="YYYY/MM/DD">{d.from}</Moment> - {d.current ? 'Current':<Moment format="YYYY/MM/DD">{d.to}</Moment>}
					</Typography>
				</Grid>
				<Grid item xs={12} style={styles.sub}>
					<Typography align="left" variant="h6">
						{'Degree: '}
					</Typography>
					<Typography align="left" variant="body1">
						{
							d.degree
						}
					</Typography>
				</Grid>
				<Grid item xs={12} style={styles.sub}>
					<Typography align="left" variant="h6">
						{'Field of Study: '}
					</Typography>
					<Typography align="left" variant="body1">
						{
							d.fieldofstudy
						}
					</Typography>
				</Grid>
				<Grid item xs={12} style={styles.sub}>
					<Typography align="left" variant="h6">
						{'Description: '}
					</Typography>
					<Typography align="left" variant="body1">
						{
							d.description
						}
					</Typography>
				</Grid>
			</Card>
			:
			<Card style={styles.root}>
				<Grid item xs={12}>
					<Typography align="left" variant="h6">
						{'No Information provided'}
					</Typography>
				</Grid>
			</Card>))}
		</Grid>
	)
};


export default EducationCardList;