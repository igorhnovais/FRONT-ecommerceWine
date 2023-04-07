import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaCartArrowDown} from "react-icons/fa"

export default function CartEmpty(){
    return (
        <>
            <Div>
                <FaCartArrowDown/>
                <h1> Seu carrinho está vazio =(</h1>
                <h2>Escolha seus produtos no site e clique em "adicionar"</h2>
                <Link to="/products">
                    <button>
                        Escolher produtos
                    </button>
                </Link>  
            </Div>  
        </>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    & svg{
        color: white;
        font-size: 120px;
        margin-bottom: 20px;
    }
    & h1{
        color: white;
        font-size: 40px;
    }
    & h2{
        color: white;
        font-size: 25px;
        margin-top: 10px;
    }
    & button{
        margin-top: 30px;
        background-color: #322938;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 3px;
        width: 200px;
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
    }
    & a{
        text-decoration: none;
    }
`