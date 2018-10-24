import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import PrivateRoute from './components/common/PrivateRoute';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import './App.css';

//Import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Profile from './components/profile/profile'
import EditProfile from './components/profile/edit-profile';
import AddExperience from './components/profile/add-experience';
import AddEducation from './components/profile/add-education';
import Developers from './components/developers/developers.js'
import DeveloperProfile from './components/developers/developer-profile/developer-profile';
import Posts from './components/posts/all-posts/posts';
import Comments from './components/posts/comments/comments';

const primary = blue
const secondary = pink
const tertiary = red

const theme = createMuiTheme({
	overrides: {
		MuiTableCell: {
			body: {
				fontSize:18
			},
			head: {
				fontSize:16
			}
		},
		MuiFormHelperText: {
			root:{
				fontSize:16
			}
		}
	},
	typography: {
    	useNextVariants: true,
  	},
	palette: {
		primary: {
	    light: primary[300],
	    main: primary[500],
	    dark: primary[700],
	    contrastThreshold:3,
	  },
	  secondary: {
	    light: secondary.A200,
	    main: secondary.A400,
	    dark: secondary.A700,
	    contrastThreshold:3,
	  },
	  error: {
	    light: tertiary[300],
	    main: tertiary[500],
	    dark: tertiary[700],
	    contrastThreshold:3,
	    tonalOffset: 0.2,
	  },
	},
});

//Check for Token

if(localStorage.jwtToken) {
	//Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	//Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	//Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	//Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		//Logoutuser
		store.dispatch(logoutUser());
		//TODO: Clear profile
		//Redirect to login
		window.location.href = '/login';
	}
}


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	    	<BrowserRouter>
		    	<MuiThemeProvider theme={theme}>
		      		<div className="App">
		      			<Navbar />
		     			<div style={{marginTop: 50, paddingTop:'40px'}}>
		      			<Switch>
		      				<Route path="/" exact component={Landing} />
		      				<Route path="/login" exact component={Login} />
		      				<Route path="/signup" exact component={Signup} />
		      				<PrivateRoute path="/profile" exact component={Profile} />
		      				<Route path="/profile/edit-profile" exact component={EditProfile} />
		      				<Route path="/profile/add-experience" exact component={AddExperience} />
		      				<Route path="/profile/add-education" exact component={AddEducation} />
		      				<Route path="/developers" exact component={Developers} />
		      				<Route path="/developers/:id" exact component={DeveloperProfile} />
		      				<Route path="/posts" exact component={Posts} />
		      				<Route path="/comments/:post_id" exact component={Comments} />
		      			</Switch>
		      			</div>
		      		</div>
		    	</MuiThemeProvider>
		    </BrowserRouter>
	    </Provider>
    );
  }
}

Navbar.proprTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

export default App;
