import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
    render() {
        return (
            <section className="random"
                     style={{
                         "background": "url(" + this.props.background + ") no-repeat center",
                         "backgroundSize": this.props.size,
                         "backgroundColor": this.props.color
                     }}
            />
        );
    }
}

export default Random;