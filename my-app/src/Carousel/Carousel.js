import React, {Component} from 'react';
import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import ES6 from '../ES6/ES6.js';
import CashBot from '../CashBot/CashBot.js';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel interval={3000}>
                <Carousel.Item>
                    <CashBot/>
                </Carousel.Item>
                <Carousel.Item>
                    <ES6/>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;