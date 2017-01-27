import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<nav className="App-header">
		        <ul className="list">
			        <a href="#">
						<li>Home</li>
			        </a>
			        <a href="#">
						<li>Portfolio</li>
			        </a>
			        <a href="#">
						<li>About</li>
			        </a>
			        <a href="#">
						<li>Resume</li>
			        </a>
			        <a href="#">
						<li>Contact</li>
			        </a>
		        </ul>
	    	</nav>
			<div className="App-body">
				<strong className="highlight"> developer </strong>
			</div>
		    <nav className="App-nav">
		        <ul className="list">
			        <a href="https://in.linkedin.com/in/francis-johny">
						<li>
			            	<i style={{ "color": "#fff"}} className="fa fa-linkedin" aria-hidden="true"></i>
						</li>
			        </a>
			        <a href="https://github.com/francjohny">
						<li>
			            	<i style={{ "color": "#fff"}} className="fa fa-github" aria-hidden="true"></i>
						</li>
			        </a>
			        <a href="https://twitter.com/13urstskill">
						<li>
			            	<i style={{ "color": "#fff"}} className="fa fa-twitter" aria-hidden="true"></i>
						</li>
			        </a>
			        <a href="mailto:francjohny@gmail.com">
						<li>
			            	<i style={{ "color": "#fff"}} className="fa fa-envelope-o" aria-hidden="true"></i>
						</li>
			        </a>
		        </ul>
		    </nav>
		</div>
    );
  }
}

export default App;
