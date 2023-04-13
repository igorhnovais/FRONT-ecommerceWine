import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import useProducts from "../Hooks/Api/useProducts";
import useName from "../Hooks/useName";
import ProductsList from "./productList";
import Loading from "../Components/loading";
import ListMenu from "../Header/listMenu";
// import SearchHeader from "../Header/searchHeader";
// import MenuHeader from "../Header/menuHeader";
import useToken from "../Hooks/useToken";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

import Header from "../Header/header";
import { useState } from "react";
import { useEffect } from "react";


export default function HomePage(){

    const {products} = useProducts();
    const name = useName();
    const token = useToken();
    const navigate = useNavigate();

    const [response, setResponse] = useState([]);
    const [menu, setMenu] = useState("none");


    useEffect(() => {setResponse(products)}, [products]);

    function viewCart(){
        if(!token){
            Swal.fire({
            title: 'Para entrar no carrinho precisa estar logado, quer entrar na sua conta?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Entrar',
            denyButtonText: `Não entrar`,
            }).then((result) => {
            if (result.isConfirmed) {
                navigate("/sign-in"); 
            } else if (result.isDenied) {
                Swal.fire('ok =D')
            }
            })  
        } else {
            navigate("/cart");
        }
        
    }

    function viewMenu(){
        if(menu === "none"){
            setMenu("flex");
        } else {
            setMenu("none");
        }
    }

    return (
        <>
            <Header setResponse={setResponse}/>

            <Nav>
                <ProductsSection>
                   {(response) 
                    ?
                    (response.map((item, i) => <ProductsList item={item} key={i}/>)) 
                    :
                    <Loading/>}               
                </ProductsSection>    
            </Nav>
            <ListMenu setResponse={setResponse} menu={menu}/>
            <Footer> 
                <div> <FaShoppingCart onClick={viewCart}/></div>               
                <h3> {(name) ? `Olá, ${name}` : "Bem-vinde"}</h3>     
                <div> <TiThMenuOutline onClick={viewMenu}/> </div>       
            </Footer>
        </>
    )
}

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 60px;
    margin-bottom: 100px;
    border-radius: 5px;
    //border: 5px solid #322938;
    box-shadow: 0px 0px 10px white;
`

const Footer = styled.footer`
    background-color: rgb(73,8,8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 60px;
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
        //margin: 0 20px;
    }
    & div{
        display: none;
    }
    @media (min-width: 746px) {
        display: none;
    }
    @media (max-width: 630px) {
        justify-content: space-between;
        & div{
            display: flex;
        }
        
    }
    @media (max-width: 450px) {
        & h3{
            font-size: 30px;
        }
        
    }
`