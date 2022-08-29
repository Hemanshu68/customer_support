import axios from "axios";
const API_URL = "http://localhost:5000/v1";
const API = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": " Content-Type, api_key, Authorization",
    },
});

export { API };
