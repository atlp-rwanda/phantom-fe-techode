import L from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import getMyLocation from './getMyLocation';
const RanderMyLocation = () => {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();
    
    useEffect(() =>{
      getMyLocation(setPosition);
    })
    useEffect(() => {
      map.locate({setView: true, watch: true}).on("locationfound", function (e) {
        map.flyTo(e.latlng, 13);
        const radius = 300;      
        const circle = L.circle(e.latlng, radius).addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);
    return position === null ? <></> : (
        <Marker position={position} >
          <Popup>
            You are here. 
          </Popup>
        </Marker>
      );
}
 
export default RanderMyLocation;