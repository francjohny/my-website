import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <section className="title">
                    Say Hi!
                </section>
                <section className="contact-intro">
                    <p>Wanna grab some coffee? Send me an email! We'll be BFF.</p>
                    <div style={{backgroundColor: "white"}}></div>
                    <a className="contact-hover" href="mailto:francjohny@gmail.com" style={{color: this.props.color}}>
                        francjohny@gmail.com
                    </a>
                </section>
            </div>
        );
    }
}

export default Contact;