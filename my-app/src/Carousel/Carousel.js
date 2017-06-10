import React, { Component } from 'react';
import './Carousel.css';
import Random from '../Random/Random.js';
import { Carousel } from 'react-bootstrap';
import es6 from './es6.png';
import bot from './bot.png';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel interval={3000}>
                <Carousel.Item>
                    <section className="iphone-ad">
                        <img alt="900x500" height={500} src={bot}/>
                        <section className="caption">
                            Introducing <br/>
                            <strong>Cash Bot</strong>
                            <p>The first bot to send money.</p>
                        </section>
                    </section>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://speakerdeck.com/francjohny/ecmascript-6-and-beyond">
                        <Random background={es6} size="100%" color="#F6D328"/>
                    </a>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default MyCarousel;