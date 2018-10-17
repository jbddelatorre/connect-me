import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { BrowserRouter, Route } from 'react-router-dom';



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
		primary: purple,
		secondary: green,
	},
	status: {
		danger: 'orange',
	}
});

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	    	<MuiThemeProvider theme={theme}>
	      		<div className="App">
	      			<Navbar />
	      			<Route path="/" exact component={Landing} />
	      			<div style={{marginTop: 60, padding:30}}>
	      				<Route path="/login" exact component={Login} />
	      				<Route path="/signup" exact component={Signup} />
	      				<Route path="/profile" exact component={Profile} />
	      				<Route path="/profile/edit-profile" exact component={EditProfile} />
	      				<Route path="/profile/add-experience" exact component={AddExperience} />
	      				<Route path="/profile/add-education" exact component={AddEducation} />
	      			</div>
	      		</div>
	    	</MuiThemeProvider>
	    </BrowserRouter>
    );
  }
}

export default App;
