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
import { Primary } from '../buttons/Buttons';



const LocationSim = ( props ) => {
    const { revealModel , showModel , showModelStart , activeBus } = props;
    console.log(activeBus);
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
                {/* ==================== Start:: Buttons ======================================= */}
                <div className="action-button flex flex-wrap justify-around items-center my-3 ">
                    <div className="start-btn w-3/12 sm:w-20 md:w-30">
                        <LebalTextButton text="Start" type="info" styles={"md:text-base"} onclick={handleBusStart} />
                    </div>
                    <div className="passenger-btn w-3/12 sm:w-20 md:w-30">
                        <LebalTextButton text="Alight" type="secondary" styles={"md:text-base"} onclick={handleBusAlight}/>
                    </div>
                    <div className="end-btn w-3/12 sm:w-20 md:w-30">
                        <LebalTextButton text="Stop" type="success" styles={"md:text-base"} onclick={handleBusStop}/>
                    </div>                                    
                </div>
                {/* ==================== End:: Buttons ========================================= */}
                {/* ==================== Start:: Bus similation ================================ */}
                <div className="flex flex-wrap">
                    {/* ==================== Start:: Bus Profile =============================== */}
                    <div className="bus-info-location w-full sm:w-3/12 sm:p-4 my-2 flex flex-col">
                        {/* ==================== Start: Operator profile ================== */}
                        {loading && <OperatorProfile />}
                        {!loading && (                   
                            <>
                                <section className="flex flex-col items-center justify-center bg-white rounded-md  p-2 w-full my-2" >
                                    <div className="profile-content-container mt-2  flex items-center w-full">
                                        <div className="location-svg h-full m-4 ">
                                            <img src={location} alt="phantom" srcset="" />    
                                        </div>
                                        <div className="location-info">
                                            <h1 className="text-mainColor font-sans text-sm font-bold sm:text-xs" > Route information </h1>
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Finish: Kn 674 st 3</span>   
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Start: Kn 766 st 4</span>       
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Distance: 16 Km </span>   
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Duration: 16 Minutes </span>                                                                                                                      
                                        </div>
                                    </div> 
                                </section>  
                                <section className="flex flex-col items-center justify-center bg-white rounded-md  p-2 w-full my-2" >
                                    <div className="profile-content-container mt-2  flex items-center w-full">
                                        <div className="location-svg h-full m-4 ">
                                            <img src={location} alt="phantom" srcset="" />    
                                        </div>
                                        <div className="location-info">
                                            <h1 className="text-mainColor font-sans text-sm font-bold sm:text-xs" > Bus information </h1>
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Driver: {activeBus[0].driver.name} </span>   
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Plate: {activeBus[0].bus.plate} </span>   
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Passengers: {activeBus[0].passengers} </span>   
                                            <span className="block text-secondary-300 text-sm my-1 sm:text-xs" > Status: {activeBus[0].busStatus} </span>                                               
                                        </div>
                                    </div> 
                                </section>                                
                            </>                        
                        )}
                        {/* =================== End: Operator Profile ==================== */}
                    </div>
                    {/* ==================== End:: Bus Profile ================================= */}
                    {/* ==================== Start:: Bus on Map ================================ */}
                    <div className="map-location-card w-full sm:w-9/12 sm:p-4">                      
                        <div className="bg-white w-full  rounded-lg p-4">
                            <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                                <h3 className="font-bold text-base text-center w-11/12 text-mainColor">
                                    Nyamirambo - Downtown 401
                                </h3>
                                <hr className=" bg-secondary-150 border my-3 w-full" />
                            </div>
                            <div className="card-body  h-3/6 sm:h-2/6">
                                <div className={`w-full ${ showModel == true || showModelStart == true ? "hidden" : "" }`} id="map">
                                    {loading && <Map />}
                                    {!loading && 
                                        <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={true}>
                                            <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                            <MarkerClusterGroup>
                                                <Marker position={[ -1.944103,30.056790]} icon={iconBus}>
                                                    <Popup>
                                                        Driver: John doe 
                                                    </Popup>
                                                </Marker>
                                                <Marker position={[-1.9443809,30.0565809]} icon={iconBus} >
                                                    <Popup>
                                                        Driver: John doe 
                                                    </Popup>
                                                </Marker>   
                                                <Marker position={[ -1.9437671,30.05701]} icon={iconBus} >
                                                    <Popup>
                                                        <Primary name={"Locate"} onclick={ () => Notify("Bus has been located" , "info") } /> 
                                                    </Popup>
                                                </Marker> 
                                                <Marker position={[-1.9460644,30.0556179]} icon={iconBus} >
                                                    <Popup>
                                                        Driver: John doe 
                                                    </Popup>
                                                </Marker>    
                                                <Marker position={[-1.9496852,30.0583005]} icon={iconBus} >
                                                    <Popup>
                                                        Driver: John doe 
                                                    </Popup>
                                                </Marker>     
                                                <Marker position={[-1.9801872,30.0413067]} icon={iconStoppedBus} >
                                                    <Popup>
                                                        Driver: John doe 
                                                    </Popup>
                                                </Marker>   
                                                <Marker position={[-1.9567121,30.0584473]} icon={iconOnBoardBus} >
                                                    <Popup>
                                                        Driver: John doe
                                                    </Popup>
                                                </Marker>                                           
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
export default connect( mapStateTo , {})(LocationSim);