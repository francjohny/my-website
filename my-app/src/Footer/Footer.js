import React, { Component } from 'react';
import Social from '../Social/Social.js';
import Link from 'react-router/Link';
import './Footer.css';

class Footer extends Component {
	render() {
	return (
		<footer>
			<h2 className="footer-logo">Francis Johny</h2>
			<div className="social">
				<strong>Keep in touch</strong>
				<Social color="#fff"/>
			</div>
			<nav className="footer-nav">
				<ul className="footer-list">
					<Link className="footer-nav-item" to="/"> Home </Link>
					<Link className="footer-nav-item" to="/portfolio"> Portfolio </Link>
					<Link className="footer-nav-item" to="/books"> Books </Link>
					<a className="footer-nav-item" href="http://www.francls.com"> About </a>
                    <a className="footer-nav-item" href="mailto:francjohny@gmail.com"> Contact </a>	
				</ul>
			</nav>
			<div className="copyright-info">
				<h5>© Francis Johny 2017</h5>
			</div>
		</footer>
	);
	}
}

export default Footer;