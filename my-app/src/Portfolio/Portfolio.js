import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel.js';
import ProjectCard from '../ProjectCard/ProjectCard.js';

class Portfolio extends Component {
    render() {
        return (
            <section>
                <Carousel/>
                <ProjectCard color="#011A27"/>
                {/*<ProjectCard color="#33164B"/>
                <ProjectCard color="#8D230F"/>
                <ProjectCard color="#021C1E"/>
                <ProjectCard color="#004465"/>
                <ProjectCard color="#C99E10"/>
                <ProjectCard color="#07575B"/>
                <ProjectCard color="#46211A"/>
                <ProjectCard color="#193F4C"/>
                <ProjectCard color="#2A3132"/>*/}
            </section>
        );
    }
}

export default Portfolio;