import React from 'react';
import {Link} from 'react-router-dom'

//Material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

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
	},
	stars:{
		backgroundColor:'#17a2b8'
	},
	watchers:{
		backgroundColor:'#6c757d'
	},
	forks:{
		backgroundColor:'#28a745'
	},
	link: {
		color:'black',
		fontSize:16,
		textDecoration:'none',
		'&:hover' : {
			color:'black',
			textDecoration:'none'
		}
	}
}


export default withStyles(style)((props) => {
	const { classes } = props
	return (
		<Card className={classes.container}>
			<Grid container spacing={8}>	
				<Grid item xs={6}>
					<Grid item xs={12}>
						<Typography align="left" variant="h6">
						Profile
						</Typography>
					</Grid>
					<Grid item xs={12}>
							<Typography align="left" variant="body1">
							<a className={classes.link} target="_blank" href={`https://github.com/${props.data}`}>{props.data ? `https://github.com/${props.data}`: ''}</a>
							</Typography>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container wrap="nowrap">
						<Typography style={{...style.righttext, ...style.stars}} variant="body1">
						Stars:
						</Typography>
						<Typography style={{...style.righttext, ...style.watchers}} variant="body1">
						Watchers:
						</Typography>
						<Typography style={{...style.righttext, ...style.forks}} variant="body1">
						Forks:
						</Typography>
					</Grid>
				</Grid>
			</Grid>	
		</Card>
	)
})
