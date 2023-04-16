import styled from "styled-components"
import foto from "../Components/página-de-erros-não-encontrada-arruela-engraçada-do-robô-com-espanador-e-cubeta-da-água-vidro-vinho-das-garrafas-na-tabela-104079185.jpg"

export default function NotFound(){
    return (
        <>
            <Div>
                <h1> Pagina Não Encontrada!!</h1>
                <img src={foto}/>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1{
        margin-top: 100px;
        color: black;
        font-size: 80px;
    }
    & img{
        width: 90vw;
        margin:20px;
    }
    @media (max-width:830px){
        justify-content: center;
        margin-left: 50%;
        margin-right: 50%;
    }
    @media (max-width:480px){
        & h1{
           font-size: 40px;
        }
    }
`