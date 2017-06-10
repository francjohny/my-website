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
                        <Link className="header-nav-item" to="/"> Home </Link>
                        <Link className="header-nav-item" to="/portfolio"> Portfolio </Link>
                        <Link className="header-nav-item" to="#"> Blog </Link>
                        <a className="header-nav-item" href="http://www.francls.com"> About </a>
                        <a className="header-nav-item" href="mailto:francjohny@gmail.com"> Contact </a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;