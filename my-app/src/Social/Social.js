import React, {Component} from 'react';
import './Social.css';

class Social extends Component {
    render() {
        return (
            <nav className="social">
                <ul className="social-list">
                    <a href="https://in.linkedin.com/in/francis-johny" style={{"color": this.props.color}}>
                        <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                    </a>
                    <a href="https://github.com/francjohny" style={{"color": this.props.color}}>
                        <li><i className="fa fa-github" aria-hidden="true"></i></li>
                    </a>
                    <a href="https://twitter.com/13urstskill" style={{"color": this.props.color}}>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    </a>
                    <a href="mailto:francjohny@gmail.com" style={{"color": this.props.color}}>
                        <li><i className="fa fa-envelope-o" aria-hidden="true"></i></li>
                    </a>
                </ul>
            </nav>
        );
    }
    propTypes: {
        color: React.PropTypes.string
    }
}

export default Social;