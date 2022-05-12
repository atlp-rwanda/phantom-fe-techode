import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import BusTrack from "../../functions/BusTrack";
import RanderMyLocation from "../../functions/RanderMyLocation"
import RoutingMachine from "../../functions/RoutingMachine"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconBus,iconStoppedBus,iconOnBoardBus } from "../../components/icons/Icons"
import { update,setProfile } from "../../redux/actions/userActions";
import {Map} from '../skeletons/Map/Map'
import location from '../../assets/svgs/locationInfo.svg';
import { Primary } from '../buttons/Buttons';
import { Icon } from '@iconify/react';
import checkAuth from '../../functions/checkAuth';
import handleUserAction from '../../functions/handelUserAction';
import socket from '../../config/socket';
import { useHistory } from 'react-router-dom';
import { addCoordinate } from '../../redux/actions/routeDetailActons'

const LocationSim = ( props ) => {
    const history = useHistory();
    const { revealModel , showModel , showModelStart , activeBus , user ,selectedRoute ,update ,addCoordinate} = props;
    const [ buses , setBuses ] = useState([]);
    /* ============ Start: Getting user =============== */ 
    const { type: userType } = user ;
    const token = localStorage.getItem("token");
    /* ============== End: Getting user =============== */ 
    const [loading ,setLoading] = useState(true);
    useEffect(async () => {
        setLoading(false);
        await checkAuth(user,update); 
        socket.on("location_update",(data) =>{
            var newBus = data.bus;
            if(selectedRoute.from.length != 0 && selectedRoute.routecode != 0){   
                newBus =  data.bus.filter(busInfo => busInfo.routecode == selectedRoute.routecode)            
            }
            setBuses(newBus);
        })
    },[])

    useEffect( async () => { 
       if(selectedRoute.from.length == 0 && buses.length == 0){        
            await handleUserAction(setBuses); 
       }
    },[buses])


    const handleBusStart = () => {    
        activeBus[0].busStatus = "Starting";    
        revealModel("start");   
    }

    const handleBusAlight = () => {    
        activeBus[0].busStatus = "Bus Stopped";    
        revealModel("update");   
    }

    
    const handleBusStop = () => {
        Notify("The bus has been stopped" , 'info' );         
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
            <div className='w-full rounded-md h-full relative  '>      
                {/* ================ Start: Location button ===============  */}
                <div className="location-btn absolute bottom-9 right-9  z-30" onClick={() => history.push("/dashboard")}>
                    <div className="h-12 w-12 rounded-full bg-mainColor flex items-center justify-center  cursor-pointer">
                        <Icon icon="akar-icons:location" color="white" width="15" height="20" />
                    </div>                        
                </div>                
                {/* ================== End: Location button ===============  */}          
               
                {/* ==================== Start:: Bus similation ================================ */}
            
                <div className=" h-full simulation -mt-20">               
                    <div className={`w-full h-full top-0 ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                        {loading && <Map />}
                        {!loading && 
                            <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={true}  >
                                <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                
                                {/* <MarkerClusterGroup> */}
                                    
                                    {
                                        buses.map( bus => {
                                            const location = JSON.parse(bus.currentLocation);
                                            console.log(location)
                                            return(
                                                <BusTrack key={bus.entityId} icon={bus.status == "stopped" ? iconStoppedBus : bus.status == "on board" ? iconOnBoardBus : iconBus } data={{latitude:location.latitude , longitude: location.longitude}} >
                                                    <Popup  className="w-55">
                                                        <div >
                                                            <i className="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{bus.fullname}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{bus.platenumber}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{bus.status}</span>  
                                                        </div> 
                                                        <div >
                                                            <i className="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{bus.routecode}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa fa-user text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{bus.passengers}</span>  
                                                        </div>     
                                                    </Popup>
                                                </BusTrack>
                                            )
                                        })
                                    }      
                                    <RoutingMachine from={selectedRoute.from} to={selectedRoute.to} setCoordinate={addCoordinate}  />
                                    {/* <RanderMyLocation />                                                                             */}
                                {/* </MarkerClusterGroup> */}
                            </MapContainer>
                        }                         
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
        selectedRoute: state.selectedRoute
    }
}
export default connect( mapStateTo , { update ,addCoordinate})(LocationSim);
