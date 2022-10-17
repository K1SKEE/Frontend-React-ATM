import axios from 'axios';


const API_URL = 'http://localhost:8000';

export default class AtmService {

    constructor() { }

    getCurrencyRate() {
        const url = `${API_URL}/api/v1/currency-rate/`;
        return axios.get(url).then(response => response.data);
    }
    login(user) {
        const url = `${API_URL}/auth/token/login/`
        return axios.post(url, user)
    }
    logout() {
        const url = `${API_URL}/auth/token/logout/`
        return axios.post()
    }
    register(user) {
        const url = `${API_URL}/api/v1/register/`;
        return axios.post(url, user)
    }
}