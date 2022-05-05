import React, { useEffect, useState } from "react";
import BusSim from "../../components/BusSim/BusSim";
import { Primary } from "../../components/buttons/Buttons.js";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import LocationSim from "../../components/LocationSim/LocationSim"
import DriverSim from "../../components/LocationSim/DriverSim";
import { updateActiveBus , start , speedControl } from '../../redux/actions/ActiveBus'
import close from "../../assets/svgs/close.svg";
import { connect } from "react-redux";
import Notify from "../../functions/Notify";
import checkAuth from "../../functions/checkAuth";
import { update } from "../../redux/actions/userActions";
import hundleStartStop,{handleDriverActionsDemo} from "../../functions/driverAction";
import socket from "../../config/socket";

const BusSimulation = ( props ) => {
    const { updateActiveBus , start , user , speedControl , update,routeCoordinate } = props;
    const [ showModel , setShowModel ] = useState(false);
    const [ showModelStart , setShowModelStart ] = useState(false);
    const [ routeLocatorForm , setRouteLocatorForm ] = useState(false);
    const { type: userType } = user ;
    const [ loading , setLoading ] = useState(true);
    /* ================= Start:: form infromation managimment ============= */ 
    const [passengers , setPassenger ] = useState("");
    const [alighting, setAlighting] = useState("");
    const [joining, setJoining] = useState("");
    /* =================== End:: form infromation managimment ============= */ 

    /* ================= Start:: form infromation managimment ============= */ 
    const [departure , setDeparture ] = useState("");
    const [destination, setDestination] = useState("");
    /* =================== End:: form infromation managimment ============= */ 

    
    /* ================= Start:: form infromation managimment ============= */ 
    const [location , setMyLocation ] = useState({});
    const [busStarted ,setBusStarted] = useState(false);
    const busEntityId = localStorage.getItem("busEntintyId");
    /* =================== End:: form infromation managimment ============= */ 


    useEffect( async () => {
        await checkAuth(user,update);
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setMyLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })
            },
            function(error) {
                Notify("Please you need to provide you location ","error");
            }
        );
        setLoading(false)
    })

  
    /* ================== Start Passenger funstion ======================== */
    const handleStartTrip = async (e) => {
        e.preventDefault();
        if(passengers.trim() == "" ) return Notify("Please make sure passengers field is not empty","error");
        if(passengers > 60 ) return Notify("Passengers should be less that","error");
        await handleDriverActionsDemo(user,start,speedControl,"start",setBusStarted,routeCoordinate,passengers)        
        setPassenger("")
        revealModel("start");  
    } 

    const mapRouteModify = (e) => {
        e.preventDefault();
    }

    const handleAlightTrip = async (e) => {
        e.preventDefault();
        Notify("")
        if(alighting.trim() == "" ) return 0;
        if(joining.trim() == "" ) return 0;
        if(joining > 60 ) return 0;
        socket.emit("get_current",{id : busEntityId})
        socket.on("receive_current_passengers",async (data) =>{
            if(alighting > Number(data.bus.passengers) ){
                Notify("")
                return Notify("Please alighting passengers should be less than "+ alighting,"error");
            }         
            else{
                await handleDriverActionsDemo(user, { updateActiveBus ,alighting, joining } ,speedControl,"alight",setBusStarted,routeCoordinate)  
                setAlighting("");
                setJoining("");               
                revealModel("update"); 
                Notify("")
                return Notify("Passengers updated","success")   
            }  
        })
              
    }
    
    const revealModel = ( modelType = "") => {
        // activeBus[0].busStatus = "Bus Stopped"; 
        switch(modelType){
            case "start":
                setShowModelStart(!showModelStart); 
                break;
            case "update":
                setShowModel(!showModel);  
                break;
            case "departure":
                setRouteLocatorForm(!routeLocatorForm);  
                break;
            default:
                // activeBus[0].busStatus = "Bus Stopped"; 
                setShowModel(!showModel); 
                break;                    
        }               
    }
    return ( 
        <>
            {/* ===================================== Start:: Alight Model =============================== */}        
                <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center z-50 px-4 ${ showModel === true ? 'block' : 'hidden' }`}>
                    <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                        <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                            <h3 className='font-bold text-sm text-center w-11/12' >
                                Passengers status
                            </h3>
                            <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() =>{
                                 revealModel("update");
                                 socket.emit("killAlighting",{ id: busEntityId  });
                                 }} >
                                <img src={close} alt="Phantom" className='float-right' />
                            </div>
                            <hr className=' bg-secondary-150 border my-3 w-full' />
                        </div>
                        <div className="card-body">
                            <form onSubmit={ e => { 
                                handleAlightTrip(e);
                                socket.emit("killAlighting",{ id: busEntityId  }) 
                            }} className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                                <div className="input my-3 h-9 "> 
                                    <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                        <input type="text" name="firstname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Alghting" value={alighting} onChange={(e) => setAlighting(e.target.value)} />                                   
                                    </div>                
                                </div>  
                                <div className="input my-3 h-9 "> 
                                    <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                        <input type="text" name="lastname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Joining" value={joining} onChange={(e) => setJoining(e.target.value)} />
                                    </div>                
                                </div>                              
                                <div className="w-full">
                                    <Primary name={`Save`} styles='py-2' />
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            {/* ======================================= End:: Alight Model =============================== */}   
            {/* ===================================== Start:: Start Model ================================ */}        
                <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center z-50 px-4 ${ showModelStart === true ? 'block' : 'hidden' }`}>
                    <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                        <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                            <h3 className='font-bold text-sm text-center w-11/12' >
                                Passengers
                            </h3>
                            <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => revealModel("start") } >
                                <img src={close} alt="Phantom" className='float-right' />
                            </div>
                            <hr className=' bg-secondary-150 border my-3 w-full' />
                        </div>
                        <div className="card-body">
                            <form onSubmit={ e => handleStartTrip(e) } className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                                <div className="input my-3 h-9 "> 
                                    <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                        <input type="number" name="firstname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Passengers" value={passengers} onChange={(e) => setPassenger(e.target.value)}  />                                   
                                    </div>                
                                </div>                                                              
                                <div className="w-full">
                                    <Primary name={`Save`} styles='py-2' />
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            {/* ====================================== End:: Start Model =============================== */}  
            {/* ===================================== Start:: Departure and destination ================================ */}        
             <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center z-50 px-4 ${ routeLocatorForm === true ? 'block' : 'hidden' }`}>
                    <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                       
                        <div className="card-body">
                            <form onSubmit={ e => mapRouteModify(e) } className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                                <div className="input my-3 h-9 "> 
                                    <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">                                
                                        <select className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full" value={departure} onChange={(e) => setDeparture(e.target.value)} >
                                            <option value="">Select departure</option>
                                            <option value="1">Downtown</option>
                                        </select>
                                        
                                    </div>                
                                </div>  
                                <div className="input my-3 h-9 "> 
                                    <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                        <select className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full"  value={destination} onChange={(e) => setDestination(e.target.value)} >
                                            <option value="">Select destination</option>
                                            <option value="2">Nyamirambo</option>
                                        </select>                               
                                    </div>                
                                </div>                                                                
                                <div className="w-full">
                                    <Primary name={`Track`} styles='py-2' />
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            {/* ====================================== End:: Departure and destination =============================== */}                 
            <DashBoardLayout>  
                {
                    !loading &&                     
                        userType != "driver" && userType != "Driver" ?
                            <LocationSim myLocation={location} revealModel={revealModel} showModel={showModel} showModelStart={showModelStart}/>
                        :
                            ""
                     
                }  
                {
                    !loading && 
                        userType == "driver" || userType == "Driver" ?
                            <DriverSim myLocation={location} revealModel={revealModel} showModel={showModel} showModelStart={showModelStart} busStarted={busStarted} setBusStarted={setBusStarted} />                        
                        :
                            ""
                }    
                                      
            </DashBoardLayout>
        </>
     );
}
 
const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus,
        routeCoordinate : state.routeCoordinate
    }
}
export default connect( mapStateTo , { updateActiveBus , start ,speedControl , update })(BusSimulation);