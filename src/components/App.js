import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Profile from "./Profile";
import Homepage from "./Homepage";
import Languages from "./Languages";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<div className="App">
						<Route exact path="/semantic-portfolio" component={Homepage} />
						<Route path="/semantic-portfolio/profile" component={Profile} />
						<Route path="/semantic-portfolio/languages" component={Languages} />
						<Route path="/semantic-portfolio/skills" component={Skills} />
						<Route path="/semantic-portfolio/works" component={Works} />
						<Route path="/semantic-portfolio/contact" component={Contact} />
					</div>
				</Switch>
			</div>
		);
	}
}

export default App;
