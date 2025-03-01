export interface IProductListResponse {
    data: IProductResponse[];
}

export interface IProductCreateResponse extends IMessage {
    data: IProductResponse;
}

export interface IProductUpdateResponse extends IMessage {
    data: ProductUpdate;
}


export interface IMessage {
    message: string;
}

export interface ProductUpdate {
    name: string;
    description: string;
    logo: string;
    date_release: Date;
    date_revision: Date;
}

export interface IProductResponse {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: Date;
    date_revision: Date;
}