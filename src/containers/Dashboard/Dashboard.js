import React from "react";
import { connect } from "react-redux";
import RouteCard from "../../components/Cards/RouteCard";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";

const Dashboard = (props) => {
    const { user } = props;
    const { type : userType } = user ;

    const places = [ "Kigali" , "Huye" , "Gisenyi" ];

    return ( 
        <DashBoardLayout>            
            {/* ===================== Start: User view ============================  */}
                {
                    userType != "driver" ?
                        places.map(place => {
                            return(
                                <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
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