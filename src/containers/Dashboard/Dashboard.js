import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { connect } from "react-redux";
import RouteCard from "../../components/Cards/RouteCard";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import TrackCard from "../../components/skeletons/cards/TrackCard";
import fetchAllRoute from "../../functions/fetchAllRoute";

const Dashboard = (props) => {
    const { user } = props;
    const { type : userType } = user ;
    const [loading , setLoading ] = useState(true);
    const [places , setPlaces] = useState([]);
    const [route , setAllRoute] = useState([]);
    useEffect( () => {
        setPlaces([]);        
        const allPlace = [];  
        for (let i = 0; i < route.length; i++) {
            if(!allPlace.includes(route[i].city.toString().toLowerCase())){
                allPlace.push(route[i].city.toString().toLowerCase())
            }
        } 
        setPlaces(allPlace)         
    },[route])

    useEffect( async () =>{     
        const allRoute  = await fetchAllRoute();
        setAllRoute(allRoute)
        setLoading(false);
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
                                <div key={"track-card"+index++} className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                    <RouteCard placeName={place} route={route} />                            
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