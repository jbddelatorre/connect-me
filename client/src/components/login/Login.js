import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
	textfield: {
		color:'white'
	}, 
	button: {
		marginTop: 30
	}
}


export default class Login extends Component {
	state = {
		email:'',
		password:''
	}
	render() {
		return (
			<div>
				<TextField
				fullWidth
		          id="email"
		          label="email"
		          // className={classes.textField}
		          value={this.state.email}
		          // onChange={this.handleChange('email')}
		          margin="normal"
		          variant="outlined"
		        />
		        <TextField
		        fullWidth
		         	id="password"
		         	label="password"
		         	// className={classes.textField}
		         	value={this.state.password}
		         	// onChange={this.handleChange('password')}
		         	margin="normal"
		         	variant="outlined"
		        />
		        <Button style={styles.button}fullWidth variant="extendedFab" color="primary">
        			Submit
      			</Button>
			</div>
		);
	}
}
