import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from 'sweetalert2';

import useOneProduct from "../Hooks/Api/useOneProduct";
import Loading from "../Components/loading";
import useAddProductCart from "../Hooks/Api/useAddProductCart";
import Header from "../Header/header";

export default function OneProduct(){

    const {productId} = useParams();
        
    const {oneProduct} = useOneProduct(productId);

    const {getAddProduct, addProductError} = useAddProductCart();
    const navigate = useNavigate()

    async function AddCart(id){
        
        const response = await getAddProduct({id});
        
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
            <Header/>
            <Nav>
                {(oneProduct)
                    ?
                    (<>
                    <DivProduct>
                        <DivImage>
                            <SectionImg>
                                <img src={oneProduct.image} alt={oneProduct.name}/>
                            </SectionImg>
                        </DivImage>

                        <DivInfo>
                            <SectionName>
                                <H1> {oneProduct.name}</H1>
                                <p>{oneProduct.type}</p>
                                <p>{oneProduct.alcohol}</p>
                            </SectionName>

                            <SectionDescription>  
                                <h6> Comentario do Sommelier:</h6>                 
                                <p>{oneProduct.description}</p>
                            </SectionDescription>

                            <SectionValue>                   
                                <p> R$ {(oneProduct.value / 100).toFixed(2).replace(".",",")}</p>
                            </SectionValue>
                        </DivInfo>
                        
                    </DivProduct>
                        <Button onClick={() => AddCart(oneProduct.id)}> Adicionar ao carrinho </Button>
                    </>)
                    :
                    <Loading/>

                    }
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgb(225,223,208);
`

const DivProduct = styled.div`
    display: flex;
    background-color: white;
    border: 5px solid black;
    width: 60%;
    margin-top: 100px;
    box-shadow: 0px 2px 50px black;
`

const DivImage = styled.div`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const DivInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 5px solid black;
    padding: 30px;
`

const SectionImg = styled.section`
    background-color: white;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    & img{
        width: 150px;
    }
`

const SectionName = styled.section`
    color: #322938;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & p{
        font-size: 20px;
        margin-top: 10px;
        font-weight: 400;
        color: black;
    }
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 40px;
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
    flex-wrap: wrap;
`

const SectionDescription = styled.section`
    background-color: white;
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    & h6{
        margin-bottom: 10px;
        color: #322938;
        font-weight: bold;
    }
`

const SectionValue = styled.section`
    margin-top: 20px;
    font-size: 50px;
    color: #322938;
`

const Button = styled.button`
    background-color: #322938;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 303px;
    margin-top: 30px;
    height: 45px;
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