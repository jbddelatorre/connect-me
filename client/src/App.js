import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';

import { BrowserRouter } from 'react-router-dom';

//Import Components
import Navbar from './components/layout/Navbar';
import Routes from './container'
import Footer from './components/layout/Footer';

const primary = purple
const secondary = yellow
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
	    light: primary[500],
	    main: '#563d7c',
	    dark: '#322348',
	    contrastThreshold:3,
	  },
	  secondary: {
	    light: '#ffe484',
	    main: secondary.A400,
	    dark: secondary.A700,
	    contrastThreshold:3,
	  },
	  error: {
	    light: primary[500],
	    main: '#563d7c',
	    dark: '#322348',
	    contrastThreshold:3,
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
	      			<Routes />
	      			<Footer />
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
