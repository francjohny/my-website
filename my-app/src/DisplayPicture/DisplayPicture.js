import React, {Component} from "react";
import "./DisplayPicture.css";
import me from "./me.svg";
import francis from "./francis.png";

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <img className="my-logo" src={francis} alt="Francis Johny"/>
                <img className="my-picture" src={me} alt="Francis Johny"/>
            </div>
        );
    }
}

export default DisplayPicture;