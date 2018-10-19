import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';

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

	handleSubmit = (e) => {
		e.preventDefault();
		
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		
		this.props.registerUser(newUser)

		// axios.post('/api/users/register', newUser)
		// 	.then(res => {
		// 		console.log(res.data)
		// 		this.setState({
		// 			name:'',
		// 			email:'',
		// 			password:'',
		// 			password2:'',
		// 			errors:{}
		// 		})
		// 	})
		// 	.catch(err => {
		// 		console.log(err.response.data)
		// 		this.setState({
		// 			errors:{
		// 				name: err.response.data.name,
		// 				email: err.response.data.email,
		// 				password: err.response.data.password,
		// 				password2: err.response.data.password2
		// 			}
		// 		})
		// 	})
	}

	render() {
		return (
			<Grid container justify="center">
			<Grid item xs={8}>
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
		          	error = {this.state.errors.name}
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
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	error = {this.state.errors.name}
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
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	error = {this.state.errors.name}
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
		        </ListItem>
		        <ListItem>
		          <ListItemIcon>
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	error = {this.state.errors.name}
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
		        </ListItem>
		        <ListItem>
		        	<Button
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

export default connect(null, { registerUser })(Signup);