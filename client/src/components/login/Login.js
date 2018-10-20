import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

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
	}
}


class Login extends Component {
	state = {
		email:'',
		password:'',
		errors: {}
	}
	
	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.isAuthenticated) {
			this.props.history.push('/profile')
		}
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}

	handleChange = (e, p) => {
		this.setState({ [p] : e.target.value})
	}

	handleSubmit = () => {
		const userData = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.loginUser(userData)
	}

	render() {
		const { errors } = this.state;

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
				          	type="email"
				          	// className={classes.textField}
				          	value={this.state.email}
				          	// onChange={this.handleChange('email')}
				          	margin="normal"
				          	variant="outlined"
				          	onChange={(e) => this.handleChange(e, 'email')}
				          	helperText={errors.email}
		          		  	FormHelperTextProps = {{error:true}}
				        />
				        <TextField
				        fullWidth
				         	id="password"
				         	label="password"
				         	type="password"
				         	// className={classes.textField}
				         	value={this.state.password}
				         	onChange={(e) => this.handleChange(e, 'password')}
				         	margin="normal"
				         	variant="outlined"
				         	helperText={errors.password}
		          			FormHelperTextProps = {{error:true}}
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
				        	onClick = {this.handleSubmit}
				        	>
		        			Login
		      			</Button>
	      			</Grid>
      			</Grid>
			</Grid>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);