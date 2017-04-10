import React, {Component} from 'react';
import './Map.css';

class Map extends Component {
    render() {
        return (
            <iframe
                width="100%"
                height="450"
                frameborder="0"
                className="map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAfeuRT2fVrwPBeCXZQBWR8ru4rrQTaVuo
                    &q=Kerala,India" allowfullscreen>
            </iframe>
        );
    }
}

export default Map;