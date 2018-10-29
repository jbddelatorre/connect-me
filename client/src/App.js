import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { BrowserRouter } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';


//Import Components
import Navbar from './components/layout/Navbar';
import Routes from './container'


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
	      			<Navbar />
	     			<div style={{marginTop: 50, paddingTop:'40px'}}>
	      				<Routes />
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
