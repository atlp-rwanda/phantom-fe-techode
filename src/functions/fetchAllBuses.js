
import { getBuses } from "../api/";
import Notify from "./Notify";

const fetchAllBuses =  async () => {
  try {
        let buses = []
        let page = 0;
        let totalPage = 0 ;
        const response = await getBuses(page);       
        buses = response.data.data.buses;
        totalPage = response.data.data.totalPage;
        if(totalPage > 1){
            for (let page = 1; page < totalPage; page++) {
                const nextPage = await getBuses(page);    
                nextPage.data.data.buses.map(value => {
                    buses.push(value)
                })      
            }
        }
       
        return buses;
   } catch (error) {
        if (error.code != "ERR_NETWORK") {
            Notify(error.response.data.message, "error");           
        }
        else{
            Notify("Please check your network and try again" , "error")
        }  
        return [];  
   }
}

export default fetchAllBuses