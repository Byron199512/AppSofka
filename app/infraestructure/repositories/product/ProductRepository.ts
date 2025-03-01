import { AxiosRequestConfig } from "axios";
import { IMessage, IProductCreateResponse, IProductListResponse, IProductUpdateResponse } from "../../../core/models/product/ProductResponse";
import { IProductRepository } from "../../../core/repositories/product/IProductRepository";
import { HttpClient } from "../../http/httpClient";
import { IProductCreateRequest, IProductUpdateRequest } from "../../../core/models/product/ProductRequest";

export default class ProductRepository implements IProductRepository {
    private readonly authorization: AxiosRequestConfig;
    private httpClient: HttpClient;
    private readonly baseUrl: string = process.env.BASE_URL!;

    constructor() {
        this.httpClient = new HttpClient(this.baseUrl);
        this.authorization = {
            headers: {
                'Authorization': 'Basic ' + btoa(`${process.env.BASIC_USER}:${process.env.BASIC_PASSWORD}`)
            }
        }
    }




    async createProduct(productCreate: IProductCreateRequest): Promise<IProductCreateResponse> {
        try {
            const resp = await this.httpClient.post<IProductCreateResponse>(process.env.POST_PRODUCT!, productCreate);
            return resp.data;
        } catch (error) {
            throw error
        }
    }

    async updateProduct(id: string, productUpdate: IProductUpdateRequest): Promise<IProductUpdateResponse> {
        try {
            const resp = await this.httpClient.put<IProductUpdateResponse>(process.env.PUT_PRODUCT!.replace("id", id), productUpdate);
            return resp.data;
        } catch (error) {
            throw error
        }
    }

    async deleteProduct(id: string): Promise<IMessage> {
        try {
            const resp = await this.httpClient.delete<IMessage>(process.env.DELETE_PRODUCT!.replace("id", id));
            return resp.data;
        } catch (error) {
            throw error
        }
    }

    async verifyProduct(id: string): Promise<boolean> {
        try {
            const resp = await this.httpClient.get<boolean>(process.env.GET_VERIFY!.replace("id", id));
            return resp.data;
        } catch (error) {
            throw error
        }
    }

    async getAll(): Promise<IProductListResponse> {
        try {
            const resp = await this.httpClient.get<IProductListResponse>(process.env.GET_PRODUCT!);
            return resp.data;
        } catch (error) {
            throw error
        }
    }

}