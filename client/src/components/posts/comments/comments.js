import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SaySomethingForm from '../all-posts/say-something';
import SingleComment from './single-comment';


import { getComments } from '../../../actions/postActions';

// Component Imports

// Material UI Imports

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
		const { auth } = this.props
		const { current } = this.state
		console.log(current.comments)
		return (
			<Fragment>
				<SingleComment 
					avatar = { current.avatar }
					text = { current.text }
					name = { current.name }
				/>
				<div style={{marginTop:32, marginBottom:32}}>
					<SaySomethingForm
					head="Comment on the post!"
					name={ auth.name }
					avatar={ auth.avatar }
					user={ auth.id }
					/>
					{
						current.comments != undefined && current.comments.length > 0 ?
						current.comments.map(c => (
							<SingleComment 
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

