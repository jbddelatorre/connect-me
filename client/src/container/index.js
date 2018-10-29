import React, { Component, Fragment } from 'react';


import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';

// import MaintainToken from './MaintainToken'

import Landing from '../components/layout/Landing';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

import Profile from './Profile'

import Developers from './Developers'

export default () => (
	<Fragment>
		<Switch>
			<Route path="/" exact component={Landing} />
			<Route path="/login" exact component={Login} />
			<Route path="/signup" exact component={Signup} />
		</Switch>

		<Profile />
		<Developers />
	</Fragment>
)