import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel.js';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <section>
                <Carousel/>
                <div className="r">
                </div>
            </section>
        );
    }
}

export default Portfolio;