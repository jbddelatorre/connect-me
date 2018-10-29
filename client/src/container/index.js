import React, { Component } from 'react';

import PrivateRoute from '../components/common/PrivateRoute';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

// import MaintainToken from './MaintainToken'

import Landing from '../components/layout/Landing';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

import Profile from './Profile'


import Developers from '../components/developers/developers.js'
import DeveloperProfile from '../components/developers/developer-profile/developer-profile';
import Posts from '../components/posts/all-posts/posts';
import Comments from '../components/posts/comments/comments';

export default () => (
	<Switch>
		<Route path="/" exact component={Landing} />
		<Route path="/login" exact component={Login} />
		<Route path="/signup" exact component={Signup} />

		<Profile />
		

		<Route path="/developers" exact component={Developers} />
		<Route path="/developers/:id" exact component={DeveloperProfile} />
		<Route path="/posts" exact component={Posts} />
		<Route path="/comments/:post_id" exact component={Comments} />
	</Switch>

)