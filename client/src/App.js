import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { BrowserRouter, Route, Link } from 'react-router-dom';



import './App.css';

//Import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/login/Login';



const theme = createMuiTheme({
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
	      			<div style={{marginTop: 100}}>
	      				<Route path="/" exact component={Landing} />
	      				<Route path="/login" exact component={Login} />
	      			</div>
	      		</div>
	    	</MuiThemeProvider>
	    </BrowserRouter>
    );
  }
}

export default App;
