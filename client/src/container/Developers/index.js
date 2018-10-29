import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Developers from './Developers';
import DeveloperProfile from './DeveloperProfile';
import Posts from './Posts';
import Comments from './Comments'

export default () => {
	return(
		<Switch>
			<Route path="/developers" exact component={Developers} />
			<Route path="/developers/:id" exact component={DeveloperProfile} />
			<Route path="/posts" exact component={Posts} />
			<Route path="/comments/:post_id" exact component={Comments} />
		</Switch>
	)
}