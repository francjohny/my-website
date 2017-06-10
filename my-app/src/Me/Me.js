import React, { Component } from 'react';
import './Me.css';
import Typewriter from '../Typewriter/Typewriter.js'

class Me extends Component {
    render() {
        return (
            <section className="me">
                <h2 className="logo">Francis Johny</h2>
                <Typewriter/>
                <a className="github-button" href="https://github.com/francjohny">View on GitHub</a>
            </section>
        );
    }
}

export default Me;