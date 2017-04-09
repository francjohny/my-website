import React, { Component } from 'react';
import './Carousel.css';
import Home from '../Home/Home.js';
import Random from '../Random/Random.js';
import { Carousel } from 'react-bootstrap';
import butters from '../../public/butters.png';
import siri1 from '../../public/apple_siri_cash_1.jpg';
import siri2 from '../../public/apple_siri_cash_2.jpg';
import desk from '../../public/headphones.jpg';

class PromoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Home/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" height={500} src={siri1}/>
                    <img alt="900x500" height={500} src={siri2}/>
                </Carousel.Item>
                {/*<Carousel.Item>*/}
                    {/*<img alt="900x500" height={500} src={butters}/>*/}
                {/*</Carousel.Item>*/}
            </Carousel>
        );
    }
}

export default PromoCarousel;