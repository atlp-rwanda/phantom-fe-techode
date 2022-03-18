import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { LebalTextButton } from '../buttons/LebalButton';
import { OperatorProfile } from '../skeletons/cards/Profile';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconBus,iconStoppedBus,iconOnBoardBus } from "../../components/icons/Icons"

import {Map} from '../skeletons/Map/Map'

import location from '../../assets/svgs/locationInfo.svg';
import { DangerButton, Primary, SuccessButton, WarningButton } from '../buttons/Buttons';
import RoutingMachine from '../../functions/RoutingMachine';



const DriverSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus , user } = props;
    /* ============ Start: Getting user =============== */ 
    const { type: userType } = user ;
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
            <div className='w-full rounded-md'>
                {/* ==================== Start:: Action Buttons ========================================= */}
                {
                    userType == "driver" ?                      
                        <div className="action-button flex flex-wrap justify-around items-center my-3 ">
                            <div className="start-btn w-3/12 sm:w-20 md:w-30">
                                <SuccessButton name={"Start"} onclick={handleBusStart} />               
                            </div>
                            <div className="passenger-btn w-3/12 sm:w-20 md:w-30">
                                <WarningButton name={"Alight"} onclick={handleBusAlight} />
                            </div>
                            <div className="end-btn w-3/12 sm:w-20 md:w-30">
                                <DangerButton name={"Stop"} onclick={handleBusStop}/>
                            </div>                                    
                        </div>
                    : "" 
                }
                {/* ==================== End:: Action Buttons ========================================= */}
               
                {/* ==================== Start:: Bus similation ================================ */}
                <div className="flex flex-wrap">
                    {/* ==================== Start:: Bus on Map ================================ */}
                    <div className="map-location-card w-full sm:p-4">                      
                        <div className="bg-white w-full  rounded-lg p-4">
                            <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                                <h3 className="font-bold text-base text-center w-11/12 text-mainColor">
                                    Nyamirambo - Downtown 401
                                </h3>
                                <hr className=" bg-secondary-150 border my-3 w-full" />
                            </div>
                            <div className="card-body">
                                <div className={`w-full ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                                    {loading && <Map />}
                                    {!loading && 
                                        <MapContainer center={[-1.944103,30.056790]} zoom={13} scrollWheelZoom={true}>
                                            <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                            <MarkerClusterGroup>
                                                <Marker position={[ -1.944103,30.056790]} icon={iconOnBoardBus}>
                                                    <Popup className="min-w-full">
                                                        <div >
                                                            <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >John doe</span>  
                                                        </div>                                                        
                                                    </Popup>
                                                </Marker>   
                                                <RoutingMachine from={[-1.944103,30.056790]} to={[-1.9801872,30.0413067]} />                                                                               
                                            </MarkerClusterGroup>
                                        </MapContainer>
                                    }                                
                                </div>                                                                
                            </div>
                        </div>
                    </div>
                    {/* ====================== End:: Bus on Map ================================ */}
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
        activeBus: state.activeBus
    }
}
export default connect( mapStateTo , {})(DriverSim);