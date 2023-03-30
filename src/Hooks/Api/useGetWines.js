import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useGetWines(){
    
    const {
        data: wines,
        loading: winesLoading,
        error: winesError,
        act: getWines
    } = useAsync(() => productsApi.getWines());

    return {
        wines,
        winesLoading,
        winesError,
        getWines
    };
}