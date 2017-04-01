import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <section className="home">
                <a className="promo promo-desk" href="#">
                    <span className="promo-description">iCode</span>
                </a>
                <a className="promo promo-piano" href="#">
                    <span className="promo-description">iMusic</span>
                </a>
                <a className="promo promo-chess" href="#">
                    <span className="promo-description">iChess</span>
                </a>
            </section>
        );
    }
}

export default Home;