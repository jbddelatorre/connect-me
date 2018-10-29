import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../../components/common/PrivateRoute';

import EditProfile from './Edit';
import AddExperience from './AddExperience';
import AddEducation from './AddEducation';
import Summary from './Summary'

export default () => {
	return(
		<Switch>
			<PrivateRoute path="/profile" exact component={Summary} />
			<Route path="/profile/edit-profile" exact component={EditProfile} />
			<Route path="/profile/add-experience" exact component={AddExperience} />
			<Route path="/profile/add-education" exact component={AddEducation} />
		</Switch>
	)
}