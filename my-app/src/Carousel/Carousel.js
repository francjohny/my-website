import React, {Component} from 'react';
import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import Blockchain from '../Blockchain/Blockchain.js';
import BigDataAnalytics from '../BigDataAnalytics/BigDataAnalytics.js';
import ES6 from '../ES6/ES6.js';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel interval={3500}>
                <Carousel.Item>
                    <ES6/>
                </Carousel.Item>
                <Carousel.Item>
                    <Blockchain/>
                </Carousel.Item>
                <Carousel.Item>
                    <BigDataAnalytics/>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;