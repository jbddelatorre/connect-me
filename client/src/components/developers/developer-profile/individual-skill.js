import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
	skill: {
		paddingRight:theme.spacing.unit,
		paddingLeft:theme.spacing.unit
	},
	build: {
		marginRight:theme.spacing.unit,
		marginLeft:theme.spacing.unit
	}
})

export default withStyles(style)((props) => {
	const {classes, skill} = props;
	return (
		<Grid item xs={2} className={classes.skill}>
			<Grid container wrap="nowrap">
				<Build className={classes.build}/>
				<Typography align="left" color="inherit" variant="subtitle1">
			       {skill}
			    </Typography>
		    </Grid>
		</Grid>
	)
})
