import api from "./api";

export async function getAllProducts(){
    const response = await api.get("/products");
    return response;
}

export async function getOneProduct(productId){

    const response = await api.get(`/product/${productId}`);
    return response.data;
}