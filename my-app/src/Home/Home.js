import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <section className="home">
                <div className="promo-desk"></div>
                <div className="promo-piano"></div>
                <div className="promo-chess"></div>
            </section>
        );
    }
}

export default Home;