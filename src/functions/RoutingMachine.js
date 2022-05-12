import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useEffect, useState } from "react";

const createRoutineMachineLayer = (props) => {
  const { from , to ,setCoordinate} = props;
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(from[0],from[1]),
      L.latLng(to[0],to[1])
    ],
    lineOptions: {
      styles: [{ color: "#1CA0E3", weight: 4 }]
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });
  instance.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    setCoordinate(routes[0].coordinates)
  });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);


export const getRouteInfo = (props) => {
  const { from , to } = props;
  let routeInfo = {
    distance: 0,
    duration: 0,
    summary:[],
  }
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(from[0],from[1]),
      L.latLng(to[0],to[1])
    ],
  });
   
  instance.on('routesfound', function(e) {
    var routes = e.routes;
    var summary = routes[0].summary;
    routeInfo.summary = routes[0] ;
    routeInfo.distance = summary.totalDistance / 1000 ;
    routeInfo.duration = Math.round(summary.totalTime % 3600 / 60) ;
  });
  return routeInfo;
};


export default RoutingMachine;
