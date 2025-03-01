export interface IProductCreateRequest {
    id:            string;
    name:          string;
    description:   string;
    logo:          string;
    date_release:  Date;
    date_revision: Date;
}


export interface IProductUpdateRequest {
    name:          string;
    description:   string;
    logo:          string;
    date_release:  Date;
    date_revision: Date;
}


