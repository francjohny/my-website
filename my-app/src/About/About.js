import React, {Component} from 'react';
import Social from '../Social/Social.js';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="title">
                    <h3><strong> Francis </strong> Johny </h3>
                    <p>Software Engineer</p>
                </section>
                <section className="intro">
                    <h4>About me</h4>
                    <p>Hi, I’m a 23-year-old undergraduate in Computer Science.</p>
                    <strong>Feel free to contact me for freelance project.</strong>
                </section>
                <Social color="#000"/>
            </div>
        );
    }
}

export default About;