import L from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
const RanderMyLocation = () => {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();
    
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
        console.log(position);
        // setPosition({
        //     "lat": bbox[3],
        //     "lng": bbox[2]
        // });
      });
    }, [map]);
    return position === null ? null : (
        <Marker position={position} >
          <Popup>
            You are here. 
          </Popup>
        </Marker>
      );
}
 
export default RanderMyLocation;