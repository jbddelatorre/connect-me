import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDeveloperProfile } from '../../../actions/profileActions';
import isEmpty from '../../../validation/is-empty';
//Components
import LandingCard from './landing-card';
import BioSkillsCard from './bio-skills-card';
// import WEcard from './educ-experience.js'
import EducationCardList from './education-card.js'
import ExperienceCardList from './experience-card.js'
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
		if(!isEmpty(current)) {
			this.setState({
				_id:current._id,
				user:current.user,
				status:current.status,
				company:current.company,
				handle:current.handle,
				website:current.website,
				location: current.location,
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
		const { experience, education } = this.state
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
						website={this.state.website}
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
							{education ? 
								<ExperienceCardList data={experience} />
								:
								<ExperienceCardList data={[]}/>
							}
						</Grid>
						<Grid item xs={6}>
							<Grid container justify="center">
								<Typography align="center" variant="h6" color="primary">
									Education
								</Typography>
							</Grid>
							{education ? 
								<EducationCardList data={education} />
								:
								<EducationCardList data={[]}/>
							}
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Typography style={{marginTop:20}} align="left" variant="h5" color="inherit">
									My Github Repository
								</Typography>
						</Grid>
						<Grid item xs={12}>
							{this.state.githubusername ? <GithubCard data={this.state.githubusername}/> : ''}
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