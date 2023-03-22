import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useOneProduct(id){
   
    const {
        data: oneProduct,
        loading: oneProductLoading,
        error: oneProductError,
        act: getOneProduct
    } = useAsync(() => productsApi.getOneProduct(id));

    return {
        oneProduct,
        oneProductLoading,
        oneProductError,
        getOneProduct 
    };
}