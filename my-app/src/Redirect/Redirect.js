import React, { Component } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import PageNotFound from '../404/404.js';
import TransHeader from '../TransHeader/TransHeader.js';
import Footer from '../Footer/Footer.js';
import './Redirect.css';

class Redirect extends Component {
	render() {
		return (
		<main>
			<Match exactly pattern='/' render={() => (
				<div>
					<TransHeader/>
					<Home/>
					<Footer/>
				</div>
			)}/>
			<Match pattern="/portfolio" render={() => (
				<div>
					<TransHeader/>
					<Portfolio/>
					<Footer/>
				</div>
			)}/>
			<Match pattern="/portfolio-es6" render={() => (
				<div>
					<iframe src="https://www.icloud.com/keynote/0Vs2kAmcjlUOkXyStYL6TWfHw?embed=true"
							width="100%"
							height="740"
							frameborder="0"
							allowfullscreen="1"
							referrer="no-referrer"
					/>
					<Footer/>
				</div>
			)}/>
			<Match pattern="/about" render={() => (
				<div>
					<About/>
					<Footer/>
				</div>
			)}/>
			<Match pattern="/contact" render={() => (
				<div>
					<Contact/>
					<Footer/>
				</div>
			)}/>
			<Miss render={({location}) => (
				<PageNotFound />
			)}/>
		</main>
		);
	}
}

export default Redirect;