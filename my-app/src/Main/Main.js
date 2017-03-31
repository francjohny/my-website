import React, { Component } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Books from '../Books/Books.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import './Main.css';

class Main extends Component {
	render() {
	return (
	<main>
		<Match exactly pattern='/' render={() => (
			<Home/>
		)}/>
		<Match pattern="/portfolio" render={() => (
			<Portfolio/>
		)}/>
		<Match pattern="/blog" render={() => (
			<Books/>
		)}/>
		<Match pattern="/about" render={() => (
			<About/>
		)}/>
		<Match pattern="/contact" render={() => (
			<Contact/>
		)}/>
		<Miss render={({location}) => (
			<div>
				<h3>
					Error! No matches for <code>{location.pathname}</code>
				</h3>
			</div>
		)}/>
	</main>
	);
	}
}

export default Main;