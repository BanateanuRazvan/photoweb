import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = (props) => {
	return(
		<div className='navbar'>

			<Link to="/">
			<h3> Home </h3>
			</Link>

			<Link to="/bio">
			<h3 > Bio </h3>
			</Link>

			<Link to="/contact">
			<h3> Contact </h3>
			</Link>
			
			
		</div>
		);

}

export default Navbar;