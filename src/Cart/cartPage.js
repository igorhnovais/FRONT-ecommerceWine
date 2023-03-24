import styled from "styled-components";

import useGetProductcart from "../Hooks/Api/useGetProductCart";
import useToken from "../Hooks/useToken";
import Loading from "../Components/loading";
import CartList from "./cartList.js";

export default function CartPage(){
    const token = useToken();
    const {productsCart} = useGetProductcart(token);
    console.log("teste123", productsCart)

    return (
        <>
            <H1>carrinho</H1>
            <Nav>
                <ProductsSection>
                    {
                        (productsCart)
                        ?
                        productsCart.data.map((item, i) => <CartList item={item} key={i}/> )
                        :
                        <Loading/>
                    }
                </ProductsSection> 
            </Nav>
            
        </>
        
    )
}

const H1 = styled.h1`
    color: white;
    font-size: 80px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("https://lovebeers.com.br/wp-content/uploads/2017/05/fundo-madeira.jpg");
    flex-wrap: wrap;
    margin-top: 60px;
    border-radius: 5px;
    border: 5px solid #322938;
`