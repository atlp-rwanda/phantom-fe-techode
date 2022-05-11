
import { API as axios } from "../api/";
import Notify from "./Notify";

const getActiveBus = async (setBuses) => {
    try {
        let token = localStorage.getItem("token");
        const response = await axios.get(`/simulation/activebuses`);
        setBuses(response.data.data.buses);  
    } catch (error) {
        if (error.code != "ERR_NETWORK") {
            Notify(error.response.data.message, "error");
        }
        else{
            Notify(error.message, "error");
        }    
    }
   
}

export default getActiveBus;