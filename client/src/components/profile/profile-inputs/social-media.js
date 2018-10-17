import React from 'react';

//Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default (props) => {
	const {id, name, label, handleChange, value, subtitle, textfield} = props;
	return (
		<Grid container justify="center" spacing={8}>
			<Grid item xs={1}>
				{props.children}
			</Grid>
			<Grid item xs={5}>
				<TextField
		          	id={id}
		          	fullWidth
		          	label={label}
		          	// className={classes.textField}
		         	value={value}
		         	onChange={handleChange}
		          	margin="normal"
		          	variant="outlined"
			    />
			</Grid>	
		</Grid>
	)
};
