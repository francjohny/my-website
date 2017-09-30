import React, { Component } from 'react';
import DisplayPicture from '../DisplayPicture/DisplayPicture.js';
import Portfolio from '../Portfolio/Portfolio.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import PageNotFound from '../404/404.js';
import TransHeader from '../TransHeader/TransHeader.js';
import TransFooter from '../TransFooter/TransFooter.js';
import Footer from '../Footer/Footer.js';
import { Switch, Route } from 'react-router-dom';
import './Main.css';

class Main extends Component {
	render() {
		return (
		<main>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/portfolio" component={PortfolioPage}/>
				<Route path="/portfolio/es6" component={() => {
					return TalkPage({
						"title": "ES6 Presentation",
						"src": "https://www.icloud.com/keynote/0Vs2kAmcjlUOkXyStYL6TWfHw?embed=true"
					})
				}}/>
				<Route path="/portfolio/blockchain" component={() => {
					return TalkPage({
						"title": "Blockchain Presentation",
						"src": "https://www.icloud.com/keynote/0e1UN2MfHz6cnETziv6Sc-Msg?embed=true"
					})
				}}/>
				<Route path="/about" component={AboutPage}/>
				<Route path="/contact" component={ContactPage}/>
				<Route component={PageNotFound}/>
			</Switch>
		</main>
		);
	}
}

const HomePage = () => (
	<div>
		<TransHeader color="#000"/>
		<DisplayPicture/>
		<TransFooter backgroundColor="#f8fdff"/>
	</div>
)

const PortfolioPage = () => (
	<div>
		<TransHeader color="#000"/>
		<Portfolio/>
		<TransFooter backgroundColor="#f8fdff"/>
	</div>
)

const TalkPage = ({ title, src, width="100%", height="740" }) => {
	return (
		<div>
			<iframe title={title}
					src={src}
					width={width}
					height={height}
					frameborder="0"
					allowfullscreen="1"
					referrer="no-referrer"
			/>
			<Footer/>
		</div>
	)
}

const AboutPage = () => (
	<div>
		<TransHeader color="#000"/>
		<About/>
	</div>
)

const ContactPage = () => (
	<div>
		<TransHeader color="#ddd"/>
		<Contact color="fff"/>
	</div>
)

export default Main;