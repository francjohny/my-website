import React, {Component} from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import TransFooter from '../TransFooter/TransFooter.js';

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="title">
                    Hello World
                </section>
                <section className="about-intro">
                    <p>
                        I'm Francis Johny! I’m a programmer and a maker of things.
                        In my spare time, I build, explore and teach at Khan Academy.
                        I'm currently a Software Developer at
                        <a style={{color: "#2200CC", marginRight: "0", textDecoration: "none"}}
                           href="https://www.qburst.com/">
                            &nbsp;QBurst&nbsp;
                        </a>.
                        If you're reading this, we should be friends!
                        Let's build something amazing together.
                        <Link style={{color: "#2200CC", marginRight: "0", textDecoration: "none"}}
                              to="/contact">
                            &nbsp;Say Hi!&nbsp;
                        </Link>
                    </p>
                </section>
                <TransFooter backgroundColor="#fff"/>
            </div>
        );
    }
}

export default About;