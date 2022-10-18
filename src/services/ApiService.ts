import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'content-type':'application/json'
    }
})