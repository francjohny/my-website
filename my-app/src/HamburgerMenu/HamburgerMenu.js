import React, {Component} from "react";
import Link from 'react-router/Link';
import "./HamburgerMenu.css";

class HamburgerMenu extends Component {
    render() {
        return (
            <div className="container">
                <input id="toggle" type="checkbox"/>
                <label className="toggle-container" htmlFor="toggle">
                    <span className="button button-toggle"></span>
                </label>
                <div className="hamburger-header">
                    <nav className="nav">
                        <Link className="nav-item" to="/"> Home </Link>
                        <Link className="nav-item" to="/portfolio"> Portfolio </Link>
                        <Link className="nav-item" to="/blog"> Blog </Link>
                        <a className="nav-item" href="http://www.francls.com"> About </a>
                        <a className="nav-item" href="mailto:francjohny@gmail.com"> Contact </a>
                    </nav>
                    <Link className="hamburger-ying" to="/"> </Link>
                    <h1 className="hamburger-logo"> FJ</h1>
                </div>
            </div>
        );
    }
}

export default HamburgerMenu;