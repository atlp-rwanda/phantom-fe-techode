import axios from "axios";

export const baseUrl = process.env.API_URL || "https://phantom-be-staging.herokuapp.com/api/v1" ;
export const API = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        "auth-token": `Bearer ${localStorage.getItem("token")}`
    }
});

export const AUTH = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});
   
API.interceptors.request.use((req, res) => {
    if(localStorage.getItem("token")){
        req.headers = {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            "auth-token": `Bearer ${localStorage.getItem("token")}`
        }
    } return req
})


export const forgotPassword= (formData)=>API.post('/accounts/forgot-password',formData);
export const resetPassword = (token,formData)=>API.post(`/accounts/reset-password/${token}`,formData);
export const getSinglePermission = (param)=>API.get(`/permissions/${param}`);
export const getSingleBuses = (param)=>API.get(`/buses/${param}`);
export const getRoutes = (page = 0,size = 0,order = "asc")=>API.get(`/routes?page=${page}&size=${size}&order=${order}`);
export const getSingleRoutes = (id)=>API.get(`/routes/${id}`);
export const createRouteOnApi = (route)=>API.post(`/routes/register`,route);
export const getBuses = (page = 0,size = 0,order = "asc")=>API.get(`/buses?page=${page}&size=${size}&order=${order}`);