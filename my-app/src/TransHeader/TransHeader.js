import React, {Component} from "react";
import Link from 'react-router/Link';
import "./TransHeader.css";
import '../Header/Header.css';

class TransHeader extends Component {
    render() {
        return (
            <header className="trans-header">
                <nav className="header-nav">
                    <ul className="header-list">
                        <Link className="logo" to="/" style={{color: this.props.color}}> Francis Johny </Link>
                        <Link className="header-nav-item" to="/about" style={{color: this.props.color}}> About </Link>
                        <Link className="header-nav-item" to="/contact" style={{color: this.props.color}}> Contact </Link>
                        <a className="header-nav-item" href="http://www.francls.com" style={{color: this.props.color}}> Resume </a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;