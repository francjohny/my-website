import React, {Component} from "react";
import "./DisplayPicture.css";
import me from "./me.svg";

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <div className="logo">Francis Johny</div>
                <img className="my-picture" src={me} alt="Francis Johny"/>
            </div>
        );
    }
}

export default DisplayPicture;