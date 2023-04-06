import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API: string = 'http://178.128.116.142:1777/api'

const instance: AxiosInstance = axios.create({
    baseURL: API,
});

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token: string | null = localStorage.getItem('authToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
);

export default instance;
