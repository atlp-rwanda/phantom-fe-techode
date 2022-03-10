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
    return (
        <>
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
            <div className='w-full rounded-md'>
                <div className="action-button flex flex-wrap justify-around items-center my-3 ">
                    <div className="start-btn w-3/12 sm:w-20">
                        <LebalTextButton text="Start" type="info" onclick={handleBusStart} />
                    </div>
                    <div className="end-btn w-3/12 sm:w-20">
                        <LebalTextButton text="Stop" type="danger" onclick={handleBusStop}/>
                    </div>                                    
                </div>
                <div className="flex flex-wrap items-center">
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
                    <div className="map-location-card">
                    </div>
                </div>                
            </div>        
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