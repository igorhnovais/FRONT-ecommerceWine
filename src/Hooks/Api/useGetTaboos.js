import useAsync from "../useAsync";

import * as productsApi from "../../Services/productsApi";

export default function useGetWines(){
    
    const {
        data: taboos,
        loading: taboosLoading,
        error: taboosError,
        act: getTaboos
    } = useAsync(() => productsApi.getTaboos());

    return {
        taboos,
        taboosLoading,
        taboosError,
        getTaboos
    };
}