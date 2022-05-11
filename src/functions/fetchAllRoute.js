
import { getRoutes} from "../api/";
import Notify from "./Notify";

const fetchAllRoute =  async () => {
  try {
        let routes = []
        let page = 0;
        let totalPage = 0 ;
        const response = await getRoutes(page);       
        routes = response.data.data.routes;
        totalPage = response.data.data.totalPage;
        if(totalPage > 1){
            for (let page = 1; page < totalPage; page++) {
                const nextPage = await getRoutes(page);    
                nextPage.data.data.routes.map(value => {
                    routes.push(value)
                })      
            }
        }
       
        return routes;
   } catch (error) {
        if (error.code != "ERR_NETWORK") {
            Notify(error.response.data.message, "error");           
        }
        else{
            Notify("Unable to fetch our routes probably it because of internet network" , "error")
        }  
        return [];  
   }
}

export default fetchAllRoute