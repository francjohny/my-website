import React, {Component} from "react";
import "./DisplayPicture.css";
import me from './me-without-glasses.svg';
import { NavLink } from 'react-router-dom';

class DisplayPicture extends Component {

    render() {
        return (
            <div className="display-picture">
                <NavLink to="/about">
                    <img src={me} alt="me" className="my-picture"/>
                </NavLink>

            </div>
        );
    }
}

export default DisplayPicture;