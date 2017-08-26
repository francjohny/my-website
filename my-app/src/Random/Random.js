import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
    render() {
        return (
            <section className="random"
                     style={{
                         "background": "linear-gradient(to bottom, rgb(14, 103, 163) 0%, rgb(6, 65, 116) 40%, rgb(1, 27, 69) 80%, rgb(0, 8, 46) 100%)",
                         "backgroundSize": this.props.size,
                         "backgroundColor": this.props.color,
                         "backgroundUrl": this.props.background
                     }}>
                <img src={this.props.background} alt="presentation" className="random-ppt"/>
            </section>
        );
    }
}

export default Random;