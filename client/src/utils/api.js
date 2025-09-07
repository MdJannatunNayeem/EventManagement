import axios from 'axios';
const API_URL = 'https://eventmanagement-qv0d.onrender.com'; // backend URL

export const api = axios.create({
    baseURL: API_URL + '/api'
});

// attach token helper
export function setAuthToken(token) {
    if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete api.defaults.headers.common['Authorization'];
}

export const IMAGE_API= "https://eventmanagement-qv0d.onrender.com/upload-file/";