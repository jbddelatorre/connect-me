import React, { Fragment } from 'react';


import {Route, Switch } from 'react-router-dom';

// import MaintainToken from './MaintainToken'

import Landing from './Landing';
import Login from './Account/Login';
import Signup from './Account/Signup';
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