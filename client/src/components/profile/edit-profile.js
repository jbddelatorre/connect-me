import React, { Component } from 'react';

// Component Imports
import TextInput from './profile-inputs/text-input';

// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default class EditProfile extends Component {
	state = {
		handle:'',
		bio:'',
		company:'',
		website:'',
		location:'',
		skills:'',
		github:'',
		about:'',
		twitter:'',
		facebook:'',
		linkedin:'',
		youtube:'',
		instagram:''
	}

	handleChangeEditProfile = (e, profile) => {
		this.setState({ [profile]: e.target.value })
		console.log(this.state)
	}

	render() {
		return (
			<Grid container>
				<Grid item xs={12}>
					<Typography align="center" color="primary" variant="h4">
	           				Edit Your Profile
	          		</Typography>
	          		<Typography align="center" color="primary" variant="h6">
	           				Let's get some information to make your profile stand out
	          		</Typography>
				</Grid>
				<TextInput 
					id="handle"
					name="handle"
					label="Handle"
					value={this.state.handle}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'handle')}
					subtitle="A handle for your profile URL."
				/>
				<TextInput 
					id="company"
					name="company"
					label="Company"
					value={this.state.company}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'company')}
					subtitle="Company your work for"
				/>
				<TextInput 
					id="website"
					name="website"
					label="Website"
					value={this.state.website}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'website')}
					subtitle="Your personal website"
				/>
				<TextInput 
					id="location"
					name="location"
					label="Location"
					value={this.state.location}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'location')}
					subtitle="Current city residence"
				/>
				<TextInput 
					id="skills"
					name="skills"
					label="Skills"
					value={this.state.skills}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'skills')}
					subtitle="Please use comma separated values."
				/>
				<TextInput 
					id="github"
					name="github"
					label="Github"
					value={this.state.github}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'github')}
					subtitle="If you want to include your github"
				/>
				<TextInput 
					id="company"
					name="company"
					label="Company"
					value={this.state.company}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'company')}
					subtitle="Company your work for"
				/>
				<TextInput 
					id="about"
					name="about"
					label="About Yourself"
					value={this.state.about}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'about')}
					subtitle="Tell something about yourself"
					textfield
				/>
			</Grid>
		);
	}
}
