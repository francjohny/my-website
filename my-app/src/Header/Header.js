import React, {Component} from "react";
import Link from 'react-router/Link';
import Typewriter from '../Typewriter/Typewriter.js';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <h2 className="header-logo">Francis Johny</h2>
                <Typewriter/>
                <nav className="header-nav">
                    <ul className="header-list">
                        <Link className="header-nav-item" to="/"> Home </Link>
                        <Link className="header-nav-item" to="/portfolio"> Portfolio </Link>
                        <Link className="header-nav-item" to="/books"> Books </Link>
                        <a className="header-nav-item" href="http://www.francls.com"> About </a>
                        <a className="header-nav-item" href="mailto:francjohny@gmail.com"> Contact </a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;