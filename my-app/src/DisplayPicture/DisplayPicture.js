import React, {Component} from "react";
import "./DisplayPicture.css";
import me from './me-without-glasses.svg';
import hoverMe from './me.svg';
import {NavLink} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

class DisplayPicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc: me
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({
            imgSrc: hoverMe
        });
    }

    handleMouseOut() {
        this.setState({
            imgSrc: me
        });
    }

    render() {
        return (
            <div className="display-picture">
                <CSSTransitionGroup
                    transitionName="hi-animate"
                    transitionAppear={true}
                    transistionAppearTimeout={150}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <section className="hi"> Hi! </section>
                </CSSTransitionGroup>
                <NavLink to="/about">
                    <img src={this.state.imgSrc} alt="me" className="my-picture" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>
                </NavLink>
            </div>
        );
    }
}

export default DisplayPicture;