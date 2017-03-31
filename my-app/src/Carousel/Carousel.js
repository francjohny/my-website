import React, { Component } from 'react';
import './Carousel.css';
import Typewriter from '../Typewriter/Typewriter.js'

class Carousel extends Component {
    render() {
        return (
            <section className="carousel">
                <h2 className="logo">Francis Johny</h2>
                <Typewriter/>
            </section>
        );
    }
}

export default Carousel;