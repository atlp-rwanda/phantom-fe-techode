import { getSinglePermission } from "../api"
import Notify from "../functions/Notify";

const getPermissionId = async (name) => {
    try {
        const response = await getSinglePermission(name);  
        const { data } = response.data;
        console.log(data);    
        return data.permission.id;  
    } catch (error) {
        Notify(`${error.response.data.message}`, "error");
        return 0;
    }    
}

export default getPermissionId;