import React, { Component } from 'react';
import DisplayPicture from '../DisplayPicture/DisplayPicture.js';
import Talks from '../Talks/Talks.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Tweet from '../Tweets/Tweet';
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
				<Route exact path="/talks" component={TalksPage}/>
				<Route path="/talks/es6" component={() => {
					return TalkPage({
						"title": "Exploring ES6 & Beyond",
						"src": "https://www.icloud.com/keynote/0Vs2kAmcjlUOkXyStYL6TWfHw?embed=true"
					})
				}}/>
				<Route path="/talks/blockchain" component={() => {
					return TalkPage({
						"title": "Blockchain Demystified",
						"src": "https://www.icloud.com/keynote/0e1UN2MfHz6cnETziv6Sc-Msg?embed=true"
					})
				}}/>
				<Route path="/talks/big-data" component={() => {
					return MoviePage({
						"title": "Big Data Analytics",
						"src": "https://www.youtube.com/embed/zFNbIp_MnxA?ecver=2"
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
			<TransHeader logoColor="#000" color="#000"/>
			<DisplayPicture/>
            <Tweet timestamp={new Date().toString()}/>
			<TransFooter backgroundColor="#fff"/>
		</div>
	</DocumentTitle>
);

const TalksPage = () => (
	<DocumentTitle title='Talks'>
		<div>
			<TransHeader logoColor="#000" color="#000"/>
			<Talks/>
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

const MoviePage = ({title, src}) => {
	return (
		<DocumentTitle title={title}>
			<div>
				<div style={{"position":"relative", "height":"0", "paddingBottom" :"56.25%"}}>
					<iframe title={title}
							src={src}
							width="640"
							height="360"
							frameBorder="0"
							style={{"position":"absolute", "width":"100%", "height":"100%", "left":"0"}}
							allowFullScreen="true">
					</iframe>
				</div>
				<Footer/>
			</div>
		</DocumentTitle>
	)
};

const AboutPage = () => (
	<DocumentTitle title='About'>
		<div>
			<TransHeader logoColor="#000" color="#000"/>
			<div className="about-contact">
				<About color="#fff"/>
			</div>
		</div>
	</DocumentTitle>
);

const ContactPage = () => (
	<DocumentTitle title='Contact'>
		<div>
			<TransHeader logoColor="#fff" color="#ddd"/>
			<div className="about-contact">
				<Contact color="#fff"/>
			</div>
		</div>
	</DocumentTitle>
);

export default Main;