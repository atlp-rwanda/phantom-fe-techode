import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const { from , to } = props;
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

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
