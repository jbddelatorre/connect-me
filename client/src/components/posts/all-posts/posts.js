import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SaySomethingForm from './say-something';
import SinglePost from './single-post-card';

import { getAllPosts } from '../../../actions/postActions';

// Component Imports

// Material UI Imports

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Posts extends Component {
	componentDidMount() {
		this.props.getAllPosts();
	}

	render() {
		const { auth } = this.props
		return (
			<Fragment>
				<SaySomethingForm
				head = "Say something!" 
				name={ auth.name }
				avatar={ auth.avatar }
				user={ auth.id }
				/>
				<SinglePost />
			</Fragment>

		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth
})

export default connect(mapStateToProps, { getAllPosts })(Posts);
