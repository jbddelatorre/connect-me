import React, { Component } from 'react';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';

import Password from './Password'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		marginTop: 0,
		marginBottom: 0
	}
})

class Signup extends Component {
	state = {
		name:'',
		email:'',
		password:'',
		password2:'',
		errors:{}
	}

	handleChange = (e, p) => {
		this.setState({ [p] : e.target.value})
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		
		if(this.state.password !== this.state.password2) {
			await this.setState({ errors: {
				password: 'Passwords do not match.'
			} })
		} else {
			const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
			}
			
			this.props.registerUser(newUser, this.props.history)
		}
		console.log(this.state)
	}

	componentDidMount() {
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({errors: nextProps.errors})
		}
	}

	render() {
		const { classes } = this.props 

		return (
			<Grid container justify="center">
			<Grid item xs={10} md={8} lg={4}>
			<List>
				<ListItem>
					<Typography align="center" color="primary" variant="h6">
           				Sign up and register
          			</Typography>
				</ListItem>
				<ListItem>
		          <ListItemIcon>
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	classes = {{root: classes.root}}
		          	error = {!!this.state.errors.name}
		          	id="name"
		          	name="name"
		          	fullWidth
		          	label="Name"
		          	// className={classes.textField}
		         	value={this.state.name}
		         	onChange={(e) => this.handleChange(e, 'name')}
		          	margin="normal"
		          	helperText={this.state.errors.name}
		          	FormHelperTextProps = {{error:true}}
		        	/>
		        </ListItem>
				<ListItem>
		          <ListItemIcon>
		            <Email />
		          </ListItemIcon>
		          <TextField
		          	classes = {{root: classes.root}}
		          	error = {!!this.state.errors.email}
		          	id="email"
		          	label="Email"
		          	fullWidth
		          	type="email"
		          	// className={classes.textField}
		         	value={this.state.email}
		         	onChange={(e) => this.handleChange(e, 'email')}
		          	margin="normal"
		          	helperText={this.state.errors.email}
		          	FormHelperTextProps = {{error:true}}
		        	/>
		        </ListItem>
		    	<ListItem>
		          <ListItemIcon>
		            <Lock />
		          </ListItemIcon>

					<Password 
						error = {!!this.state.errors.password}
			          	id="password"
			          	label="Password"
			          	fullWidth
			          	type="password"
			          	// className={classes.textField}
			         	value={this.state.password}
			         	onChange={(e) => this.handleChange(e, 'password')}
			          	margin="normal"
			          	helperText={this.state.errors.password}
			          	FormHelperTextProps = {{error:true}}
					/>


		          {/*<TextField
		          	error = {!!this.state.errors.password}
		          	id="password"
		          	label="Password"
		          	fullWidth
		          	type="password"
		          	// className={classes.textField}
		         	value={this.state.password}
		         	onChange={(e) => this.handleChange(e, 'password')}
		          	margin="normal"
		          	helperText={this.state.errors.password}
		          	FormHelperTextProps = {{error:true}}
		        	/>*/}


		        </ListItem>
		        <ListItem>
		          <ListItemIcon>
		            <Lock />
		          </ListItemIcon>
					<Password 
						error = {!!this.state.errors.password2}
			          	id="password2"
			          	label="Confirm Password"
			          	fullWidth
			          	type="password"
			          	// className={classes.textField}
			         	value={this.state.password2}
			         	onChange={(e) => this.handleChange(e, 'password2')}
			          	margin="normal"
			          	helperText={this.state.errors.password2}
			          	FormHelperTextProps = {{error:true}}
					/>


		          {/*<TextField
		          	error = {!!this.state.errors.password2}
		          	id="password2"
		          	label="Confirm Password"
		          	fullWidth
		          	type="password"
		          	// className={classes.textField}
		         	value={this.state.password2}
		         	onChange={(e) => this.handleChange(e, 'password2')}
		          	margin="normal"
		          	helperText={this.state.errors.password2}
		          	FormHelperTextProps = {{error:true}}
		        	/>*/}
		        </ListItem>
		        <ListItem>
		        	<Button
		        		style={{width: '200px'}}
		        		size="large"
		        		variant="extendedFab" 
		        		color="primary"
		        		onClick={(e) => this.handleSubmit(e)}
		        		>
        				Submit
      				</Button>
		        </ListItem>
			</List>
			</Grid>
			</Grid>
		);
	}
}

Signup.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});


export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)((Signup))));