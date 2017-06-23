import React, {Component} from 'react';
import './About.css';
import Link from 'react-router/Link';

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="title">
                    Hello World
                </section>
                <section className="about-intro">
                    <p>
                        I'm Francis Johny! I’m a 23-year-old Computer Science undergraduate from India.
                        In my spare time, I build, explore and teach at Khan Academy.
                        I currently work as a Big Data Engineer at
                        <a style={{color: "#2200CC", marginRight: "0", textDecoration: "none"}}
                           href="https://www.qburst.com/">
                            &nbsp;QBurst&nbsp;
                        </a>.
                        If you're reading this, we should be friends!
                        <Link style={{color: "#2200CC", marginRight: "0", textDecoration: "none"}}
                              to="/contact">
                            &nbsp;Say Hi!&nbsp;
                        </Link>
                    </p>
                </section>
            </div>
        );
    }
}

export default About;