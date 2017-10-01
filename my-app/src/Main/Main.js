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
import DocumentTitle from 'react-document-title';
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
						"title": "Exploring ES6 & Beyond",
						"src": "https://www.icloud.com/keynote/0Vs2kAmcjlUOkXyStYL6TWfHw?embed=true"
					})
				}}/>
				<Route path="/portfolio/blockchain" component={() => {
					return TalkPage({
						"title": "Blockchain Demystified",
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
	<DocumentTitle title='Francis Johny'>
		<div>
			<TransHeader color="#000"/>
			<DisplayPicture/>
			<TransFooter backgroundColor="#f8fdff"/>
		</div>
	</DocumentTitle>
);

const PortfolioPage = () => (
	<DocumentTitle title='Portfolio'>
		<div>
			<TransHeader color="#000"/>
			<Portfolio/>
			<TransFooter backgroundColor="#f8fdff"/>
		</div>
	</DocumentTitle>
);

const TalkPage = ({ title, src, width="100%", height="740" }) => {
	return (
		<DocumentTitle title={title}>
			<div>
				<iframe title={title}
						src={src}
						width={width}
						height={height}
						frameBorder="0"
						allowFullScreen="1"
						referrer="no-referrer"
				/>
				<Footer/>
			</div>
		</DocumentTitle>
	)
};

const AboutPage = () => (
	<DocumentTitle title='About'>
		<div>
			<TransHeader color="#000"/>
			<About/>
		</div>
	</DocumentTitle>
);

const ContactPage = () => (
	<DocumentTitle title='Contact'>
		<div>
			<TransHeader color="#ddd"/>
			<Contact color="fff"/>
		</div>
	</DocumentTitle>
);

export default Main;