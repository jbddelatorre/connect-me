import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SaySomethingForm from './say-something'
import SinglePost from './single-post-card'

// Component Imports

// Material UI Imports

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Posts extends Component {
	render() {
		return (
			<SaySomethingForm />
		);
	}
}

export default Posts;
