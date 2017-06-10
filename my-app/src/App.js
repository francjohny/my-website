import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Redirect/Redirect.js';
import Footer from './Footer/Footer.js';
import Router from 'react-router/BrowserRouter';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                	<Header/>
                	<Main/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
