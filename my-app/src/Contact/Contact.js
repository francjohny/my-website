import React, {Component} from 'react';
import './Contact.css';
import email from './email.png';
import { CSSTransitionGroup } from 'react-transition-group';

class Contact extends Component {
    render() {
        return (
            <CSSTransitionGroup
                style={{width:"100%", backgroundColor: "#000"}}
                transitionName="slideIn"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="contact" key="1">
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
            </CSSTransitionGroup>
        );
    }
}

export default Contact;