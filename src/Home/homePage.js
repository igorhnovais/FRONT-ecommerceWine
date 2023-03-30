import styled from "styled-components";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import useProducts from "../Hooks/Api/useProducts";
import useName from "../Hooks/useName";
import ProductsList from "./productList";
import Loading from "../Components/loading";
import useToken from "../Hooks/useToken";
import useDeleteSession from "../Hooks/Api/useDeleteSession";
import Header from "../Components/header";
import { useState } from "react";
import { useEffect } from "react";


export default function HomePage(){

    const {products} = useProducts();
    let name = useName();
    const token = useToken();
    const {getDeleteSession} = useDeleteSession();

    const [response, setResponse] = useState([]);


    async function DeleteSession(){
        Swal.fire({
        title: 'Deseja sair mesmo ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sair',
        denyButtonText: `Não sair`,
        }).then((result) => {
        if (result.isConfirmed) {
            getDeleteSession(token);
            localStorage.clear(); 
            Swal.fire('Até logo')
        } else if (result.isDenied) {
            Swal.fire('ok =D');
        }
        })
    }

    useEffect(() => {}, [response])

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

            <Footer>                  
                <h3> {(name) ? `Olá, ${name}` : "Bem-vinde"}</h3>
                {(token)
                    ?
                    <RiLogoutBoxRFill onClick={DeleteSession}/>
                    :
                    ""
                }           
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
    //background-image: url("https://i.pinimg.com/originals/90/43/a7/9043a730ef9d90e2b2e6c92265939457.jpg");
    background-image: url("https://lovebeers.com.br/wp-content/uploads/2017/05/fundo-madeira.jpg");
    //background-image: url("https://img.freepik.com/fotos-premium/fundo-de-madeira-velho-grunge-texturizado-escuro_7182-370.jpg");
    flex-wrap: wrap;
    margin-top: 60px;
    margin-bottom: 100px;
    border-radius: 5px;
    border: 5px solid #322938;
    box-shadow: 0px 0px 10px white;
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