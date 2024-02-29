import axios from "axios";
import { getToken } from "../utils/local-storage";

const myAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

myAPI.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default myAPI;
