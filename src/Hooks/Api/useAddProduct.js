import useAsync from "../useAsync";
import useToken from '../useToken';

import * as cartsApi from "../../Services/cartsApi"

export default function useAddProduct(){
   
    const token = useToken();
   
    const {
        loading: addProductLoading,
        error: addProductError,
        act: getAddProduct
    } = useAsync((data) => cartsApi.AddProductCart(data, token), false);

    return {
        addProductLoading,
        addProductError,
        getAddProduct 
    };
}