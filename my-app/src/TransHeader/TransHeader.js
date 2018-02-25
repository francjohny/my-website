import React, {Component} from "react";
import {Link, NavLink} from 'react-router-dom';
import "./TransHeader.css";
import '../Header/Header.css';

class TransHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            logoColor: props.logoColor
        };
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent, false);
    }

    padZero(str, len) {
        len = len || 2;
        let zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        let r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
            g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
            b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
    }

    listenScrollEvent() {
        if (window.scrollY > 50) {
            document.getElementsByClassName("trans-header")[0].style.backgroundColor = this.invertColor(this.state.logoColor);
        } else {
            document.getElementsByClassName("trans-header")[0].style.backgroundColor = "transparent";
        }
    }

    render() {
        const color = this.props.color;
        return (
            <header className="trans-header" onScroll={this.listenScrollEvent.bind(this)}>
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="logo"><Link to="/" style={{color: this.props.logoColor}}> Francis Johny </Link></li>
                        <li className="header-nav-item"><NavLink to="/portfolio" style={{color: color}} activeStyle={{opacity: '1'}}> Portfolio </NavLink></li>
                        <li className="header-nav-item"><NavLink to="/about" style={{color: color}} activeStyle={{opacity: '1'}}> About </NavLink></li>
                        <li className="header-nav-item"><NavLink to="/contact" style={{color: color}} activeStyle={{opacity: '1'}}> Contact </NavLink></li>
                        <li className="header-nav-item"><a href="https://gyrosco.pe/francjohny/" style={{color: color}}> Gyroscope </a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;