import React, {Component} from 'react';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import './Information.css';

class Information extends Component {
    render() {
        return (
            <div className="information">
                <About/>
                <Contact/>
            </div>
        );
    }
}

export default Information;