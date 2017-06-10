import React, {Component} from "react";
import Random from '../Random/Random.js';
import Link from 'react-router/Link';
import es6 from './es6.png';

class ES6 extends Component {
    render() {
        return (
        <Link to="/portfolio-es6">
            <Random background={es6} size="100%" color="#F6D328"/>
        </Link>
        );
    }
}

export default ES6;