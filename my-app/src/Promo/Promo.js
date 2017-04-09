import React, { Component } from 'react';
import './Promo.css';

class Home extends Component {
    render() {
        return (
            <section className="promos">
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