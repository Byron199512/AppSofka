import { Context, createContext } from "react";
import ProductUseCase from "../../../core/useCases/product/ProductUseCase";
import { Merge } from "../../utils/createObject";


export type DependencyContextType = {
    productUseCase: ProductUseCase;
}

export interface DependencyState {
}

export const DependencyContextDefaultValues: DependencyState = {
}

export const DependencyContext: Context<DependencyContextType> = createContext<DependencyContextType>(Merge<DependencyContextType>(DependencyContextDefaultValues));