import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <section className="portfolio">
            	<div className="app"><span className="main-letter">A</span></div>
                <div className="app"><span className="main-letter">B</span></div>
                <div className="app"><span className="main-letter">C</span></div>
                <div className="app"><span className="main-letter">D</span></div>
                <div className="app"><span className="main-letter">E</span></div>
            </section>
        );
    }
}

export default Portfolio;