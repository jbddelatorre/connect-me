import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
	footer: {
		height: '4vh',
		display:'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.palette.primary.dark,
		color: 'white'
	}
})

export default withStyles(style)((props) => {
	const { classes } = props

	return (
		<footer className={classes.footer}>
			<p>Copyright 2018 &middot; Connect Me Network</p>
		</footer>
	)
});

