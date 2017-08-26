import React, {Component} from 'react';
import './Social.css';
import PropTypes from 'prop-types';

class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul className="social-list">
                    <a className="social-list-item footer-item-spacing" href="https://in.linkedin.com/in/francis-johny" style={{"color": this.props.color}}>
                        <i className="social-icon fa fa-linkedin" aria-hidden="true"></i>
                        <span className="social-heading"> LinkedIn </span>
                    </a>
                    <a className="social-list-item footer-item-spacing" href="https://github.com/francjohny" style={{"color": this.props.color}}>
                        <i className="social-icon fa fa-github" aria-hidden="true"></i>
                        <span className="social-heading"> GitHub </span>
                    </a>
                    <a className="social-list-item footer-item-spacing" href="https://twitter.com/13urstskill" style={{"color": this.props.color}}>
                        <i className="social-icon fa fa-twitter" aria-hidden="true"></i>
                        <span className="social-heading"> Twitter </span>
                    </a>
                </ul>
            </nav>
        );
    }
    propTypes: {
        color: PropTypes.string
    }
}

export default Social;