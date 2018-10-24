import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import PostComment from './post-comment';
import SingleComment from './single-comment';


import { getComments } from '../../../actions/postActions';

// Component Imports
import Loading from '../../layout/modal-spinner'

// Material UI Imports


class Comments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: ''
		}
	}

	componentDidMount() {
		this.props.getComments(this.props.match.params.post_id);
	}

	componentWillReceiveProps(newProps) {
		const { currentPost } = newProps.posts
		if(currentPost) {
			this.setState({current: currentPost})
		}
	}

	render() {
		const { auth, posts } = this.props
		const { current } = this.state
		return (
			<Fragment>
				<Loading loading={posts.loading} />
				<SingleComment 
					avatar = { current.avatar }
					text = { current.text }
					name = { current.name }
				/>
				<div style={{marginTop:32, marginBottom:32}}>
					<PostComment
					head="Comment on the post!"
					name={ auth.user.name }
					avatar={ auth.user.avatar }
					user={ auth.user.id }
					post_id = { this.props.match.params.post_id }
					/>
					{
						current.comments !== undefined && current.comments.length > 0 ?
						current.comments.map(c => (
							<SingleComment 
								key = { c._id }
								avatar = { c.avatar }
								text = { c.text }
								name = { c.name }
							/>
						))
						:
						null
					}
					
				</div>
			</Fragment>

		);
	}
}

const mapStateToProps = (state) => ({
	posts: state.posts,
	auth: state.auth
})

export default connect(mapStateToProps, { getComments })(Comments);

