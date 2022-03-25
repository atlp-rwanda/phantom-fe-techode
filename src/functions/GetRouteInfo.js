import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const { from , to ,setDistance,setDuration } = props;

  let routeInfo = {
    distance: 0,
    duration: 0,
  }
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(from.lat,from.lng),
      L.latLng(to.lat,to.lng)
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
      routeInfo.distance  = Math.round(summary.totalDistance / 1000) ;
      routeInfo.duration = Math.round(summary.totalTime);
      setDistance(routeInfo.distance);
      setDuration(routeInfo.duration)
    });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);
export default RoutingMachine;