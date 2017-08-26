import React, { Component } from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import DisplayPicture from '../DisplayPicture/DisplayPicture.js';
import Portfolio from '../Portfolio/Portfolio.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import PageNotFound from '../404/404.js';
import TransHeader from '../TransHeader/TransHeader.js';
import TransFooter from '../TransFooter/TransFooter.js';
import Footer from '../Footer/Footer.js';
import './Redirect.css';

class Redirect extends Component {
	render() {
		return (
		<main>
			<Match exactly pattern="/" render={() => (
				<div>
					<TransHeader color="#000"/>
					<DisplayPicture/>
					<TransFooter backgroundColor="#f8fdff"/>
				</div>
			)}/>
			<Match exactly pattern="/portfolio" render={() => (
				<div>
					<TransHeader color="#000"/>
					<Portfolio/>
					<TransFooter backgroundColor="#f8fdff"/>
				</div>
			)}/>
			<Match pattern="/portfolio/es6" render={() => (
				<div>
					<iframe title="ES6 Presentation"
							src="https://www.icloud.com/keynote/0Vs2kAmcjlUOkXyStYL6TWfHw?embed=true"
							width="100%"
							height="740"
							frameborder="0"
							allowfullscreen="1"
							referrer="no-referrer"
					/>
					<Footer/>
				</div>
			)}/>
			<Match pattern="/portfolio/blockchain" render={() => (
				<div>
					<iframe title="Blockchain Presentation"
							src="https://www.icloud.com/keynote/0e1UN2MfHz6cnETziv6Sc-Msg?embed=true"
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
					<TransHeader color="#000"/>
					<About/>
				</div>
			)}/>
			<Match pattern="/contact" render={() => (
				<div>
					<TransHeader color="#ddd"/>
					<Contact color="fff"/>
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