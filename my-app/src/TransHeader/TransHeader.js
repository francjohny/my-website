import React, {Component} from "react";
import {Link, NavLink} from 'react-router-dom';
import {invertColor} from '../Utilities/Utilities';
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

    listenScrollEvent() {
        if (document.getElementsByClassName("trans-header")[0] !== undefined) {
            if (window.scrollY > 50) {
                document.getElementsByClassName("trans-header")[0].style.backgroundColor = invertColor(this.state.logoColor);
            } else {
                document.getElementsByClassName("trans-header")[0].style.backgroundColor = "transparent";
            }
        }
    }

    render() {
        const color = this.props.color;
        return (
            <header className="trans-header" onScroll={this.listenScrollEvent.bind(this)}>
                <nav className="header-nav">
                    <ul className="header-list">
                        <li className="logo"><Link to="/" style={{color: this.props.logoColor}}> Francis Johny </Link>
                        </li>
                        <li className="header-nav-item"><NavLink to="/talks" style={{color: color}}
                                                                 activeStyle={{opacity: '1'}}> Talks </NavLink></li>
                        <li className="header-nav-item"><NavLink to="/about" style={{color: color}}
                                                                 activeStyle={{opacity: '1'}}> About </NavLink></li>
                        <li className="header-nav-item"><NavLink to="/contact" style={{color: color}}
                                                                 activeStyle={{opacity: '1'}}> Contact </NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default TransHeader;