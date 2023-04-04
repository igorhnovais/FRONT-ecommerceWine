import useAsync from "../useAsync";

import * as usersApi from "../../Services/usersApi"

export default function useGetBalance(token){
    
    const {
        data: adm,
        loading: admLoading,
        error: admError,
        act: getAdm
    } = useAsync(() => usersApi.getPermissionAdm(token));

    return {
        adm,
        admLoading,
        admError,
        getAdm
    };
}