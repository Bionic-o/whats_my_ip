import React from 'react'
import { Map, Marker } from "pigeon-maps"

function MapLocation({lattitude, longitude}) {


  return (
    <div>
        <div>
        <Map height={300} defaultCenter={[lattitude, longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[lattitude, longitude]} />
        </Map>
        </div>
    </div>
  )
}

export default MapLocation