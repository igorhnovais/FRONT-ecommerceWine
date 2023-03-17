import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useProducts(){
    
    const {
        data: products,
        loading: productsLoading,
        error: productsError,
        act: getProducts
    } = useAsync(() => productsApi.getAllProducts());

    return {
        products,
        productsLoading,
        productsError,
        getProducts
    };
}