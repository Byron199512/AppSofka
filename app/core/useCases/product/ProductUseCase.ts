import { IProductLogic } from "../../domain/productLogic/IProductLogic";
import ProductGateway from "../../gateway/product/ProductGateway"
import { IProductCreateRequest, IProductUpdateRequest } from "../../models/product/ProductRequest";
import { IMessage, IProductCreateResponse, IProductListResponse, IProductUpdateResponse } from "../../models/product/ProductResponse";

export default class ProductUseCase extends ProductGateway{
   
    private readonly _productLogic:IProductLogic;

    constructor(productLogic:IProductLogic) {
        super();
        this._productLogic = productLogic;
    }
    
    async getAll(): Promise<IProductListResponse> {
        return await this._productLogic.getAll();
    }

    async createProduct(productCreate: IProductCreateRequest): Promise<IProductCreateResponse> {
         return await this._productLogic.createProduct(productCreate);
    }
    async updateProduct(id: string, productUpdate: IProductUpdateRequest): Promise<IProductUpdateResponse> {
         return await this._productLogic.updateProduct(id,productUpdate);
    }
    async deleteProduct(id: string): Promise<IMessage> {
         return await this._productLogic.deleteProduct(id);
    }
    async verifyProduct(id: string): Promise<boolean> {
         return await this._productLogic.verifyProduct(id);
    }

}