import React  from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Map(props) {
    const { store: { lat = "19.1707806", lon: lng = "-96.1270615"} } = props;
    return (
        <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyBP_-J4zi-joMx0Jb3sGVjf5SGze8_bdGs"
        >
            <GoogleMap
                id='example-map'
                mapContainerStyle={{
                    height: "225px",
                    // width: "800px"
                }}
                zoom={15}
                center={{
                    lat: parseFloat(lat),
                    lng: parseFloat(lng),
                    // lat: 19.1707806,
                    // lng: -96.1270615,
                }}
            >
                <Marker
                    onLoad={marker => {
                        console.log('marker: ', marker)
                    }}
                    position={{
                        lat: parseFloat(lat),
                        lng: parseFloat(lng),
                    }}
                    // draggable
                    // onDragEnd={ (a, b, c) => console.log('e onDrag =>', a.latLng.lat(), a.latLng.lng())}
                />
            </GoogleMap>
        </LoadScript>
    )
}
