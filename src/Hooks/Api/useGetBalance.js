import useAsync from "../useAsync";

import * as cartsApi from "../../Services/cartsApi";

export default function useGetBalance(token){
    
    const {
        data: balance,
        loading: balanceLoading,
        error: balanceError,
        act: getBalanceCart
    } = useAsync(() => cartsApi.getBalance(token));

    return {
        balance,
        balanceLoading,
        balanceError,
        getBalanceCart
    };
}