import styled from "styled-components";
import { Link } from "react-router-dom";
import useAddProduct from "../Hooks/Api/useAddProduct";
import { toast } from 'react-toastify';

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";


export default function ProductsList({item}){
    // const {getAddProduct} = useAddProduct();

    // async function AddCart(){
    //     try{
    //         await getAddProduct({id:item.id});
    //         alert("oi")
    //         //toast("item inserido")
    //     } catch(err){
    //         alert("tchau")
    //         //toast('primeiro se cadastre no nosso site')
    //     }  
    // }
    const token = useToken()
    const navigate = useNavigate()

    function AddCart(){
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart`, {id:item.id}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        promise.catch( err => {alert("faça login!"); navigate("/sign-in"); window.location.reload()})
    }
        
    

    return (
        <>
            <Nav>
                <WineDiv>
                    <Link to={`/product/${item.id}`}>
                        <Img src={item.image} alt={`vinho ${item.name}`}/>
                        <H2> {item.name}</H2>
                        <H6> R$: {(item.value / 100).toFixed(2).replace(".",",")} </H6>
                    </Link>
                </WineDiv>
                <Button onClick={AddCart}>Adicionar no carrinho</Button>

            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
`

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 320px;
    border: 2px solid #322938;
    border-radius: 5px;
    margin: 10px 10px 0 10px;
    flex-shrink: 0;
    & a{
        text-decoration: none;
        color: #322938;   
    }   
`

const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 5px;
`

const H6 = styled.h6`
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    background-color: #322938;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    width: 145px;
    margin-left: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
    }
`