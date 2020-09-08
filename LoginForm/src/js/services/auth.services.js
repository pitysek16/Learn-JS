import axios from 'axios';
import API_ENV from '../config/api.config';

export async function login(email, password){
    try {
        const response = await axios.post(`${API_ENV.apiURL}/auth/login`, JSON.stringify({ email, password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch(err) {
        console.log(err);
        return Promise.reject(err)
    }
}