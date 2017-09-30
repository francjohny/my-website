import React, {Component} from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import TransFooter from '../TransFooter/TransFooter.js';

class About extends Component {
    render() {

        function getBirthday(dateString) {
            var today = new Date();
            var birthdate = new Date(dateString);
            var age = today.getFullYear() - birthdate.getFullYear();
            var m = today.getMonth() - birthdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }
            return age;
        }

        var birthday = getBirthday("June 24, 1994 02:00:00");
        return (
            <div className="about">
                <section className="title">
                    Hello World
                </section>
                <section className="about-intro">
                    <p>
                        I'm Francis Johny! I’m a { birthday }-year-old Computer Science undergraduate from India.
                        In my spare time, I build, explore and teach at Khan Academy.
                        I currently work as a Software Developer at
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
                <TransFooter backgroundColor="#fff"/>
            </div>
        );
    }
}

export default About;