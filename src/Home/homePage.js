import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import useProducts from "../Hooks/Api/useProducts";
import useName from "../Hooks/useName";
import ProductsList from "./productList";
import Loading from "../Components/loading";
import useToken from "../Hooks/useToken";

export default function HomePage(){

    const {products} = useProducts();
    const name = useName();
    const token = useToken();
    const navigate = useNavigate();

    function viewCart(){
        if(!token){
            alert("faça login")
            navigate("/sign-in")
            window.location.reload();
            return;
        }

        navigate("/cart")

    }

    return (
        <>
            <section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
            </section>

            <Nav>
                <ProductsSection>
                   {(products) 
                    ?
                    (products.data.map((item, i) => <ProductsList item={item} key={i}/>)) 
                    :
                    <Loading/>}               
                </ProductsSection>    
            </Nav>

            <Footer>
                <FaShoppingCart onClick={viewCart}/>
                <h3> Olá, {name}</h3>
                <RiLogoutBoxRFill/>
            </Footer>

        </>
        
        
    )
}

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 60px;
    color: #322938;
    position: fixed;
    top: 0;
	//background-color: #31684A;
    background-color: black;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    //background-image: url("https://i.pinimg.com/originals/90/43/a7/9043a730ef9d90e2b2e6c92265939457.jpg");
    background-image: url("https://lovebeers.com.br/wp-content/uploads/2017/05/fundo-madeira.jpg");
    //background-image: url("https://img.freepik.com/fotos-premium/fundo-de-madeira-velho-grunge-texturizado-escuro_7182-370.jpg");
    flex-wrap: wrap;
    margin-top: 60px;
    border-radius: 5px;
    border: 5px solid #322938;
`

const Footer = styled.footer`
    background-color: #322938;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 80px;
    & ion-icon{
        font-size: 45px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    & svg {
        font-size: 45px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    & h3{
        font-family: 'Saira Stencil One';
        font-size: 40px;
        color: white;
    }
`