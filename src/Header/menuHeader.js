import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useName from "../Hooks/useName";
import useToken from "../Hooks/useToken";
import Swal from 'sweetalert2';
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

export default function MenuHeader({setMenu, menu}){

    const navigate = useNavigate();
    const name = useName();
    const token = useToken();

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
    return(
        <>
            <MenuDiv>                 
                <h3> {(name) ? `Olá, ${name}` : "Bem-vinde"}</h3>          
                <FaShoppingCart onClick={viewCart}/>
                <TiThMenuOutline onClick={viewMenu}/>
            </MenuDiv>
        </>
    )
}

const MenuDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 33%;
    & h3{
        display: flex;
        align-items: center;
    }
    & svg {
        font-size: 30px;
        color: rgb(73,8,8);
        //border: 5px solid rgb(73,8,8);
        box-shadow: 0 0 6px white;
        border-radius: 10px;
        cursor: pointer;
        margin-left: 10px;   
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