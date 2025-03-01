import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance, setInterceptor } from "./axiosConfig";



export class HttpClient {
    axiosInstance: AxiosInstance;
    constructor(baseUrl?: string) {
        this.axiosInstance = baseUrl ? axios.create({ baseURL: baseUrl }) : axiosInstance;
        setInterceptor(this.axiosInstance);
    }

    async get<T = any>(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<T>> {
        try {
            const resp = await this.axiosInstance.get<T>(url, config);
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<T>> {
        try {
            const resp = await this.axiosInstance.post<T>(url, data, config);
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
        try {
            const resp = await this.axiosInstance.put<T>(url, data, config);
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
        try {
            const resp = await this.axiosInstance.delete<T>(url, config);
            return resp;
        } catch (error) {
            throw error;
        }
    }

    async patch(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any>> {
        try {
            const resp = await this.axiosInstance.patch(url, data, config);
            return resp;
        } catch (error) {
            throw error;
        }
    }

}