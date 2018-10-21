import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDeveloperProfile } from '../../../actions/profileActions';
import isEmpty from '../../../validation/is-empty';
//Components
import LandingCard from './landing-card';
import BioSkillsCard from './bio-skills-card';
import WEcard from './educ-experience.js'
import GithubCard from './github-repo-card.js'
//Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class DeveloperProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			_id:'',
			user:'',
			status:'',
			company:'',
			handle:'',
			website:'',
			location: '',
			status: '',
			githubusername:'',
			experience:'',
			education:'',
			social:'',
			bio:'',
			skills:''
		}
	}

	componentDidMount() {
		this.props.getDeveloperProfile(this.props.match.params.id)
	}

	componentWillReceiveProps(newProps) {
		const { current } = newProps.profile
		console.log(current)
		if(!isEmpty(current)) {
			this.setState({
				_id:current._id,
				user:current.user,
				status:current.status,
				company:current.company,
				handle:current.handle,
				website:current.website,
				location: current.location,
				status: current.status,
				githubusername:current.githubusername,
				experience:current.experience,
				education:current.education,
				social:current.social,
				bio:current.bio,
				skills: current.skills
			})
		}
	}

	render() {
		console.log(this.state.skills)
		return (
			<Grid container justify="center">
				<Grid item xs={10}>
					<Grid container justify="flex-start">
						<Grid item xs={3}>
							<Button
								component={Link}
								to={{
									pathname:'/developers'
								}}
								fullWidth
				        		size="small"
				        		variant="contained" 
				        		color="secondary">
		        				Return to Developers
		      				</Button>
						</Grid>
					</Grid>
					<LandingCard 
						img={this.state.user.avatar}
						name={this.state.user.name}
						job={this.state.status}
						company={this.state.company}
						social={this.state.social}
					/>
					<BioSkillsCard 
						bio={this.state.bio}
						skills={this.state.skills}
					/>
					<Grid container spacing={24}>
						<Grid item xs={6}>
							<Grid container justify="center">
								<Typography align="center" variant="h6" color="primary">
									Experience
								</Typography>
							</Grid>
							<WEcard work data={this.state.experience}/>
						</Grid>
						<Grid item xs={6}>
							<Grid container justify="center">
								<Typography align="center" variant="h6" color="primary">
									Education
								</Typography>
							</Grid>
							<WEcard data={this.state.education}/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Typography style={{marginTop:20}} align="left" variant="h5" color="inherit">
									Latest Github Repos
								</Typography>
						</Grid>
						<Grid item xs={12}>
							<GithubCard data={this.state.githubusername}/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	profile: state.profile
})

export default connect(mapStateToProps, { getDeveloperProfile })(DeveloperProfile);