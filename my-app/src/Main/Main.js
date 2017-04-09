import React, { Component } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Home from '../Home/Home.js';
import Promo from '../Promo/Promo.js';
import Carousel from '../Carousel/Carousel.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Quote from '../Quote/Quote.js';
import Blog from '../Blog/Blog.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import './Main.css';

class Main extends Component {
	render() {
	return (
	<main>
		<Match exactly pattern='/' render={() => (
			<div>
				<Carousel/>
				<Promo/>
				<Quote/>
			</div>
		)}/>
		<Match pattern="/portfolio" render={() => (
			<div>
				<Home/>
				<Portfolio/>
			</div>
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