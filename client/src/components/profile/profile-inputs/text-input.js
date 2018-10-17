import React from 'react';

//Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default (props) => {
	const {id, name, label, handleChange, value, subtitle, textfield} = props;
	return (
		<Grid container justify="center">
		<Grid item xs={6}>
			<TextField
	          	id={id}
	          	fullWidth
	          	label={label}
	          	// className={classes.textField}
	         	value={value}
	         	onChange={handleChange}
	          	margin="normal"
	          	variant="outlined"
	          	multiline = {textfield}
	          	rows={2}
		    />
		    <Typography align="center" color="primary" variant="subtitle1">
	        	{subtitle}
	        </Typography>
		</Grid>
		</Grid>
	)
};
