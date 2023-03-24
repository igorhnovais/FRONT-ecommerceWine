import api from "./api";

export async function AddProductCart(body, token){
    
    const response = await api.post("/cart", body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
}

export async function findManyProductsCart(token){
    const response = await api.get("/cart", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response;
}