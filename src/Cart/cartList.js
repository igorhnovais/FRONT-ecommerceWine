import styled from "styled-components";
import {RiDeleteBin6Fill}from "react-icons/ri";
import useDeleteProductCart from "../Hooks/Api/useDeleteProductCart";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function CartList({item, getProductsCart}){
    const {getDeleteProduct} = useDeleteProductCart();
    const navigate = useNavigate()


    async function deleteProduct(id){

        Swal.fire({
        title: 'Você quer deletar esse produto mesmo?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Deletar',
        denyButtonText: `Não deletar`,
        }).then((result) => {
        if (result.isConfirmed) {
            getDeleteProduct(id);
            getProductsCart();
            reloadPage();
            Swal.fire('Deletado');
        } else if (result.isDenied) {
            Swal.fire('ok =D')
        }
        })
    }

    function reloadPage(){
        getProductsCart();
    }

    return (
        <>
            <Nav>
                <WineDiv>
                    <Img src={item.products.image}/>
                    <H2>{item.products.name}</H2>
                    <PriceDiv>
                        <H6> R$: {(item.products.value / 100).toFixed(2).replace(".",",")}</H6>
                    </PriceDiv>
                    
                </WineDiv>
                <DeleteDiv onClick={() => deleteProduct(item.id)}>
                    <RiDeleteBin6Fill/>
                </DeleteDiv>
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 145px;
    width: 90vw;
    border: 2px solid #322938;
    border-radius: 5px;
    margin: 10px 0 0 10px;
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
    width: 80px;
    border-right: 2px solid #322938;
`

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 5px;
    font-size: 25px;
`

const H6 = styled.h6`
    display: flex;
    justify-content: center;
    border-left: 2px solid #322938;
    padding: 5px;
`

const PriceDiv = styled.div`
    min-width: 100px;
`

const DeleteDiv = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 142px;
    margin-top:10px;
    margin-right: 10px;
    border-radius: 5px;
    & svg{
        font-size: 30px;
    }
`
