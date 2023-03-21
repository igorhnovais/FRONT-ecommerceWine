import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useOneProduct(id){
    console.log("tchau", id)
    const {
        data: oneProduct,
        loading: oneProductLoading,
        error: oneProductError,
        act: getOneProduct
    } = useAsync(() => productsApi.getOneProduct(id));

    console.log("oi",oneProduct)

    return {
        oneProduct,
        oneProductLoading,
        oneProductError,
        getOneProduct 
    };
}