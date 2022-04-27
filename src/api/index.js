import axios from "axios"

const API = axios.create({ 
    baseURL: "http://localhost:5000/api/v1", 
    headers: {
      'Content-Type': 'application/json'
    }
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = JSON.parse(localStorage.getItem("auth-token"))
  }
  return req
})

export { API };