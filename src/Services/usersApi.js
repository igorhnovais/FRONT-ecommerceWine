import api from "./api";

export async function getPermissionAdm(token){
    const response = await api.get("/adm", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}