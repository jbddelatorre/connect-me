import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import SaySomethingForm from './SaySomething';
import SinglePost from './SinglePostCard';
import isEmpty from '../../../validation/is-empty';

import { getAllPosts, likePost, unlikePost } from '../../../actions/postActions';

// Component Imports
import Loading from '../../../components/Layout/ModalSpinner'
// Material UI Imports

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
		const { data } = newProps.posts.posts
		if(!isEmpty(data)) {
			this.setState({ stateposts: data })
		}
	}

	render() {
		const { auth } = this.props
		const { posts } = this.props.posts
		const { stateposts } = this.state

		return (
			<Fragment>
				<Loading loading={posts.isFetching} />
				<SaySomethingForm
				head = "Say something!" 
				name={ auth.user.name }
				avatar={ auth.user.avatar }
				user={ auth.user.id }
				/>
				{ stateposts.length > 0 ?
					stateposts.map(p => {
						
						let liked = false;
						let handleFunction = this.props.likePost
						// console.log(p.likes.user)						
						const likeFilter = p.likes.filter(likes => likes.user === auth.user.id)
						if(likeFilter.length > 0) {
							liked = true;
							handleFunction = this.props.unlikePost
						}
						return <SinglePost key={p._id} user = { auth.user.id } post = {p} liked = {liked} handleFunction={handleFunction}/>
					})
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

export default connect(mapStateToProps, { getAllPosts, likePost, unlikePost })(Posts);
