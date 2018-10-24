import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SaySomethingForm from '../all-posts/say-something';
import SingleComment from './single-comment';

// import { getAllPosts } from '../../../actions/postActions';

// Component Imports

// Material UI Imports

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Comments extends Component {
	// componentDidMount() {
	// 	this.props.getAllPosts();
	// }

	render() {
		const { auth } = this.props
		return (
			<Fragment>
				<SingleComment />
				<div style={{marginTop:32}}>
					<SaySomethingForm
					head="Comment on the post!"
					name={ auth.name }
					avatar={ auth.avatar }
					user={ auth.id }
					/>
					<SingleComment />
				</div>
			</Fragment>

		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth
})

export default connect(mapStateToProps)(Comments);

