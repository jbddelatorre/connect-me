import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProfile } from '../../actions/profileActions'
//Components
import DeveloperCard from './developers-card.js'
import Loading from '../layout/modal-spinner'

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Developers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profiles: []
		}
	}

	componentDidMount() {
		this.props.getAllProfile()

	}

	componentWillReceiveProps(newProps) {
		console.log(newProps.profile.profiles)
		this.setState({profiles: newProps.profile.profiles})
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	const { profiles } = this.props.profile.profiles
	// 	if(prevProps.profile.profiles !== profiles) {
	// 		console.log('1' + profiles)
	// 		console.log('2' + prevProps.profile.profiles)
	// 	}
	// }


	render() {
		const { profiles } = this.state
		const { loading } = this.props.profile
		return (
		<Grid>
			<Loading loading={loading}/>
			<Grid container justify="center">
				<Grid item xs={8}>
					<Typography align="center" color="primary" variant="h4">
	           				Developer Profiles
	          		</Typography>
	          		<Typography align="center" color="primary" variant="h6">
	           				Browse and connect with our developers
	          		</Typography>
				</Grid>
				{
					profiles ? 
						profiles.map(p => <DeveloperCard key={p._id} data = {p}/>)
						:
						null
				}
			</Grid>
		</Grid>
		)
	}
};

const mapStateToProps = (state) => ({
	profile: state.profile
})

export default connect(mapStateToProps, { getAllProfile })(Developers);