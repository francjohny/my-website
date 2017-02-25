import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <div className="title">
                    <h3><strong>I would like</strong> to hear from you</h3>
                    <p>Internship proposal, freelance inquiry or even a coffee</p>
                </div>
                <form action="#">
                    <input type="text" placeholder="Name" name="name" required=""/>
                    <input type="email" placeholder="Email" name="email"
                           pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required=""/>
                    <textarea name="message" placeholder="Write something in there..." maxLength="500"
                              required=""/>
                    <input type="submit" className="hidden" value="Send message"/>
                    <a href="#" className="sumit js-form-submit">
                        <span>Send message</span>
                    </a>
                    <div className="error">
                        <span>Oops:</span>
                        <p>Something went wrong</p>
                    </div>
                </form>
            </section>
        );
    }
}

export default Contact;