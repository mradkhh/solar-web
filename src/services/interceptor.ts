import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API: string = 'https://api.solar.exadot.io/api/v1'

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
