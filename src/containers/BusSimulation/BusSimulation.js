import React from "react";
import BusSim from "../../components/BusSim/BusSim";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import LocationSim from "../../components/LocationSim/LocationSim";

const BusSimulation = () => {
    return ( 
        <DashBoardLayout>
            <div className="w-full">
                <LocationSim />
            </div>     
            <div className="w-full">
                <BusSim />
            </div>       
        </DashBoardLayout>
     );
}
 
export default BusSimulation;