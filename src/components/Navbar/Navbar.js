import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../static/ハリネズミ.jpg";

import { Menu, Image, Container } from "semantic-ui-react";

import MenuSidebar from "./MenuSidebar";

class Navbar extends Component {
	state = { activeItem: "" };

	handleItemClick = event => {
		this.setState({ activeItem: event.target.name });
	};

	render() {
		return (
			<React.Fragment>
				<Menu inverted fixed="top">
					<Container>
						<Menu.Item
							as={Link}
							to="/"
							name="homepage"
							header
							style={{
								marginLeft: "0.5em"
							}}>
							<Image avatar spaced="right" src={avatar} />
							Kaleido's Portfolio
						</Menu.Item>
						<Menu.Menu position="right" className="toolbarNavigationItems">
							<Menu.Item as={NavLink} exact to="/" name="home" />
							<Menu.Item as={NavLink} to="/profile" name="profile" />
							<Menu.Item as={NavLink} to="/languages" name="languages" />
							<Menu.Item as={NavLink} to="/skills" name="skills" />
							<Menu.Item as={NavLink} to="/works" name="works" />
							<Menu.Item as={NavLink} to="/contact" name="contact" />
						</Menu.Menu>
						<MenuSidebar />
					</Container>
				</Menu>
			</React.Fragment>
		);
	}
}

export default Navbar;
