import styled from "styled-components";
import { Link } from "react-router-dom";
import useAddProductCart from "../Hooks/Api/useAddProductCart";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";


export default function ProductsList({item}){
    const {getAddProduct} = useAddProductCart();
    const navigate = useNavigate()

    async function AddCart(){
        
        const response = await getAddProduct({id:item.id});
        
        if(!response){
            Swal.fire({
            title: 'Para adicionar no carrinho precisa estar logado, quer entrar na sua conta?',
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
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Produto Adicionado',
                showConfirmButton: false,
                timer: 1500
              })
        }
    
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
    padding: 10px;
    & a{
        text-decoration: none;
        color: #322938;   
    }   
`

const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
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