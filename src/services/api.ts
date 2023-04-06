import instance from "./interceptor";
import {AxiosRequestConfig, AxiosResponse} from "axios";

export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return instance.get<T>(url, config);
};

export const post = <T, K>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<K>> => {
    return instance.post<T, AxiosResponse<K>>(url, data, config);
};
