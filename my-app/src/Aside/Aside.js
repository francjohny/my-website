import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
		<nav className="aside">
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
    );
  }
}

export default Aside;