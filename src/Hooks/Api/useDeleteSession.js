import useAsync from "../useAsync";
import useToken from '../useToken';

import * as cartsApi from "../../Services/cartsApi"

export default function useDeleteSession(){
   
    const {
        loading: deleteSessionLoading,
        error: deleteSessionError,
        act: getDeleteSession
    } = useAsync((data) => cartsApi.deleteSession(data), false);

    return {
        deleteSessionLoading,
        deleteSessionError,
        getDeleteSession
    };
}