import React, {  useEffect, useState } from 'react'
import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker'
function BusTrack({ data , icon ,children }) {
  var { latitude, longitude } = data
  const [prevPos, setPrevPos] = useState([latitude, longitude])

  useEffect(() => {
    if (prevPos[1] !== longitude && prevPos[0] !== latitude) setPrevPos([latitude, longitude])
  }, [latitude, longitude, prevPos])

  return (
          <LeafletTrackingMarker icon={icon} position={[latitude, longitude]} previousPosition={prevPos} duration={1000}>
              { children }
          </LeafletTrackingMarker>    
        )
}

export default BusTrack