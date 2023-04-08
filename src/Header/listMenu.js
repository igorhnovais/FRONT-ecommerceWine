import styled from "styled-components";
import Swal from 'sweetalert2';

import useToken from "../Hooks/useToken";
import useProducts from "../Hooks/Api/useProducts";
import useGetWines from "../Hooks/Api/useGetWines";
import useGetCups from "../Hooks/Api/useGetCups";
import useGetTaboos from "../Hooks/Api/useGetTaboos";
import useDeleteSession from "../Hooks/Api/useDeleteSession";
import {GiWineBottle} from "react-icons/gi";
import {FaWineBottle} from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import {IoTabletPortrait} from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Adm from "../Components/adm";


export default function ListMenu({setResponse, menu}){

    const token = useToken();
    const {products} = useProducts();
    const {wines} = useGetWines();
    const {cups} = useGetCups();
    const {taboos} = useGetTaboos();
    const {getDeleteSession} = useDeleteSession();

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
                window.location.reload();
            } else if (result.isDenied) {
                Swal.fire('ok =D');
            }
        })
    }

    return (
        <>
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
                <Adm/>
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

const ListSection = styled.section`
    margin-top: 70px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: black;
    display: ${props => props.showMenu};
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    transition: transform 1s ease-in-out;
    animation: 1s ease-in-out forwards;
`

const Div = styled.div`
    width: 200px;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    cursor:pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
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
