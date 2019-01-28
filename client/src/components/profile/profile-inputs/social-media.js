import React from 'react';

//Material UI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default (props) => {
	const {id, name, label, handleChange, value} = props;
	return (
		<Grid container justify="center">
			<Grid item xs={2} sm={2}>
				{props.children}
			</Grid>
			<Grid item xs={10} sm={8}>
				<TextField
		          	id={id}
		          	fullWidth
		          	label={label}
		          	name={name}
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
