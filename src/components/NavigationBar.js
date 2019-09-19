import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #bbb;

		&:hover {
			color: white;
		}
	}
`;

export class NavigationBar extends Component {
	auth() {
		localStorage.getItem('auth');
	}
	logout() {
		localStorage.clear();
		window.location.replace('/login');
	}
	render() {
		return (
			<Styles>
				<Navbar expand="lg">
					<Navbar.Brand>My Inventory</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link>
									<Link to="/Product">Products</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to="/AddProduct">Add Product</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to="/Logout">Logout</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to="/Register">Register</Link>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styles>
		);
	}
}

export default NavigationBar;
