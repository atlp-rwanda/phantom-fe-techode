import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { OperatorProfile } from '../skeletons/cards/Profile';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconBus,iconStoppedBus,iconOnBoardBus } from "../../components/icons/Icons"

import {Map} from '../skeletons/Map/Map'

import location from '../../assets/svgs/locationInfo.svg';
import { Primary } from '../buttons/Buttons';



const LocationSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus , user } = props;
    /* ============ Start: Getting user =============== */ 
    const { type: userType } = user ;
    console.log(user);
    /* ============== End: Getting user =============== */ 
    const [loading ,setLoading] = useState(false);
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
    //TODO:: BUS CAN NOT STOP UNLESS IS ON THE MOVE 
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
                <div className="location-btn absolute bottom-9 right-9  z-30" onClick={() => revealModel("departure")}>
                    <div className="h-12 w-12 rounded-full bg-mainColor flex items-center justify-center  cursor-pointer">
                        <Icon icon="akar-icons:location" color="white" width="15" height="20" />
                    </div>                        
                </div>                
                {/* ================== End: Location button ===============  */}          
               
                {/* ==================== Start:: Bus similation ================================ */}
            
                <div className=" h-full simulation -mt-20">               
                    <div className={`w-full h-full top-0 ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                        {isLoading && <Map />}
                        {!isLoading && 
                            <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={true}  >
                                <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <MarkerClusterGroup>
                                    <BusTrack icon={iconBus} data={{latitude:  -1.944103 , longitude:  30.056790}} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAB407X</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div> 
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >305</span>  
                                            </div>    
                                        </Popup>
                                    </BusTrack>
                                    <Marker position={[ -1.944103,30.056790]} icon={iconBus}>
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAB407X</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div> 
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >305</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>
                                    <Marker position={[-1.9443809,30.0565809]} icon={iconBus} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAA200R</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >403</span>  
                                            </div> 
                                        </Popup>
                                    </Marker>   
                                    <Marker position={[ -1.9437671,30.05701]} icon={iconBus} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>   
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAC447E</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >210</span>  
                                            </div>   
                                        </Popup>
                                    </Marker> 
                                    <Marker position={[-1.9460644,30.0556179]} icon={iconBus} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAB167G</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >447</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>    
                                    <Marker position={[-1.9496852,30.0583005]} icon={iconBus} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAB357A</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div> 
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >347</span>  
                                            </div>    
                                        </Popup>
                                    </Marker>     
                                    <Marker position={[-1.9801872,30.0413067]} icon={iconStoppedBus} >
                                        <Popup  className="w-36">
                                        <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAC807K</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div>   
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >203</span>  
                                            </div>   
                                        </Popup>
                                    </Marker>   
                                    <Marker position={[-1.9567121,30.0584473]} icon={iconOnBoardBus} >
                                        <Popup  className="w-36">
                                            <div >
                                                <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >RAE727T</span>  
                                            </div>  
                                            <div >
                                                <i class="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >Bus stop</span>  
                                            </div> 
                                            <div >
                                                <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >175</span>  
                                            </div>   
                                        </Popup>
                                    </Marker> 
                                    <RoutingMachine from={selectedRoute.from} to={selectedRoute.to} />
                                    <RanderMyLocation />                                                                            
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