import React, {Component} from "react";
import Link from 'react-router/Link';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="header-nav">
                    <ul className="header-list">
                        <Link className="header-logo" to="/"> </Link>
                        <Link className="header-nav-item" to="/"> Home </Link>
                        <Link className="header-nav-item" to="/portfolio"> Portfolio </Link>
                        <Link className="header-nav-item" to="/blog"> Blog </Link>
                        <a className="header-nav-item" href="http://www.francls.com"> About </a>
                        <a className="header-nav-item" href="mailto:francjohny@gmail.com"> Contact </a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;