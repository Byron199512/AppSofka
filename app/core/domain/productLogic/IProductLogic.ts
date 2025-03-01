import { IProductCreateRequest, IProductUpdateRequest } from "../../models/product/ProductRequest";
import { IMessage, IProductCreateResponse, IProductListResponse, IProductUpdateResponse } from "../../models/product/ProductResponse";

export interface IProductLogic {
     getAll(): Promise<IProductListResponse>;
     createProduct(productCreate: IProductCreateRequest): Promise<IProductCreateResponse>;
     updateProduct(id: string, productUpdate: IProductUpdateRequest): Promise<IProductUpdateResponse>;
     deleteProduct(id: string): Promise<IMessage>;
     verifyProduct(id: string): Promise<boolean>;
}