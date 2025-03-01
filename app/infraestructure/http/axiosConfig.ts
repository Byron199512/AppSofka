import axios, { AxiosInstance } from 'axios';
import { DeviceEventEmitter } from 'react-native';
// import { setLoading } from '../../utils/loading';

const baseUrl: string = process.env.BASE_URL || '';
export const axiosInstance = axios.create({ baseURL: baseUrl });

export const setInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(
        config => {
            DeviceEventEmitter.emit('loading', { detail: true })
            return config;
        },
        error => {
            DeviceEventEmitter.emit('loading', { detail: false })
            DeviceEventEmitter.emit('axiosError', { detail: error })
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            DeviceEventEmitter.emit('loading', { detail: false })
            return response;
        },
        (error) => {
            DeviceEventEmitter.emit('loading', { detail: false })
            DeviceEventEmitter.emit('axiosError', { detail: error })
            return Promise.reject(error);
        }
    );
};


