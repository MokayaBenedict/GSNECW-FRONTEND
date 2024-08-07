import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const api = axios.create({
    baseURL: API_URL,
});

export const signup = async (username, email, password) => {
    const response = await api.post('/signup', { username, email, password });
    return response.data;
};

export const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    return response.data;
};


export const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }};