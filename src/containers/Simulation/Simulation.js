import React, { useEffect, useState } from "react";
import BusSim from "../../components/BusSim/BusSim";
import { Primary } from "../../components/buttons/Buttons.js";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import DriverSim from "../../components/LocationSim/DriverSim";
import { updateActiveBus , start , speedControl } from '../../redux/actions/ActiveBus'
import close from "../../assets/svgs/close.svg";
import { connect } from "react-redux";
import Notify from "../../functions/Notify";
import checkAuth from "../../functions/checkAuth";
import { update } from "../../redux/actions/userActions";
import hundleStartStop,{handleDriverActionsDemo} from "../../functions/driverAction";
import socket from "../../config/socket";
import Location from "../../components/Simulation/Location.js";

const Simulation = ( props ) => {
    return (
        <> 
            <Location />
        </>
    );
}
 
const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus,
        routeCoordinate : state.routeCoordinate
    }
}
export default connect( mapStateTo , { updateActiveBus , start ,speedControl , update })(Simulation);
