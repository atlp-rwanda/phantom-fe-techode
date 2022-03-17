import React from "react";
import { connect } from "react-redux";
import RouteCard from "../../components/Cards/RouteCard";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";

const Dashboard = (props) => {
    const { user } = props;
    const { type : userType } = user ;

    return ( 
        <DashBoardLayout>            
            {/* ===================== Start: User view ============================  */}
                {
                    userType == "driver" ?
                        <>
                            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 h-2">
                                <RouteCard />                            
                            </div>  
                            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                <RouteCard />                            
                            </div>
                            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                <RouteCard />                            
                            </div>
                            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                <RouteCard />                            
                            </div>
                            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12">
                                <RouteCard />                            
                            </div>                                                   
                        </>                        
                        
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