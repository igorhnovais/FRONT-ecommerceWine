import styled from "styled-components";

import useGetProductcart from "../Hooks/Api/useGetProductCart";
import useToken from "../Hooks/useToken";
import useName from "../Hooks/useName";
import Loading from "../Components/loading";
import CartList from "./cartList.js";
import useGetBalance from "../Hooks/Api/useGetBalance";
import PaymentButton from "./paymentButtonStripe";

export default function CartPage(){
    const token = useToken();
    const name = useName();
    const {productsCart, getProductsCart } = useGetProductcart(token);
    const {balance, getBalanceCart} = useGetBalance(token);

    return (
        <>
            <H1> Seu carrinho {name}!</H1>
            <Nav>
                <ProductsSection>
                    {
                        (productsCart)
                        ?
                        (productsCart.length === 0) ? <H1>Seu carrinho não tem nenhum produto, adicione e volte aqui!</H1> :
                        productsCart.map((item, i) => <CartList item={item} key={i} getProductsCart={getProductsCart} getBalanceCart={getBalanceCart}/> )
                        :
                        <Loading/>
                    }
                </ProductsSection> 
            </Nav>
            <BalanceSection>
                <h1>R$ {(balance / 100).toFixed(2).replace(".",",")}</h1>
            </BalanceSection>

            <ButtonSection>
                <PaymentButton/>
            </ButtonSection> 
        </>
    )
}

const H1 = styled.h1`
    color: white;
    font-size: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
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
    border-radius: 5px;
    border: 5px solid #322938;
    max-height: 500px;
    width: 80%;
    overflow-y: auto;
    box-shadow: 0px 0px 10px white;
`

const BalanceSection = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 130px;
    & h1{
        color: white;
        font-size: 40px;
        padding-top: 10px;
        background-color: #322938;
        padding-left: 10px;
        padding-right: 10px;
        box-shadow: 0px 6px 8px white;
    }
`

const ButtonSection = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`