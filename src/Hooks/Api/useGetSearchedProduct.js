import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useOneProduct(search){
   
    const {
        data: productsSearched,
        loading: productsSearchedLoading,
        error: productsSearchedError,
        act: getProductsSearched
    } = useAsync(() => productsApi.getProductsSearched(search));

    return {
        productsSearched,
        productsSearchedLoading,
        productsSearchedError,
        getProductsSearched 
    };
}