import React, {Component} from 'react';
import './DisplayPicture.css';
import { NavLink } from 'react-router-dom';
import me from './me.svg';

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <div className="logo"><span style={{"fontWeight": "bold"}}>Hi,</span> I'm Francis!</div>
                <NavLink to="/contact"><img className="my-picture" src={me} alt="Francis Johny"/></NavLink>
            </div>
        );
    }
}

export default DisplayPicture;