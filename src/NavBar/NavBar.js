import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';

function NavBar() {
	// The navbar list the Jobly logo as a link for the home page. It will also list NavLinks for companies,
	return (
		<div>
			<Navbar className="my-2" color="dark" dark>
				<NavbarBrand href="/">Jobly</NavbarBrand>
				<Nav className="Nav">
					<NavItem>
						<NavLink to="/companies">Companies</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/jobs">Jobs</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/login">Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/signup">Signup</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/profile">Profile</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
