import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
	textfield: {
		color:'white'
	}, 
	button: {
		marginTop: 30
	},
	root: {
		padding:50
	}
}


export default class Login extends Component {
	state = {
		email:'',
		password:''
	}
	
	handleChange = (e, p) => {
		this.setState({ [p] : e.target.value})
	}

	render() {
		return (
			<Grid container justify="center" style={styles.root}>
				<Grid container justify="center">
					<Grid item xs={8}>
						<Typography align="center" color="primary" variant="h6">
		           				Log in your account
		          		</Typography>
						<TextField
						fullWidth
				          id="email"
				          label="email"
				          // className={classes.textField}
				          value={this.state.email}
				          // onChange={this.handleChange('email')}
				          margin="normal"
				          variant="outlined"
				          onChange={(e) => this.handleChange(e, 'email')}
				        />
				        <TextField
				        fullWidth
				         	id="password"
				         	label="password"
				         	// className={classes.textField}
				         	value={this.state.password}
				         	onChange={(e) => this.handleChange(e, 'password')}
				         	margin="normal"
				         	variant="outlined"
				        />
			        </Grid>
		        </Grid>
		        <Grid container justify="center">
		        	<Grid item xs={2}>
				        <Button style={styles.button}
				        	size="large" 
				        	variant="extendedFab" 
				        	color="primary"
				        	fullWidth
				        	>
		        			Login
		      			</Button>
	      			</Grid>
      			</Grid>
			</Grid>
		);
	}
}
