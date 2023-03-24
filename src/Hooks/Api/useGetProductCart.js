import useAsync from "../useAsync";

import * as cartsApi from "../../Services/cartsApi";

export default function useGetProductcart(token){
    
    const {
        data: productsCart,
        loading: productsCartLoading,
        error: productsCartError,
        act: getProductsCart
    } = useAsync(() => cartsApi.findManyProductsCart(token));

    return {
        productsCart,
        productsCartLoading,
        productsCartError,
        getProductsCart
    };
}