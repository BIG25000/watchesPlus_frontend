import { createContext } from "react";


export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
    return (
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider 