import axios from "axios";

export const API = axios.create({
    baseURL: process.env.API_URL || "https://phantom-be-production.herokuapp.com/api/v1" 
});

export const forgotPassword= (formData)=>API.post('/accounts/forgot-password',formData);
export const resetPassword = (formData)=>API.post('/reset-password/:token',formData);
