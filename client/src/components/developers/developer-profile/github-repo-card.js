import React, { Component } from 'react';

//Material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const style={
	card: {
		marginBottom: 32
	},
	righttext: {
		marginLeft:8,
		marginRight:8,
		borderRadius:8,
		paddingLeft:4,
		paddingRight:4,
		color:'white'
	},
	container: {
		marginTop:8,
		padding:8,
		paddingLeft:32,
		marginBottom:8
	},
	stars:{
		backgroundColor:'#17a2b8'
	},
	watchers:{
		backgroundColor:'#6c757d'
	},
	forks:{
		backgroundColor:'#28a745'
	},
	link: {
		color:'black',
		fontSize:16,
		'&:hover' : {
			color:'black',
			textDecoration:'none'
		}
	}
}


class GithubCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clientId:'83d64f35b97aebc72517',
			clientSecret:'77814259460e76e2f5dba180a2f69ce3b42267ae',
			count:5,
			sort:'created: asc',
			repos:[]
		}
	}

	componentDidMount() {
		const { data } = this.props
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(`https://api.github.com/users/${data}/repos?per_page=${count}&sort={sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(res => res.json())
			.then(data => {
				this.setState({repos: data})
			}).catch(err => console.log(err))
	}

	render() {
		const { classes, data } = this.props
		const { repos } = this.state;
		console.log(repos)
		const repoItems = repos.map(r => (
			<Grid  className={classes.container} key={r.id} container spacing={8}>	
				<Grid item xs={6}>
					<Grid item xs={12}>
						<Typography align="left" variant="h6">
						{ r.full_name }
						</Typography>
					</Grid>
					<Grid item xs={12}>
							<Typography align="left" variant="body1">
							<a className={classes.link} rel="noopener noreferrer"target="_blank" href={r.html_url}>{r.html_url}</a>
							</Typography>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container wrap="nowrap">
						<Typography style={{...style.righttext, ...style.stars}} variant="body1">
						Stars: {r.stargazers_count}
						</Typography>
						<Typography style={{...style.righttext, ...style.watchers}} variant="body1">
						Watchers: {r.watches_count}
						</Typography>
						<Typography style={{...style.righttext, ...style.forks}} variant="body1">
						Forks: {r.forks_count}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		))
		return (
			<Card className={classes.card}>
				{
					repos.length == 0 ?
					'No Repos Found'
					:
					repoItems
				}	
			</Card>
		)
	}
}

export default withStyles(style)(GithubCard)