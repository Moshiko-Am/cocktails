import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/cocktails">
					<img src={logo} alt="cocktail db logo" className="logo" />
				</Link>
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/cocktails">Home</Link>
				</li>
				<li>
					<Link to="/cocktails/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
