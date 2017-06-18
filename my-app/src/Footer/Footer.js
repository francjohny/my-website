import React, { Component } from 'react';
import Social from '../Social/Social.js';
import Link from 'react-router/Link';
import './Footer.css';

class Footer extends Component {
	render() {
	return (
		<footer>
			<Link className="footer-logo footer-item-spacing" to="/">Francis Johny</Link>
			<nav className="footer-nav">
				<ul className="footer-list">
					<Link className="footer-nav-item footer-item-spacing" to="/about">
						<i className="fa fa-user footer-icon" aria-hidden="true"></i>
						<span> About </span>
					</Link>
					<Link className="footer-nav-item footer-item-spacing" to="/portfolio">
						<i className="fa fa-camera-retro footer-icon" aria-hidden="true"></i>
						<span> Portfolio </span>
					</Link>
					<a className="footer-nav-item footer-item-spacing" href="mailto:francjohny@gmail.com">
						<i className="fa fa-paper-plane-o footer-icon" aria-hidden="true"></i>
						<span> Contact </span>
					</a>
				</ul>
			</nav>
			<Social color="#fff"/>
			<h5 className="copyright-info">© 2017. All rights reserved.</h5>
			<h5 className="copyright-info">Powered by React.</h5>
		</footer>
	);
	}
}

export default Footer;