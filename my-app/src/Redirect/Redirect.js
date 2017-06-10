import React, { Component } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Blog from '../Blog/Blog.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import PageNotFound from '../404/404.js';
import './Redirect.css';

class Redirect extends Component {
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
				<Blog/>
			)}/>
			<Match pattern="/about" render={() => (
				<About/>
			)}/>
			<Match pattern="/contact" render={() => (
				<Contact/>
			)}/>
			<Miss render={({location}) => (
				<PageNotFound />
			)}/>
		</main>
		);
	}
}

export default Redirect;