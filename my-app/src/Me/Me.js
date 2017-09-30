import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Me.css';

class Me extends Component {
    render() {
        return (
            <div className="me">
                <section className="me-content">
                    <Link className="me-link" to="/about">
                        <h2 className="name">Francis Johny</h2>
                    </Link>
                </section>
            </div>
        );
    }
}

export default Me;