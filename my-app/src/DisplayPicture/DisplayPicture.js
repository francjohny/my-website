import React, {Component} from 'react';
import './DisplayPicture.css';
import me from './me.svg';

class DisplayPicture extends Component {
    render() {
        return (
            <div className="display-picture">
                <img src={me} alt="my pic"/>
            </div>
        );
    }
}

export default DisplayPicture;