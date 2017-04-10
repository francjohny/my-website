import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
    render() {
        return (
            <section className="random"
                     style={{
                         "background": "url(" + this.props.background + ") repeat-x center",
                         "background-size": this.props.size,
                         "background-color": this.props.color
                     }}
            />
        );
    }
}

export default Random;