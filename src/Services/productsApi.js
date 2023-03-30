import api from "./api";

export async function getAllProducts(){
    const response = await api.get("/products");
    return response.data;
}

export async function getOneProduct(productId){

    const response = await api.get(`/product/${productId}`);
    return response.data;
}

export async function getWines(){
    const response = await api.get("/products/wine");
    return response.data
}