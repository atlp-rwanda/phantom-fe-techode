import axios from "axios"

const API = axios.create({ 
    baseURL: process.env.API_URL || "http://localhost:5000/api/v1", 
    headers: {
      'Content-Type': 'application/json'
    }
})

export { API };

