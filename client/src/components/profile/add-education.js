import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addEducation } from '../../actions/profileActions'
import { connect } from 'react-redux'
// Component Imports
import TextInput from './profile-inputs/text-input';

// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import purple from '@material-ui/core/colors/purple';
import Checkbox from '@material-ui/core/Checkbox';



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
	},
	root: {
	    color: purple[900],
	    '&$checked': {
	      color: purple[700],
	    },
	},
	checked: {},
})

class AddExperience extends Component {
	state = {
		school:'',
		degree:'',
		fieldofstudy:'',
		fromdate: '',
		todate: '',
		current: false,
		desc:''
	}

	handleCurrentEdu = () => {
		const checkbox = !this.state.current
		if(checkbox === true) {
			this.setState({todate: '', current: checkbox })
		} else {
			this.setState({current: checkbox })
		}
	}

	handleChangeEditProfile = (e, profile) => {
		this.setState({ [profile]: e.target.value })
	}

	handleSubmit = () => {
		const education = {
			school:this.state.school,
			degree:this.state.degree,
			fieldofstudy:this.state.fieldofstudy,
			from: this.state.fromdate,
			to: this.state.todate,
			current: this.state.current,
			description:this.state.desc
		}
		this.props.addEducation(education, this.props.history)
	}

	render() {
		const {classes} = this.props
		return (
			<Grid container justify="center" style={{paddingLeft:'16px', paddingRight:'16px'}}>
				<Grid container item xs={12} md={10} lg={8} justify="center">
					<Grid item xs={12} sm={8} className={classes.margin}>
						<Button
						component={Link}
						to={{
							pathname:'/profile'
						}}
						fullWidth
		        		size="large"
		        		variant="outlined" 
		        		color="primary">
        				Return to Profile
      					</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography align="center" color="primary" variant="h4">
		           				Add Your Education
		          		</Typography>
		          		<Typography align="center" color="primary" variant="h6">
		           				Add any school, bootcamp, etc that you have attended
		          		</Typography>
					</Grid>
					<TextInput 
						id="school"
						name="school"
						label="* School or Bootcamp"
						value={this.state.school}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'school')}
					/>
					<TextInput 
						id="degree"
						name="degree"
						label="* Degree or Certificate"
						value={this.state.degree}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'degree')}
					/>
					<TextInput 
						id="fieldofstudy"
						name="fieldofstudy"
						label="Field of Study"
						value={this.state.fieldofstudy}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'fieldofstudy')}
					/>
					<TextInput 
						id="fromdate"
						name="fromdate"
						value={this.state.fromdate}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'fromdate')}
						subtitle="From Date"
						type='date'
						justifysub="left"
					/>
					<TextInput 
						id="todate"
						name="todate"
						value={this.state.todate}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'todate')}
						subtitle="To Date"
						type='date'
						justifysub="left"
						disabled={this.state.current}
					/>

					<Grid item xs={12} sm={10} md={8}>
						<FormControlLabel
				          control={
				            <Checkbox
				              onChange={this.handleCurrentEdu}
				              value=""
				              classes={{
				                root: classes.root,
				                checked: classes.checked,
				              }}
				            />
				          }
				          label="Currently Studying"
				        />
					</Grid>

					<TextInput 
						id="desc"
						name="desc"
						label="Program Description"
						value={this.state.desc}
						handleChange = {(e) => this.handleChangeEditProfile(e, 'desc')}
						textfield
						justifysub="left"
					/>
					<Grid container justify="center">
						<Grid item xs={6}  className={classes.margin} >
							<Button
							fullWidth
			        		size="large"
			        		variant="extendedFab" 
			        		color="primary"
			        		onClick={this.handleSubmit}>
	        				Add Education
	      					</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default connect(null, { addEducation })(withStyles(styles)(AddExperience));