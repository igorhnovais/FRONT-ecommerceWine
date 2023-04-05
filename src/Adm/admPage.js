import styled from "styled-components";

import useToken from "../Hooks/useToken";
import useGetAdm from "../Hooks/Api/useGetAdm";
import useProducts from "../Hooks/Api/useProducts";
import AdmProductsList from "./admProductsList";
import Loading from "../Components/loading"

export default function AdmPage(){

    const token = useToken();
    const {adm} = useGetAdm(token);
    const {products, getProducts} = useProducts();

    if(adm === false){
        return (
        <>
            <H1>Vaza fia!!</H1>  
            <img></img>     
        </>)
    }

    return (
        <>
            <H1>Seu painel de controle</H1>
            <Section>
                <AddDiv>
                    <h2> adicione aqui seu produto</h2>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Adicionar</button>
                </AddDiv>
                <RemoveDiv>
                    <h2> Remova algum produto</h2>
                    <div> 
                    {
                        (products)
                        ?
                        (products.length === 0) ? <H1>Seu site não tem nenhum produto, adicione e volte aqui!</H1> :
                        products.map((item, i) => <AdmProductsList item={item} getProducts={getProducts} key={i}/> )
                        :
                        <Loading/>
                    }
                    </div>
                </RemoveDiv>
            </Section>
        </>
    )
}

const H1 = styled.h1`
    color: white;
    font-size: 60px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const Section = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const AddDiv = styled.div`
    background-color: red;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        color: white;
        font-size: 35px;
    }
    & input{
        width: 80%;
    }
`

const RemoveDiv = styled.div`
    background-color: green;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        color: white;
        font-size: 35px;
    }
`

