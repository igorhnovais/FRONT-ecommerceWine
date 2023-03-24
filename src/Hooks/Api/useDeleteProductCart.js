import useAsync from "../useAsync";
import useToken from '../useToken';

import * as cartsApi from "../../Services/cartsApi"

export default function useDeleteProductCart(){
   
    const token = useToken();
   
    const {
        loading: deleteProductLoading,
        error: deleteProductError,
        act: getDeleteProduct
    } = useAsync((data) => cartsApi.deleteProductCart(data, token), false);

    return {
        deleteProductLoading,
        deleteProductError,
        getDeleteProduct 
    };
}