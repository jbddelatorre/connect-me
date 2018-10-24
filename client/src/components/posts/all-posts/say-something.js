import React, { Component } from 'react';

import { addPost } from '../../../actions/postActions';
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


class SaySomethingFrom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			post:''
		}
	}

	handlePostChange = (e) => {
		const newPost = e.target.value;
		this.setState({post: newPost})
	}

	handleSubmit = () => {
		const { name, avatar, user } = this.props
		const addPost = {
			text:this.state.post,
			name:name,
			avatar:avatar,
			user:user
		}
		this.props.addPost(addPost)
		this.setState({post: ''})
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
								value={this.state.post}
								variant="outlined"
								label="Post your thoughts"
								margin="normal"
								name="post"
								onChange={this.handlePostChange}
							/>
						</CardContent>
						<CardActions style={{paddingLeft:'24px', marginBottom:'8px'}}>
							<Button
			        		size="medium"
			        		variant="contained" 
			        		color="primary"
			        		onClick={this.handleSubmit}>
	        				Submit Post
	      					</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default connect(null, { addPost })(SaySomethingFrom);