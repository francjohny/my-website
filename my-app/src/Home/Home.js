import React, {Component} from 'react';
import Me from '../Me/Me.js';
import Projects from '../Projects/Projects.js';

class Home extends Component {
    render() {
        return (
            <section>
                <Me/>
                <Projects/>
            </section>
        );
    }
}

export default Home;