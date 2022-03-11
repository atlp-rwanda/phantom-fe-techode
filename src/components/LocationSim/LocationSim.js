import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { LebalTextButton } from '../buttons/LebalButton';
import { OperatorProfile } from '../skeletons/cards/Profile';

const LocationSim = ( props ) => {
    const {} = props;
    const [loading ,setLoading] = useState(false);
    const handleBusStart = () => {
        Notify("The bus is on going now" , 'success' );         
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
                    <div className="start-btn w-3/12 sm:w-20">
                        <LebalTextButton text="Start" type="info" onclick={handleBusStart} />
                    </div>
                    <div className="end-btn w-3/12 sm:w-20">
                        <LebalTextButton text="Stop" type="danger" onclick={handleBusStop}/>
                    </div>                                    
                </div>
                {/* ==================== End:: Buttons ========================================= */}
                {/* ==================== Start:: Bus similation ================================ */}
                <div className="flex flex-wrap items-center">
                    {/* ==================== Start:: Bus Profile =============================== */}
                    <div className="bus-info-location w-full sm:w-3/12 bg-white rounded-md p-5">
                        {/* ==================== Start: Operator profile ================== */}
                        {loading && <OperatorProfile />}
                        {!loading && (                   
                            <>
                                <section className="flex items-center justify-center " >
                                    <div className="profile-container">
                                        <img className="rounded-full border border-primary-600 w-10 h-10 sm:w-12 sm:h-12 hover:opacity-75"  src={"https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw"} alt="image" /> 
                                    </div> 
                                </section>
                                <section className="">
                                    
                                </section>
                            </>                        
                        )}
                        {/* =================== End: Operator Profile ==================== */}
                    </div>
                    {/* ==================== End:: Bus Profile ================================= */}
                    {/* ==================== Start:: Bus on Map ================================ */}
                    <div className="map-location-card">
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