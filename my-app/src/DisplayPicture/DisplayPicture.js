import React, {Component} from 'react';
import './DisplayPicture.css';
import { NavLink } from 'react-router-dom';
import me from './me.svg';

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <NavLink to="/about"><img className="my-picture" src={me} alt="my pic"/></NavLink>
            </div>
        );
    }
}

export default DisplayPicture;