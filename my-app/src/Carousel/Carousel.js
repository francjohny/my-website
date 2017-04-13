import React, { Component } from 'react';
import './Carousel.css';
import Random from '../Random/Random.js';
import { Carousel } from 'react-bootstrap';
import es6 from '../../public/es6.png';
import siri from '../../public/apple_siri_cash_2.png';

class PromoCarousel extends Component {
    render() {
        return (
            <Carousel interval="50000">
                <Carousel.Item>
                    <section className="iphone-ad">
                        <img alt="900x500" height={500} src={siri}/>
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

export default PromoCarousel;