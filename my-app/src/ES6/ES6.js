import React, {Component} from "react";
import Link from 'react-router/Link';
import es6 from './es6.svg';
import './ES6.css';

class ES6 extends Component {
    render() {
        return (
            <Link to="/portfolio/es6">
                <section className="es6">
                    <img src={es6} alt="es6" className="es6-ppt"/>
                </section>
            </Link>
        );
    }
}

export default ES6;