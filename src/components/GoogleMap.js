import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
    render() {
        return (
            <div>
                <Map
                google={this.props.google}
                zoom={16}
                initialCenter={{
                lat: 28.452423,
                lng: 15.553904
                }}
                style={{ height: '350px', position: 'relative', width: '650px' }}
                >

                <Marker
                position={{lat: 18.452423, lng: 15.553904}} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('')
})(GoogleMap)
