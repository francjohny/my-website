import React, {Component} from "react";
import "./TransFooter.css";

class TransFooter extends Component {
    render() {
        return (
            <footer className="trans-footer" style={{"backgroundColor": this.props.backgroundColor}}>
                <nav>
                    <ul>
                        <li><a href="https://in.linkedin.com/in/francis-johny">LinkedIn</a>
                            &nbsp; / &nbsp;
                        </li>
                        <li><a href="https://twitter.com/13urstskill">Twitter</a>
                            &nbsp; / &nbsp;
                        </li>
                        <li><a href="https://github.com/francjohny">GitHub</a></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default TransFooter;