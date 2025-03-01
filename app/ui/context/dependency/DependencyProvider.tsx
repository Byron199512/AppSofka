import { useMemo } from "react";
import { DependencyContext } from "./DependencyContext"
import ProductUseCase from "../../../core/useCases/product/ProductUseCase";
import ProductLogic from "../../../core/domain/productLogic/ProductLogic";


type Props = {
    children: React.ReactNode
}

export const DependencyProvider: React.FC<Props> = ({ children }: Props) => {
    const productLogic = new ProductLogic();
    const productUseCase = new ProductUseCase(productLogic);
    

    return (
        <DependencyContext.Provider value={{productUseCase}}>
            {children}
        </DependencyContext.Provider>
    )

} 