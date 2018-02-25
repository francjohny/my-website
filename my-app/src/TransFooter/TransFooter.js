import React, {Component} from "react";
import {invertColor} from '../Utilities/Utilities';
import "./TransFooter.css";

class TransFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover0: false,
            hover1: false,
            hover2: false
        }
    }

    toggleHover0 = () => {
        this.setState({hover0: !this.state.hover0})
    };

    toggleHover1 = () => {
        this.setState({hover1: !this.state.hover1})
    };

    toggleHover2 = () => {
        this.setState({hover2: !this.state.hover2})
    };

    render() {
        let linkStyle0, linkStyle1, linkStyle2;
        if (this.state.hover0) {
            linkStyle0 = {color: invertColor(this.props.backgroundColor)}
        }
        if (this.state.hover1) {
            linkStyle1 = {color: invertColor(this.props.backgroundColor)}
        }
        if (this.state.hover2) {
            linkStyle2 = {color: invertColor(this.props.backgroundColor)}
        }

        return (
            <footer className="trans-footer" style={{"backgroundColor": this.props.backgroundColor}}>
                <nav>
                    <ul>
                        <li><a href="https://in.linkedin.com/in/francis-johny" style={linkStyle0} onMouseEnter={this.toggleHover0} onMouseLeave={this.toggleHover0}>LinkedIn</a>
                            &nbsp; / &nbsp;
                        </li>
                        <li><a href="https://twitter.com/13urstskill" style={linkStyle1} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>Twitter</a>
                            &nbsp; / &nbsp;
                        </li>
                        <li><a href="https://github.com/francjohny" style={linkStyle2} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>GitHub</a></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default TransFooter;