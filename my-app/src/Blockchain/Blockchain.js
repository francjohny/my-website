import React, {Component} from "react";
import Random from '../Random/Random.js';
import Link from 'react-router/Link';
import blockchain from './blockchain.png';

class Blockchain extends Component {
    render() {
        return (
        <Link to="/portfolio-blockchain">
            <Random background={blockchain} size="100%" />
        </Link>
        );
    }
}

export default Blockchain;