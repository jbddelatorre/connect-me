import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	    	<MuiThemeProvider theme={theme}>
	      		<div className="App">
	      			<Navbar />
	      			<Route path="/" exact component={Landing} />
	      			<div style={{marginTop: 80, paddingTop:'30px', paddingBottom:50}}>
	      				<Route path="/login" exact component={Login} />
	      				<Route path="/signup" exact component={Signup} />
	      				<Route path="/profile" exact component={Profile} />
	      				<Route path="/profile/edit-profile" exact component={EditProfile} />
	      				<Route path="/profile/add-experience" exact component={AddExperience} />
	      				<Route path="/profile/add-education" exact component={AddEducation} />
	      				<Route path="/developers" exact component={Developers} />
	      				<Route path="/developers/id" exact component={DeveloperProfile} />
	      			</div>
	      		</div>
	    	</MuiThemeProvider>
	    </BrowserRouter>
    );
  }
}

export default App;
