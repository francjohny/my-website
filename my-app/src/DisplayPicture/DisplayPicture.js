import React, {Component} from "react";
import "./DisplayPicture.css";
import me from "./me.svg";

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <h1 className="my-logo">FRANCIS JOHNY</h1>
                <img className="my-picture" src={me} alt="Francis Johny"/>
            </div>
        );
    }
}

export default DisplayPicture;