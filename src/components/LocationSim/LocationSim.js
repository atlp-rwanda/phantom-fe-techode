import React from 'react'
import { connect } from 'react-redux'

const LocationSim = ( props ) => {
  const {} = props;
  return (
    <div className='w-full bg-white rounded'>
        <div className="action-button">
            
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <div className="bus-location-card ">                            
            </div>
            <div className="map-location-card">
            </div>
        </div>                
    </div>
  )
}

const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus
    }
}
export default connect( mapStateTo , {})(LocationSim);