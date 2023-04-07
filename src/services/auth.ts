import axios, { AxiosInstance } from 'axios';

const API: string = 'http://178.128.116.142:1777/api';

class Auth {
    private token: string | null = null;
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API,
        });

        // Add request interceptor to inject token
        this.axiosInstance.interceptors.request.use(config => {
            if (this.token) {
                config.headers.Authorization = `Bearer ${this.token}`;
            }
            return config;
        });
    }

    async login(phoneNumber: string, password: string): Promise<boolean> {
        try {
            const response = await this.axiosInstance.post('/auth/v1/login', { phoneNumber, password });
            this.token = response.data.token;
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async logout(): Promise<void> {
        this.token = null;
    }

    async register(firstName: string, lastName: string, password: string, phoneNumber: string): Promise<boolean> {
        try {
            const response = await this.axiosInstance.post('/auth/v1/register', { firstName, lastName, password, phoneNumber });
            this.token = response.data.token;
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async confirmNumber(phoneNumber: string): Promise<boolean> {
        try {
            const response = await this.axiosInstance.put(`/auth/v1/sendCode/${phoneNumber}`);
            // If the request is successful, the server will send a confirmation code to the phone number
            // You can handle the response based on your specific use case
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async verify(code: string, phoneNumber: string): Promise<boolean> {
        try {
            const response = await this.axiosInstance.post(`/auth/v1/verify/${code}/${phoneNumber}`);
            // If the request is successful, the user is verified and you can handle the response based on your specific use case
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default Auth;
