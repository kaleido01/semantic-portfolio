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
						<Route exact path="/" component={Homepage} />
						<Route path="/profile" component={Profile} />
						<Route path="/languages" component={Languages} />
						<Route path="/skills" component={Skills} />
						<Route path="/works" component={Works} />
						<Route path="/contact" component={Contact} />
					</div>
				</Switch>
			</div>
		);
	}
}

export default App;
