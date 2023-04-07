import styled from "styled-components";
import Swal from 'sweetalert2';
import { useState } from "react";
import { useEffect } from "react";
import {RiDeleteBin6Fill}from "react-icons/ri";

import useDeleteAdm from "../Hooks/Api/useDeleteAdm";

export default function AdmProductsList({item, getProducts}){

    const {getDeleteAdm} = useDeleteAdm();
    const [reload, setReload] = useState([]);

    function deleteProduct(id){
        Swal.fire({
            title: 'Você tem certeza que deseja excluir?',
            text: "Você apagará o produto do seu site!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar produto!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                getDeleteAdm(id),
                setReload([]),
                'Deletado!',
                'Seu produto foi deletado.',
                'success'
              )
            }
          })
    }

    useEffect(() => { getProducts()}, [reload])


    return (
        <>
            <Div>
                <img src={item.image}/>
                <h6>{item.name}</h6>
                <button onClick={() => deleteProduct(item.id)}><RiDeleteBin6Fill/></button>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    width: 100%;
    margin-bottom: 10px; 
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgba(159,140,212, 0.5);
    & img{
        width: 20px;
        margin-right: 5px;
        border-right: 2px solid #322938;
    }
    & h6{
        color: white;
        text-shadow: 0 0 9px black;
    }
    & button{
        background-color: red;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        & svg{
            display: flex;
            justify-content: center;
        }
    }
`