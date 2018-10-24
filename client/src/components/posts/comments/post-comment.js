import React, { Component } from 'react';

import { addComment } from '../../../actions/postActions';
import { connect } from 'react-redux';

//Material UI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


class PostComment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			comment:''
		}
	}

	handleCommentChange = (e) => {
		const newComment = e.target.value;
		this.setState({comment: newComment})
	}

	handleSubmit = () => {
		const { name, avatar, user, post_id } = this.props
		const addComment = {
			text:this.state.comment,
			name:name,
			avatar:avatar,
			user:user
		}
		this.props.addComment(addComment, post_id)
		this.setState({comment: ''})
	}

	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={8}>
					<Card>
						<CardHeader style={{paddingBottom:0}} 
							title={
							<Typography align="left" color="primary" variant="h6">
				           		{ this.props.head }
				          	</Typography>}
						/>
						<CardContent style={{paddingTop:0}} >
							<TextField 
								fullWidth
								multiline
								rows={4}
								value={this.state.comment}
								variant="outlined"
								label="Post your thoughts"
								margin="normal"
								name="post"
								onChange={this.handleCommentChange}
							/>
						</CardContent>
						<CardActions style={{paddingLeft:'24px', marginBottom:'8px'}}>
							<Button
			        		size="medium"
			        		variant="contained" 
			        		color="primary"
			        		onClick={this.handleSubmit}>
	        				Submit Comment
	      					</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default connect(null, { addComment })(PostComment);