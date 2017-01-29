import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
	return (
		<div className="container">
	    	<input id="toggle" type="checkbox"/>
		    <label className="toggle-container" htmlFor="toggle">
		        <span className="button button-toggle">☰</span>
		    </label>
			<div className="logo">
				<h1>Francis Johny</h1>
			</div>
			<nav className="nav">
		        <ul className="list">
			        <a className="nav-item" href="/">
						Home
			        </a>
			        <a className="nav-item" href="#">
						Portfolio
			        </a>
			        <a className="nav-item" href="#">
						About
			        </a>
			        <a className="nav-item" href="#">
						Resume
			        </a>
			        <a className="nav-item" href="#">
						Contact
			        </a>
		        </ul>
			</nav>
		</div>
	);
	}
}

export default Header;