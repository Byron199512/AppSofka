import { IProductCreateRequest, IProductUpdateRequest } from "../../models/product/ProductRequest";
import { IMessage, IProductCreateResponse, IProductListResponse, IProductUpdateResponse } from "../../models/product/ProductResponse";

export default abstract class ProductGateway {
    abstract getAll(): Promise<IProductListResponse>;
    abstract createProduct(productCreate: IProductCreateRequest): Promise<IProductCreateResponse>;
    abstract updateProduct(id: string, productUpdate: IProductUpdateRequest): Promise<IProductUpdateResponse>;
    abstract deleteProduct(id: string): Promise<IMessage>;
    abstract verifyProduct(id: string): Promise<boolean>;
}