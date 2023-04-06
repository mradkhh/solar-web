import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { get, post } from './api';

type UseFetchResponse<T> = {
    data: T | null;
    isLoading: boolean;
    error: Error | null;
    fetchData: () => void;
};

export const useFetch = <T>(url: string, method: 'get' | 'post' = 'get', data?: any): UseFetchResponse<T> => {
    const [responseData, setResponseData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = () => {
        setIsLoading(true);
        setError(null);

        const requestPromise: Promise<AxiosResponse<T>> = method === 'get' ? get<T>(url) : post<any, T>(url, data);

        requestPromise
            .then(response => {
                setResponseData(response.data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data: responseData, isLoading, error, fetchData };
};
