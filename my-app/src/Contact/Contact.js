import React, {Component} from 'react';
import './Contact.css';
import email from './email.png';

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
                    <a className="contact-hover" style={{color: this.props.color}}>
                        <img src={email} alt="email" style={{"width": "11.5em"}} />
                    </a>
                </section>
            </div>
        );
    }
}

export default Contact;