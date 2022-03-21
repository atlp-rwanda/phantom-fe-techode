import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconBus,iconStoppedBus,iconOnBoardBus } from "../../components/icons/Icons"
import {Map} from '../skeletons/Map/Map'
import "./map-style.css"
import { Icon } from '@iconify/react';
import RanderMyLocation from '../../functions/RanderMyLocation';
import RoutingMachine from '../../functions/RoutingMachine';



const LocationSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus , user ,selectedRoute } = props;
    /* ============ Start: Getting user =============== */ 
    const { type: userType } = user ;
    /* ============== End: Getting user =============== */ 
    const [isLoading ,setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false)
      }, 5000)

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
            <div className='w-full rounded-md h-full relative'>      
                {/* ================ Start: Location button ===============  */}
                <div className="location-btn absolute bottom-4 right-9" onClick={() => revealModel("departure")}>
                    <div className="h-12 w-12 rounded-full bg-mainColor flex items-center justify-center  cursor-pointer">
                        <Icon icon="akar-icons:location" color="white" width="15" height="20" />
                    </div>                        
                </div>                
                {/* ================== End: Location button ===============  */}          
               
                {/* ==================== Start:: Bus similation ================================ */}
                <div className="flex flex-wrap h-full">               
                    <div className={`w-full h-full ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                        {isLoading && <Map />}
                        {!isLoading && 
                            <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={true}  >
                                <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <MarkerClusterGroup>
                                    <Marker position={[ -1.944103,30.056790]} icon={iconBus}>
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>
                                    <Marker position={[-1.9443809,30.0565809]} icon={iconBus} >
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>     
                                        </Popup>
                                    </Marker>   
                                    <Marker position={[ -1.9437671,30.05701]} icon={iconBus} >
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>    
                                        </Popup>
                                    </Marker> 
                                    <Marker position={[-1.9460644,30.0556179]} icon={iconBus} >
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>    
                                    <Marker position={[-1.9496852,30.0583005]} icon={iconBus} >
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>     
                                    <Marker position={[-1.9801872,30.0413067]} icon={iconStoppedBus} >
                                        <Popup  className="min-w-full">
                                            Driver: John doe 
                                        </Popup>
                                    </Marker>   
                                    <Marker position={[-1.9567121,30.0584473]} icon={iconOnBoardBus} >
                                        <Popup  className="min-w-full">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>    
                                        </Popup>
                                    </Marker> 
                                    <RoutingMachine from={selectedRoute.from} to={selectedRoute.to} />
                                    {/* <RanderMyLocation />                                                                             */}
                                </MarkerClusterGroup>
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
export default connect( mapStateTo , {})(LocationSim);