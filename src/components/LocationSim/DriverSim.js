import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import "./map-style-driver.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconOnBoardBus } from "../../components/icons/Icons"
import {Map} from '../skeletons/Map/Map'
import { DangerButton, SuccessButton, WarningButton } from '../buttons/Buttons';
import RoutingMachine from '../../functions/RoutingMachine';
import { speedControl } from '../../redux/actions/ActiveBus'




const DriverSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus , user,speedControl } = props;
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
        /* Speed update */
            speedControl({ busId: 1 , speed: 0 });
        /* Speed update */ 
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
                            <div className={`w-full ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                                {isLoading && <Map />}
                                {!isLoading && 
                                    <MapContainer center={[-1.944103,30.056790]} zoom={13} scrollWheelZoom={true}>
                                        <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                        <MarkerClusterGroup>
                                            <Marker position={[ -1.944103,30.056790]} icon={iconOnBoardBus}>
                                                <Popup  className=" w-40">
                                                    <div className='w-full' >
                                                        <i class="fa-solid fa-id-card text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{ activeBus[0].driver.name }</span>  
                                                    </div>  
                                                    <div className='w-full' >
                                                        <i class="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm" >{activeBus[0].bus.plate}</span>  
                                                    </div> 
                                                    <div className='w-full' >
                                                        <i class="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{activeBus[0].speedStatus == 1 ? activeBus[0].speed.current : activeBus[0].speedStatus}</span>  
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
export default connect( mapStateTo , {speedControl})(DriverSim);