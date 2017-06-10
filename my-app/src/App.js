import React, {Component} from 'react';
import './App.css';
import Main from './Redirect/Redirect.js';
import Router from 'react-router/BrowserRouter';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                	<Main/>
                </div>
            </Router>
        );
    }
}

export default App;
