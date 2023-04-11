import styled from "styled-components";
import useName from "../Hooks/useName";
import {HiExclamation} from "react-icons/hi"

export default function HelpCustumer(){

    const name = useName();

    function Help(){
        const link = "https://wa.me/5517981232313?text=" + encodeURIComponent(
            `Olá, meu nome é ${name}, eu gostaria de tirar algumas duvidas!`
        )

        window.open(link);
    }

    return (
        <>  
            <Div onClick={Help}>
                <HiExclamation/>
                <h6>Duvidas? fale conosco</h6>
            </Div>
        </>
    )
}


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