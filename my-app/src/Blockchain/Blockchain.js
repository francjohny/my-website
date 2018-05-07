import React, {Component} from "react";
import { Link } from 'react-router-dom';
import blockchain from './blockchain.svg';
import blockchainLogo from './blockchain-logo.svg';
import './Blockchain.css';

class Blockchain extends Component {
    render() {
        return (
        <Link to="/talks/blockchain">
            <section className="blockchain">
                <img src={blockchainLogo} alt="blockchain logo" className="blockchain-logo"/>
                <div className="blockchain-heading">
                    <img src={blockchain} alt="blockchain" className="blockchain-image"/>
                    <span className="blockchain-caption"> The Hype, The Opportunity And The Future Of Money</span>
                </div>
            </section>
        </Link>
        );
    }
}

export default Blockchain;