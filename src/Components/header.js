import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti"
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

import useToken from "../Hooks/useToken";
import { useState } from "react";
import useProducts from "../Hooks/Api/useProducts";
import useGetWines from "../Hooks/Api/useGetWines";
import useGetCups from "../Hooks/Api/useGetCups";
import useGetTaboos from "../Hooks/Api/useGetTaboos";

export default function Header({setResponse}){
    const [menu, setMenu] = useState("none")

    const token = useToken();
    const navigate = useNavigate();
    const {products} = useProducts();
    const {wines} = useGetWines();
    const {cups} = useGetCups();
    const {taboos} = useGetTaboos();

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

    function viewProduct(num){
        switch(num){
            case 1:
                setResponse(products);
                break;
            case 2:
                setResponse(wines);
                break;
            case 3:
                setResponse(cups);
                break;
            case 4:
                setResponse(taboos);
                break;
        }
    }

    return (
        <>
            <Section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
                <InputDiv>
                    <input></input>
                </InputDiv>
                <MenuDiv>
                    <FaShoppingCart onClick={viewCart}/>
                    <TiThMenuOutline onClick={viewMenu}/>
                </MenuDiv>
            </Section>
            <ListSection showMenu={menu}>
                <Div onClick={() => viewProduct(1)}>
                    <h6>Todos os produtos</h6>
                </Div>
                <Div onClick={() => viewProduct(2)}>
                    <h6>Vinhos</h6>
                </Div>
                <Div onClick={() => viewProduct(3)}>
                    <h6>Taças</h6>
                </Div>
                <Div onClick={() => viewProduct(4)}>
                    <h6>tabuas</h6>
                </Div>
            </ListSection>
        </>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: black;
    width: 100%;
    padding: 0 30px;
`

const TitleDiv = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 35px;
    color: #322938;
    & h1{
        text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    }
`

const InputDiv = styled.div`
    width: 30%;
   & input{
    width: 250px;
   }
`

const MenuDiv = styled.div`
    & svg {
        font-size: 45px;
        color: white;
        border: 5px solid #322938;
        box-shadow: 0 0 6px white;
        border-radius: 10px;
        cursor: pointer;
        margin-left: 7px;
    }
`

const ListSection = styled.section`
    margin-top: 70px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: black;
    display: ${props => props.showMenu};
    flex-direction: column;
    border-radius: 0 0 10px 10px;
`

const Div = styled.div`
    width: 200px;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
    & h6{
        color: white;
        text-shadow: 0 0 6px white;
        border-bottom: 2px solid #322938;
    }
`

