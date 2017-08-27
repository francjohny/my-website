import React, {Component} from 'react';
import './DisplayPicture.css';
import me from './me-without-glasses.svg';

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <img className="my-picture" src={me} alt="my pic"/>
            </div>
        );
    }
}

export default DisplayPicture;