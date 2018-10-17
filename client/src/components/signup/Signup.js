import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';

const styles = {
	root: {
		padding:50
	}
}


export default class Signup extends Component {
	state = {
		name:'',
		email:'',
		password:'',
		confirmpassword:''
	}

	handleChange = (e, p) => {
		this.setState({ [p] : e.target.value})
	}

	render() {
		return (
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
		          	id="name"
		          	name="name"
		          	fullWidth
		          	label="Name"
		          	// className={classes.textField}
		         	value={this.state.name}
		         	onChange={(e) => this.handleChange(e, 'name')}
		          	margin="normal"
		        	/>
		        </ListItem>
				<ListItem>
		          <ListItemIcon>
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	id="email"
		          	label="Email"
		          	fullWidth
		          	type="email"
		          	// className={classes.textField}
		         	value={this.state.email}
		         	onChange={(e) => this.handleChange(e, 'email')}
		          	margin="normal"
		        	/>
		        </ListItem>
		    	<ListItem>
		          <ListItemIcon>
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	id="password"
		          	label="Password"
		          	fullWidth
		          	type="password"
		          	// className={classes.textField}
		         	value={this.state.password}
		         	onChange={(e) => this.handleChange(e, 'password')}
		          	margin="normal"
		        	/>
		        </ListItem>
		        <ListItem>
		          <ListItemIcon>
		            <Person />
		          </ListItemIcon>
		          <TextField
		          	id="password2"
		          	label="Confirm Password"
		          	fullWidth
		          	type="password"
		          	// className={classes.textField}
		         	value={this.state.password2}
		         	onChange={(e) => this.handleChange(e, 'password2')}
		          	margin="normal"
		        	/>
		        </ListItem>
		        <ListItem>
		        	<Button
		        		size="large"
		        		variant="extendedFab" 
		        		color="primary">
        				Submit
      				</Button>
		        </ListItem>
			</List>
		);
	}
}
