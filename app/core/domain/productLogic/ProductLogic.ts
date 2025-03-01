import ProductRepository from "../../../infraestructure/repositories/product/ProductRepository";
import { IProductCreateRequest, IProductUpdateRequest } from "../../models/product/ProductRequest";
import { IMessage, IProductCreateResponse, IProductListResponse, IProductUpdateResponse } from "../../models/product/ProductResponse";
import { IProductRepository } from "../../repositories/product/IProductRepository";
import { IProductLogic } from "./IProductLogic";

export default class ProductLogic implements IProductLogic {

  private _productRepository: IProductRepository;
  constructor() {
    this._productRepository = new ProductRepository();
  }
  async createProduct(productCreate: IProductCreateRequest): Promise<IProductCreateResponse> {
    return await this._productRepository.createProduct(productCreate);
  }
  async updateProduct(id: string, productUpdate: IProductUpdateRequest): Promise<IProductUpdateResponse> {
    return await this._productRepository.updateProduct(id, productUpdate);
  }
  async deleteProduct(id: string): Promise<IMessage> {
    return await this._productRepository.deleteProduct(id);
  }
  async verifyProduct(id: string): Promise<boolean> {
    return await this._productRepository.verifyProduct(id);
  }
  async getAll(): Promise<IProductListResponse> {
    return await this._productRepository.getAll();
  }

}