import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { connect } from "react-redux";
import RouteCard from "../../components/Cards/RouteCard";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import TrackCard from "../../components/skeletons/cards/TrackCard";

const Dashboard = (props) => {
    const { user } = props;
    const { type : userType } = user ;
    const [loading , setLoading ] = useState(true);
    const [places , setPlaces] = useState()
    useEffect(() => {
        setLoading(false);
        setPlaces([ "Kigali" , "Huye" , "Gisenyi" ])
    },[])

    return ( 
        <DashBoardLayout>
            {/* ===================== Start: User view ============================  */}
                
                {/* ====== Start: skeleton =========  */}
                    {  (userType != "driver" || userType != "Driver") && loading && <TrackCard /> }   
                {/* ======== End: skeleton =========  */}             
                {!loading &&
                    userType != "driver" && userType != "Driver" ?
                        places.map((place,index) => {
                            return(
                                <div key={index++} className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                    <RouteCard placeName={place} />                            
                                </div> 
                            )
                        })
                    :""                                    
                }                
            {/* ======================= End: User view ============================  */}
        </DashBoardLayout>
     );
}
 
const mapToState = (state) => {
    return{
        user: state.user
    }    
}

export default connect(mapToState,{})(Dashboard)