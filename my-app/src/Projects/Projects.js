import React, { Component } from 'react';
import './Projects.css';
import Project from '../Project/Project.js';

class Projects extends Component {
    render() {
        return (
            <section className="projects">
            	<Project title="A"/>
            	<Project title="B"/>
            	<Project title="C"/>
            	<Project title="D"/>
            	<Project title="E"/>
            </section>
        );
    }
}

export default Projects;