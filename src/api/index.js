import axios from "axios";

export const API = axios.create({
    baseURL: process.env.API_URL || "https://phantom-be-production.herokuapp.com/api/v1",
    headers: {
        'Content-Type': 'application/json'
    }
});


API.interceptors.request.use((req, res) => {
    if(localStorage.getItem("token")){
        req.headers.Authorization = localStorage.getItem("token");
    } return req
})


export const forgotPassword= (formData)=>API.post('/accounts/forgot-password',formData);
export const resetPassword = (token,formData)=>API.post(`/accounts/reset-password/${token}`,formData);
export const getSinglePermission = (param)=>API.get(`/permissions/${param}`);
export const getSingleBuses = (param)=>API.get(`/buses/${param}`);

