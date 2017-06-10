import React, {Component} from 'react';
import Link from 'react-router/Link';
import './Project.css';

class Project extends Component {
    render() {
        return (
            <Link to="/portfolio" className="project-title-link">
                <span className="project-title">
                    {this.props.title}
                </span>
            </Link>
        );
    }
}

export default Project;