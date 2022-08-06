import React from 'react'
import { Map, Marker } from "pigeon-maps"

function MapLocation({lattitude, longitude}) {


  return (
    <div>
        <div className="map">
        <Map height={600} defaultCenter={[lattitude, longitude]} defaultZoom={11}>
        <Marker width={70} anchor={[lattitude, longitude]} />
        </Map>
        </div>
    </div>
  )
}

export default MapLocation