import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useGetWines(){
    
    const {
        data: cups,
        loading: cupsLoading,
        error: cupsError,
        act: getCups
    } = useAsync(() => productsApi.getCups());

    return {
        cups,
        cupsLoading,
        cupsError,
        getCups
    };
}