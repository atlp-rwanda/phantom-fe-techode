
import { API as axios } from "../api/";


const checkAuth = async (user,updateUser) => {
    let isAuth = localStorage.getItem("Logged");
    const payload = {
        id:"",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
        profile:""
    };
   
    if(isAuth == "TRUE" && user.id == 0){
        let token = localStorage.getItem("token");
        const response = await axios.post(`/users/isauth`, {
            token:token
        });
        const { user: userData, token: newToken } = response.data.data;
        const names = userData.fullname.split(" ");
        for (let i = 0; i < names.length; i++) {
          if (i == 0) {
              payload.firstName = names[i];
          } else {
              payload.lastName += `${names[i]} `;
          }
        }
        payload.id = userData.id;
        payload.username = userData.username;
        payload.email = userData.email;
        payload.type = userData.userType;      
        payload.profile = userData.profileImage;   
        updateUser(payload);
        localStorage.setItem("token", newToken);      
    }
}

export default checkAuth;