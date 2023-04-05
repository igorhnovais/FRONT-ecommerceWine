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
    return response.data;
}

export async function getCups(){
    const response = await api.get("/products/cup");
    return response.data;
}

export async function getTaboos(){
    const response = await api.get("/products/taboo");
    return response.data;
}

export async function getProductsSearched(search){
    const response = await api.post("/products/searched", {search});
    return response.data;
}

export async function deleteProductAdm(id, token){

    const response = await api.delete(`/adm/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}