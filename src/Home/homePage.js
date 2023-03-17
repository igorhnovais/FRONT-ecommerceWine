import useProducts from "../Hooks/Api/useProducts"

export default function HomePage(){

    const allProducts = useProducts();
    console.log(allProducts);


    return (
        <h1>produtos</h1>
    )
}