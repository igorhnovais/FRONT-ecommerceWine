import styled from "styled-components";
import axios from "axios";
import Swal from 'sweetalert2';

import useToken from "../Hooks/useToken";
import useGetAdm from "../Hooks/Api/useGetAdm";
import useProducts from "../Hooks/Api/useProducts";
import AdmProductsList from "./admProductsList";
import Loading from "../Components/loading"
import { useState } from "react";
import { useEffect } from "react";

export default function AdmPage(){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [alcohol, setAlcohol] = useState("");
    const [value, setValue] = useState("");
    const [type_product, setType_product] = useState("");
    const [reload, setReload] = useState([]);

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

    function addProduct(event){

        event.preventDefault();

        const registration = {
            name,
            image,
            description,
            type,
            alcohol,
            value, 
            type_product
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/adm`, registration);

        promise.then((resp => { 
            getProducts();
            setName('');
            setImage('');
            setDescription('');
            setType('');
            setAlcohol('');
            setValue('');
            setType_product('');
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Produto Adicionado',
            showConfirmButton: false,
            timer: 1500
            })
         }));

        promise.catch((err) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não foi possivel adicionar',
                showConfirmButton: false,
                timer: 1500
              })
        });
    }

    return (
        <>
            <H1>Seu painel de controle</H1>
            <Section>
                <AddDiv onSubmit={addProduct}>
                    <div>
                        <h2> adicione aqui seu produto</h2>
                        <input placeholder="Nome do produto" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                        <input placeholder="Imagem" type="text" value={image} onChange={(e) => setImage(e.target.value)} required></input>
                        <input placeholder="Descrição" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required></input>
                        <input placeholder="Tipo" type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
                        <input placeholder="Quantidade de alcool" type="text" value={alcohol} onChange={(e) => setAlcohol(e.target.value)}></input>
                        <input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(e.target.value)} required></input>
                        <input placeholder="Tipo do Produto" type="text" value={type_product} onChange={(e) => setType_product(e.target.value)} required></input>
                        <button type="submit">Adicionar</button>
                    </div>
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
    border: 5px solid white;
    background-color: rgb(159,140,212);
`

const AddDiv = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 5px solid white;
    & h2{
        color: white;
        font-size: 35px;
        margin: 10px 10px;
        text-shadow: 2px 2px green;
    }
    & input{
        width: 100%;
        margin-bottom: 5px;
        height: 40px;
    }
    & div{
        display: flex;
        flex-direction: column;
    }
    & button{
        background-color: green;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 3px;
        margin-top: 10px;
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
    }
`

const RemoveDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2{
        color: white;
        font-size: 35px;
        margin: 10px 10px;
        text-shadow: 2px 2px red;
    }
`

