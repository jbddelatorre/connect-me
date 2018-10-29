import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProfile } from '../../../actions/profileActions'
//Components
import DeveloperCard from './DeveloperCard'
import Loading from '../../../components/Layout/ModalSpinner'

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
		this.setState({profiles: newProps.profile.profiles})
	}

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