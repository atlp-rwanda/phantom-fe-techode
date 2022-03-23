import L from 'leaflet';
import blueBusIcon from  "../../assets/svgs/navigation/bus.svg";
import StopBusIcon from  "../../assets/svgs/navigation/stoppedBus.svg";
import OnBoardBusIcon from  "../../assets/svgs/navigation/onBoardBus.svg";

const iconBus = new L.Icon({
    iconUrl: blueBusIcon,
    iconRetinaUrl: blueBusIcon,
    iconSize: new L.Point(30, 30)
});

const iconStoppedBus = new L.Icon({
    iconUrl: StopBusIcon,
    iconRetinaUrl: StopBusIcon,
    iconSize: new L.Point(30, 30)
});

const iconOnBoardBus = new L.Icon({
    iconUrl: OnBoardBusIcon,
    iconRetinaUrl: OnBoardBusIcon,
    iconSize: new L.Point(30, 30)
});
export { iconBus , iconStoppedBus , iconOnBoardBus };