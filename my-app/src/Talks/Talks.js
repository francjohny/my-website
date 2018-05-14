import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel.js';
import './Talks.css';

class Talks extends Component {
    render() {
        return (
            <section className="talks">
                <Carousel />
            </section>
        );
    }
}

export default Talks;