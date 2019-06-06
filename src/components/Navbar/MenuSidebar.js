import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

class MenuSidebar extends Component {
	state = { sidebar: false };

	closeSidebar = () => {
		this.setState({ sidebar: false });
	};
	openSidebar = () => {
		this.setState({ sidebar: true });
	};

	render() {
		const { sidebar } = this.state;
		return (
			<React.Fragment>
				<Menu.Item
					as={Link}
					icon="bars"
					position="right"
					onClick={this.openSidebar}
					className="toolbar"
				/>
				<Sidebar
					as={Menu}
					animation="overlay"
					icon="labeled"
					inverted
					onHide={this.closeSidebar}
					vertical
					direction="right"
					visible={sidebar}
					width="thin">
					<Menu.Menu>
						<Menu.Item
							as={NavLink}
							exact
							to="/semantic-portfolio/"
							onClick={this.closeSidebar}>
							<Icon name="home" vertical />
							Home
						</Menu.Item>
						<Menu.Item
							as={NavLink}
							to="/semantic-portfolio/profile"
							onClick={this.closeSidebar}>
							<Icon name="user" vertical />
							Profile
						</Menu.Item>
						<Menu.Item
							as={NavLink}
							to="/semantic-portfolio/languages"
							onClick={this.closeSidebar}>
							<Icon name="sitemap" vertical />
							Languages
						</Menu.Item>
						<Menu.Item
							as={NavLink}
							to="/semantic-portfolio/skills"
							onClick={this.closeSidebar}>
							<Icon name="code" vertical />
							Skills
						</Menu.Item>
						<Menu.Item
							as={NavLink}
							to="/semantic-portfolio/works"
							onClick={this.closeSidebar}>
							<Icon name="cloud upload" vertical />
							Works
						</Menu.Item>
						<Menu.Item
							as={NavLink}
							to="/semantic-portfolio/contact"
							onClick={this.closeSidebar}>
							<Icon name="mail" vertical />
							Contact
						</Menu.Item>
					</Menu.Menu>
				</Sidebar>
			</React.Fragment>
		);
	}
}

export default MenuSidebar;
