import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
			      <div className="App">
					    <div className="App-body">
					        <div className="App-content">
					            <h2 className="h2">Hi!</h2>
					            <h2 className="h2">Francis!</h2>
					        </div>
					        <nav className="App-nav">
					            <ul className="list">
			                    <a href="https://in.linkedin.com/in/francis-johny">
					                	<li>
			                        <i style={{ "color": "#4875B4"}} className="fa fa-linkedin" aria-hidden="true"></i>
					                	</li>
			                    </a>
			                    <a href="https://github.com/francjohny">
					                	<li>
			                        <i style={{ "color": "#4875B4"}} className="fa fa-github" aria-hidden="true"></i>
					                	</li>
			                    </a>
			                    <a href="https://twitter.com/13urstskill">
					                	<li>
			                        <i style={{ "color": "#4875B4"}} className="fa fa-twitter" aria-hidden="true"></i>
					                	</li>
			                    </a>
			                    <a href="mailto:francjohny@gmail.com">
					                	<li>
			                        <i style={{ "color": "#4875B4"}} className="fa fa-envelope-o" aria-hidden="true"></i>
					                	</li>
			                    </a>
					            </ul>
					        </nav>
					    </div>
						</div>
    );
  }
}

export default App;
