import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../layout/modal-spinner'
import ProfileTable from './profile-table';
import isEmpty from '../../validation/is-empty';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
	root: {
		paddingLeft: theme.spacing.unit*8,
		paddingRight: theme.spacing.unit*8,
		paddingTop: theme.spacing.unit,
	},
	out:{
		marginLeft:theme.spacing.unit,
		marginRight:theme.spacing.unit,
		marginTop:theme.spacing.unit,
	},
	buttonscontainer:{
		flexDirection:'row',
		justifyContent:'flex-start',
		[theme.breakpoints.down('xs')]:{
			flexDirection:'column',
			alignItems:'center'
		}
	},
	button:{
		[theme.breakpoints.up('md')]:{
			flexGrow:'1',
		}
	},
	container: {
		marginBottom:'16px',
		paddingLeft:'16px',
		paddingRight:'16px',
	}
})


class Profile extends Component {
	componentDidMount() {
		this.props.getCurrentProfile();
	}

	render() {
		const { classes, auth } = this.props
		const { profile, loading } = this.props.profile;
		return (
			<Grid container justify="center" className={classes.container} style={{minHeight:'100%'}}>
				<Loading loading={loading}/>
				<Grid container item alignContent="space-between" xs={12} md={10} lg={8}>
					<Grid container item xs={12}>
						<Grid item xs={12}>
							<Typography align="left" color="primary" variant="h4">
		           				Dashboard
		          			</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography align="left" color="primary" variant="h6">
		           				Welcome,  { auth.user.name.toUpperCase() }
		          			</Typography>
						</Grid>
						<Grid item xs={12} sm={12} lg={4} container justify="center">
							<Button	
								fullWidth
								className={classes.button}
								classes={{outlined: classes.out}}
								component={Link}
								to={{
									pathname: `${this.props.match.url}/edit-profile`
								}}
				        		size="large"
				        		variant="outlined" 
				        		color="primary">
		        				{!isEmpty(profile) ? 'Edit' : 'Add' } Profile
		      				</Button>
		      			</Grid>
		      				{!isEmpty(profile) ? 
		      					<Fragment>
		      						<Grid item xs={12} sm={6} lg={4} container justify="center">
					      				<Button
					      					fullWidth
					      					component={Link}
											to={{
												pathname: `${this.props.match.url}/add-experience`
											}}
					      					className={classes.button}
					      					classes={{outlined: classes.out}}
							        		size="large"
							        		variant="outlined" 
							        		color="primary">
					        				Add Experience
					      				</Button>
				      				</Grid>
				      				<Grid item xs={12} sm={6} lg={4} container justify="center">
					      				<Button
					      					fullWidth
					      					className={classes.button}
					      					classes={{outlined: classes.out}}
					      					component={Link}
											to={{
												pathname:  `${this.props.match.url}/add-education`
											}}
							        		size="large"
							        		variant="outlined" 
							        		color="primary">
					        				Add Education
					      				</Button>
				      				</Grid>
			      				</Fragment>
		      					:
		      					""
		      				}
						<ProfileTable 
						    title = "Experience Credentials"
							header={['Company', 'Title', 'Years', 'Action']}
							data = {profile.experience}
							type="EXPERIENCE"
						/>
						<ProfileTable 
						    title = "Education Credentials"
							header={['School', 'Degree', 'Years', 'Action']}
							data = {profile.education}
							type="EDUCATION"
						/>
					</Grid>
					<Grid item xs={12}>
						{!!Object.keys(profile).length ? 
						<Button
						style={{backgroundColor:'pink', marginBottom:'24px'}}
		        		size="large"
		        		variant="contained" 
		        		color="default">
	    				Delete my profile
	  					</Button>
						:
						""
						}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
})

Profile.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

export default  connect(mapStateToProps, { getCurrentProfile })(withRouter(withStyles(styles)(Profile)));
