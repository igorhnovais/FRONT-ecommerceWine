import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import useOneProduct from "../Hooks/Api/useOneProduct";
import Loading from "../Components/loading";
import useAddProductCart from "../Hooks/Api/useAddProductCart";

export default function OneProduct(){

    const {productId} = useParams();
        
    const {oneProduct} = useOneProduct(productId);

    const {getAddProduct, addProductError} = useAddProductCart();
    const navigate = useNavigate()

    async function AddCart(id){
        
        const response = await getAddProduct({id});
        
        if(!response){
            alert("faça login!"); 
            navigate("/sign-in"); 
            window.location.reload()
        } 
    
    }

    return (
        <>
            <Nav>
                {(oneProduct)
                    ?
                    (<>
                        <SectionImg>
                        <img src={oneProduct.image} alt={oneProduct.name}/>
                        </SectionImg>

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

                        <Button onClick={() => AddCart(oneProduct.id)}> Adicionar ao carrinho </Button>
                    </>)
                    :
                    <Loading/>

                    }
                
            </Nav>
            <h1>oi</h1>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const SectionImg = styled.section`
    background-color: white;
    max-width: 400px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 5px solid #322938;
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
    border: 5px solid #322938;
    & h6{
        margin-bottom: 10px;
        color: #322938;
        font-weight: bold;
    }
`

const SectionValue = styled.section`
    //background-color: white;
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
    margin-top: 50px;
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