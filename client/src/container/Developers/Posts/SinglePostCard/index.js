import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import ThumbsUp from '@material-ui/icons/ThumbUpOutlined';
import ThumbsDown from '@material-ui/icons/ThumbDownOutlined';

const styles = {
	card:{
		marginTop:40,
		paddingTop:16,
		paddingBottom:16,
		minHeight: 120
	},
	buttonText: {
		marginRight: 16,
		marginLeft: 16
	},
	thumb : {
		fontSize:16
	}
}



class SinglePost extends Component {
	
	handleLike = () => {
		const { handleFunction, user, post} = this.props
		handleFunction(user, post._id)
	}


	render() {
		const { post, liked } = this.props;

		return (
			<Grid container justify="center">
				<Grid item xs={8}>
					<Card style={styles.card}>
						<Grid container>
							<Grid item xs={3}>
								<Grid container justify="center">
									<Avatar
									style={{height:100, width:100, marginLeft:16, marginRight:16}} 
									src={ post.avatar }
									alt="IMG"
									/>
								</Grid>
								<Typography align="center" color="inherit" variant="subtitle1">
						           		{ post.name }
						        </Typography>
							</Grid>
							<Grid item xs={9}>
								<CardContent>
									<Typography align="left" color="inherit" variant="body1">
						           		{ post.text }
						          	</Typography>
								</CardContent>
								<CardActions>
									<Button
					        		size="small"
					        		variant={ liked ? "text":"contained" } 
					        		color="default"
					        		onClick={this.handleLike}
					       			>
			        				 <Typography style={styles.buttonText } align="left" color="inherit" variant="body2">
						           		{`${post.likes.length}`}
						          	</Typography>
			        				 {liked ? <ThumbsDown style={styles.thumb} />:<ThumbsUp style={styles.thumb} />}
			      					</Button>
			      					<Button
					        		size="small"
					        		variant="contained" 
					        		color="primary"
					        		component = {Link}
					        		to = {{
					        			pathname:`/comments/${post._id}`
					        		}}
					       			>
			        				{`Comments (${post.comments.length})`}
			      					</Button>
								</CardActions>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		)
	}
};

export default SinglePost;
