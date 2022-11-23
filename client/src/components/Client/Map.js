import React,{ useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import GoogleMapKey from './GoogleMapKey'
import './map.css'

export default function Map(){
    const defaultProps = {
        center: {
          lat: 43.65476,
          lng: -79.38974
        },
        zoom: 10
    };
    const [currentLocation, setCurrentLocation] = useState({lat: 43.65476, lng: 43.65476});
    // var currentLocation = {
    //       lat: 43.65476,
    //       lng: 43.65476
    // }
    
    const LocationPin = ({ text }) => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
    )

    const CurrentLocationPin = ({ text }) => (
        <div className="currentPin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div>
    )

    function onMapLoad ({ map }) {
        navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng };
            setCurrentLocation(pos);
        }
        );
    };

    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                onGoogleApiLoaded={onMapLoad}
                bootstrapURLKeys={{ key: GoogleMapKey.GoogleMapApiKey}}
                defaultCenter={defaultProps.center}
                center={currentLocation}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={defaultProps.zoom}
            >
                <CurrentLocationPin
                lat={currentLocation.lat}
                lng={currentLocation.lng}
                />
                <LocationPin
                lat={42.26999}
                lng={-83.02575}
                text="Dr. Steve"
                />
                <LocationPin
                lat={42.29692}
                lng={-83.01591}
                text="Dr. Herbert"
                />
            </GoogleMapReact>
        </div>
    );
}