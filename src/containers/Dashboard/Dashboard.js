import React, { useState } from "react";
import { connect } from "react-redux";
import RouteCard from "../../components/Cards/RouteCard";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import TrackCard from "../../components/skeletons/cards/TrackCard";

const Dashboard = (props) => {
    const { user } = props;
    const { type : userType } = user ;
    const [loading , setLoading ] = useState(true);
    setTimeout(() => {
       setLoading(false);
    },2500)

    const places = [ "Kigali" , "Huye" , "Gisenyi" ];

    return ( 
        <DashBoardLayout>            
            {/* ===================== Start: User view ============================  */}
                {/* ====== Start: skeleton =========  */}
                    { loading && <TrackCard /> }   
                {/* ======== End: skeleton =========  */}             
                {!loading &&
                    userType != "driver" ?
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