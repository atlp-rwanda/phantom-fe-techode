import React from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { DangerButton, SuccessButton, WarningButton } from '../buttons/Buttons';
import { speedControl } from '../../redux/actions/ActiveBus'

const DriverAction = ( props ) => {
    const { revealModel , activeBus , user,speedControl } = props;
    /* ============ Start: Getting user =============== */ 
    const { type: userType } = user ;
    /* ============== End: Getting user =============== */ 
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
            <div className='w-full rounded-md '>
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
export default connect( mapStateTo , {speedControl})(DriverAction);