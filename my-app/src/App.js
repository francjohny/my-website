import React, {Component} from 'react';
import './App.css';
import Header from './Header/Header.js';
import Carousel from './Carousel/Carousel.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import Router from 'react-router/BrowserRouter';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                	<Header/>
                    <Carousel/>
                	<Main/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
