import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import "./map-style.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconOnBoardBus } from "../../components/icons/Icons"
import {Map} from '../skeletons/Map/Map'
import { DangerButton, SuccessButton, WarningButton } from '../buttons/Buttons';
import RoutingMachine from '../../functions/RoutingMachine';
import { speedControl } from '../../redux/actions/ActiveBus';
import { addCoordinate } from '../../redux/actions/routeDetailActons'
import hundleStartStop,{handleDriverActionsDemo} from '../../functions/driverAction';
import socket from '../../config/socket';
import { API as axios, getSingleRoutes } from "../../api/";


const getMyRoute = async (driverId,setData = null) => {
    try {      
        let userId = driverId ;
        const response = await axios.get(`/users/${userId}`, {});
        const driver = response.data.data.driver[0];
        const { bus } = driver;
        /* ========= Start: if a driver has one of the buses =========== */
            if(bus == null){
                return Notify("You have not yet received a bus","info");
            }
        /* ========= End: if a driver has one of the buses ============ */ 

            let routeId = bus.routeId;  

        /* ========= Start: if a driver bus has one of our route ============ */
            if(routeId == null){
                return Notify("Your bus has not yet recieved a route","info");
            }
        /* ========= End: if a driver bus has one of our route ============ */   

            const route = await getSingleRoutes(routeId);

        /* ========= Start: if a driver his/her bus has a route =========== */ 
            if(route.data.data == null){
                return Notify("Your bus has not yet recieved a route","info");
            }
        /* =========== End: if a driver his/her bus has a route =========== */ 

        setData != null ? setData(route.data.data) : null;
        return route
    } catch (error) {
        if (error.code != "ERR_NETWORK") {
            Notify(error.response.data.message, "error");           
        }
        else{
            Notify("Unable to fetch our routes probably it because of internet network" , "error")
        }  
    }
}

const DriverSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus , user,speedControl,myLocation,setBusStarted,busStarted,addCoordinate,routeCoordinate } = props;
    /* ============ Start: Getting user =============== */ 
    const { type: userType , fullname } = user ;
    const [location , setMyLocation ] = useState({
        latitude: -1.944103,
        longitude:30.056790
    });
    const [myRoute , setMyRoute ] = useState({
        startLocation:{
            latitude: 0,
            longitude:0
        },
        endLocation:{
            latitude: 0,
            longitude:0
        },
    });
    const [myRouteCoords , setMyRouteCoords ] = useState({
        startLocation:{
            latitude: 0,
            longitude:0
        },
        endLocation:{
            latitude: 0,
            longitude:0
        },
    });
    /* ============== End: Getting user =============== */ 
    const [isLoading ,setIsLoading] = useState(true);


    useEffect( async () => {
        await getMyRoute(user.id,setMyRoute);        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setMyLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                });
                setIsLoading(false)
            },
            function(error) {
                Notify("Please you need to provide us your location ","error");
                setIsLoading(false)
            }
        );               
    },[])

    useEffect( async () => {  
        const myRouteCoordsTemp = {
            ...myRouteCoords
        }  
        let startPosition = myRoute.startLocation.toString().split(",");
        let endPosition = myRoute.endLocation.toString().split(",");
        myRouteCoordsTemp.startLocation = {
            latitude: startPosition[0],
            longitude:startPosition[1]
        }
        myRouteCoordsTemp.endLocation = {
            latitude: endPosition[0],
            longitude:endPosition[1]
        }
        setMyRouteCoords(myRouteCoordsTemp);
    },[myRoute])

    const handleBusStart = () => {    
        activeBus[0].busStatus = "Starting";
        revealModel("start");   
    }

    const handleBusAlight = () => {    
        activeBus[0].busStatus = "Bus Stopped"; 
        const busEntityId = localStorage.getItem("busEntintyId");
        socket.emit("alighting",{ id: busEntityId  })   
        revealModel("update");   
    }
    const handleBusStop = async () => {
        await handleDriverActionsDemo(user,null,speedControl,"stop",setBusStarted,routeCoordinate);        
    } 
    const handleBusFinish = async () =>{
        await handleDriverActionsDemo(user,null,speedControl,"finish",setBusStarted,routeCoordinaterouteCoordinate); 
        Notify("Daily trip finished","success");         
    }
    return (
        <>
 
            {/* ==================== Start:: ToastContainer ==================================== */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className={`z-50`}
            />
            {/* ==================== End:: ToastContainer ==================================== */}
            {/* ==================== Start:: Contents ========================================== */}
            <div className='w-full rounded-md'>
                {/* ==================== Start:: Action Buttons ========================================= */}
                {
                    userType == "driver" && myRoute.startLocation.latitude != 0  && myRoute.endLocation != 0 ?                      
                        <div className="action-button flex flex-wrap justify-around items-center my-3 ">
                           {
                               !busStarted && 
                               <>
                                    <div className="start-btn w-9/12 sm:w-6/12 md:w-4/12 md:w-30">
                                        <SuccessButton name={"Start"} onclick={handleBusStart} />               
                                    </div>
                               </>
                           }
                            
                            {
                                busStarted && 
                                <>
                                    <div className="passenger-btn w-3/12 sm:w-20 md:w-30">
                                        <WarningButton name={"Alight"} onclick={handleBusAlight} />
                                    </div>
                                    <div className="end-btn w-3/12 sm:w-20 md:w-30">
                                        <DangerButton name={"Stop"} onclick={handleBusStop}/>
                                    </div> 
                                </>
                            }
                                                              
                        </div>
                    : "" 
                }
                {/* ==================== End:: Action Buttons ========================================= */}
               
                {/* ==================== Start:: Bus similation ================================ */}
                
                <div className=" h-full simulation -mt-20">               
                    <div className={`w-full h-full p-3 top-0 ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                    {/* ==================== Start:: Bus on Map ================================ */}
                    {isLoading && <Map />}
                    {!isLoading && 
                        <MapContainer center={[location.latitude,location.longitude]} zoom={19} scrollWheelZoom={false}>
                            <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <MarkerClusterGroup>
                                { myRoute.startLocation.latitude != 0  && myRoute.endLocation != 0 && <Marker position={[location.latitude,location.longitude]} icon={iconOnBoardBus}>
                                    <Popup  className=" w-40">
                                        <div className='w-full' >
                                            <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{ user.username }</span>  
                                        </div> 
                                        {busStarted && 
                                            <>
                                                <div className='w-full' >
                                                    <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{activeBus[0].bus.plate}</span>  
                                                </div> 
                                                <div className='w-full' >
                                                    <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{activeBus[0].speedStatus == 1 ? activeBus[0].speed.current : activeBus[0].speedStatus}</span>  
                                                </div>   
                                            </>
                                        }
                                         
                                    </Popup>     
                                </Marker>   }
                                <RoutingMachine from={[myRouteCoords.startLocation.latitude,myRouteCoords.startLocation.longitude]} to={[myRouteCoords.endLocation.latitude,myRouteCoords.endLocation.longitude]} setCoordinate={addCoordinate} />                                                                               
                            </MarkerClusterGroup>
                        </MapContainer>
                    }
                    {/* ====================== End:: Bus on Map ================================ */}                      
                    </div>
                </div>    
                {/* ==================== End:: Bus similation ================================== */}        
            </div>    
            {/* ==================== End:: Contents ========================================== */}    
        </>
    )
}

const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus,
        routeCoordinate:state.routeCoordinate
    }
}
export default connect( mapStateTo , {speedControl,addCoordinate})(DriverSim);
