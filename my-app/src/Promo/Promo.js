import React, { Component } from 'react';
import './Promo.css';

class Promo extends Component {
    render() {
        return (
            <section className="promos">
                <a className="promo" href="#">
                    {/*<span className="promo-description">Leopold Butters Stotch </span>*/}
                </a>
                <a className="promo" href="#">
                    {/*<span className="promo-description">Eric Cartman</span>*/}
                </a>
                <a className="promo" href="#">
                    {/*<span className="promo-description">Kenny McCormick</span>*/}
                </a>
            </section>
        );
    }
}

export default Promo;