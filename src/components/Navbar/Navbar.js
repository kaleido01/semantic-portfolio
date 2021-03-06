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
			<Menu inverted fixed="top">
				<Menu.Item
					as={Link}
					to="/semantic-portfolio/"
					name="homepage"
					header
					style={{
						marginLeft: "0.5em"
					}}>
					<Image avatar spaced="right" src={avatar} />
					Kaleido's Portfolio
				</Menu.Item>
				<Menu.Menu position="right" className="toolbarNavigationItems">
					<Menu.Item as={NavLink} exact to="/semantic-portfolio/" name="home" />
					<Menu.Item
						as={NavLink}
						to="/semantic-portfolio/profile"
						name="profile"
					/>
					<Menu.Item
						as={NavLink}
						to="/semantic-portfolio/languages"
						name="languages"
					/>
					<Menu.Item
						as={NavLink}
						to="/semantic-portfolio/skills"
						name="skills"
					/>
					<Menu.Item as={NavLink} to="/semantic-portfolio/works" name="works" />
					<Menu.Item
						as={NavLink}
						to="/semantic-portfolio/contact"
						name="contact"
					/>
				</Menu.Menu>
				<MenuSidebar />
			</Menu>
		);
	}
}

export default Navbar;
