import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SaySomethingForm from './say-something';
import SinglePost from './single-post-card';
import isEmpty from '../../../validation/is-empty';

import { getAllPosts } from '../../../actions/postActions';

// Component Imports
import Loading from '../../layout/modal-spinner'
// Material UI Imports

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stateposts: []
		}
	}

	componentDidMount() {
		this.props.getAllPosts();
	}

	componentWillReceiveProps(newProps) {
		const { posts } = newProps.posts
		
		if(!isEmpty(posts)) {
			this.setState({ stateposts: posts })
		}
	}

	render() {
		const { auth, posts } = this.props
		const { stateposts } = this.state
		return (
			<Fragment>
				<Loading loading={posts.loading} />
				<SaySomethingForm
				head = "Say something!" 
				name={ auth.user.name }
				avatar={ auth.user.avatar }
				user={ auth.user.id }
				/>
				{ stateposts.length > 0 ?
					stateposts.map(p => <SinglePost key={p._id} post = {p} />)
					:
					<div style={{display:'flex', justifyContent:'center'}}>
						<h6>No posts found</h6>
					</div>
				}
			</Fragment>

		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth
})

export default connect(mapStateToProps, { getAllPosts })(Posts);
