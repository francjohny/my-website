import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./TransHeader.css";
import '../Header/Header.css';

class TransHeader extends Component {
    render() {
        return (
            <header className="trans-header">
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="logo"><Link to="/" style={{color: this.props.color}}> Francis Johny </Link></li>
                        <li className="header-nav-item"><Link to="/portfolio" style={{color: this.props.color}}> Portfolio </Link></li>
                        <li className="header-nav-item"><Link to="/about" style={{color: this.props.color}}> About </Link></li>
                        <li className="header-nav-item"><Link to="/contact" style={{color: this.props.color}}> Contact </Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;