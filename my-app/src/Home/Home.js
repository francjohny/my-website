import React, { Component } from 'react';
import './Home.css';
import Typewriter from '../Typewriter/Typewriter.js'

class Home extends Component {
    render() {
        return (
            <section className="home">
                <h2 className="logo">Francis Johny</h2>
                <Typewriter/>
                <a className="github-button" href="https://github.com/francjohny/my-website" data-style="mega" aria-label="Star francjohny/my-website on GitHub">View on GitHub</a>
            </section>
        );
    }
}

export default Home;