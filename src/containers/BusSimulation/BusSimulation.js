import React, { useState } from "react";
import BusSim from "../../components/BusSim/BusSim";
import { Primary } from "../../components/buttons/Buttons";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import LocationSim from "../../components/LocationSim/LocationSim";
import { update , start } from '../../redux/actions/ActiveBus'

import close from "../../assets/svgs/close.svg";
import { connect } from "react-redux";
import Notify from "../../functions/Notify";
const BusSimulation = ( props ) => {
    const { activeBus , update , start } = props;
    const [ showModel , setShowModel ] = useState(false);
    const [ showModelStart , setShowModelStart ] = useState(false);

    /* ================= Start:: form infromation managimment ============= */ 
    const [passengers , setPassenger ] = useState("");
    const [alighting, setAlighting] = useState("");
    const [joining, setJoining] = useState("");
    /* =================== End:: form infromation managimment ============= */ 

    /* ================== Start Passenger funstion ======================== */
    const handleStartTrip = (e) => {
        e.preventDefault();
        if(passengers.trim() == "" ) return Notify("Please make sure passengers field is not empty","error");
        start({ busId: 1 , passengers });
        setPassenger("")
    } 

    const handleAlightTrip = (e) => {
        e.preventDefault();
        if(alighting.trim() == "" ) return Notify("Please make sure alighting passengers field is not empty","error");
        if(joining.trim() == "" ) return Notify("Please make sure joining passengers field is not empty","error");
        update({driverId: 1, alighting, joining});
        setAlighting("");
        setJoining("");
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
                            <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => revealModel("update") } >
                                <img src={close} alt="Phantom" className='float-right' />
                            </div>
                            <hr className=' bg-secondary-150 border my-3 w-full' />
                        </div>
                        <div className="card-body">
                            <form onSubmit={ e => handleAlightTrip(e)} className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
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
                {/* ====================================== End:: Alight Model =============================== */}   
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
            <DashBoardLayout>
                
                <div className="w-full">
                    <LocationSim revealModel={revealModel} showModel={showModel} showModelStart={showModelStart}/>
                </div>     
                <div className="w-full">
                    <BusSim />
                </div>       
            </DashBoardLayout>
        </>
     );
}
 
const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus
    }
}
export default connect( mapStateTo , { update , start })(BusSimulation);