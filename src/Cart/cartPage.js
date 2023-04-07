import styled from "styled-components";

import useGetProductcart from "../Hooks/Api/useGetProductCart";
import useToken from "../Hooks/useToken";
import useName from "../Hooks/useName";
import Loading from "../Components/loading";
import CartList from "./cartList.js";
import useGetBalance from "../Hooks/Api/useGetBalance";
import PaymentButton from "./paymentButtonStripe";
import CartEmpty from "./cartEmpty";
import Header from "../Components/header";

export default function CartPage(){
    const token = useToken();
    const name = useName();
    const {productsCart, getProductsCart } = useGetProductcart(token);
    const {balance, getBalanceCart} = useGetBalance(token);

    return (
        <>
            <Header/>
            <H1> Seu carrinho {name}!</H1>
            <Nav>
                <ProductsSection>
                    {
                        (productsCart)
                        ?
                        (productsCart.length === 0) ? <CartEmpty/> :
                        productsCart.map((item, i) => <CartList item={item} key={i} getProductsCart={getProductsCart} getBalanceCart={getBalanceCart}/> )
                        :
                        <Loading/>
                    }
                </ProductsSection> 
            </Nav>
            {
                (productsCart?.length !== 0) ? 
                <BalanceSection>
                    <PaymentButton/>
                    <h1>R$ {(balance / 100).toFixed(2).replace(".",",")}</h1>
                </BalanceSection> :
                ''
            }
        </>
    )
}

const H1 = styled.h1`
    color: white;
    font-size: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    text-shadow: 1px 1px 2px #000000;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://lovebeers.com.br/wp-content/uploads/2017/05/fundo-madeira.jpg");
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 5px solid #322938;
    max-height: 500px;
    width: 80%;
    overflow-y: auto;
    box-shadow: 0px 0px 10px black;
    overflow-x: hidden;
    overflow-y: hidden;
`

const BalanceSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 100px 1px 100px;
    margin-bottom: 60px;
    & h1{
        color: white;
        font-size: 40px;
        padding-top: 10px;
        background-color: #322938;
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 0px 6px 8px black;
    }
`