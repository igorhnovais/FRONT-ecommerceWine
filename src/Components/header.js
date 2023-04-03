import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaWineGlassAlt } from "react-icons/fa";
import {GiWineBottle} from "react-icons/gi";
import {FaWineBottle} from "react-icons/fa";
import {IoTabletPortrait} from "react-icons/io5";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { DebounceInput } from 'react-debounce-input';

import useToken from "../Hooks/useToken";
import { useState } from "react";
import useProducts from "../Hooks/Api/useProducts";
import useGetWines from "../Hooks/Api/useGetWines";
import useGetCups from "../Hooks/Api/useGetCups";
import useGetTaboos from "../Hooks/Api/useGetTaboos";
import api from "../Services/api";
import SearchHeader from "./searchHeader";
import useDeleteSession from "../Hooks/Api/useDeleteSession";

export default function Header({setResponse}){
    const [menu, setMenu] = useState("none")
    const [quest, setQuest] = useState([]);
    const [text, setText] = useState();
    const token = useToken();
    const navigate = useNavigate();
    const {products} = useProducts();
    const {wines} = useGetWines();
    const {cups} = useGetCups();
    const {taboos} = useGetTaboos();
    const {getDeleteSession} = useDeleteSession();

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

    const HandleChange = (value => {
        
        if(value.length >= 1){
            const promise =  api.post("products/searched", {search: value});
            promise.then(resp => setQuest(resp.data))

        } else {
            setQuest([]);
        }
    })

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
                setResponse(products);
                localStorage.clear(); 
                Swal.fire('Até logo');
            } else if (result.isDenied) {
                Swal.fire('ok =D');
            }
        })
    }

    return (
        <>
            <Section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
                <InputDiv>
                    <DebounceInput
                        value={text}
                        minLength={1}
                        debounceTimeout={400}
                        placeholder={"Search for products"}
                        onChange={event => HandleChange(event.target.value)}
                    />
                </InputDiv>
                <MenuDiv>
                    <FaShoppingCart onClick={viewCart}/>
                    <TiThMenuOutline onClick={viewMenu}/>
                </MenuDiv>
            </Section>
            <SearchDiv>
                {quest?.map((item, i) => <SearchHeader item={item} key={i}/>)}
            </SearchDiv>
            <ListSection showMenu={menu}>
                <Div onClick={() => viewProduct(1)}>
                    <GiWineBottle/>
                    <h6>Todos os produtos</h6>
                </Div>
                <Div onClick={() => viewProduct(2)}>
                    <FaWineBottle/>
                    <h6>Vinhos</h6>
                </Div>
                <Div onClick={() => viewProduct(3)}>
                    <FaWineGlassAlt/>
                    <h6>Taças</h6>
                </Div>
                <Div onClick={() => viewProduct(4)}>
                    <IoTabletPortrait/>
                    <h6>tabuas</h6>
                </Div>
                
                {(token)
                    ?
                    <Div onClick={DeleteSession}>
                    <RiLogoutBoxRFill/>
                    <h6> Sair</h6>
                    </Div>
                    :
                    ""
                } 
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
    height: 70px;
    padding: 0 30px;
`

const TitleDiv = styled.div`
    height: 70px;
    width: 33%;
    display: flex;
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
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
    left:0;
    flex-direction: column;
   & input{
    width: 250px;
   }
`

const SearchDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.95);
    width: 300px;
    position: fixed;
    top: 70px;
    left: calc(39%);
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border: 5px solid #322938;
    border-radius: 5px;
`

const MenuDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 33%;
    & svg {
        font-size: 45px;
        color: white;
        border: 5px solid #322938;
        box-shadow: 0 0 6px white;
        border-radius: 10px;
        cursor: pointer;
        margin-left: 7px;   
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        :active {
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
            transform: translate(2px, 2px);
        }
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
    display: flex;
    & h6{
        color: white;
        text-shadow: 0 0 6px white;
        border-bottom: 2px solid #322938;
    }
    & svg{
        color: red;
        margin-right: 5px;
    }
`

