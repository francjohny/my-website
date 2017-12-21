import React, {Component} from "react";
import { Link, NavLink } from 'react-router-dom';
import "./TransHeader.css";
import '../Header/Header.css';

class TransHeader extends Component {
    render() {
        return (
            <header className="trans-header">
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="logo"><Link to="/" style={{color: this.props.logoColor}}> Francis Johny </Link></li>
                        <li className="header-nav-item"><NavLink to="/portfolio" style={{color: this.props.color}} activeStyle={{opacity: '1'}}> Portfolio </NavLink></li>
                        <li className="header-nav-item"><NavLink to="/contact" style={{color: this.props.color}} activeStyle={{opacity: '1'}}> Contact </NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;