import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json',
  },
});

const register = async (email, password, displayName) => {
  try {
    const response = await axiosInstance.post('/api/v1/auth/register', { email, password, displayName });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/api/v1/auth/login', { email, password });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  register,
  login,
}