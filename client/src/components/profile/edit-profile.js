import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Component Imports
import TextInput from './profile-inputs/text-input';
import SocialMedia from './profile-inputs/social-media';

// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';



const styles = (theme) => ({
	icon: {
		fontSize:30,
		display:'flex',
		height:'100%',
		justifyContent: 'center',
		alignItems:'center',
		opacity:'0.5'
	},
	margin: {
		paddingTop: theme.spacing.unit*2,
		paddingBottom: theme.spacing.unit*4,
	}
})

class EditProfile extends Component {
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

	componentDidMount() {
		const { profile } = this.props.profile;
		this.setState({
			handle:profile.handle,
			bio:profile.bio,
			company:profile.company,
			website:profile.website,
			location:profile.location,
			skills:profile.skills,
			github:profile.githubusername,
			about:profile.desc,
			twitter:profile.social.twitter,
			facebook:profile.social.facebook,
			linkedin:profile.social.linkedin,
			youtube:profile.social.youtube,
			instagram:profile.social.instagram
		})
	}

	render() {
		const {classes} = this.props
		return (
			<Grid container>
				<Grid className={classes.margin}  container justify="center">
					<Grid item xs={6}>
						<Grid item xs={4}>
							<Button
							component={Link}
							to={{
								pathname:'/profile'
							}}
							fullWidth
			        		size="large"
			        		variant="outlined" 
			        		color="secondary">
	        				Return to Profile
	      					</Button>
	      				</Grid>
					</Grid>
				</Grid>
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
				<SocialMedia 
					id="twitter"
					name="twitter"
					label="Twitter"
					value={this.state.twitter}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'twitter')}
				>
					<div className={classes.icon}>
						<i className="fab fa-twitter"></i>
					</div>
				</SocialMedia>
				<SocialMedia 
					id="facebook"
					name="facebook"
					label="Facebook"
					value={this.state.facebook}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'facebook')}
				>
					<div className={classes.icon}>
						<i className="fab fa-facebook-f"></i>
					</div>
				</SocialMedia>
				<SocialMedia 
					id="linkedin"
					name="linkedin"
					label="LinkedIn"
					value={this.state.linkedin}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'linkedin')}
				>
					<div className={classes.icon}>
						<i className="fab fa-linkedin-in"></i>
					</div>
				</SocialMedia>
				<SocialMedia 
					id="youtube"
					name="youtube"
					label="YouTube"
					value={this.state.youtube}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'youtube')}
				>
					<div className={classes.icon}>
						<i className="fab fa-youtube"></i>
					</div>
				</SocialMedia>
				<SocialMedia 
					id="instagram"
					name="instagram"
					label="Instagram"
					value={this.state.instagram}
					handleChange = {(e) => this.handleChangeEditProfile(e, 'instagram')}
				>
					<div className={classes.icon}>
						<i className="fab fa-instagram"></i>
					</div>
				</SocialMedia>
				<Grid container justify="center">
					<Grid item xs={6}>
						<Button
						fullWidth
		        		size="large"
		        		variant="extendedFab" 
		        		color="primary">
        				Edit Your Profile
      					</Button>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile
})

export default connect(mapStateToProps)(withStyles(styles)(EditProfile));