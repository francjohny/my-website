import React, {Component} from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        return (
            <section className="project-card">
                <div className="project-name" style={{backgroundColor: this.props.color}}>
                    <h1>Data Harvester</h1>
                    <span>Text Mining Medical Data</span>
                </div>
                <div className="project-description">
                    <p>
                        Data Harvester - Healthcare Research Trend module is a custom-built analytical module that mines for trending topics of research published in in peer reviewed journal (e.g., a molecule that has frequent references in articles) , data mining through this module would primarily be done on PubMed abstract data and other datasets such as those pertaining to drug classification
                    </p>
                </div>
            </section>
        );
    }
}

export default ProjectCard;