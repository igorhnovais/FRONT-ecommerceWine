import useAsync from "../useAsync";
import useToken from '../useToken';

import * as productsApi from "../../Services/productsApi"

export default function useDeleteAdm(){
   
    const token = useToken();
   
    const {
        loading: deleteAdmLoading,
        error: deleteAdmError,
        act: getDeleteAdm
    } = useAsync((data) => productsApi.deleteProductAdm(data, token), false);

    return {
        deleteAdmLoading,
        deleteAdmError,
        getDeleteAdm 
    };
}